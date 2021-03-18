import {html} from 'lit-html';

import '../ods-circle-chart.ts';

// This default export determines where your story goes in the story list
export default {
    title: 'Example/Circle Chart',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({ chartTitle, chartSubtitle }) => html`
    <ods-circle-chart .chartTitle=${chartTitle} .chartSubtitle=${chartSubtitle}>
        <ods-circle-chart-segment title="toto" value="15"></ods-circle-chart-segment>
        <ods-circle-chart-segment title="toto2" value="20"></ods-circle-chart-segment>
        <ods-circle-chart-segment title="toto3" value="15"></ods-circle-chart-segment>
        <ods-circle-chart-segment title="toto4" value="15"></ods-circle-chart-segment>
        <ods-circle-chart-segment title="toto5" value="15"></ods-circle-chart-segment>
    </ods-circle-chart>
`;

export const Default = Template.bind({});

Default.args = {
    /* 👇 The args you need here will depend on your component */
    chartTitle: '/Go',
    chartSubtitle: 'Storage'
};
