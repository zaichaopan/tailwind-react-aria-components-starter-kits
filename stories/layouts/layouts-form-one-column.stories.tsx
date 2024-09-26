import { Button } from '../../src/button';
import { docs } from '../../.storybook/docs';
import { Form } from '../../src/form';
import { Text } from '../../src/text';
import {
  Description,
  LabeledGroup,
  Input,
  InputGroup,
  Label,
  TextArea,
  TextField,
  FieldError,
  InputAddon,
} from '../../src/field';
import { Separator } from '../../src/separator';
import { NativeSelect, NativeSelectField } from '../../src/native-select';
import { Group } from 'react-aria-components';
import { Checkbox, CheckboxField } from '../../src/checkbox';
import { RadioGroup, Radios, Radio } from '../../src/radio-group';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from '../../src/select';
import { Switch, Switches, SwitchField, SwitchGroup } from '../../src/switch';
import { AccessibleIcon } from '../../src/accessible-icon';
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxClearButton,
  ComboBoxGroup,
  ComboBoxInput,
  ComboBoxListBox,
  ComboBoxListItem,
  ComboBoxPopover,
} from '../../src/combobox';

const meta = {
  title: 'Layouts/Form/One Column',
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

export const OneColumn = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Form className="mx-auto max-w-2xl space-y-12">
        <LabeledGroup>
          <Label displayLevel={2}>Work Info</Label>
          <Text>Enter your job role, company, and career details.</Text>

          <Group className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextField className="sm:col-span-3" name="title" isRequired>
              <Label requiredHint>Title</Label>
              <Input />
              <Description>Let people know what you do.</Description>
              <FieldError />
            </TextField>

            <TextField className="sm:col-span-3" name="work_email" isRequired>
              <Label requiredHint>Work email</Label>
              <InputGroup inline>
                <InputAddon>
                  <AccessibleIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                      ></path>
                    </svg>
                  </AccessibleIcon>
                </InputAddon>

                <Input />
              </InputGroup>

              <Description>
                Email address used within your organization.
              </Description>
              <FieldError />
            </TextField>

            <TextField className="sm:col-span-3" name="company">
              <Label>Company</Label>
              <Input />
            </TextField>

            <Select
              className="sm:col-span-3"
              name="company_size"
              placeholder="Select&hellip;"
            >
              <Label> Company size (employees)</Label>
              <SelectButton></SelectButton>
              <SelectPopover>
                <SelectListBox>
                  <SelectListItem id="1-9">1-9</SelectListItem>
                  <SelectListItem id="10-5-">10-50</SelectListItem>
                  <SelectListItem id="50-250">50-250</SelectListItem>
                  <SelectListItem id="250+">250+</SelectListItem>
                </SelectListBox>
              </SelectPopover>
            </Select>

            <TextField className="sm:col-span-4" name="company_website">
              <Label>Company website</Label>
              <InputGroup role="presentation" inline>
                <InputAddon>https://</InputAddon>
                <Input className="ps-16 sm:ps-14" />
              </InputGroup>
            </TextField>

            <ComboBox className="sm:col-span-4" name="industry">
              <Label>Industry</Label>
              <ComboBoxGroup>
                <ComboBoxInput placeholder="Select your industry"></ComboBoxInput>
                <ComboBoxClearButton />
                <ComboBoxButton />
              </ComboBoxGroup>

              <ComboBoxPopover>
                <ComboBoxListBox items={getIndustries()}>
                  {(item) => {
                    return (
                      <ComboBoxListItem id={String(item.Code)}>
                        {item.Description}
                      </ComboBoxListItem>
                    );
                  }}
                </ComboBoxListBox>
              </ComboBoxPopover>
            </ComboBox>

            <LabeledGroup className="sm:col-span-4">
              <Label>Phone Number</Label>
              <InputGroup>
                <Select defaultSelectedKey="ca">
                  <Label>Phone Country Code</Label>
                  <SelectButton></SelectButton>

                  <SelectPopover className="w-36" placement="bottom start">
                    <SelectListBox>
                      <SelectListItem id="ca" textValue="Canada">
                        <SelectListItemLabel>
                          <span aria-hidden className="mr-1.5 inline-block">
                            &#127464;&#127462;
                          </span>
                          CA
                        </SelectListItemLabel>
                      </SelectListItem>
                      <SelectListItem id="us" textValue="United States">
                        <SelectListItemLabel>
                          <span aria-hidden className="mr-1.5 inline-block">
                            &#127482;&#127480;
                          </span>
                          US
                        </SelectListItemLabel>
                      </SelectListItem>
                    </SelectListBox>
                  </SelectPopover>
                </Select>
                <TextField>
                  <Label>Phone number</Label>
                  <Input placeholder="+1 (123) 457-7890" />
                </TextField>

                <NativeSelectField>
                  <Label>Work phone number type</Label>
                  <NativeSelect name="work_phone_number_type">
                    <option value="Mobile">Mobile</option>
                    <option value="Phone">Phone</option>
                    <option value="Page">Page</option>
                    <option value="Fax">Fax</option>
                  </NativeSelect>
                </NativeSelectField>
              </InputGroup>
            </LabeledGroup>

            <TextField className="col-span-full" name="about">
              <Label>About</Label>
              <TextArea rows={6}></TextArea>
              <Description>
                You can write about your years of experience, industry, or
                skills. People also talk about their achievements or previous
                job experiences.
              </Description>
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator />

        <LabeledGroup>
          <Label displayLevel={2}>Personal Information</Label>

          <Text>
            Provide your personal details to help us get to know you better.
          </Text>

          <Group className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextField className="sm:col-span-3" name="first_name" isRequired>
              <Label requiredHint>First name</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-3">
              <Label>Last name</Label>
              <Input />
            </TextField>

            <NativeSelectField className="sm:col-span-3">
              <Label>Pronouns</Label>
              <NativeSelect name="pronouns">
                <option value="Don't specify">Don't specify</option>
                <option value="they/Them">they/Them</option>
                <option value="she/Her">her/Her</option>
                <option value="him/He">him/He</option>
              </NativeSelect>
              <Description>Let people know which pronouns you use.</Description>
            </NativeSelectField>

            <TextField className="sm:col-span-4">
              <Label>Personal email</Label>
              <Input />
            </TextField>

            <NativeSelectField className="sm:col-span-3">
              <Label>Country</Label>
              <NativeSelect>
                <option>United States</option>
                <option>Canada</option>
              </NativeSelect>
            </NativeSelectField>

            <TextField className="col-span-full">
              <Label>Street address</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>City</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>State / Province</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>ZIP / Postal code</Label>
              <Input />
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator />

        <LabeledGroup>
          <Label displayLevel={2}>Notifications</Label>
          <Text>Configure how you receive notifications.</Text>

          <Group className="mt-8 space-y-10">
            <RadioGroup>
              <Label>Notify me about&hellip;</Label>
              <Radios>
                <Radio value="all">All new messages</Radio>
                <Radio value="direct">Direct messages and mentions</Radio>
                <Radio value="no">Nothing</Radio>
              </Radios>
            </RadioGroup>

            <SwitchGroup>
              <Label>Email Notifications</Label>
              <Switches>
                <SwitchField>
                  <Switch labelPosition="left">Communication emails</Switch>
                  <Description>
                    Receive emails about your account activity.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left">Marketing emails</Switch>
                  <Description>
                    Receive emails about new products, features, and more.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left" defaultSelected>
                    Social emails
                  </Switch>
                  <Description>
                    Receive emails for friend requests, follows, and more.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left" defaultSelected>
                    Security emails
                  </Switch>
                  <Description>
                    Receive emails about your account activity and security.
                  </Description>
                </SwitchField>
              </Switches>
            </SwitchGroup>
          </Group>
        </LabeledGroup>

        <CheckboxField>
          <Checkbox>Use different settings for my mobile devices</Checkbox>

          <Description>
            You can manage your mobile notifications in the mobile settings
            page.
          </Description>
        </CheckboxField>

        <Separator />

        <div className="flex justify-end">
          <Button type="submit">Update profile</Button>
        </div>
      </Form>
    </div>
  );
};

function getIndustries() {
  return [
    { Code: 47, Groups: 'corp, fin', Description: 'Accounting' },
    { Code: 94, Groups: 'man, tech, tran', Description: 'Airlines/Aviation' },
    {
      Code: 120,
      Groups: 'leg, org',
      Description: 'Alternative Dispute Resolution',
    },
    { Code: 125, Groups: 'hlth', Description: 'Alternative Medicine' },
    { Code: 127, Groups: 'art, med', Description: 'Animation' },
    { Code: 19, Groups: 'good', Description: 'Apparel & Fashion' },
    { Code: 50, Groups: 'cons', Description: 'Architecture & Planning' },
    { Code: 111, Groups: 'art, med, rec', Description: 'Arts and Crafts' },
    { Code: 53, Groups: 'man', Description: 'Automotive' },
    { Code: 52, Groups: 'gov, man', Description: 'Aviation & Aerospace' },
    { Code: 41, Groups: 'fin', Description: 'Banking' },
    { Code: 12, Groups: 'gov, hlth, tech', Description: 'Biotechnology' },
    { Code: 36, Groups: 'med, rec', Description: 'Broadcast Media' },
    { Code: 49, Groups: 'cons', Description: 'Building Materials' },
    {
      Code: 138,
      Groups: 'corp, man',
      Description: 'Business Supplies and Equipment',
    },
    { Code: 129, Groups: 'fin', Description: 'Capital Markets' },
    { Code: 54, Groups: 'man', Description: 'Chemicals' },
    {
      Code: 90,
      Groups: 'org, serv',
      Description: 'Civic & Social Organization',
    },
    { Code: 51, Groups: 'cons, gov', Description: 'Civil Engineering' },
    {
      Code: 128,
      Groups: 'cons, corp, fin',
      Description: 'Commercial Real Estate',
    },
    { Code: 118, Groups: 'tech', Description: 'Computer & Network Security' },
    { Code: 109, Groups: 'med, rec', Description: 'Computer Games' },
    { Code: 3, Groups: 'tech', Description: 'Computer Hardware' },
    { Code: 5, Groups: 'tech', Description: 'Computer Networking' },
    { Code: 4, Groups: 'tech', Description: 'Computer Software' },
    { Code: 48, Groups: 'cons', Description: 'Construction' },
    { Code: 24, Groups: 'good, man', Description: 'Consumer Electronics' },
    { Code: 25, Groups: 'good, man', Description: 'Consumer Goods' },
    { Code: 91, Groups: 'org, serv', Description: 'Consumer Services' },
    { Code: 18, Groups: 'good', Description: 'Cosmetics' },
    { Code: 65, Groups: 'agr', Description: 'Dairy' },
    { Code: 1, Groups: 'gov, tech', Description: 'Defense & Space' },
    { Code: 99, Groups: 'art, med', Description: 'Design' },
    { Code: 69, Groups: 'edu', Description: 'Education Management' },
    { Code: 132, Groups: 'edu, org', Description: 'E-Learning' },
    {
      Code: 112,
      Groups: 'good, man',
      Description: 'Electrical/Electronic Manufacturing',
    },
    { Code: 28, Groups: 'med, rec', Description: 'Entertainment' },
    { Code: 86, Groups: 'org, serv', Description: 'Environmental Services' },
    { Code: 110, Groups: 'corp, rec, serv', Description: 'Events Services' },
    { Code: 76, Groups: 'gov', Description: 'Executive Office' },
    { Code: 122, Groups: 'corp, serv', Description: 'Facilities Services' },
    { Code: 63, Groups: 'agr', Description: 'Farming' },
    { Code: 43, Groups: 'fin', Description: 'Financial Services' },
    { Code: 38, Groups: 'art, med, rec', Description: 'Fine Art' },
    { Code: 66, Groups: 'agr', Description: 'Fishery' },
    { Code: 34, Groups: 'rec, serv', Description: 'Food & Beverages' },
    { Code: 23, Groups: 'good, man, serv', Description: 'Food Production' },
    { Code: 101, Groups: 'org', Description: 'Fund-Raising' },
    { Code: 26, Groups: 'good, man', Description: 'Furniture' },
    { Code: 29, Groups: 'rec', Description: 'Gambling & Casinos' },
    {
      Code: 145,
      Groups: 'cons, man',
      Description: 'Glass, Ceramics & Concrete',
    },
    { Code: 75, Groups: 'gov', Description: 'Government Administration' },
    { Code: 148, Groups: 'gov', Description: 'Government Relations' },
    { Code: 140, Groups: 'art, med', Description: 'Graphic Design' },
    {
      Code: 124,
      Groups: 'hlth, rec',
      Description: 'Health, Wellness and Fitness',
    },
    { Code: 68, Groups: 'edu', Description: 'Higher Education' },
    { Code: 14, Groups: 'hlth', Description: 'Hospital & Health Care' },
    { Code: 31, Groups: 'rec, serv, tran', Description: 'Hospitality' },
    { Code: 137, Groups: 'corp', Description: 'Human Resources' },
    { Code: 134, Groups: 'corp, good, tran', Description: 'Import and Export' },
    {
      Code: 88,
      Groups: 'org, serv',
      Description: 'Individual & Family Services',
    },
    { Code: 147, Groups: 'cons, man', Description: 'Industrial Automation' },
    { Code: 84, Groups: 'med, serv', Description: 'Information Services' },
    {
      Code: 96,
      Groups: 'tech',
      Description: 'Information Technology and Services',
    },
    { Code: 42, Groups: 'fin', Description: 'Insurance' },
    { Code: 74, Groups: 'gov', Description: 'International Affairs' },
    {
      Code: 141,
      Groups: 'gov, org, tran',
      Description: 'International Trade and Development',
    },
    { Code: 6, Groups: 'tech', Description: 'Internet' },
    { Code: 45, Groups: 'fin', Description: 'Investment Banking' },
    { Code: 46, Groups: 'fin', Description: 'Investment Management' },
    { Code: 73, Groups: 'gov, leg', Description: 'Judiciary' },
    { Code: 77, Groups: 'gov, leg', Description: 'Law Enforcement' },
    { Code: 9, Groups: 'leg', Description: 'Law Practice' },
    { Code: 10, Groups: 'leg', Description: 'Legal Services' },
    { Code: 72, Groups: 'gov, leg', Description: 'Legislative Office' },
    {
      Code: 30,
      Groups: 'rec, serv, tran',
      Description: 'Leisure, Travel & Tourism',
    },
    { Code: 85, Groups: 'med, rec, serv', Description: 'Libraries' },
    {
      Code: 116,
      Groups: 'corp, tran',
      Description: 'Logistics and Supply Chain',
    },
    { Code: 143, Groups: 'good', Description: 'Luxury Goods & Jewelry' },
    { Code: 55, Groups: 'man', Description: 'Machinery' },
    { Code: 11, Groups: 'corp', Description: 'Management Consulting' },
    { Code: 95, Groups: 'tran', Description: 'Maritime' },
    { Code: 97, Groups: 'corp', Description: 'Market Research' },
    { Code: 80, Groups: 'corp, med', Description: 'Marketing and Advertising' },
    {
      Code: 135,
      Groups: 'cons, gov, man',
      Description: 'Mechanical or Industrial Engineering',
    },
    { Code: 126, Groups: 'med, rec', Description: 'Media Production' },
    { Code: 17, Groups: 'hlth', Description: 'Medical Devices' },
    { Code: 13, Groups: 'hlth', Description: 'Medical Practice' },
    { Code: 139, Groups: 'hlth', Description: 'Mental Health Care' },
    { Code: 71, Groups: 'gov', Description: 'Military' },
    { Code: 56, Groups: 'man', Description: 'Mining & Metals' },
    {
      Code: 35,
      Groups: 'art, med, rec',
      Description: 'Motion Pictures and Film',
    },
    {
      Code: 37,
      Groups: 'art, med, rec',
      Description: 'Museums and Institutions',
    },
    { Code: 115, Groups: 'art, rec', Description: 'Music' },
    { Code: 114, Groups: 'gov, man, tech', Description: 'Nanotechnology' },
    { Code: 81, Groups: 'med, rec', Description: 'Newspapers' },
    {
      Code: 100,
      Groups: 'org',
      Description: 'Non-Profit Organization Management',
    },
    { Code: 57, Groups: 'man', Description: 'Oil & Energy' },
    { Code: 113, Groups: 'med', Description: 'Online Media' },
    { Code: 123, Groups: 'corp', Description: 'Outsourcing/Offshoring' },
    { Code: 87, Groups: 'serv, tran', Description: 'Package/Freight Delivery' },
    { Code: 146, Groups: 'good, man', Description: 'Packaging and Containers' },
    { Code: 61, Groups: 'man', Description: 'Paper & Forest Products' },
    { Code: 39, Groups: 'art, med, rec', Description: 'Performing Arts' },
    { Code: 15, Groups: 'hlth, tech', Description: 'Pharmaceuticals' },
    { Code: 131, Groups: 'org', Description: 'Philanthropy' },
    { Code: 136, Groups: 'art, med, rec', Description: 'Photography' },
    { Code: 117, Groups: 'man', Description: 'Plastics' },
    { Code: 107, Groups: 'gov, org', Description: 'Political Organization' },
    { Code: 67, Groups: 'edu', Description: 'Primary/Secondary Education' },
    { Code: 83, Groups: 'med, rec', Description: 'Printing' },
    {
      Code: 105,
      Groups: 'corp',
      Description: 'Professional Training & Coaching',
    },
    { Code: 102, Groups: 'corp, org', Description: 'Program Development' },
    { Code: 79, Groups: 'gov', Description: 'Public Policy' },
    {
      Code: 98,
      Groups: 'corp',
      Description: 'Public Relations and Communications',
    },
    { Code: 78, Groups: 'gov', Description: 'Public Safety' },
    { Code: 82, Groups: 'med, rec', Description: 'Publishing' },
    { Code: 62, Groups: 'man', Description: 'Railroad Manufacture' },
    { Code: 64, Groups: 'agr', Description: 'Ranching' },
    { Code: 44, Groups: 'cons, fin, good', Description: 'Real Estate' },
    {
      Code: 40,
      Groups: 'rec, serv',
      Description: 'Recreational Facilities and Services',
    },
    { Code: 89, Groups: 'org, serv', Description: 'Religious Institutions' },
    {
      Code: 144,
      Groups: 'gov, man, org',
      Description: 'Renewables & Environment',
    },
    { Code: 70, Groups: 'edu, gov', Description: 'Research' },
    { Code: 32, Groups: 'rec, serv', Description: 'Restaurants' },
    { Code: 27, Groups: 'good, man', Description: 'Retail' },
    {
      Code: 121,
      Groups: 'corp, org, serv',
      Description: 'Security and Investigations',
    },
    { Code: 7, Groups: 'tech', Description: 'Semiconductors' },
    { Code: 58, Groups: 'man', Description: 'Shipbuilding' },
    { Code: 20, Groups: 'good, rec', Description: 'Sporting Goods' },
    { Code: 33, Groups: 'rec', Description: 'Sports' },
    { Code: 104, Groups: 'corp', Description: 'Staffing and Recruiting' },
    { Code: 22, Groups: 'good', Description: 'Supermarkets' },
    { Code: 8, Groups: 'gov, tech', Description: 'Telecommunications' },
    { Code: 60, Groups: 'man', Description: 'Textiles' },
    { Code: 130, Groups: 'gov, org', Description: 'Think Tanks' },
    { Code: 21, Groups: 'good', Description: 'Tobacco' },
    {
      Code: 108,
      Groups: 'corp, gov, serv',
      Description: 'Translation and Localization',
    },
    {
      Code: 92,
      Groups: 'tran',
      Description: 'Transportation/Trucking/Railroad',
    },
    { Code: 59, Groups: 'man', Description: 'Utilities' },
    {
      Code: 106,
      Groups: 'fin, tech',
      Description: 'Venture Capital & Private Equity',
    },
    { Code: 16, Groups: 'hlth', Description: 'Veterinary' },
    { Code: 93, Groups: 'tran', Description: 'Warehousing' },
    { Code: 133, Groups: 'good', Description: 'Wholesale' },
    { Code: 142, Groups: 'good, man, rec', Description: 'Wine and Spirits' },
    { Code: 119, Groups: 'tech', Description: 'Wireless' },
    { Code: 103, Groups: 'art, med, rec', Description: 'Writing and Editing' },
  ];
}
