import colorHandler from '../utils/colorHandler';

console.log(colorHandler(0, '#6c9', 'c'));

class themy {
  constructor(themes, options) {
    this.themes = themes;
    this.options = options ? options : {};
    this.active = null;
    this.showPanel = false;

    this.setOptions();

    // create a style tag
    this.createStyle();
  }

  // effect user options
  setOptions() {
    if (this.options.active) {
      this.active = this.options.active;
      this.setTheme(this.options.active);
    } else {
      this.active = null;
      this.setTheme(Object.keys(this.themes)[0]);
    }

    if (this.options.showPanel) {
      this.showPanel = true;
      this.createPanel();
    } else {
      this.showPanel = false;
    }

    if (this.options.utils) {
    }
  }

  // create a style tag with css custom properties
  createStyle() {
    const styleEl = document.createElement('style');

    styleEl.innerText = `
  *{
    transition: 0.3s;
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
  }

  // get theme wth its name
  setTheme(themeName) {
    const theme = this.themes[themeName];

    if (theme) {
      this.active = themeName;

      this.setCssCustomProps(theme);

      // update panel if its showing
      if (this.options.showPanel) {
        this.createPanel();
      }
    } else {
      // the name for theme was not in this.themes
      const firstTheme = this.themes[Object.keys(this.themes)[0]];

      this.active = Object.keys(this.themes)[0];

      this.setCssCustomProps(firstTheme);

      const err = new Error(
        'THEMY: Theme name is not valid, selected first theme'
      );

      console.warn(err);
    }
  }

  // add new custom properties based on a theme to body
  setCssCustomProps(theme) {
    document.body.style.setProperty('--primary', theme.primary);
    document.body.style.setProperty(
      '--primary-d',
      colorHandler(-0.1, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d1',
      colorHandler(-0.1, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d2',
      colorHandler(-0.2, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d3',
      colorHandler(-0.3, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d4',
      colorHandler(-0.4, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d5',
      colorHandler(-0.5, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d6',
      colorHandler(-0.6, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d7',
      colorHandler(-0.7, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d8',
      colorHandler(-0.8, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-d9',
      colorHandler(-0.9, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l',
      colorHandler(0.1, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l1',
      colorHandler(0.1, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l2',
      colorHandler(0.2, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l3',
      colorHandler(0.3, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l4',
      colorHandler(0.4, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l5',
      colorHandler(0.5, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l6',
      colorHandler(0.6, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l7',
      colorHandler(0.7, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l8',
      colorHandler(0.8, theme.primary)
    );
    document.body.style.setProperty(
      '--primary-l9',
      colorHandler(0.9, theme.primary)
    );
    document.body.style.setProperty(
      '--secondary-d',
      colorHandler(-0.1, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d1',
      colorHandler(-0.1, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d2',
      colorHandler(-0.2, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d3',
      colorHandler(-0.3, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d4',
      colorHandler(-0.4, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d5',
      colorHandler(-0.5, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d6',
      colorHandler(-0.6, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d7',
      colorHandler(-0.7, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d8',
      colorHandler(-0.8, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-d9',
      colorHandler(-0.9, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l',
      colorHandler(0.1, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l1',
      colorHandler(0.1, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l2',
      colorHandler(0.2, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l3',
      colorHandler(0.3, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l4',
      colorHandler(0.4, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l5',
      colorHandler(0.5, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l6',
      colorHandler(0.6, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l7',
      colorHandler(0.7, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l8',
      colorHandler(0.8, theme.secondary)
    );
    document.body.style.setProperty(
      '--secondary-l9',
      colorHandler(0.9, theme.secondary)
    );
    document.body.style.setProperty('--secondary', theme.secondary);
  }

  getTheme() {
    return this.active;
  }

  getThemes() {
    return Object.keys(this.themes);
  }

  // craete an element with button for each theme
  createPanel() {
    // create and style the container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'themy-panel';
    buttonsContainer.style.position = 'absolute';
    buttonsContainer.style.right = '0';
    buttonsContainer.style.top = '0';
    buttonsContainer.style.backgroundColor = '#ccc';

    Object.keys(this.themes).forEach((theme) => {
      const button = document.createElement('button');

      // style button
      button.style.backgroundColor = this.themes[theme].primary;
      button.style.border = 'none';
      button.style.padding = '15px 15px';
      button.style.margin = '10px';
      button.style.borderRadius = '5px';
      button.style.display = 'block';
      button.style.cursor = 'pointer';
      button.title = theme;
      button.className = 'themy-btn change-theme-btn';
      button.id = theme;

      if (this.active === theme) {
        button.style.border = '2px solid #222';
        button.style.padding = '13px';
      }

      buttonsContainer.appendChild(button);
    });

    // listen for click on container
    buttonsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('change-theme-btn')) {
        this.setTheme(e.target.id);
      }
    });

    // add container to document body
    document.body.appendChild(buttonsContainer);
  }
}

module.exports = themy;
