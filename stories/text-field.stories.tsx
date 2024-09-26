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
  InputAddon,
} from '../src/field';
import { docs } from '../.storybook/docs';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { AccessibleIcon } from '../src/accessible-icon';
import { NativeSelect, NativeSelectField } from '../src/native-select';
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const InputGroupWithSingleInput = () => {
  return (
    <div className="min-w-64 space-y-6">
      <TextField name="email" type="email">
        <Label>Email address</Label>
        <InputGroup role="presentation" inline>
          <InputAddon className="text-xl text-muted sm:text-lg">
            &#x2709;
          </InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField name="credit_card">
        <Label>Card number</Label>
        <InputGroup role="presentation" inline>
          <Input />
          <InputAddon className="text-xl sm:text-lg">&#x1F4B3;</InputAddon>
        </InputGroup>
        <Description>
          Enter your credit card here. You can cancel anytime you want.
        </Description>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <InputAddon>$</InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <Input />
          <InputAddon>.00</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <InputAddon>$</InputAddon>
          <Input />
          <InputAddon>.00</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation" inline>
          <InputAddon>$</InputAddon>
          <Input className="pe-12 ps-6" />
          <InputAddon>USD</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation">
          <InputAddon>https://</InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation">
          <InputAddon>https://</InputAddon>
          <Input />
          <InputAddon>.com</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation" inline>
          <InputAddon>https://</InputAddon>
          <Input className="pe-14 ps-16 sm:ps-14" />
          <InputAddon>.com</InputAddon>
        </InputGroup>
      </TextField>

      {/* TOod 1. readonly 2. disable 3. with tooltip */}
    </div>
  );
};

export const InputGroupWithMultiInputs = () => {
  return (
    <div className="space-y-6">
      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
          <TextField className="min-w-64">
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton></SelectButton>

            <SelectPopover placement="bottom start" className="w-36">
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

          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton></SelectButton>

            <SelectPopover placement="bottom end" className="w-36">
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
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <InputGroup>
          <InputAddon>$</InputAddon>
          <TextField>
            <Label>Price</Label>
            <Input placeholder="0.00" />
          </TextField>
          <Select defaultSelectedKey="CA">
            <Label>Currency</Label>
            <SelectButton></SelectButton>
            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="CA" textValue="CA">
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="USD" textValue="USD">
                  <SelectListItemLabel>USD</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <InputGroup>
          <InputAddon>$</InputAddon>
          <TextField>
            <Label>Price</Label>
            <Input placeholder="0.00" />
          </TextField>
          <NativeSelectField>
            <Label>Currency</Label>
            <NativeSelect name="currency">
              <option value="CA">CA</option>
              <option value="USD">USD</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <InputGroup inline>
          <InputAddon>$</InputAddon>
          <TextField>
            <Label>Price</Label>
            <Input placeholder="0.00" />
          </TextField>
          <NativeSelectField>
            <Label>Currency</Label>
            <NativeSelect name="currency">
              <option value="CA">CA</option>
              <option value="USD">USD</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>
    </div>
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
