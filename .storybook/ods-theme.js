import { create, color } from '@storybook/theming';

export default create({
    base: 'dark',

    // Storybook-specific color palette
    colorPrimary: '#122844',
    colorSecondary: '#285FCD',

    // UI
    appBg: '#122844',
    appContentBg: color.lightest,
    appBorderColor: '#ccc',
    appBorderRadius: 4,

    // Fonts
    fontBase: 'Source Sans Pro,sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: color.darkest,
    textInverseColor: color.lightest,

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#eace6a',
    barBg: '#3865C1',

    // Form colors
    inputBg: '#fff',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: color.darkest,
    inputBorderRadius: 4,

    brandTitle: 'OVH Design System',
    brandUrl: 'https://ods.ovh',
    brandImage: 'https://www.ovh.com/fr/order/domain/assets/images/logo/logo_ovh_mobile.svg',
});
