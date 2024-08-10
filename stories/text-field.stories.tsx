import type { Meta } from '@storybook/react';
import {
  TextField,
  Label,
  Description,
  FieldError,
  Input,
  InputGroup,
  LabeledGroup,
  InputGroups,
} from '../src/field';
import { docs } from '../.storybook/docs';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { AccessibleIcon } from '../src/accessible-icon';
import { Text } from '../src/text';
import { NativeSelect } from '../src/native-select';
import { TooltipTrigger } from 'react-aria-components';
import { Tooltip } from '../src/tooltip';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';
import { Canada, US } from './~icons';

const meta: Meta<typeof TextField> = {
  title: 'Text Field (Input)',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TextField.html#textfield" target="_blank">`text field`</a> allows a user to enter a plain text value with a keyboard.',
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
    <TextField className="w-full sm:w-80" name="email" type="email">
      <Label>Email address</Label>
      <Input />
    </TextField>
  );
};

export const WithDescription = () => {
  return (
    <TextField name="email" type="email">
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input />
    </TextField>
  );
};

export const WithFollowingDescription = () => {
  return (
    <TextField name="email" type="email">
      <Label>Email address</Label>

      <Input />
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
    </TextField>
  );
};

export const WithDisabled = () => {
  return (
    <TextField name="email" type="email" isDisabled>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
};

export const WithReadonly = () => {
  return (
    <TextField name="email" type="email" isReadOnly>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
};

export const WithValidation = () => {
  return (
    <Form>
      <TextField isRequired>
        <Label>Email address</Label>
        <Description>
          Enter an email for us to contact you about your order.
        </Description>
        <Input />
        <FieldError></FieldError>
      </TextField>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithLeadingIcon = () => {
  return (
    <TextField name="email" type="email" className="min-w-64">
      <Label>Email address</Label>
      <InputGroup role="presentation">
        <AccessibleIcon>
          <Mail />
        </AccessibleIcon>
        <Input />
      </InputGroup>
    </TextField>
  );
};

export const WithTrailingIcon = () => {
  return (
    <TextField name="credit_card" className="min-w-64">
      <Label>Card number</Label>
      <InputGroup role="presentation">
        <Input />
        <AccessibleIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </AccessibleIcon>
      </InputGroup>
      <Description>
        Enter your credit card here. You can cancel anytime you want.
      </Description>
    </TextField>
  );
};

export const WithIconDisabled = () => {
  return (
    <TextField name="email" type="email" className="min-w-64" isDisabled>
      <Label>Email address</Label>
      <InputGroup role="presentation">
        <AccessibleIcon>
          <Mail />
        </AccessibleIcon>
        <Input />
      </InputGroup>
    </TextField>
  );
};

export const WithIconReadonly = () => {
  return (
    <TextField name="email" type="email" className="min-w-64" isReadOnly>
      <Label>Email address</Label>
      <InputGroup role="presentation">
        <AccessibleIcon>
          <Mail />
        </AccessibleIcon>
        <Input />
      </InputGroup>
    </TextField>
  );
};

export const WithLeadingTextAddon = () => {
  return (
    <TextField className="min-w-64">
      <Label>Company Website</Label>
      <InputGroup>
        <Text
          data-ui="addon"
          elementType="span"
          className="flex h-[34px] items-center border-e px-2.5"
        >
          http://
        </Text>

        <Input className="ps-[70px]" type="text" placeholder="example.com" />
      </InputGroup>
    </TextField>
  );
};

export const WithLeadingInlineTextAddon = () => {
  return (
    <TextField className="min-w-64">
      <Label>Company Website</Label>
      <InputGroup role="presentation">
        <Text
          elementType="span"
          className="ps-2.5 text-foreground"
          data-ui="addon"
        >
          https://
        </Text>

        <Input
          className="ps-16 sm:ps-[58px]"
          type="text"
          placeholder="example.com"
        />
      </InputGroup>
    </TextField>
  );
};

export const WithLeadingAndTrailingTextAddon = () => {
  return (
    <TextField>
      <Label>Price</Label>

      <InputGroup role="presentation">
        <Text aria-hidden data-ui="addon" className="px-2.5">
          $
        </Text>
        <Input placeholder="0.00" className="pe-10 ps-7" />
        <div data-ui="addon" className="px-2.5">
          <Description className="text-muted">USD</Description>
        </div>
      </InputGroup>
    </TextField>
  );
};

export const WithTrailingNativeSelect = () => {
  return (
    <TextField className="min-w-64">
      <Label>Price</Label>
      <InputGroup>
        <Text aria-hidden data-ui="addon" className="px-2.5">
          $
        </Text>
        <Input className="pe-20 ps-7" placeholder="0.00" />

        <NativeSelect
          plain
          aria-label="Currency"
          name="currency"
          className="min-w-min pe-8 ps-1.5"
        >
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
        </NativeSelect>
      </InputGroup>
    </TextField>
  );
};

export const WithLeadingNativeSelect = () => {
  return (
    <TextField className="min-w-64">
      <Label>Phone Number</Label>
      <InputGroup>
        <NativeSelect
          aria-label="Country"
          name="country"
          className="min-w-min pe-8"
          plain
        >
          <option value="US">US</option>
          <option value="CA">CA</option>
          <option value="EU">EU</option>
        </NativeSelect>
        <Input className="ps-[66px]" placeholder="+1 (123) 457-7890" />
      </InputGroup>
    </TextField>
  );
};

export const WithLeadingSelect = () => {
  return (
    <TextField className="min-w-64">
      <Label>Phone Number</Label>
      <InputGroup>
        <Select
          data-ui="addon"
          aria-label="Country Code"
          defaultSelectedKey="ca"
          className="min-w-min"
        >
          <SelectButton className="pe-8" plain></SelectButton>

          <SelectPopover className="w-36" placement="bottom start">
            <SelectListBox>
              <SelectListItem id="ca" textValue="Canada">
                <AccessibleIcon>
                  <Canada />
                </AccessibleIcon>
                <SelectListItemLabel>CA</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="us" textValue="United States">
                <AccessibleIcon>
                  <US />
                </AccessibleIcon>
                <SelectListItemLabel>US</SelectListItemLabel>
              </SelectListItem>
            </SelectListBox>
          </SelectPopover>
        </Select>

        <Input className="ps-24" placeholder="+1 (123) 457-7890" />
      </InputGroup>
    </TextField>
  );
};

export const WithTrailingIconButton = () => {
  return (
    <TextField className="min-w-64">
      <Label>Phone Number</Label>
      <InputGroup>
        <NativeSelect
          aria-label="Country"
          name="country"
          className="min-w-min pe-8"
          plain
        >
          <option value="US">US</option>
          <option value="CA">CA</option>
          <option value="EU">EU</option>
        </NativeSelect>
        <Input className="ps-[66px]" placeholder="+1 (123) 457-7890" />

        <TooltipTrigger>
          <Button variant='plain' size="sm" className="" isIconOnly>
            <AccessibleIcon>
              <QuestionMark className="size-5" />
            </AccessibleIcon>
          </Button>
          <Tooltip>
            Select your country code and enter the phone number.
          </Tooltip>
        </TooltipTrigger>
      </InputGroup>
    </TextField>
  );
};

export const WithOptionalCornerHint = () => {
  return (
    <TextField className="min-w-64">
      <Label className="flex justify-between">
        Email
        <span className="text-muted">Optional</span>
      </Label>
      <Input placeholder="you@example.com" type="email" name="email" />
    </TextField>
  );
};

export const WithRequiredHint = () => {
  return (
    <TextField className="min-w-64">
      <Label requiredHint>Email</Label>
      <Input placeholder="you@example.com" type="email" name="email" />
    </TextField>
  );
};

export const WithMultiInputs = () => {
  return (
    <div className="space-y-4">
      <LabeledGroup>
        <Label>Serial number</Label>
        <InputGroups>
          <Input
            name="first_3_digit"
            aria-label="First 3 digits"
            size={3}
            maxLength={3}
            placeholder="000"
          />
          <span>&ndash;</span>
          <Input
            name="middle_2_digit"
            aria-label="Middle 2 digits"
            size={2}
            maxLength={2}
            placeholder="00"
          />
          <span>&ndash;</span>
          <Input
            name="last_4_digit"
            aria-label="Last 4 digits"
            size={4}
            maxLength={4}
            placeholder="0000"
          />
        </InputGroups>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Expiration date</Label>
        <InputGroups>
          <Input size={2} aria-label="Month" placeholder="mm" maxLength={2} />
          <span>/</span>
          <Input size={4} aria-label="Year" maxLength={4} placeholder="yyyy" />
        </InputGroups>
      </LabeledGroup>
    </div>
  );
};

function Mail(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function QuestionMark(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
