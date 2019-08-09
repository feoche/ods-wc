import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import '../src/ods-button'

import '../vendor/css/oui-ods.css'

storiesOf('Components|Atoms', module)
    .addDecorator(withKnobs)
    .add(
        'Button',
        () => {
            const buttonText = text(`Text`);
            const disabled = boolean(`Disable all`, false);
            const clog = () => console.log("click !");
            return `
                <style>
                  ods-button {
                    display: inline-block;
                    margin: 1em;
                  }
                </style>
                <div>
                    <ods-button aria-label="Default button"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Default`}
                    </ods-button>
                    <ods-button aria-label="Primary button"
                                variant="primary"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Primary`}
                    </ods-button>
                    <ods-button aria-label="Secondary button"
                                variant="secondary"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Secondary`}
                    </ods-button>
                    <ods-button aria-label="Link button"
                                variant="link"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Link`}
                    </ods-button>
                </div>
                <div>
                    <ods-button aria-label="Default button"
                                size="s"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Default`}
                    </ods-button>
                    <ods-button aria-label="Primary button"
                                variant="primary"
                                size="s"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Primary`}
                    </ods-button>
                    <ods-button aria-label="Secondary button"
                                variant="secondary"
                                size="s"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Secondary`}
                    </ods-button>
                    <ods-button aria-label="Link button"
                                variant="link"
                                size="s"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Link`}
                    </ods-button>
                </div>
                <div>
                    <ods-button aria-label="Success button"
                                variant="success"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Success`}
                    </ods-button>
                    <ods-button aria-label="Danger button"
                                variant="danger"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Danger`}
                    </ods-button>
                    <ods-button aria-label="Warning button"
                                variant="warning"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Warning`}
                    </ods-button>
                    <ods-button aria-label="Info button"
                                variant="info"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Info`}
                    </ods-button>
                    <ods-button aria-label="Light button"
                                variant="light"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Light`}
                    </ods-button>
                    <ods-button aria-label="Dark button"
                                variant="dark"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Dark`}
                    </ods-button>
                </div>
                <div>
                    <ods-button aria-label="Link button"
                                variant="secondary"
                                icon-left="oui-icon oui-icon_circle oui-icon-chevron-left"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Previous`}
                    </ods-button>
                    <ods-button aria-label="Link button"
                                variant="primary"
                                icon-right="oui-icon oui-icon_circle oui-icon-chevron-right"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Next`}
                    </ods-button>
                    <ods-button aria-label="Actions button"
                                variant="secondary"
                                icon-right="oui-icon oui-icon-chevron-down"
                                onClick="clog()"
                                disabled="${disabled}">
                        ${buttonText || `Actions`}
                    </ods-button>
                </div>
            `
        }
    )
    .add(
        'Action buttons',
        () => {
            const disabled = boolean('Disabled state', false);
            return `
                <ods-button
                  aria-label="Cancel moving the server"
                  variant="secondary"
                  ${disabled? `disabled`: ``}>
                  Cancel
                </ods-button>
                <ods-button
                  aria-label="Confirm moving the server"
                  variant="primary"
                  ${disabled? `disabled`: ``}>
                  Confirm
                </ods-button>
                <ods-button
                  aria-label="Open help"
                  variant="link"
                  ${disabled? `disabled`: ``}>
                  Need help?
                </ods-button>
            `;
        }
    )
    .add(
        'Arrow buttons',
        () => {
            const disabled = boolean('Disabled state', false);
            return `
                <ods-button
                  aria-label="Previous step"
                  variantnav="previous"
                  ${disabled? `disabled`: ``}>
                  Previous
                </ods-button>
                <ods-button
                  aria-label="Next step"
                  variant="primary"
                  variantnav="next"
                  ${disabled? `disabled`: ``}>
                  Next
                </ods-button>
            `;
        }
    );
