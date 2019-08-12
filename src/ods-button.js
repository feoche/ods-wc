import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export class OdsButton extends LitElement {
    static get properties() {
        return {
            ariaLabel: {
                type: String,
                attribute: `aria-label`
            },
            disabled: {
                type: Boolean,
                converter: (value) => value === `true` || value === ``
            },
            iconLeft: {
                type: String,
                attribute: `icon-left`,
            },
            iconRight: {
                type: String,
                attribute: `icon-right`,
            },
            id: {
                type: String
            },
            name: {
                type: String
            },
            size: {
                type: String
            },
            type: {
                type: String
            },
            value: {
                type: String
            },
            variant: {
                type: String
            }
        };
    }

    constructor() {
        super();

        // Set default properties
        this.disabled = false;
        this.size = `m`;
        this.type = `button`;
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/@ovh-ux/ui-kit@3.4.0/dist/css/oui-ods.css">
            <style>        
                .oui-button_s {
                    padding: .3em .5em;
                    font-size: .9rem;
                    min-width: inherit;
                }
                .oui-button_success {
                    color: #fff;
                    background-color: #28a745;
                    border-color: #28a745;
                }
                .oui-button_danger {
                    color: #fff;
                    background-color: #dc3545;
                    border-color: #dc3545;
                }
                .oui-button_warning {
                    color: #212529;
                    background-color: #ffc107;
                    border-color: #ffc107;
                }
                .oui-button_info {
                    color: #fff;
                    background-color: #17a2b8;
                    border-color: #17a2b8;
                }
                .oui-button_light {
                    color: #212529;
                    background-color: #f8f9fa;
                    border-color: #f8f9fa;
                }
                .oui-button_dark {
                    color: #fff;
                    background-color: #343a40;
                    border-color: #343a40;
                }
            </style>
            <button
              aria-label=${OdsButton.ifDefined(this.ariaLabel)}
              class=${this.getButtonClass()}
              @click=${OdsButton.onClick}
              ?disabled=${this.disabled}      
              id=${OdsButton.ifDefined(this.id)}
              name=${OdsButton.ifDefined(this.name)}
              type=${this.type}
              value=${OdsButton.ifDefined(this.value)}
            >            
              ${OdsButton.renderIcon(this.iconLeft)}
              <span class="oui-button__text">
                <slot></slot>
              </span>
              ${OdsButton.renderIcon(this.iconRight)}
            </button>
        `;
    }

    getButtonClass() {
        const res = [`oui-button`];
        if(this.variant) {
            res.push(`oui-button_${this.variant}`)
        }
        if(this.iconLeft) {
            res.push(`oui-button_icon-left`)
        }
        if(this.iconRight) {
            res.push(`oui-button_icon-right`)
        }
        if(this.size) {
            res.push(`oui-button_${this.size}`)
        }
        return res.join(` `);
    }

    static renderIcon(icon) {
        if(icon) {
            return html`<span aria-hidden="true" class=${icon}></span>`
        }
    }

    static ifDefined(attr) {
        return ifDefined(attr || undefined);
    }

    static onClick(e) {
        e.preventDefault();
    }
}

customElements.define(`ods-button`, OdsButton);
