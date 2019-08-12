import {
  storiesOf,
  html,
  boolean,
  text,
  select,
  addParameters,
  withKnobs,
  withClassPropertiesKnobs
} from '@open-wc/demoing-storybook';

import readme from '../README.md';
import { OdsButton } from '../src/ods-button';

const clog = (text) => console.log(text);

storiesOf('Components|Atoms', module)
    .add(
        `Button`,
        () => withClassPropertiesKnobs(OdsButton, {
          overrides: el => [
            { key: `ariaLabel`, fn: () => text(`ariaLabel`, ``, `Other`)},
            { key: `disabled`, fn: () => boolean(`disabled`, el.disabled, `Customize`)},
            { key: `iconLeft`, fn: () => text(`iconLeft`, ``, `Customize`)},
            { key: `iconRight`, fn: () => text(`iconRight`, ``, `Customize`)},
            { key: `id`, fn: () => text(`id`, ``, `Other`)},
            { key: `name`, fn: () => text(`name`, ``, `Other`)},
            { key: `size`, fn: () => select(`size`, [`s`, `m`], el.size, `Customize`) },
            { key: `type`, fn: () => select(`type`, [`button`, `submit`, `reset`], `button`, `Other`) },
            { key: `value`, fn: () => text(`value`, ``, `Other`)},
            { key: `variant`, fn: () => select(`variant`, [`primary`, `secondary`, `link`, `default`, `success`, `warning`, `danger`, `info`, `light`, `danger`], `primary`, `Customize`) }
          ],
          template: html`
            <ods-button onClick="clog('test')">${text(`content`, `Button`, `Customize`)}</ods-button>
          `
        }),
        { notes: { markdown: readme }, options: { selectedPanel: 'storybooks/knobs/panel' } },
    );
