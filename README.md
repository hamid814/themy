# Themy

lightwaighy library to create and test themes and color palettes

## Installation

Use the [npm](https://npmjs.com) to install Themy.

```bash
npm i themy
```

## Usage

#### import

```
/* es6 */
import themy from 'themy';

/* es5 */
const themy = require('themy');
```

#### create themes

```
const theme1 = {
 primary: 'red',
 secondary: 'rgb(23, 176, 235)'
}

const theme2 = {
  primary: '#66cc99',
  secondary: '#cc9966'
}
```

#### initialize

```
const themes = [theme1, theme2]

const options = {} // unforced

const theme = new Themy(themes, options)
```

#### Options

```
const options = {
  acitve: 'theme1', // active theme at the start of app
  prefix: 'site', // classname prefix for classes
  showPanel: true // wether show a box to change theme or not
  utils: true // to add utility classes or not
}
```

#### your HTML

```
<div class='primary'>Some Text</div>

<div class='bg-primary'>Some Text</div>
```

### table of classes

| classname      | description                 |
| -------------- | --------------------------- |
| primary        | text color primary          |
| bg-primary     | background color of primary |
| border-primary | border color of primary     |

## Licens

MIT
