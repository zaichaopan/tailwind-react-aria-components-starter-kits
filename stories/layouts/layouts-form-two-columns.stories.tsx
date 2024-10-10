import { Button } from '../../src/button';
import { docs } from '../../.storybook/docs';
import { Form } from '../../src/form';
import { Strong, Text } from '../../src/text';
import {
  Description,
  LabeledGroup,
  Input,
  Label,
  TextArea,
  TextField,
} from '../../src/field';
import { InputGroup, InputAddon } from '../../src/input-group';
import { Separator } from '../../src/separator';
import { FileTrigger, Group } from 'react-aria-components';
import { DropZone } from '../../src/dropzone';
import { AccessibleIcon } from '../../src/accessible-icon';
import { Heading } from '../../src/heading';
import { Avatar } from '../../src/avatar';
import { DatePicker, DatePickerInput } from '../../src/date-picker';

const meta = {
  title: 'Layouts/Form/Two Columns',
  parameters: {
    layout: 'centered',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const TwoColumns = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Form className="mx-auto grid gap-x-8 space-y-12 sm:grid-cols-3">
        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2} className="leading-7">
              Profile
            </Label>
            <Text>This is how others will see you on the site.</Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="sm:col-span-5">
              <Label>Username</Label>
              <Input />
              <Description>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </Description>
            </TextField>

            <div className="col-span-full">
              <Heading displayLevel={3} elementType="div" className="my-2">
                Profile photo
              </Heading>
              <div className="flex items-center gap-x-6">
                <Avatar
                  className="size-14 self-center rounded-full"
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                  alt="Jessica Campbell"
                ></Avatar>

                <div className="space-y-1">
                  <FileTrigger>
                    <Button variant="outline">Upload image</Button>
                  </FileTrigger>
                  <Text>*.png or *.jpeg files up to 10MB</Text>
                </div>
              </div>
            </div>

            <div className="col-span-full grid grid-cols-1">
              <Heading displayLevel={3} className="mb-2" elementType="div">
                Cover photo
              </Heading>
              <DropZone className="w-full">
                <div className="flex flex-1 flex-col gap-2 py-6">
                  <div className="flex flex-1 justify-center">
                    <AccessibleIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        className="size-10 text-muted/50"
                      >
                        <path
                          fill="currentColor"
                          d="M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-4.75 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4 14l3.314-7.619l3.769 6.102l3.231-1.605L16 14z"
                        ></path>
                      </svg>
                    </AccessibleIcon>
                  </div>
                  <div className="flex flex-1">
                    <FileTrigger>
                      <Button
                        variant="unstyle"
                        className="text-nowrap text-base/6 font-semibold text-accent sm:text-sm/6"
                      >
                        Upload a file
                      </Button>
                    </FileTrigger>
                    &nbsp;
                    <Text>or drag and drop</Text>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <Text>PNG, JPG, GIF up to 10MB</Text>
                  </div>
                </div>

                <input type="hidden" name="image" />
              </DropZone>
            </div>

            <TextField className="sm:col-span-4">
              <Label>Website</Label>

              <Description>
                Add a link to your website, blog, or social media profiles.
              </Description>

              <InputGroup>
                <InputAddon>https://</InputAddon>
                <Input placeholder="www.example.com" />
              </InputGroup>
            </TextField>

            <TextField className="col-span-full">
              <Label>Bio</Label>
              <TextArea rows={5} defaultValue="I own a computer."></TextArea>

              <Description>
                You can <Strong>@mention</Strong> other users and organizations
                to link to them.
              </Description>
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2} className="leading-7">
              Account
            </Label>
            <Text>
              Update your account settings. Set your preferred language and
              timezone.
            </Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Name</Label>
              <Input placeholder="Your name" className="sm:col-span-3" />
              <Description className="col-span-full">
                This is the name that will be displayed on your profile and in
                emails.
              </Description>
            </TextField>

            <DatePicker className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Date of birth</Label>
              <DatePickerInput></DatePickerInput>
              <Description className="col-span-full">
                Your date of birth is used to calculate your age.
              </Description>
            </DatePicker>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <div className="col-span-full space-x-2 justify-self-end">
          <Button variant="plain">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
};
