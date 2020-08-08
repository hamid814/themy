import Colors from '../utils/colorHandler';

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
