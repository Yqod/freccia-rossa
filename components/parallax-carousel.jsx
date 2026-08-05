"use client";;
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const PLANE_VERTEX = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const PLANE_FRAGMENT = /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uMap;
uniform vec2 uPlanePx;
uniform vec2 uTexPx;
uniform float uShift;
uniform float uIntensity;
uniform float uMaxShift;
uniform float uRadiusPx;
uniform float uHasTexture;

vec2 coverFit(vec2 uv, vec2 planeSize, vec2 texSize) {
  float planeAspect = planeSize.x / max(planeSize.y, 1.0);
  float texAspect = texSize.x / max(texSize.y, 1.0);
  vec2 ratio = vec2(
    min(planeAspect / max(texAspect, 0.0001), 1.0),
    min((1.0 / planeAspect) / max(1.0 / texAspect, 0.0001), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

float roundedBoxAlpha(vec2 uv, vec2 sizePx, float radiusPx) {
  vec2 p = (uv - 0.5) * sizePx;
  vec2 half_ = sizePx * 0.5 - vec2(radiusPx);
  vec2 d = abs(p) - half_;
  float outside = length(max(d, 0.0));
  float inside = min(max(d.x, d.y), 0.0);
  float dist = outside + inside - radiusPx;
  return clamp(0.5 - dist, 0.0, 1.0);
}

void main() {
  vec2 uv = coverFit(vUv, uPlanePx, uTexPx);

  float zoom = 1.0 / (1.0 + 2.0 * uMaxShift);
  uv = (uv - 0.5) * zoom + 0.5;

  uv.x += uShift * uIntensity * zoom;

  vec4 tex;
  if (uHasTexture > 0.5) {
    tex = texture2D(uMap, uv);
  } else {
    tex = vec4(mix(vec3(0.07), vec3(0.12), vUv.y), 1.0);
  }

  float mask = uRadiusPx > 0.5 ? roundedBoxAlpha(vUv, uPlanePx, uRadiusPx) : 1.0;
  gl_FragColor = vec4(tex.rgb, tex.a * mask);
}
`;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildUniforms() {
  return {
    uMap: { value: null },
    uPlanePx: { value: new THREE.Vector2(1, 1) },
    uTexPx: { value: new THREE.Vector2(1, 1) },
    uShift: { value: 0 },
    uIntensity: { value: 0.4 },
    uMaxShift: { value: 0.2 },
    uRadiusPx: { value: 0 },
    uHasTexture: { value: 0 },
  };
}

const Plane = ({
  src,
  index,
  imageWidth,
  imageHeight,
  gap,
  parallaxIntensity,
  uvScale,
  borderRadius,
  loop,
  totalCount,
  scrollRef,
}) => {
  const meshRef = useRef(null);
  const textureRef = useRef(null);
  const { size } = useThree();

  const [uniforms] = React.useState(buildUniforms);

  const propsRef = useRef({
    parallaxIntensity,
    uvScale,
    borderRadius,
    imageWidth,
    imageHeight,
    gap,
    loop,
  });
  useEffect(() => {
    propsRef.current = {
      parallaxIntensity,
      uvScale,
      borderRadius,
      imageWidth,
      imageHeight,
      gap,
      loop,
    };
  }, [parallaxIntensity, uvScale, borderRadius, imageWidth, imageHeight, gap, loop]);

  useEffect(() => {
    if (!src) return;
    let cancelled = false;
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(src, (tex) => {
      if (cancelled) {
        tex.dispose();
        return;
      }
      tex.colorSpace = THREE.NoColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      textureRef.current = tex;
    }, undefined, () => {
      if (!cancelled) textureRef.current = null;
    });
    return () => {
      cancelled = true;
      if (textureRef.current) {
        textureRef.current.dispose();
        textureRef.current = null;
      }
    };
  }, [src]);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const mat = mesh.material;
    const u = mat.uniforms;
    const p = propsRef.current;
    const scroll = scrollRef.current;
    if (!scroll) return;

    const planeStride = p.imageWidth + p.gap;
    let offsetPx = index * planeStride - scroll.current;

    if (p.loop && totalCount > 0) {
      const stripLength = totalCount * planeStride;
      const halfStrip = stripLength * 0.5;
      offsetPx = ((offsetPx + halfStrip) % stripLength + stripLength) % stripLength - halfStrip;
    }

    mesh.position.x = offsetPx;
    mesh.position.y = 0;
    mesh.scale.set(p.imageWidth, p.imageHeight, 1);

    const viewport = Math.max(size.width, 1);
    const norm = clamp(offsetPx / viewport, -p.uvScale, p.uvScale);
    u.uShift.value = -norm;
    u.uIntensity.value = p.parallaxIntensity;
    u.uMaxShift.value = p.uvScale * p.parallaxIntensity;
    u.uRadiusPx.value = p.borderRadius;
    (u.uPlanePx.value).set(p.imageWidth, p.imageHeight);

    if (textureRef.current?.image) {
      u.uMap.value = textureRef.current;
      const img = textureRef.current.image;
      (u.uTexPx.value).set(img.naturalWidth || img.width || 1, img.naturalHeight || img.height || 1);
      u.uHasTexture.value = 1;
    } else {
      u.uHasTexture.value = 0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={PLANE_VERTEX}
        fragmentShader={PLANE_FRAGMENT}
        uniforms={uniforms}
        transparent />
    </mesh>
  );
};

const CameraRig = () => {
  const camRef = useRef(null);
  const { size, set } = useThree();

  useEffect(() => {
    const cam = camRef.current;
    if (!cam) return;
    cam.left = -size.width / 2;
    cam.right = size.width / 2;
    cam.top = size.height / 2;
    cam.bottom = -size.height / 2;
    cam.near = 0.1;
    cam.far = 1000;
    cam.position.set(0, 0, 10);
    cam.updateProjectionMatrix();
    set({ camera: cam });
  }, [size.width, size.height, set]);

  return <orthographicCamera ref={camRef} />;
};

const ParallaxCarousel = React.forwardRef((
  {
    images,
    imageWidth = 420,
    imageHeight = 560,
    gap = 32,
    parallaxIntensity = 0.4,
    uvScale = 0.85,
    lerp = 0.08,
    wheelSensitivity = 1,
    dragSensitivity = 1.4,
    loop = false,
    borderRadius = 16,
    autoplaySpeed = 0,
    pauseOnHover = true,
    showProgress = true,
    className,
    style,
  },
  ref,
) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const hoverRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const lastFrameTsRef = useRef(null);
  const progressBarRef = useRef(null);

  const scrollRef = useRef({
    current: 0,
    target: 0,
    limit: 0,
  });

  const settingsRef = useRef({
    lerp,
    wheelSensitivity,
    dragSensitivity,
    autoplaySpeed,
    loop,
    pauseOnHover,
    imageWidth,
    gap,
    count: images.length,
  });
  useEffect(() => {
    settingsRef.current = {
      lerp,
      wheelSensitivity,
      dragSensitivity,
      autoplaySpeed,
      loop,
      pauseOnHover,
      imageWidth,
      gap,
      count: images.length,
    };
  }, [
    lerp,
    wheelSensitivity,
    dragSensitivity,
    autoplaySpeed,
    loop,
    pauseOnHover,
    imageWidth,
    gap,
    images.length,
  ]);

  const recomputeLimit = useCallback(() => {
    const node = containerRef.current;
    if (!node) return;
    const total = images.length * (imageWidth + gap) - gap;
    const visible = node.clientWidth;
    scrollRef.current.limit = loop
      ? Number.POSITIVE_INFINITY
      : Math.max(0, total - visible);
  }, [images.length, imageWidth, gap, loop]);

  useEffect(() => {
    recomputeLimit();
    const node = containerRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(recomputeLimit);
    ro.observe(node);
    return () => ro.disconnect();
  }, [recomputeLimit]);

  const tickRef = useRef(null);
  useEffect(() => {
    const tick = (now) => {
      const s = scrollRef.current;
      const settings = settingsRef.current;

      const last = lastFrameTsRef.current ?? now;
      const dt = Math.max(0, (now - last) / 1000);
      lastFrameTsRef.current = now;

      if (
        settings.autoplaySpeed !== 0 &&
        !draggingRef.current &&
        !(settings.pauseOnHover && hoverRef.current)
      ) {
        s.target += settings.autoplaySpeed * dt;
      }

      if (!settings.loop) {
        s.target = clamp(s.target, 0, s.limit);
      }

      const k = clamp(settings.lerp, 0.001, 1);
      s.current += (s.target - s.current) * k;

      if (progressBarRef.current && !settings.loop && s.limit > 0) {
        const ratio = clamp(s.current / s.limit, 0, 1);
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    tickRef.current = tick;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      tickRef.current = null;
      lastFrameTsRef.current = null;
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onWheel = (e) => {
      const settings = settingsRef.current;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      scrollRef.current.target += delta * settings.wheelSensitivity;
    };

    const onPointerDown = (e) => {
      draggingRef.current = true;
      lastPointerXRef.current = e.clientX;
      node.setPointerCapture(e.pointerId);
      node.style.cursor = "grabbing";
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const settings = settingsRef.current;
      const dx = e.clientX - lastPointerXRef.current;
      lastPointerXRef.current = e.clientX;
      scrollRef.current.target -= dx * settings.dragSensitivity;
    };

    const onPointerUp = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      try {
        node.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      node.style.cursor = "grab";
    };

    const onEnter = () => {
      hoverRef.current = true;
    };
    const onLeave = () => {
      hoverRef.current = false;
    };

    node.addEventListener("wheel", onWheel, { passive: true });
    node.addEventListener("pointerdown", onPointerDown);
    node.addEventListener("pointermove", onPointerMove);
    node.addEventListener("pointerup", onPointerUp);
    node.addEventListener("pointercancel", onPointerUp);
    node.addEventListener("pointerleave", onPointerUp);
    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("wheel", onWheel);
      node.removeEventListener("pointerdown", onPointerDown);
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerup", onPointerUp);
      node.removeEventListener("pointercancel", onPointerUp);
      node.removeEventListener("pointerleave", onPointerUp);
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const scrollToIndex = useCallback((idx) => {
    const settings = settingsRef.current;
    const target = idx * (settings.imageWidth + settings.gap);
    scrollRef.current.target = settings.loop
      ? target
      : clamp(target, 0, scrollRef.current.limit);
  }, []);

  const reset = useCallback(() => {
    scrollRef.current.target = 0;
    scrollRef.current.current = 0;
  }, []);

  useImperativeHandle(ref, () => ({ scrollToIndex, reset }), [scrollToIndex, reset]);

  const planeKeys = useMemo(() => images.map((src, i) => `${i}-${src}`), [images]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden select-none", className)}
      style={{
        cursor: "grab",
        touchAction: "pan-y",
        ...style,
      }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="absolute! inset-0 w-full h-full">
        <CameraRig />
        {images.map((src, i) => (
          <Plane
            key={planeKeys[i]}
            src={src}
            index={i}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            gap={gap}
            parallaxIntensity={parallaxIntensity}
            uvScale={uvScale}
            borderRadius={borderRadius}
            loop={loop}
            totalCount={images.length}
            scrollRef={scrollRef} />
        ))}
      </Canvas>
      {showProgress && !loop && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] w-32 bg-white/15 rounded-full overflow-hidden pointer-events-none"
          aria-hidden>
          <div
            ref={progressBarRef}
            className="h-full w-full bg-white/80 origin-left"
            style={{ transform: "scaleX(0)" }} />
        </div>
      )}
    </div>
  );
});

ParallaxCarousel.displayName = "ParallaxCarousel";

export default ParallaxCarousel;
