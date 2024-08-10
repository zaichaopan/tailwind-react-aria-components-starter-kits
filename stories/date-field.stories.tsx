import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { Form } from '../src/form';
import { DateField, DateInput } from '../src/date-field';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof DateField> = {
  title: 'Date field',
  component: DateField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateField.html#datefield" target="_blank">`date field`</a> allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.',
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
    <DateField>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  );
};

export const WithDescription = () => {
  return (
    <DateField>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const WithDescriptionHidden = () => {
  return (
    <DateField>
      <Label>Birth date</Label>
      <DateInput />
      <Description>Please enter your birth date</Description>
    </DateField>
  );
};


export const WithDisabled = () => {
  return (
    <DateField isDisabled>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const WithReadonly = () => {
  return (
    <DateField isReadOnly>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};


export const WithValidation = () => (
  <Form className="flex flex-col items-start gap-2">
    <DateField isRequired>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
      <FieldError />
    </DateField>
    <Button type="submit">Submit</Button>
  </Form>
);
