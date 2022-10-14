# theme-toggle

[![npm version](https://badge.fury.io/js/theme-toggle.svg)](https://badge.fury.io/js/theme-toggle)

> **theme-toggle** is a simple component that can help you add different themes to your web app.

it uses css `invert()` and `hue-rotate()` functions to change the look of your entire html document so It may gives unexpected changes .. in the next version there will be some more customization

The theme switcher icon is used from [Adam Argyle](https://twitter.com/argyleink)'s [Article](https://web.dev/building-a-theme-switch-component/)

- [**Demo**](https://gui-challenges.web.app/theme-switch/dist/) of icon

## Getting started

This is a simple custom component, you only need to import it (or bu using external link), and add `<theme-toggle></theme-toggle>` custom element where you want to see the toggle button

## installation

### npm

you can Install it via npm

```shell
npm install theme-toggle
```

then import it

```jsx
import "theme-toggle";
```

now you can use the `<theme-toggle></theme-toggle>` custom element wherever you want

> `<theme-toggle></theme-toggle>` doesn't have any children element's
>
> `theme` attribute is required, you can see attributes table below

### cdn

you can also use a cdn link to use `theme-toggle` in your project

```html
<script type="module" src="https://unpkg.com/theme-toggle@0.1.5/dist/theme-toggle.js" crossorigin="anonymous"></script>
```

## Settings

you can use some custom changes to change the default behavior of `theme-toggle`, we are working on adding more customization later

| Attribute |                                                                                                                     Values                                                                                                                      | Required | default |                            example                             |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: | :-----: | :------------------------------------------------------------: |
|   theme   | sets the initial theme of your page, and the correct theme icon, there are 2 available values <br />- _dark_: sets the initial theme to dark, and theme-icon to light <br /> - _light_: sets the initial theme to light, and theme-icon to dark |  `YES`   |    -    |         `<theme-toggle theme="light"></theme-toggle>`          |
|   width   |                                                     you con control the square container's width using this attribute, it takes number string, do not add units .. by default it uses `px`                                                      |   `NO`   | `2rem`  |    `<theme-toggle theme="light" width="25"></theme-toggle>`    |
| storable  |                    this attributes controls if the current theme is stored so when you refresh the page it loads the last used theme, the theme is storable by default and it accepts 2 different values, `true` or `false`                     |   `NO`   | `true`  | `<theme-toggle theme="light" storable="false"></theme-toggle>` |

## Contributing

This tools needs a lot of contribution, and it's open for contributing :)

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:
