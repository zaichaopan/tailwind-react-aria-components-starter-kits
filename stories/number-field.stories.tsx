import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { Form } from '../src/form';
import { NumberField, NumberInput } from '../src/number-field';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/field';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: 'Number field',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/NumberField.html#numberfield" target="_blank">`number field`</a> allows a user to enter a number, and increment or decrement the value using stepper buttons.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <NumberInput />
    </NumberField>
  );
};

export const WithDescription = () => {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const WithDescriptionHiddenTitle = () => {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <NumberInput />
      <Description>Maximum of 7</Description>
    </NumberField>
  );
};


export const WithDisabled = () => {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const WithReadonly = () => {
  return (
    <NumberField isReadOnly>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};


export const Validation = () => {
  return (
    <Form>
      <NumberField maxValue={7} isRequired>
        <Label>Viewer(s)</Label>
        <Description>Maximum of 7</Description>
        <NumberInput placeholder="Type a number&hellip;" />
        <FieldError />
      </NumberField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
