import {LitElement, html, customElement, property, TemplateResult, svg} from 'lit-element';

import { DEFAULT_VALUES, SEGMENT_COLORS } from './ods-circle-chart.constant';

/**
 * An example element.
 *
 */
@customElement('ods-circle-chart')
export class OdsCircleChart extends LitElement {

    /**
     * The chart title
     */
    @property({type: String})
    chartTitle = 'Title';

    /**
     * The chart subtitle
     */
    @property({type: String})
    chartSubtitle = 'Subtitle';

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

    getPercentage(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, (value * 100 / (max-min))));
    }

    getStrokeDasharray(value: number, min: number, max: number): string {
        let percent:number = this.getPercentage(value, min, max);
        return `${percent} ${100 - percent}`;
    }

    getStrokeDashoffset(total: number, minBound: number, maxBound: number, index: number): number {
        if (!index) {
            return DEFAULT_VALUES.OFFSET;
        }
        return 100 - this.getPercentage(total, minBound, maxBound) + DEFAULT_VALUES.OFFSET;
    }

    getChartSegments() {
        let total:number = 0;
        const segments:Array<TemplateResult> = [];

        this.querySelectorAll("ods-circle-chart-segment").forEach((item:Element, index:number) => {
            const attribute:NamedNodeMap = item.attributes;

            let template:TemplateResult = svg`
                    <circle class=${`donut-segment donut-segment-${index + 1}`}
                            cx="21"
                            cy="21"
                            stroke-dasharray=${this.getStrokeDasharray(Number(attribute['value']?.value), this.minBound, this.maxBound)}
                            stroke-dashoffset=${this.getStrokeDashoffset(total, this.minBound, this.maxBound, index)}
                            r="15.91549430918954"
                            aria-labelledby=${`chart-segment-${index + 1}-title chart-segment-${index + 1}-desc`}
                            stroke=${SEGMENT_COLORS[index]}>
                      <title id=${`chart-segment-${index + 1}-title`}>${attribute['title']?.value}</title>
                      <desc id=${`chart-segment-${index + 1}-desc`}>${attribute['description']?.value}</desc>
                    </circle>
                `;
            total += Number(attribute['value'].value);
            segments.push(template);
        });
        return segments;
    }

    getChartLegends() {
        const legends:Array<TemplateResult> = [];

        this.querySelectorAll("ods-circle-chart-segment").forEach((item:Element, index:number) => {
            const attribute:NamedNodeMap = item.attributes;

            let template:TemplateResult = html`
                <li class="legend">
                    <span class="shape-circle"
                          style="--circle-donut-segment-background-color: ${SEGMENT_COLORS[index]}"></span>
                    <span>
                        <div>${attribute['title']?.value}</div>
                        <div><small>${attribute['description']?.value}</small></div>
                    </span>
                </li>`;
            legends.push(template);
        });
        return legends;
    }

    render() {
        return html`
            <style>
                :host {
                    --circle-donut-background-color: var(--c-gray-050, #f2f2f2);
                    --circle-chart-color: var(--c-blue-800, #00185e);
                    --circle-chart-color-dark: var(--c-white, #fff);
                    --circle-donut-segment-background-color: var(--c-blue-600, #002dbe);
                }
                
                figure {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                }
                
                @media (min-width: 768px) {
                    figure {
                        flex-direction: row;
                    }
                }
                
                .figure-content,
                .figure-key {
                    flex: 1;
                    padding: 0 1em;
                    align-self: center;
                }
                
                .figure-key {
                    flex: 0 1 auto;
                }
                
                .figure-content svg {
                    height: auto;
                }
                
                .donut-ring, .donut-segment {
                    fill: transparent;
                }
                
                .donut-ring {
                    stroke: var(--circle-donut-background-color);
                    stroke-width: 4;
                }
                
                .donut-segment {
                    stroke-width: 4.1;
                }
                
                .chart-text {
                    fill: var(--circle-chart-color);
                    transform: translateY(0.25em);
                }
                
                @media (prefers-color-scheme: dark) {
                    .chart-text {
                        fill: var(--circle-chart-color);
                    }
                }
                
                .chart-title {
                    font-size: 0.6em;
                    line-height: 1;
                    text-anchor: middle;
                    transform: translateY(-0.25em);
                }
                
                .chart-subtitle {
                    font-size: 0.2em;
                    text-transform: uppercase;
                    text-anchor: middle;
                    transform: translateY(0.7em);
                }
                
                .figure-key-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-flow: column wrap;
                    align-items: space-between;
                }
                
                .figure-key-list .legend {
                    margin: 0 0 .2em;
                    padding: 0;
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
                
                .shape-circle {
                    display: inline-block;
                    vertical-align: middle;
                    width: 1em;
                    height: 1em;
                    margin-right: 1em;
                    border-radius: 50%;
                    background-color: var(--circle-donut-segment-background-color);
                }
            </style>
            <figure>
                <div class="figure-content">
                    <svg width="100%"
                         height="100%"
                         viewBox="0 0 42 42"
                         class="donut"
                         aria-labelledby="chart-title chart-desc"
                         role="img">
                        <title id="chart-title">${this.chartTitle}</title>
                        <desc id="chart-desc">${this.chartSubtitle}</desc>
    
                        <circle class="donut-ring"
                                cx="21"
                                cy="21"
                                r="15.91549430918954"></circle>
                            
                        ${this.getChartSegments()}
    
                        <g class="chart-text">
                            <text x="50%"
                                  y="50%"
                                  class="chart-title">
                                ${this.chartTitle}
                            </text>
                            <text x="50%"
                                  y="50%"
                                  class="chart-subtitle">
                                ${this.chartSubtitle}
                            </text>
                        </g>
                    </svg>
                </div>
                ${this.withLegends?
                    html`<figcaption class="figure-key">
                            <ul class="figure-key-list"
                                  aria-hidden="true"
                                  role="presentation">
                                ${this.getChartLegends()}
                            </ul>
                        </figcaption>`
                    : ''
                }                
            </figure>
        `;
    }
}
