import {html} from 'lit-html';

import '../ods-circle-chart.ts';

// This default export determines where your story goes in the story list
export default {
    title: 'Example/Circle Chart',
    parameters: {
        viewport: {
            viewports: {
                default: {
                    name: 'Default',
                    styles: {
                        width: '800px',
                        height: '100%',
                    },
                    type: 'desktop',
                }
            },
            defaultViewport: 'default'
        },
    },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => {
    return html`
        <ods-circle-chart .chartTitle=${args.title} .chartSubtitle=${args.subtitle} .minBound=${args.minBound} .maxBound=${args.maxBound} ?withLegends=${args.withLegends}>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto" description="tata" value="7.6"></ods-circle-chart-segment>
        </ods-circle-chart>
    `;
};

export const Default = Template.bind({});

Default.args = {
    /* 👇 The args you need here will depend on your component */
    title: '/Go',
    subtitle: 'Storage',
    minBound: 0,
    maxBound: 100,
    withLegends: true
};
