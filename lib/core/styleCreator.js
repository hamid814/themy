import colorHandler from '../utils/colorHandler';

let rootContainer = document.createElement('style');
let rootIsAdded = false;

const appendRoot = (element) => {
  document.head.appendChild(element);
};

const createRoot = (theme) => {
  let root = `:root{`;

  // base colors
  root += `--primary: ${theme.primary};--secondary: ${theme.secondary};`;

  // create lighter and darker shadows
  const shadows = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

const createClass = () => {
  const styleEl = document.createElement('style');

  styleEl.innerText = `
*{
transition: 0.3s;
}

.some-class {
color: var(--some-var);
font-size: 50px;
font-family: arial
}

.text-primary {
color: var(--primary);
}

.bg-primary {
background-color: var(--primary);
}

.bg-primary-d {
background-color: var(--primary-d);
}

.bg-primary-d1 {
background-color: var(--primary-d1);
}

.bg-primary-d2 {
background-color: var(--primary-d2);
}

.bg-primary-d3 {
background-color: var(--primary-d3);
}

.bg-primary-d4 {
background-color: var(--primary-d4);
}

.bg-primary-d5 {
background-color: var(--primary-d5);
}

.bg-primary-d6 {
background-color: var(--primary-d6);
}

.bg-primary-d7 {
background-color: var(--primary-d7);
}

.bg-primary-d8 {
background-color: var(--primary-d8);
}

.bg-primary-d9 {
background-color: var(--primary-d9);
}

.bg-primary-l {
background-color: var(--primary-l);
}

.bg-primary-l1 {
background-color: var(--primary-l1);
}

.bg-primary-l2 {
background-color: var(--primary-l2);
}

.bg-primary-l3 {
background-color: var(--primary-l3);
}

.bg-primary-l4 {
background-color: var(--primary-l4);
}

.bg-primary-l5 {
background-color: var(--primary-l5);
}

.bg-primary-l6 {
background-color: var(--primary-l6);
}

.bg-primary-l7 {
background-color: var(--primary-l7);
}

.bg-primary-l8 {
background-color: var(--primary-l8);
}

.bg-primary-l9 {
background-color: var(--primary-l9);
}

.bg-secondary {
background-color: var(--secondary);
}

.bg-secondary-d {
background-color: var(--secondary-d);
}

.bg-secondary-d1 {
background-color: var(--secondary-d1);
}

.bg-secondary-d2 {
background-color: var(--secondary-d2);
}

.bg-secondary-d3 {
background-color: var(--secondary-d3);
}

.bg-secondary-d4 {
background-color: var(--secondary-d4);
}

.bg-secondary-d5 {
background-color: var(--secondary-d5);
}

.bg-secondary-d6 {
background-color: var(--secondary-d6);
}

.bg-secondary-d7 {
background-color: var(--secondary-d7);
}

.bg-secondary-d8 {
background-color: var(--secondary-d8);
}

.bg-secondary-d9 {
background-color: var(--secondary-d9);
}

.bg-secondary-l {
background-color: var(--secondary-l);
}

.bg-secondary-l1 {
background-color: var(--secondary-l1);
}

.bg-secondary-l2 {
background-color: var(--secondary-l2);
}

.bg-secondary-l3 {
background-color: var(--secondary-l3);
}

.bg-secondary-l4 {
background-color: var(--secondary-l4);
}

.bg-secondary-l5 {
background-color: var(--secondary-l5);
}

.bg-secondary-l6 {
background-color: var(--secondary-l6);
}

.bg-secondary-l7 {
background-color: var(--secondary-l7);
}

.bg-secondary-l8 {
background-color: var(--secondary-l8);
}

.bg-secondary-l9 {
background-color: var(--secondary-l9);
}

.border-secondary {
border-width: 4px;
border-style: solid;
border-color: var(--secondary);
}
`;

  const HTMLHead = document.head;

  HTMLHead.appendChild(styleEl);
};

const createUtils = () => {};

module.exports = {
  createRoot,
  createClass,
  createUtils,
};
