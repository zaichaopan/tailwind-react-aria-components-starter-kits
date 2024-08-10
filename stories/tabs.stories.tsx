import React from 'react';
import type { Meta } from '@storybook/react';
import { Tab, TabList, TabPanel, Tabs } from '../src/tabs';
import { Key } from 'react-aria-components';
import { NativeSelect, NativeSelectField } from '../src/native-select';
import { docs } from '../.storybook/docs';
import { AccessibleIcon } from '../src/accessible-icon';
import {
  RecordIcon,
  Cog6ToothIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  ChatBubbleLeftRightIcon,
  KeyboardIcon,
  ScreenShareIcon,
  BellAlertIcon,
  CreditCardIcon,
  UserIcon,
  ArtistsIcon,
  AlbumsIcon,
  MusicalNoteIcon,
} from './~icons';
import { Strong } from '../src/text';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
    docs: {
      ...docs,
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Tabs.html#tabs" target="_blank">`Tabs`</a> organize content into multiple sections and allow users to navigate between them.',
      },
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
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation">
          <Tab id="Overview">Overview</Tab>
          <Tab id="Activity">Activity</Tab>
          <Tab id="Settings">Settings</Tab>
          <Tab id="Collaborators">Collaborators</Tab>
          <Tab id="Notifications">Notifications</Tab>
        </TabList>

        <TabPanel id="Overview"></TabPanel>
        <TabPanel id="Activity"></TabPanel>
        <TabPanel id="Settings"></TabPanel>
        <TabPanel id="Collaborators"></TabPanel>
        <TabPanel id="Notifications"></TabPanel>
      </Tabs>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <AccessibleIcon>
              <UserIcon />
            </AccessibleIcon>
            Profile
          </Tab>

          <Tab id="billing">
            <AccessibleIcon>
              <CreditCardIcon />
            </AccessibleIcon>
            Billing
          </Tab>
          <Tab id="notifications">
            <AccessibleIcon>
              <BellAlertIcon />
            </AccessibleIcon>
            Notifications
          </Tab>
        </TabList>

        <TabPanel id="profile"></TabPanel>

        <TabPanel id="billing"></TabPanel>
        <TabPanel id="notifications"></TabPanel>
      </Tabs>
    </div>
  );
};

export const WithBadges = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <AccessibleIcon>
              <UserIcon />
            </AccessibleIcon>
            Profile
          </Tab>

          <Tab id="billing">
            <AccessibleIcon>
              <CreditCardIcon />
            </AccessibleIcon>
            Billing
          </Tab>
          <Tab id="notifications">
            <AccessibleIcon>
              <BellAlertIcon />
            </AccessibleIcon>
            Notifications
            <span>8</span>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export const VerticalTabs = () => {
  return (
    <div className="p-4 sm:p-12">
      <Strong>Components</Strong>
      <Tabs orientation="vertical" className="mt-4">
        <TabList aria-label="Components">
          <Tab id="Alert">Alert</Tab>
          <Tab id="Avatar">Avatar</Tab>
          <Tab id="Badge">Badge</Tab>
          <Tab id="Button">Button</Tab>
          <Tab id="Checkbox">Checkbox</Tab>
          <Tab id="Dialog">Dialog</Tab>
        </TabList>

        <TabPanel id="Alert"></TabPanel>
        <TabPanel id="Avatar"></TabPanel>
        <TabPanel id="Badge"></TabPanel>
        <TabPanel id="Button"></TabPanel>
        <TabPanel id="Checkbox"></TabPanel>
        <TabPanel id="Dialog"></TabPanel>
      </Tabs>
    </div>
  );
};

export const PillsTab = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills">
        <TabList aria-label="Settings">
          <Tab id="My Account">My Account</Tab>
          <Tab id="Company">Company</Tab>
          <Tab id="Team Members">Team Members</Tab>
          <Tab id="Billing">Billing</Tab>
        </TabList>
        <TabPanel id="My Account"></TabPanel>
        <TabPanel id="Company"></TabPanel>
        <TabPanel id="Team Members"></TabPanel>
        <TabPanel id="Billing"></TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalPillsTab = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills" orientation="vertical">
        <TabList aria-label="Settings">
          <Tab id="General">
            <AccessibleIcon>
              <Cog6ToothIcon />
            </AccessibleIcon>
            General
          </Tab>
          <Tab id="Video">
            <AccessibleIcon>
              <VideoCameraIcon />
            </AccessibleIcon>
            Video
          </Tab>
          <Tab id="Audio">
            <AccessibleIcon>
              <MicrophoneIcon />
            </AccessibleIcon>
            Audio
          </Tab>
          <Tab id="Screen Share">
            <AccessibleIcon>
              <ScreenShareIcon />
            </AccessibleIcon>
            Screen Share
          </Tab>
          <Tab id="Team Chat">
            <AccessibleIcon>
              <ChatBubbleLeftRightIcon />
            </AccessibleIcon>
            Team Chat
          </Tab>
          <Tab id="Recording">
            <AccessibleIcon>
              <RecordIcon />
            </AccessibleIcon>
            Recording
          </Tab>
          <Tab id="Keyboard Shortcuts">
            <AccessibleIcon>
              <KeyboardIcon />
            </AccessibleIcon>
            Keyboard Shortcuts
          </Tab>
        </TabList>

        <TabPanel id="General"></TabPanel>
        <TabPanel id="Video"></TabPanel>
        <TabPanel id="Audio"></TabPanel>
        <TabPanel id="Screen Share"></TabPanel>
        <TabPanel id="Team Chat"></TabPanel>
        <TabPanel id="Recording"></TabPanel>
        <TabPanel id="Keyboard Shortcuts"></TabPanel>
      </Tabs>
    </div>
  );
};

export const SegmentsTab = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Artists">Artists</Tab>
          <Tab id="Albums">Albums</Tab>
          <Tab id="Songs">Songs</Tab>
        </TabList>

        <TabPanel id="Artists"></TabPanel>
        <TabPanel id="Albums"></TabPanel>
        <TabPanel id="Songs"></TabPanel>
      </Tabs>
    </div>
  );
};

export const SegmentsTabWithIcon = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Artists">
            <AccessibleIcon>
              <ArtistsIcon />
            </AccessibleIcon>
            Artists
          </Tab>
          <Tab id="Albums">
            <AccessibleIcon>
              <AlbumsIcon />
            </AccessibleIcon>
            Albums
          </Tab>
          <Tab id="Songs">
            <AccessibleIcon>
              <MusicalNoteIcon />
            </AccessibleIcon>
            Songs
          </Tab>
        </TabList>

        <TabPanel id="Artists"></TabPanel>
        <TabPanel id="Albums"></TabPanel>
        <TabPanel id="Songs"></TabPanel>
      </Tabs>
    </div>
  );
};

const tabs = [
  { title: 'Overview' },
  { title: 'Activity' },
  { title: 'Settings' },
  { title: 'Collaborators' },
  { title: 'Notifications' },
];

export const TabsOnMobile = () => {
  const [tab, setTab] = React.useState<Key>('Overview');

  return (
    <div className="p-4 sm:p-12">
      <NativeSelectField className="block sm:hidden">
        <NativeSelect
          value={tab}
          aria-label="Preference page"
          onChange={(e) => {
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => {
            return (
              <option key={tab.title} value={tab.title}>
                {tab.title}
              </option>
            );
          })}
        </NativeSelect>
      </NativeSelectField>

      <Tabs selectedKey={tab} onSelectionChange={setTab}>
        <TabList
          className="hidden sm:flex"
          aria-label="Navigation"
          items={tabs}
        >
          {(item) => {
            return <Tab id={item.title}>{item.title}</Tab>;
          }}
        </TabList>

        {tabs.map((tab) => {
          return <TabPanel key={tab.title} id={tab.title}></TabPanel>;
        })}
      </Tabs>
    </div>
  );
};

TabsOnMobile.parameters = {
  docs: {
    description: {
      story:
        'You can scroll tablist on mobile. If this is not what you want, you can show a selector on mobile. Please resize the screen to test.',
    },
  },
};
