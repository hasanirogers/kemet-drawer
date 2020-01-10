import { LitElement, html } from 'lit-element';
import { stylesBase, stylesEffects } from './styles.js';

export class KemetDrawer extends LitElement {
  static get properties() {
    return {
      'opened': {
        type: Boolean,
        reflect: true,
      },
      'effect': {
        type: String,
        reflect: true,
      }
    };
  }

  constructor() {
    super();

    // property defaults
    this.opened = false;
    this.effect = 'slide';
  }

  static styles = [
    stylesBase,
    stylesEffects,
  ];

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
    this.addEventListener('click', (event) => {
      if (this.opened && event.target.tagName.toLowerCase() === 'kemet-drawer') {
        this.opened = false;
      }
    });
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
