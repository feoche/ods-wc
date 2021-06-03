import {LitElement, html, customElement, property, css} from 'lit-element';

import tailwind from '../../vendor/tailwind.css';
import styles from './test.css';

/**
 * An example element.
 *
 */
@customElement('ods-test')
export class Test extends LitElement {

    /**
     * Chart title - displayed at the center of the chart
     */
    @property({type: String})
    chartTitle = 'Title';

    /**
     * Chart subtitle - displayed at the center of the chart
     */
    @property({type: String})
    chartSubtitle = 'Subtitle';

    /**
     * Chart legend title - for a11y purposes
     */
    @property({type: String})
    ariaTitle = 'Chart Title';

    /**
     * Chart legend description - for a11y purposes
     */
    @property({type: String})
    ariaDescription = 'Chart Description';

    /**
     * The starting number for counting segments
     */
    @property({type: Number})
    minBound = 0;

    /**
     * The total for counting segments
     */
    @property({type: Number})
    maxBound = 100;

    /**
     * The total for counting segments
     */
    @property({type: Boolean})
    withLegends = false;

    constructor() {
        super();
    }

    static styles = css([tailwind, styles]);

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="max-w-6xl mx-auto md:px-6 px-4 bg-red-300">
                <div class="md:py-20 py-12">
                    <div class="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
                        <h2 class="md:text-6xl text-4xl text-black dark:text-white font-bold mb-4">Build and style every element to perfection</h2>
                        <p class="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>
                </div>
            </div>
        `;
    }
}
