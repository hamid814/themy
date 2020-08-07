class Colors {
  static rgbToHex(r, g, b) {
    const hexer = (c) =>
      c.toString(16).length == 1 ? '0' + c.toString(16) : c.toString(16);
    return '#' + hexer(r) + hexer(g) + hexer(b);
  }

  static hslToHex() {
    return 'hex';
  }

  static checkRGB(str) {
    return true;
  }

  static checkHex() {
    return true;
  }

  static checkHsl() {
    return true;
  }
}

module.exports = Colors;
