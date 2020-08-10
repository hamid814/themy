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

  colorNames.forEach((color) => {
    if (Object.keys(theme).indexOf(color) !== -1) {
      // base colors
      root += `--${color}: ${theme[color]};`;

      // create lighter and darker shadows
      shadows.forEach((shadow) => {
        root += `--${color}-d${shadow}: ${colorHandler(
          shadow * -0.1,
          theme[color]
        )};`;
        root += `--${color}-l${shadow}: ${colorHandler(
          shadow * 0.1,
          theme[color]
        )};`;
      });
    }
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

  if (options.transition) {
    styleText += `[class*='bg-'],[class*='text-'],[class*='border-'],[class*='fill-'] {transition: 0.3s;}`;
  }

  colorNames.forEach((color) => {
    if (Object.keys(theme).indexOf(color) !== -1) {
      // add base colors
      styleText += `.text-${color}{color:var(--${color})}`;
      styleText += `.text-${color}-dark{color:var(--${color}-d3)}`;
      styleText += `.text-${color}-light{color:var(--${color}-l3)}`;
      styleText += `.bg-${color}{background-color:var(--${color})}`;
      styleText += `.bg-${color}-dark{background-color:var(--${color}-d3)}`;
      styleText += `.bg-${color}-light{background-color:var(--${color}-l3)}`;
      styleText += `.border-${color}{border-color:var(--${color})}`;
      styleText += `.border-${color}-dark{border-color:var(--${color}-d3)}`;
      styleText += `.border-${color}-light{border-color:var(--${color}-l3)}`;

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

const createUtils = () => {
  const styleEl = document.createElement('style');

  let styleText = `.m{margin:0.5rem;}.m-1{margin:1rem;}.m-2{margin:2rem;}.m-3{margin:3rem;}.m-4{margin:4rem;}.mt{margin-top:0.5rem;}.mt-1{margin-top:1rem;}.mt-2{margin-top:2rem;}.mt-3{margin-top:3rem;}.mt-4{margin-top:4rem;}.mr{margin-right:0.5rem;}.mr-1{margin-right:1rem;}.mr-2{margin-right:2rem;}.mr-3{margin-right:3rem;}.mr-4{margin-right:4rem;}.ml{margin-left:0.5rem;}.ml-1{margin-left:1rem;}.ml-2{margin-left:2rem;}.ml-3{margin-left:3rem;}.ml-4{margin-left:4rem;}.mb{margin-bottom:0.5rem;}.mb-1{margin-bottom:1rem;}.mb-2{margin-bottom:2rem;}.mb-3{margin-bottom:3rem;}.mb-4{margin-bottom:4rem;}.my{margin-top:0.5rem;margin-bottom:0.5rem;}.my-1{margin-top:1rem;margin-bottom:1rem;}.my-2{margin-top:2rem;margin-bottom:2rem;}.my-3{margin-top:3rem;margin-bottom:3rem;}.my-4{margin-top:4rem;margin-bottom:4rem;}.mx{margin-right:0.5rem;margin-left:0.5rem;}.mx-1{margin-right:1rem;margin-left:1rem;}.mx-2{margin-right:2rem;margin-left:2rem;}.mx-3{margin-right:3rem;margin-left:3rem;}.mx-4{margin-right:4rem;margin-left:4rem;}.p{padding:0.5rem;}.p-1{padding:1rem;}.p-2{padding:2rem;}.p-3{padding:3rem;}.p-4{padding:4rem;}.pt{padding-top:0.5rem;}.pt-1{padding-top:1rem;}.pt-2{padding-top:2rem;}.pt-3{padding-top:3rem;}.pt-4{padding-top:4rem;}.pr{padding-right:0.5rem;}.pr-1{padding-right:1rem;}.pr-2{padding-right:2rem;}.pr-3{padding-right:3rem;}.pr-4{padding-right:4rem;}.pl{padding-left:0.5rem;}.pl-1{padding-left:1rem;}.pl-2{padding-left:2rem;}.pl-3{padding-left:3rem;}.pl-4{padding-left:4rem;}.pb{padding-bottom:0.5rem;}.pb-1{padding-bottom:1rem;}.pb-2{padding-bottom:2rem;}.pb-3{padding-bottom:3rem;}.pb-4{padding-bottom:4rem;}.py{padding-top:0.5rem;padding-bottom:0.5rem;}.py-1{padding-top:1rem;padding-bottom:1rem;}.py-2{padding-top:2rem;padding-bottom:2rem;}.py-3{padding-top:3rem;padding-bottom:3rem;}.py-4{padding-top:4rem;padding-bottom:4rem;}.px{padding-right:0.5rem;padding-left:0.5rem;}.px-1{padding-right:1rem;padding-left:1rem;}.px-2{padding-right:2rem;padding-left:2rem;}.px-3{padding-right:3rem;padding-left:3rem;}.px-4{padding-right:4rem;padding-left:4rem;}`;

  styleEl.innerText = styleText;

  document.head.appendChild(styleEl);
};

module.exports = {
  createRoot,
  createClass,
  createUtils,
};
