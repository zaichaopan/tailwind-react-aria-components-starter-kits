import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs.ts';
import { Mail, Calendar, Plus } from './~icons.tsx';
import { AccessibleIcon } from '../src/accessible-icon.tsx';
import { Separator } from '../src/separator.tsx';
import { Button, ButtonGroup } from '../src/button.tsx';
import {
  MenuItem,
  MenuTrigger,
  Menu,
  MenuButton,
  MenuPopover,
  MenuSection,
} from '../src/menu.tsx';

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/useSeparator.html#useseparator" target="_blank">`separator`</a> is a visual divider between two groups of content, e.g. groups of menu items or sections of a page.',
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
    <div className="flex flex-col items-center p-8">
      <div>
        A separator consists of a single element that represents the divider
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export const VerticalSeparators = () => {
  return (
    <div className="flex p-8">
      <div className="h-48 flex-1 px-4"></div>
      <Separator orientation="vertical" />
      <div className="flex-1 px-4"></div>
    </div>
  );
};

VerticalSeparators.parameters = {
  docs: {
    description: {
      story:
        'Use `orientation="vertical"` to render vertical separator.',
    },
  },
};

export const WithTextsOrIcons = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <Separator>Continue</Separator>

      <Separator>
        <AccessibleIcon>
          <Mail className="mx-2" />
        </AccessibleIcon>
      </Separator>

      <Separator>
        {new Intl.DateTimeFormat('en', {
          weekday: 'long',
          month: 'short',
          day: '2-digit',
        }).format(new Date())}
      </Separator>

      <Separator>
        <MenuTrigger>
          <MenuButton variant="outline">
            {new Intl.DateTimeFormat('en', {
              weekday: 'long',
              month: 'short',
              day: '2-digit',
            }).format(new Date())}
          </MenuButton>
          <MenuPopover>
            <Menu>
              <MenuSection title="Jump to&hellip; ">
                <MenuItem>Today</MenuItem>
                <MenuItem>Yesterday</MenuItem>
                <MenuItem>Last week</MenuItem>
                <MenuItem>Last month</MenuItem>
                <MenuItem>The very beginning</MenuItem>
              </MenuSection>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </Separator>

      <Separator>
        <Button variant="outline">
          <AccessibleIcon>
            <Plus />
          </AccessibleIcon>
          New Page
        </Button>
      </Separator>

      <Separator>
        <ButtonGroup>
          <Button variant="outline">
            <AccessibleIcon aria-label="Mail">
              <Mail />
            </AccessibleIcon>
          </Button>
          <Button variant="outline">
            <AccessibleIcon aria-label="Calendar">
              <Calendar />
            </AccessibleIcon>
          </Button>
          <Button variant="outline">
            <AccessibleIcon aria-label="Add">
              <Plus />
            </AccessibleIcon>
          </Button>
        </ButtonGroup>
      </Separator>

      <div className="flex p-8">
        <div className="h-48 flex-1 px-4"></div>
        <Separator orientation="vertical">Or</Separator>
        <div className="flex-1 px-4"></div>
      </div>
    </div>
  );
};

WithTextsOrIcons.parameters = {
  docs: {
    description: {
      story:
        'Add `text` or `icon` inside to render text or icons inside your separator.',
    },
  },
};
