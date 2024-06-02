# Vendre Employee Showcase
## Beskrivning
Detta projekt är ett kodtest och första gången jag provar Vue.js. Projektet är en enkel webbsida för att visa upp anställda på Vendre. Sidan inkluderar en navigeringsmeny som blir en hamburgermeny på mindre skärmar och en komponent för att visa en titel med en tillhörande bild.
### Teknologier
- Vue.js
- Sass
- Flexbox

### Struktur
Projektets struktur är organiserad enligt följande:
```css
my-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── VendreHeader.vue
│   │   ├── TitleComponent.vue
│   │   ├── UserList.vue
│   │   └── VendreLogo.vue
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   └── nav-style.scss
│   ├── App.vue
│   ├── main.js
│   └── router/
├── package.json
├── vue.config.js
└── README.md
```
## Komponenter
**VendreHeader**
`VendreHeader.vue` innehåller navigeringsmenyn och logotypen. Navigeringsmenyn växlar till en hamburgermeny på mindre skärmar.

**TitleComponent**
`TitleComponent.vue` visar en titel och en bild, och döljer bilden på mindre skärmar.

**UserList**
`UserList.vue` hanterar visningen av anställda på sidan.

**VendreLogo**
`VendreLogo.vue` hanterar visningen av Vendre-logotypen.

**CSS & SASS**
Projektet använder SASS för att hantera stilar. Följande mixins och variabler används för att hålla koden DRY och modulär, det var planen:

**Mixins**
`src/styles/mixins.scss` innehåller mixins för att centrera element och ska användas för andra gemensama stilar:

Detta projekt har varit ett utmärkt sätt att lära sig grunderna i Vue.js.

```
