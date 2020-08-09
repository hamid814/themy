import colorHandler from '../utils/colorHandler';

let colorNames = [
  'primary',
  'secondary',
  'dominant',
  'nutral',
  'support',
  'accent',
];
const shadows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rootContainer = document.createElement('style');
let rootIsAdded = false;

const appendRoot = (element) => {
  document.head.appendChild(element);
};

const createRoot = (theme) => {
  let root = `:root{`;

  // base colors
  root += `--primary: ${theme.primary};--secondary: ${theme.secondary};--nutral: ${theme.nutral};`;

  // create lighter and darker shadows
  shadows.forEach((shadow) => {
    root += `--primary-d${shadow}: ${colorHandler(
      shadow * -0.1,
      theme.primary
    )};`;
    root += `--primary-l${shadow}: ${colorHandler(
      shadow * 0.1,
      theme.primary
    )};`;
    root += `--secondary-d${shadow}: ${colorHandler(
      shadow * -0.1,
      theme.secondary
    )};`;
    root += `--secondary-l${shadow}: ${colorHandler(
      shadow * 0.1,
      theme.secondary
    )};`;
  });

  // close th root bracket
  root += `}`;

  rootContainer.innerText = root;

  if (!rootIsAdded) {
    appendRoot(rootContainer);
    rootIsAdded = true;
  }
};

const createClass = (theme, options) => {
  const styleEl = document.createElement('style');

  let styleText = ``;

  colorNames.forEach((color) => {
    if (Object.keys(theme).indexOf(color) !== -1) {
      // add base colors
      styleText += `.text-${color}{color:var(--${color})}`;
      styleText += `.bg-${color}{background-color:var(--${color})}`;
      styleText += `.border-${color}{border-color:var(--${color})}`;

      // add shades
      shadows.forEach((shadow) => {
        styleText += `.text-${color}-d${shadow}{color: var(--${color}-d${shadow})}`;
        styleText += `.text-${color}-l${shadow}{color: var(--${color}-l${shadow})}`;
        styleText += `.bg-${color}-d${shadow}{background-color: var(--${color}-d${shadow})}`;
        styleText += `.bg-${color}-l${shadow}{background-color: var(--${color}-l${shadow})}`;
      });
    }
  });

  styleEl.innerText = styleText;

  const HTMLHead = document.head;

  HTMLHead.appendChild(styleEl);
};

const createUtils = () => {};

module.exports = {
  createRoot,
  createClass,
  createUtils,
};
