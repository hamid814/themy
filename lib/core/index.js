import colorHandler from '../utils/colorHandler';
import createError from '../utils/errorHandler';
import styleCreator from './styleCreator';

class themy {
  constructor(themes, options) {
    this.themes = themes;
    this.options = options || {};
    this.active = null;
    this.debug = this.options.debug || false;
    this.showPanel = false;
    this.panelOptions = this.options.panelOptions || {};

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
    styleCreator.createClass();
  }

  // get theme wth its name
  setTheme(themeName) {
    const theme = this.themes[themeName];

    if (theme) {
      this.active = themeName;

      styleCreator.createRoot(theme);

      // update panel if its showing
      if (this.options.showPanel) {
        this.createPanel();
      }
    } else {
      // the name for theme was not in this.themes
      const firstTheme = this.themes[Object.keys(this.themes)[0]];

      this.active = Object.keys(this.themes)[0];

      styleCreator.createRoot(firstTheme);

      if (this.debug) {
        createError('THEMY: Theme name is not valid, selected first theme');
      }
    }
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
    buttonsContainer.style.backgroundColor =
      colorHandler(0, this.panelOptions.background) || '#ccc9';

    if (this.debug && !colorHandler(0, this.panelOptions.background)) {
      createError('THEMY: panel background color is not valid');
    }

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
