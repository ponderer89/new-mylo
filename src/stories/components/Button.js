import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../../components/Button/Button'

storiesOf('Button', module)
  .add('with text', () => <Button>Mylo</Button>)
  .add('with different colors', () => (
    <>
      <Button color="main">Main</Button>
      <br />
      <Button color="secondary">Secondary</Button>
    </>
  ))
  .add('with full width', () => <Button fullWidth>Mylo</Button>)
