import React from 'react';
import type { Meta } from '@storybook/react';
import { Form } from '../src/form';
import {
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from '../src/field';
import { PasswordInput } from '../src/password-input';
import { Button } from '../src/button';
import { Strong, Text, TextLink } from '../src/text';
import { Link } from '../src/link';
import { Avatar } from '../src/avatar';
import {
  DateRangePicker,
  DateRangePickerInput,
} from '../src/date-range-picker';
import { Heading } from '../src/heading';
import { Tab, TabList, Tabs } from '../src/tabs';
import { Switch } from '../src/switch';
import { Radio, RadioField, RadioGroup } from '../src/radio-group';
import { twMerge } from 'tailwind-merge';
import { Slider, SliderOutput, SliderTack } from '../src/slider';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Checkboxes,
} from '../src/checkbox';
import { NumberField, NumberInput } from '../src/number-field';
import { DialogTrigger, FileTrigger } from 'react-aria-components';
import { Modal } from '../src/modal';
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from '../src/dialog';
import { NativeTooltips } from './tooltip.stories';
import { WithAvatars } from './multi-select.stories';
import { WithFlags } from './select.stories';

const meta: Meta<typeof Button> = {
  title: 'Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Example = () => {
  return (
    <div className="flex gap-12 p-8">
      <div className="flex w-96 flex-col items-stretch gap-12">
        <div className="flex flex-col ">
          <Heading level={2} className="mb-6 text-center">
            Sign in to ACME
          </Heading>
          <Form>
            <TextField>
              <Label>Email address</Label>
              <Input type="email" name="email" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <PasswordInput />
            </TextField>
            <div className="flex justify-between">
              <Switch labelPosition="right">Remember me</Switch>
              <Link>
                <Strong>Forgot password?</Strong>
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <div className="flex justify-center">
              <Text>Don’t have an account?</Text>&nbsp;
              <Link>
                <Strong>Create an account</Strong>
              </Link>
            </div>
          </Form>
        </div>
        <RadioGroup
          className="flex-1 gap-3"
          defaultValue="Root user"
          aria-label="Choose user type"
        >
          <RadioField>
            <Radio
              value="Root user"
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent ring-1 ring-accent',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="font-semibold"> Root user</div>
                  <Text>
                    Account owner that performs tasks requiring unrestricted
                    access.{' '}
                    <TextLink href="https://www.example.com" target="_blank">
                      Learn more
                    </TextLink>
                  </Text>
                </div>
              </div>
            </Radio>
          </RadioField>
          <Radio
            value="IAM user"
            className={({ isSelected }) => {
              return twMerge(
                'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                isSelected && 'border-accent ring-1 ring-accent',
              );
            }}
          >
            <div className="flex w-full items-center justify-between gap-3">
              <div className="flex flex-1 flex-col">
                <div className="font-semibold">IAM user</div>
                <Text>
                  User within an account that performs daily tasks.{' '}
                  <TextLink href="https://www.example.com" target="_blank">
                    Learn more
                  </TextLink>
                </Text>
              </div>
            </div>
          </Radio>
        </RadioGroup>

        <Slider
          minValue={70}
          maxValue={200}
          defaultValue={100}
          step={10}
          className="flex w-[350px] flex-col"
        >
          <div className="flex flex-1 items-end">
            <Label className="text-nowrap pb-1 pe-4 font-normal">Zoom</Label>
            <div className="flex flex-1 flex-col">
              <SliderOutput className="self-center">
                {({ state }) => {
                  return (
                    <span className="text-sm">
                      {state.getThumbValueLabel(0)}%
                    </span>
                  );
                }}
              </SliderOutput>
              <div className="flex flex-1 items-center gap-3">
                <SliderTack thumbLabels={['volume']} />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="flex w-96 flex-col gap-4">
        <div className="flex gap-2">
          <Button>Submit</Button>
          <Button variant="outline">Submit</Button>

          <NativeTooltips />

          <DialogExample />
        </div>

        <NumberField maxValue={10} defaultValue={5}>
          <Label>Seat(s)</Label>
          <Description>Maximum of 10</Description>
          <NumberInput />
        </NumberField>

        <WithFlags />

        <TextField>
          <Label>About</Label>
          <Description>Write a few sentences about yourself.</Description>
          <TextArea rows={2}></TextArea>
        </TextField>

        <CheckboxGroup defaultValue={['Post']}>
          <Label>Audience, media and tagging</Label>
          <Description>
            Manage what information you allow other people to see.
          </Description>

          <Checkboxes>
            <CheckboxField>
              <Checkbox value="Post">Protect your post</Checkbox>
              <Description>
                Your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>

            <CheckboxField>
              <Checkbox value="Video">Protect your videos</Checkbox>
              <Description>
                your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>
          </Checkboxes>
        </CheckboxGroup>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <ChangeProfile />
        </div>
        <div>
          <DateRangePicker>
            <Label>Stay duration</Label>
            <DateRangePickerInput></DateRangePickerInput>
          </DateRangePicker>
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-8">
          <div className="text-2xl font-bold">
            Craft world-class accessible components
          </div>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <Link
                href="https://react-spectrum.adobe.com/react-aria/components.html"
                target="_blank"
                className="flex-1"
              >
                <img
                  aria-hidden
                  className="size-5"
                  alt="react aria component"
                  src="https://spectrum.adobe.com/_next/static/media/adobe_logo_spectrum_site.b6d47fe3.svg"
                />{' '}
                React React Component
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                className="flex-1"
              >
                <img
                  aria-hidden
                  className="size-5"
                  alt="tailwind css"
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                />
                Tailwind CSS
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <Tabs>
            <TabList>
              <Tab>My Account</Tab>
              <Tab>Company</Tab>
              <Tab>Team Members</Tab>
              <Tab>Billing</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="pills">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="segment">
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Account</Tab>
              <Tab>Billing</Tab>
            </TabList>
          </Tabs>
          <Tabs orientation="vertical">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
        </div>
        <div>
          <WithAvatars />
        </div>
      </div>
    </div>
  );
};

function ChangeProfile() {
  const [src, setSrc] = React.useState<string | undefined>(
    'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  );

  return (
    <div className="flex items-center gap-2">
      <Avatar alt="D D" className="rounded-full" src={src}></Avatar>

      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const file = Array.from(e)[0];
          setSrc(URL.createObjectURL(file));
        }}
      >
        <Button variant="outline">Change</Button>
      </FileTrigger>
    </div>
  );
}

function DialogExample() {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
