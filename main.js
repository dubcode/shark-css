//LOGO COMPONENT///////////////////////////////////////
class LogoComponent extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    let sw = document.createElement("div");
    sw.className = "block";
    let logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML =
        '<svg x="0px" y="0px" width="201px" height="132.515px" viewBox="0 0 201 132.515" enable-background="new 0 0 201 132.515" xml:space="preserve"><g><path fill="#FFFFFF" d="M137.422,0l-5.856,21.188c-4.919-2.369-13.666-5.83-25.691-5.83S88.018,20.823,88.018,27.2 c0,7.835,6.925,11.297,22.776,17.309c19.975,7.386,30.2,17.56,31.688,32.649L201,0H137.422z"/><path fill="#FFFFFF" d="M94.76,96.438c12.754,0,19.496-5.285,19.496-13.301c0-7.652-5.83-12.026-20.589-17.31 C73.26,58.722,59.958,47.425,59.958,29.569c0-12.306,6.039-22.908,16.886-29.569H0l69.115,91.133 C76.229,94.034,85.375,96.438,94.76,96.438z"/><path fill="#FFFFFF" d="M93.121,119.214c-0.916,0-1.832-0.017-2.744-0.047l10.124,13.349l11.804-15.565 C106.71,118.409,100.327,119.214,93.121,119.214z"/></g></svg>';
    sw.appendChild(logo);
    let style = document.createElement("style");
    style.textContent = `
      svg{
        height: auto;
        width: 100px;
      }
    `;
    sw.appendChild(logo);
    shadow.appendChild(style);
    shadow.appendChild(sw);
  }
}
customElements.define("logo-component", LogoComponent);
//LOGO COMPONENT///////////////////////////////////////

//MINI LOGO COMPONENT///////////////////////////////////////
class MLogoComponent extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    let sw = document.createElement("div");
    sw.className = "block";
    let logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML =
        '<svg x="0px" y="0px" width="201px" height="132.515px" viewBox="0 0 201 132.515" enable-background="new 0 0 201 132.515" xml:space="preserve"><g><path fill="#FFFFFF" d="M137.422,0l-5.856,21.188c-4.919-2.369-13.666-5.83-25.691-5.83S88.018,20.823,88.018,27.2 c0,7.835,6.925,11.297,22.776,17.309c19.975,7.386,30.2,17.56,31.688,32.649L201,0H137.422z"/><path fill="#FFFFFF" d="M94.76,96.438c12.754,0,19.496-5.285,19.496-13.301c0-7.652-5.83-12.026-20.589-17.31 C73.26,58.722,59.958,47.425,59.958,29.569c0-12.306,6.039-22.908,16.886-29.569H0l69.115,91.133 C76.229,94.034,85.375,96.438,94.76,96.438z"/><path fill="#FFFFFF" d="M93.121,119.214c-0.916,0-1.832-0.017-2.744-0.047l10.124,13.349l11.804-15.565 C106.71,118.409,100.327,119.214,93.121,119.214z"/></g></svg>';
    sw.appendChild(logo);
    let style = document.createElement("style");
    style.textContent = `
      svg{
        height: auto;
        width: 100px;
      }
    `;
    sw.appendChild(logo);
    shadow.appendChild(style);
    shadow.appendChild(sw);
  }
}
customElements.define("mlogo-component", MLogoComponent);
//MINI LOGO COMPONENT///////////////////////////////////////