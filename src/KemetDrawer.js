import { LitElement, html } from 'lit-element';
import { stylesBase, stylesEffects } from './styles.js';

export class KemetDrawer extends LitElement {
  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
      effect: {
        type: String,
        reflect: true,
      },
      side: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // property defaults
    this.opened = false;
    this.effect = 'slide';
    this.side = 'left';
  }

  static styles = [stylesBase, stylesEffects];

  render() {
    return html`
      <section class="off-canvas">
        <nav class="off-canvas__nav">
          <slot name="navigation"></slot>
        </nav>
        <div class="off-canvas__pusher">
          <main class="off-canvas__content">
            <div class="off-canvas__wrapper">
              <slot name="content"></slot>
            </div>
          </main>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    this.addEventListener('click', event => {
      if (this.opened && event.target.tagName.toLowerCase() === 'kemet-drawer') {
        this.close();
      }
    });
  }

  open() {
    this.opened = true;

    this.dispatchEvent(
      new CustomEvent('kemet-drawer-open', {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }

  close() {
    this.opened = false;

    this.dispatchEvent(
      new CustomEvent('kemet-drawer-close', {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }

  toggle() {
    this.opened = !this.opened;

    this.dispatchEvent(
      new CustomEvent('kemet-drawer-toggle', {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }
}
