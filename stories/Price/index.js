import React from 'react';
import { flow } from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../src/util/withTests';
import { Price } from '../../src';
import README from './README.md';

storiesOf('Prices', module)
  .addDecorator(withTests('Price/spec.js'))
  .add(
    'Price',
    flow(withNotes(README), withInfo())(() => (
      <div>
        {/* Adding some vertical spacing between the children */}
        <style
          scoped
          dangerouslySetInnerHTML={{
            __html: `
        div {
          margin-bottom: 12px;
        }
      `
          }}
        />
        <Price currency="EUR" locale="de-DE" amount={9.99} />
        <Price currency="EUR" locale="de-DE" amount={9} />
        <Price currency="EUR" locale="de-DE" installments={9} amount={9.99} />
        <Price currency="BRL" locale="pt-BR" installments={12} amount={9.99} />
        <Price currency="USD" locale="en-US" amount={9.99} />
        <Price currency="USD" locale="en-US" amount={49} />
        <Price currency="USD" locale="en-US" amount={9999999} />
        <Price currency="BRL" locale="pt-BR" amount={9.99} />
        <Price currency="EUR" locale="de-AT" amount={9.99} color="error" />
        <Price currency="EUR" locale="de-AT" amount={9.99} color="warning" />
        <Price currency="EUR" locale="de-AT" amount={9.99} color="highlight" />
      </div>
    ))
  );