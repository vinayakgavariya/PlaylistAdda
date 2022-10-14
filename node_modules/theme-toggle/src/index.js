// theme initial template;
import template from "./template";

class ThemeToggle extends HTMLElement {
  /**
   * @var {string} _initialTheme
   */
  _initialTheme = "";

  constructor() {
    super();

    // append the css file to the shadow dom
    this.attachShadow({ mode: "open" });

    // get the initial theme
    this._initialTheme = this.initTheme();
  }

  /**
   * @returns {string} theme
   */
  get theme() {
    return this.getAttribute("theme");
  }

  /**
   * @return {?string|number} width
   */
  get width() {
    return this.getAttribute("width");
  }

  /**
   * @returns {?string|boolean} storable
   */
  get storable() {
    return this.getAttribute("storable");
  }

  /**
   * @param {string} theme
   * @returns {void}
   */
  set theme(theme) {
    this.setAttribute("theme", theme);
  }

  /**
   * Get the initial theme
   * @returns {string} theme
   */
  initTheme() {
    let initTheme = null;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      initTheme = savedTheme;
    } else {
      const theme = this.theme;
      // so defalt theme is light
      initTheme = theme === "dark" ? "dark" : "light";
    }

    if (initTheme === "dark") {
      this.changeTheme("dark");
    }

    return initTheme;
  }

  /**
   * @param {string} theme
   * @returns {void}
   */
  changeThemeIcon(theme) {
    this.shadowRoot.querySelector("#theme-toggle").setAttribute("data-theme", theme);
    this.shadowRoot.querySelector("#theme-toggle").setAttribute("aria-label", theme);
  }

  /**
   * @returns {array} array of attributes to observe
   */
  static get observedAttributes() {
    return ["theme", "width", "storable"];
  }

  /**
   * @param {string} name
   * @param {?string} oldValue
   * @param {?string} newValue
   * @returns {void}
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "theme" && oldValue !== null) {
      if (newValue === "dark") {
        this.changeThemeIcon("light");
        if (oldValue === "light") {
          this.changeTheme("dark");
        }
      } else {
        this.changeThemeIcon("dark");
        if (oldValue === "dark") {
          this.changeTheme("light");
        }
      }
    }
  }

  /**
   * @returns {void}
   */
  connectedCallback() {
    if (!this.theme) {
      return;
    }
    this.render();
    this.theme = this._initialTheme;

    // add event listener
    const themeButton = this.shadowRoot.querySelector("#theme-toggle");
    if (themeButton.isConnected) {
      themeButton.addEventListener("click", this.toggleTheme);
    }
  }

  /**
   * Toggle the theme
   * @returns {void}
   */
  toggleTheme = () => {
    const theme = this.getAttribute("theme");
    if (theme === "dark") {
      this.setAttribute("theme", "light");
    } else {
      this.setAttribute("theme", "dark");
    }
  };

  /**
   *
   * @param {string} theme
   * @returns {void}
   */
  changeTheme(theme) {
    let root = document.documentElement;
    const media = document.querySelectorAll("img, video, iframe, embed, picture, svg");
    if (theme === "light") {
      root.style.filter = "invert(0) hue-rotate(0deg)";
      media.forEach((el) => {
        el.style.filter = "invert(0) hue-rotate(0deg)";
      });
    } else {
      root.style.filter = "invert(1) hue-rotate(180deg)";
      media.forEach((el) => {
        el.style.filter = "invert(1) hue-rotate(180deg)";
      });
    }
    if (this.storable !== "false" && this.storable !== false) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  }

  /**
   * Render the template and append it to the shadow dom
   * @returns {void}
   */
  render() {
    // get the template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // button element
    const themeToggle = this.shadowRoot.querySelector("#theme-toggle");
    // regex to validate colors
    const HEX_REGEX = /^#(?:[0-9a-fA-F]{3}){1,2}$/g;
    // set the width if provided
    if (this.width && !isNaN(this.width)) {
      themeToggle.style.setProperty("--size", `${this.width}px`);
    }
  }
}

export default customElements.define("theme-toggle", ThemeToggle);
