class Themy {
  constructor(themes, options) {
    this.themes = themes;
    this.options = options ? options : undefined;
    this.active = null;

    this.createStyle();

    this.select(Object.keys(themes)[0]);
  }

  createStyle() {
    const styleEl = document.createElement('style');

    styleEl.innerText = `
  *{
    transition: 0.3s;
  }
  
  .primary {
    color: var(--primary);
  }

  .bg-primary {
    background-color: var(--primary);
  }

  .border-secondary {
    border-width: 4px;
    border-style: solid;
    border-color: var(--secondary);
  }
  `;

    const HTMLHead = document.head;

    HTMLHead.appendChild(styleEl);
  }

  select(themeName) {
    console.log('selecting theme...');

    const theme = this.themes[themeName];

    document.body.style.setProperty('--primary', theme.primary);
    document.body.style.setProperty('--secondary', theme.secondary);

    this.active = themeName;
  }

  activeTheme() {
    return this.active;
  }
}

function rgbToHex(r, g, b) {
  const hexer = (c) =>
    c.toString(16).length == 1 ? '0' + c.toString(16) : c.toString(16);
  return '#' + hexer(r) + hexer(g) + hexer(b);
}

module.exports = Themy;
