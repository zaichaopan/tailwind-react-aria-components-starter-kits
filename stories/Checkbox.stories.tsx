import type { Meta } from '@storybook/react';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  CheckboxGroupContent,
} from '../src/Checkbox';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { Text } from '../src/Text';
import { Label, Description, FieldError } from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Checkbox.html#checkbox" target="_blank">**checkbox**</a> allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.',
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

export const Example = () => {
  return <Checkbox>I accept the terms and conditions</Checkbox>;
};

export const CheckboxDescription = () => {
  return (
    <CheckboxField>
      <Checkbox>Subscribe</Checkbox>
      <Description>You will receive our newsletter once per week. Unsubscribe at any time.</Description>
    </CheckboxField>
  );
};

CheckboxDescription.parameters = {
  docs: {
    description: {
      story:
        'Use **CheckboxField** and **Description** component to add checkbox description:',
    },
  },
};

export const CheckboxDisabled = () => {
  return (
    <CheckboxField>
      <Checkbox isDisabled>Subscribe</Checkbox>
      <Description>You will receive our newsletter once per week. Unsubscribe at any time.</Description>
    </CheckboxField>
  );
};

CheckboxDisabled.parameters = {
  docs: {
    description: {
      story:
        'Use **isDisabled** prop of **Checkbox** component to disable checkbox:',
    },
  },
};

export const CheckboxGroups = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text>
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <CheckboxGroupContent>
        <CheckboxField>
          <Checkbox value="newsletter">Newsletter</Checkbox>
          <Description>Receive our newsletter once per week</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="deals">Deals</Checkbox>
          <Description>The best deals and sales for members</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="notification">Notifications</Checkbox>
          <Description>Notifications about your orders</Description>
        </CheckboxField>
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxGroups.parameters = {
  docs: {
    description: {
      story:
        'Use **CheckboxGroup**, **Label**, **CheckboxGroupContent** to build your checkbox group:',
    },
  },
};

export const CheckboxGroupHorizontal = () => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Favorite sports</Label>
      <CheckboxGroupContent>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxGroupHorizontal.parameters = {
  docs: {
    description: {
      story:
        'Use **orientation="horizontal"** to build horizontal checkbox group:',
    },
  },
};

export const CheckboxLabelPosition = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text className="pb-4">
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <CheckboxGroupContent>
        <CheckboxField>
          <Checkbox value="newsletter" labelPosition="left">
            Newsletter
          </Checkbox>
          <Description>Receive our newsletter once per week</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="deals" labelPosition="left">
            Deals
          </Checkbox>
          <Description>The best deals and sales for members</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="notification" labelPosition="left">
            Notifications
          </Checkbox>
          <Description>Notifications about your orders</Description>
        </CheckboxField>
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxLabelPosition.parameters = {
  docs: {
    description: {
      story:
        'Use **labelPosition="left"** to position label to the left size of the checkbox:',
    },
  },
};

export const CheckboxGroupValidation = () => {
  return (
    <Form>
      <CheckboxGroup isRequired>
        <Label>Email settings</Label>
        <Text className="pb-4">
          Personalize your email experience according to your preferences and
          needs
        </Text>
        <CheckboxGroupContent>
          <CheckboxField>
            <Checkbox value="newsletter">Newsletter</Checkbox>
            <Description>Receive our newsletter once per week</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="deals">Deals</Checkbox>
            <Description>The best deals and sales for members</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="notification">Notifications</Checkbox>
            <Description>Notifications about your orders</Description>
          </CheckboxField>
        </CheckboxGroupContent>

        <FieldError />
      </CheckboxGroup>
      <Button className="self-start" type="submit">
        Save
      </Button>
    </Form>
  );
};

CheckboxGroupValidation.parameters = {
  docs: {
    description: {
      story:
        'Combine **Form**, **FieldError** with **CheckboxGroup** to add validation when submitting form:',
    },
  },
};
