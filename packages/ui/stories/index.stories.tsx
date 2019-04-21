import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';
import { Button } from '../src';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => {
    const value = text('Text', 'Hello Button');
    return <Button onClick={action('clicked')}>{value}</Button>;
  }, {
    info: {
      text: 'Foobar'
    },
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
