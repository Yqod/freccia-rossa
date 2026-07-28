# Stack Sans – Font-Dateien hier ablegen

Sobald du die Lizenzdateien hast, bitte genau diese zwei Dateien in diesen Ordner legen:

| Datei                        | Schnitt         | Weight |
| ----------------------------- | --------------- | ------ |
| `StackSans-ExtraLight.woff2` | Extra Light      | 200    |
| `StackSans-Medium.woff2`     | Medium           | 500    |

Falls ihr zusätzlich `.woff`-Fallbacks habt, gerne mit gleichem Namensschema
(`StackSans-ExtraLight.woff`, `StackSans-Medium.woff`) dazulegen.

Sobald die Dateien da sind, Bescheid geben — dann wird `next/font/local` in
`app/layout.js` scharf geschaltet und der Platzhalter-Font-Stack in
`app/globals.css` verschwindet automatisch.
