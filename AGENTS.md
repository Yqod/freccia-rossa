<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design System – Überschriften

Alle Überschriften auf der Seite folgen dem Stack-Sans-Headline-Mix aus dünnem und
dickem Teil (z. B. "Deine Autoaufbereitung" + "in Magdeburg"):

- **Dünner Teil:** `font-light` (300) — dünnster verfügbarer Schnitt. Es liegt keine
  ExtraLight/Thin-Datei vor; Browser können Schriften nicht künstlich dünner rendern
  (nur fett synthetisieren), daher ist Light aktuell das Limit nach unten.
- **Dicker Teil:** `font-bold` (700).

Immer über die `Heading`-Komponente (`app/components/Heading.js`) bauen, nicht die
Spans manuell duplizieren:

```jsx
import Heading from "./components/Heading";

<Heading thin="Deine Autoaufbereitung" thick="in Magdeburg" />
```

Fonts liegen in `fonts/` und werden über `app/fonts.js` (`next/font/local`) geladen.
