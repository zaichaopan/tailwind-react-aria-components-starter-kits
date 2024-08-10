import React from 'react';
import type { Meta } from '@storybook/react';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Checkboxes,
} from '../src/checkbox';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { Strong, Text } from '../src/text';
import { Label, Description, FieldError, LabeledGroup } from '../src/field';
import { docs } from '../.storybook/docs';
import { Group } from 'react-aria-components';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Checkbox.html#checkbox" target="_blank">`checkbox`</a> allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.',
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
  return <Checkbox>I accept to the terms and conditions</Checkbox>;
};

export const WithCheckboxDescription = () => {
  return (
    <CheckboxField className='max-w-sm'>
      <Checkbox>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

WithCheckboxDescription.parameters = {
  docs: {
    description: {
      story:
        'Use the `CheckboxField` and `Description` component to add checkbox description.',
    },
  },
};

export const WithDisabledCheckbox = () => {
  return (
    <CheckboxField className='max-w-sm'>
      <Checkbox isDisabled>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

WithDisabledCheckbox.parameters = {
  docs: {
    description: {
      story:
        'Use the `isDisabled` prop on the `Checkbox` component to disable checkbox.',
    },
  },
};

export const WithReadonlyCheckbox = () => {
  return (
    <CheckboxField className='max-w-sm'>
      <Checkbox isReadOnly>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const WithCheckboxGroups = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

WithCheckboxGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the `CheckboxGroup` and `Label` component to build your checkbox group.',
    },
  },
};

export const WithCheckboxGroupDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const WithCheckboxDescriptionAndGroupDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <CheckboxField>
          <Checkbox value="email">Notify via email</Checkbox>
          <Description>We'll send you a confirmation email</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="sms">Notify via SMS</Checkbox>
          <Description>We'll send you a confirmation SMS</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="telegram">Notify via telegram</Checkbox>
          <Description>We'll send you a confirmation telegram</Description>
        </CheckboxField>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const WithHorizontalCheckboxGroup = () => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const WithCheckboxLabelPosition = () => {
  return (
    <Checkbox labelPosition="left">I accept the terms and conditions</Checkbox>
  );
};

WithCheckboxLabelPosition.parameters = {
  docs: {
    description: {
      story:
        'Use `labelPosition="left"` to position label to the left side of the checkbox.',
    },
  },
};

export const WithCheckboxGroupLabelPosition = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <CheckboxField>
          <Checkbox value="email" labelPosition="left">
            Notify via email
          </Checkbox>
          <Description>We'll send you a confirmation email</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="sms" labelPosition="left">
            Notify via SMS
          </Checkbox>
          <Description>We'll send you a confirmation SMS</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="telegram" labelPosition="left">
            Notify via telegram
          </Checkbox>
          <Description>We'll send you a confirmation telegram</Description>
        </CheckboxField>
      </Checkboxes>
    </CheckboxGroup>
  );
};

const options = ['Notify via email', 'Notify via SMS', 'Notify via Telegram'];

export const WithIndeterminateState = () => {
  const [selected, setSelected] = React.useState<Array<string>>([]);

  return (
    <LabeledGroup>
      <Label className='mb-3'>Notifications</Label>

      <Group className="space-y-3">
        <Checkbox
          isSelected={selected.length > 0}
          isIndeterminate={
            selected.length > 0 && selected.length !== options.length
          }
          onChange={(checked) => setSelected(checked ? options : [])}
        >
          Select all
        </Checkbox>

        {options.map((option) => (
          <Checkbox
            key={option}
            name={option}
            isSelected={selected.includes(option)}
            onChange={(checked) => {
              return setSelected((pending) => {
                return checked
                  ? [...pending, option]
                  : pending.filter((item) => item !== option);
              });
            }}
          >
            {option}
          </Checkbox>
        ))}
      </Group>
    </LabeledGroup>
  );
};

export const WithValidation = () => {
  return (
    <Form>
      <CheckboxGroup isRequired>
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <CheckboxField>
            <Checkbox value="email">Notify via email</Checkbox>
            <Description>We'll send you a confirmation email</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="sms">Notify via SMS</Checkbox>
            <Description>We'll send you a confirmation SMS</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="telegram">Notify via telegram</Checkbox>
            <Description>We'll send you a confirmation telegram</Description>
          </CheckboxField>
        </Checkboxes>
        <FieldError />
      </CheckboxGroup>
      <Button type="submit">Save</Button>
    </Form>
  );
};

WithValidation.parameters = {
  docs: {
    description: {
      story:
        'Combine the `Form`, `FieldError` with `CheckboxGroup` components to add validation when submitting form.',
    },
  },
};

export const CheckboxCards = () => {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Checkbox
        labelPosition="left"
        className="w-56 justify-between rounded-md border px-4 py-2"
        value="A1 keyboard"
      >
        <div>
          <Strong>A1 keyboard</Strong>
          <Text>US Layout</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPosition="left"
        value="Pro mouse"
        className="w-56 justify-between rounded-md border px-4 py-2"
      >
        <div>
          <Strong>Pro mouse</Strong>
          <Text>Zero-lag wireless</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPosition="left"
        value="lightning mat"
        className="w-56 justify-between  rounded-md border px-4 py-2"
      >
        <div>
          <Strong>Lightning Mat</Strong>
          <Text>Wireless charging</Text>
        </div>
      </Checkbox>
    </div>
  );
};
