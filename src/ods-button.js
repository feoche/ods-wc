import { LitElement, html } from 'lit-element';
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
            <style>.oui-button,.oui-file-selector__button,.oui-inline-adder__action{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;min-width:6.25rem;max-width:100%;display:inline-block;position:relative;margin:0;padding:.5rem 1.25rem;text-align:center;font-size:1rem;font-weight:600;letter-spacing:.007em;border-radius:.375rem;border-style:solid;border-width:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;color:#2859c0;-webkit-transition:background-color .2s ease-in,border-color .2s ease-in,-webkit-box-shadow .2s ease-in;transition:background-color .2s ease-in,border-color .2s ease-in,-webkit-box-shadow .2s ease-in;transition:background-color .2s ease-in,border-color .2s ease-in,box-shadow .2s ease-in;transition:background-color .2s ease-in,border-color .2s ease-in,box-shadow .2s ease-in,-webkit-box-shadow .2s ease-in}.oui-button .oui-icon{font-size:.625rem}.oui-button,.oui-button:focus,.oui-button:hover,.oui-file-selector__button,.oui-inline-adder__action{text-decoration:none}.oui-button:focus{outline-width:1px;outline-style:dotted;outline-color:initial;outline-offset:-2px}.oui-button:disabled{cursor:not-allowed}oui-button{display:inline-block}.oui-button_primary{color:#fff;background-color:#2859c0;border-color:#2859c0;-webkit-box-shadow:none;box-shadow:none;padding:.5rem 1.25rem;border-width:0}.oui-button_primary .oui-icon{color:#fff}.oui-button_primary:focus,.oui-button_primary:hover{background-color:#1f4596;border-color:#1f4596}.oui-button_primary:focus{-webkit-box-shadow:0 0 3px 1px rgba(102,199,214,.6);box-shadow:0 0 3px 1px rgba(102,199,214,.6)}.oui-button_primary:active{background-color:#1f4596;border-color:#1f4596;-webkit-box-shadow:inset 2px 2px 1px 0 #00a2bf;box-shadow:inset 2px 2px 1px 0 #00a2bf}.oui-button_primary:disabled,.oui-button_primary:disabled:active{color:#5c5f82;border-color:#d4d5de;background-color:#d4d5de;-webkit-box-shadow:none;box-shadow:none}.oui-button_primary:disabled .oui-icon,.oui-button_primary:disabled:active .oui-icon{color:#5c5f82}.oui-button_secondary,.oui-inline-adder__action{color:#2859c0;background-color:#fff;border-color:#2859c0;-webkit-box-shadow:none;box-shadow:none;padding:calc(.5rem - 2px) calc(1.25rem - 2px);border-width:2px}.oui-button_secondary .oui-icon{color:#2859c0}.oui-button_secondary:focus,.oui-button_secondary:hover{background-color:#eff9fd;border-color:#2859c0}.oui-button_secondary:focus{-webkit-box-shadow:0 0 3px 1px rgba(0,0,0,.15);box-shadow:0 0 3px 1px rgba(0,0,0,.15)}.oui-button_secondary:active{background-color:#eff9fd;border-color:#2859c0;-webkit-box-shadow:inset 2px 2px 1px 0 rgba(187,189,191,.3);box-shadow:inset 2px 2px 1px 0 rgba(187,189,191,.3)}.oui-button_secondary:disabled,.oui-button_secondary:disabled:active{color:#7a7d99;border-color:#b6b8c7;background-color:#fff;-webkit-box-shadow:none;box-shadow:none}.oui-button_secondary:disabled .oui-icon,.oui-button_secondary:disabled:active .oui-icon{color:#7a7d99}.oui-button_dropdown{color:#2859c0;background-color:#fff;border-color:#2859c0;-webkit-box-shadow:none;box-shadow:none;padding:calc(.5rem - 2px) 2.625rem calc(.5rem - 2px) calc(.75rem - 2px);border-width:2px;text-align:left}.oui-button_dropdown .oui-icon{color:#2859c0}.oui-button_dropdown:focus,.oui-button_dropdown:hover{background-color:#eff9fd;border-color:#2859c0}.oui-button_dropdown:focus{-webkit-box-shadow:0 0 3px 1px rgba(0,0,0,.15);box-shadow:0 0 3px 1px rgba(0,0,0,.15)}.oui-button_dropdown:active{background-color:#eff9fd;border-color:#2859c0;-webkit-box-shadow:inset 2px 2px 1px 0 rgba(187,189,191,.3);box-shadow:inset 2px 2px 1px 0 rgba(187,189,191,.3)}.oui-button_dropdown:disabled,.oui-button_dropdown:disabled:active{color:#7a7d99;border-color:#b6b8c7;background-color:#fff;-webkit-box-shadow:none;box-shadow:none}.oui-button_dropdown:disabled .oui-icon,.oui-button_dropdown:disabled:active .oui-icon{color:#7a7d99}.oui-button_dropdown .oui-icon-chevron-down{margin-right:1.125rem;position:absolute;right:1px;top:1px;bottom:1px;color:inherit;text-align:center;vertical-align:middle;pointer-events:none;cursor:pointer}.oui-button_dropdown .oui-icon-chevron-down:before{display:block;font-size:.625rem;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.oui-button_dropdown.open .oui-icon-chevron-down{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.oui-button_link{min-width:0;padding:.5rem 1.25rem;border:0;background:none;color:#2859c0;font-weight:600;text-decoration:none}.oui-button_link .oui-icon{color:#2859c0}.oui-button_link:focus,.oui-button_link:hover{background:none;color:#2859c0;text-decoration:underline}.oui-button_link:disabled,.oui-button_link:disabled:active{background:none;color:#999;text-decoration:none}.oui-button_link:disabled .oui-icon,.oui-button_link:disabled:active .oui-icon{color:#999}.oui-button_link:disabled .oui-icon_circle,.oui-button_link:disabled:active .oui-icon_circle{background-color:#999}.oui-button_icon-right{padding-right:.625rem}.oui-button_icon-right .oui-icon{margin-left:1.25rem}.oui-button_icon-left{padding-left:.625rem}.oui-button_icon-left .oui-icon{margin-right:1.25rem}.oui-button_full-width{max-width:none;width:100%}.oui-button_full-width .oui-icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin:auto}.oui-button_full-width.oui-button_icon-left .oui-icon{left:.625rem}.oui-button_full-width.oui-button_icon-right .oui-icon:not(.oui-icon-external_link){right:.625rem}.oui-button_full-width .oui-icon-external_link{margin-left:.313rem}.oui-button_small-width{min-width:2.5rem;padding-left:.313rem;padding-right:.313rem}.oui-button_large-height{min-height:2.813rem}.oui-button-group{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;vertical-align:top;margin:0;z-index:0}.oui-button-group .oui-button{border-radius:.375rem;z-index:0}.oui-button-group .oui-button+.oui-button{margin-left:.375rem}.oui-button-group .oui-button_secondary+.oui-button_secondary{margin-left:.375rem}.oui-button-group .oui-button:first-child{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.oui-button-group .oui-button:last-child{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.oui-button-group .oui-button:active,.oui-button-group .oui-button:focus,.oui-button-group .oui-button:hover{z-index:1}        
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
            }</style>
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
