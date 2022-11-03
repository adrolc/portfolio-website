# Portfolio website
[Live Demo](https://adrianolczak.pl)

## Technology
* React
* JavaScript
* Sass
* HTML
## How to run

Starts the development server:

```
npm start
```

Bundles the app into static files for production.
```
npm run build
```

## More informations

### Path to resources for scss files
Path to resources is defined in `_vars.scss`
```scss
$assets-path: "~/src/assets/";
```
List of resources as key-value is defined in:
```scss
$assets: (
    "bg-overlay": "background_overlay.png",
    "example-img": "example-img.png",
);
```
To load a resource in scss file use function `asset-path` defined in `_functions.scss`:
```scss
@function asset-path($asset-name) {
    @return vars.$assets-path + map.get(vars.$assets, $asset-name);
}
```
For example:
```scss
@use 'src/style/functions';

body
{
    background-image: url(functions.asset-path("bg-overlay"));
}
```

### Sass file structure

```
.
└── src/
    └── style/
        ├── base/
        │   └── _base.scss
        ├── components/
        │   ├── _buttons.scss
        │   └── _sections.scss
        ├── layout/
        │   └── _container.scss
        ├── sass-utils/
        │   ├── _animations.scss
        │   ├── _functions.scss
        │   ├── _mixins.scss
        │   └── _vars.scss
        ├── sections/
        │   ├── _contact.scss
        │   ├── _experience.scss
        │   ├── _footer.scss
        │   ├── _header.scss
        │   ├── _nav.scss
        │   ├── _portfolio.scss
        │   └── _topbar.scss
        └── style.scss
```

* base

reset and basic styles

* compontents

elements that occur multiple times on the page

* layout

page structure styles

* sass-utils

auxiliary elements such as variables, mixins, functions etc.

* sections

styles for individual page components