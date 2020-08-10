# Themy

Lightwaighy library to create, test and toggle themes and color palettes

## Installation

Use the [npm](https://npmjs.com) to install themy.

```bash
npm i themy
```

## Usage

#### import

```js
/* es6 */
import themy from 'themy';

/* es5 */
const themy = require('themy');
```

#### Create themes

```js
const coolTheme = {
  primary: '#f00',
  secondary: 'rgb(23, 176, 235)',
};

const awesomeTheme = {
  primary: '#66cc99',
  secondary: '#cc9966',
};
```

#### Initialize

```js
const themes = { coolTheme, awesomeTheme };

const theme = new themy(themes);

// Change theme
theme.setTheme('awesomeTheme');
```

#### Change the theme

```js
theme.setTheme('awesomeTheme');
```

#### Add a new theme

```js
const themeName = {
  primary: '#9c1de7',
  secodary: '#9c1de7',
};

theme.addTheme({ themeName });

// Set the theme as active theme
theme.setTheme('themeName');
```

#### Options

Create and add options like this:

```js
const options = {
  acitve: 'theme1', // Active theme at the start of app
  prefix: 'site', // Classname prefix for classes
  showPanel: true, // Wether show a box to change theme or not
  utils: true, // To add utility classes or not
};

// Then add options as second argument
const theme = new themy(themes, options);
```

Valid options:

| option name             | valid values        | description                                    | default     |
| ----------------------- | ------------------- | ---------------------------------------------- | ----------- |
| active                  | name of your themes | active theme at the start of app               | first theme |
| debug                   | boolean             | to show errors in the console                  | false       |
| utils                   | boolean             | add utility classes like: 'm-1' = margin: 1em  | false       |
| transition              | boolean             | add transition time to make color changes soft | true        |
| showPanel               | boolean             | to show a panel of buttons to change tehemes   | false       |
| prefix                  | string              | any name to add before calssnames              | none        |
| panelOptions            | object              | cofigure panel settings                        | {}          |
| panelOptions.position   | 'top-right' and ... | position of panel on the screen                | 'top-right' |
| panelOptions.background | string ( color )    | background color of panel on the screen        | '#ccc'      |
| panelOptions.direction  | 'row', 'column'     | direction of buttons in panel                  | 'column'    |

#### Your HTML

You just need to add classes

```html
<div class="text-primary">Some Text</div>

<div class="bg-primary">Some Text</div>
```

### Table of classes

| classname      | example                           | description                 |
| -------------- | --------------------------------- | --------------------------- |
| text-primary   | `html <div class='text-primary'>` | text color primary          |
| bg-primary     | `<div class='bg-primary'>`        | background color of primary |
| border-primary | `<div class='border-primary'>`    | border color of primary     |

## Licens

MIT
