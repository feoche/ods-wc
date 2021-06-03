import {html} from 'lit-html';

import '../components/test/test.ts';

// This default export determines where your story goes in the story list
export default {
    title: 'Components/Test',
    parameters: {
    },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => {
    return html`
        <ods-test></ods-test>
    `;
};

export const Default = Template.bind({});

Default.args = {
    /* 👇 The args you need here will depend on your component */
    chartTitle: '/Go',
    chartSubtitle: 'Storage',
    ariaTitle: 'Chart representing the amount of storage used',
    ariaDescription: 'Each segment represents the amount of storage used (in Go), the complete chart contains the amount of usable storage',
    minBound: 0,
    maxBound: 100,
    withLegends: true
};
