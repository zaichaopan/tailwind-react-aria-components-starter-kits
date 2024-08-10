import type { Meta } from '@storybook/react';
import { Form } from '../src/form';
import { Button } from '../src/button';
import {
  TextField,
  Label,
  TextArea,
  Description,
  FieldError,
} from '../src/field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof TextField> = {
  title: 'Textarea',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-spectrum/TextArea.html#textarea" target="_blank">`TextAreas`</a> are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.',
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
    <TextField className="sm:w-80">
      <Label>Bio</Label>
      <TextArea placeholder="Tell us a little bit about yourself" />
      <FieldError />
    </TextField>
  );
};

export const WithDescription = () => {
  return (
    <TextField>
      <Label>Bio</Label>
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
      <TextArea placeholder="Tell us a little bit about yourself" />
    </TextField>
  );
};

export const WithDescriptionHidden = () => {
  return (
    <TextField>
      <Label>Bio</Label>
      <TextArea placeholder="Tell us a little bit about yourself" />
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
    </TextField>
  );
};

export const WithDisabled = () => {
  return (
    <TextField isDisabled>
      <Label>Bio</Label>
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
      <TextArea placeholder="Tell us a little bit about yourself" />
    </TextField>
  );
};

export const WithReadonly = () => {
  return (
    <TextField isReadOnly>
      <Label>Bio</Label>
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
      <TextArea placeholder="Tell us a little bit about yourself" />
    </TextField>
  );
};

export const WithErrorMessage = () => {
  return (
    <Form>
      <TextField isRequired>
        <Label>Bio</Label>
        <Description>
          You can <span className="text-foreground">@mention</span> other users
          and organizations to link to them.
        </Description>
        <TextArea placeholder="Tell us a little bit about yourself" />
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};
