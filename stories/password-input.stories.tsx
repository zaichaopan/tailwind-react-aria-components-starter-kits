import type { Meta } from '@storybook/react';
import { TextField, Label, FieldError, Description } from '../src/field';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { PasswordInput } from '../src/password-input';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof PasswordInput> = {
  title: 'Password input',
  component: PasswordInput,
  parameters: {
    // layout: 'fullscreen',
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `PasswordInput` component captures password data from user.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <TextField name="password">
      <Label>Password</Label>
      <PasswordInput placeholder="Password" />
    </TextField>
  );
};

export const WithDescription = () => {
  return (
    <TextField name="password">
      <Label>Password</Label>
      <Description>Min 8 characters</Description>
      <PasswordInput placeholder="Password" minLength={8} />
    </TextField>
  );
};

export const WithDescriptionHiddenTitle = () => {
  return (
    <TextField name="password" className="max-w-sm">
      <Label>Password</Label>
      <PasswordInput placeholder="Password" minLength={8} />
      <Description>Must be at least 8 characters long, include an uppercase letter, a number, and a special character.</Description>
    </TextField>
  );
};

export const WithDisabled = () => {
  return (
    <TextField name="password" isDisabled>
      <Label>Password</Label>
      <PasswordInput placeholder="Password" minLength={8} />
      <Description>Min 8 characters</Description>
    </TextField>
  );
};

export const WithReadonly = () => {
  return (
    <TextField name="password" isReadOnly>
      <Label>Password</Label>
      <PasswordInput placeholder="Password" minLength={8} />
      <Description>Min 8 characters</Description>
    </TextField>
  );
};

export const WithValidation = () => {
  return (
    <Form className="w-72 ">
      <TextField isRequired name="password">
        <Label>Password</Label>
        <PasswordInput placeholder="Password" minLength={8} />
        <Description>Min 8 characters</Description>
        <FieldError />
      </TextField>

      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};
