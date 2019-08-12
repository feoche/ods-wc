import '@storybook/addon-console';
import { configure } from '@storybook/polymer';
import {
    addParameters,
    withKnobs,
} from '@open-wc/demoing-storybook';
import { addDecorator } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';

// Add Theme
import '@ovh-ux/ui-kit/dist/css/oui.css';
import odsTheme from './ods-theme';

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Addons
addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
    options: {
        name: `ODS-WC`,
        isFullscreen: false,
        panelPosition: 'right',
        theme: odsTheme,
    },
});

configure(loadStories, module);
