import React from 'react';
import type { Meta } from '@storybook/react';
import type { Selection } from 'react-aria-components';
import {
  SquareArrowOutUpRight,
  FolderPlus,
  MicIcon,
  MoreHorizontalIcon,
  XIcon,
  DownloadIcon,
  CloudUploadIcon,
  UploadCloudIcon,
  PlusIcon,
  MinusIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { Button, ButtonGroup } from '../src/button';
import { docs } from '../.storybook/docs';
import { Avatar } from '../src/avatar';
import { Link } from '../src/link';
import { AccessibleIcon } from '../src/accessible-icon';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  MenuButton,
  MenuSeparator,
  MenuItemLabel,
  MenuItemDescription,
} from '../src/menu';
import { SpinnerIcon } from '../src/icons';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">`button`</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
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
  return <Button>Button</Button>;
};

export const Colors = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button>Accent</Button>
      <Button color="destructive">Danger</Button>
      <Button color="success">Success</Button>
    </div>
  );
};

Colors.parameters = {
  docs: {
    description: {
      story:
        'Use the `color` prop to set the button color. Default color is `accent`.',
    },
  },
};

export const Sizes = () => {
  return (
    <div className="flex items-end gap-3">
      <Button size="lg" variant="outline">
        Large
      </Button>
      <Button variant="outline">Default</Button>
      <Button variant="outline" size="sm">
        Small
      </Button>
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: 'Use the `size` the prop to set the button size.',
    },
  },
};

export const Variants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="plain">Plain</Button>
      <Button variant="unstyle">Unstyle</Button>
    </div>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story:
        'Use the `variant` prop to render buttons with different variants. Default variant is `solid`.',
    },
  },
};

export const Icons = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button>
          <AccessibleIcon>
            <CloudUploadIcon />
          </AccessibleIcon>
          Deploy
        </Button>
        <Button variant="outline">
          <AccessibleIcon>
            <DownloadIcon />
          </AccessibleIcon>
          Export
        </Button>
        <Button size="lg">
          Live preview <SquareArrowOutUpRight strokeWidth={1.5} />
        </Button>
        <Button size="lg" variant="outline">
          Get template <ChevronRightIcon />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

Icons.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="./?path=/docs/icon--docs" target="_blank">`AccessibleIcon`</a> component to place a decorative icon at the start or end of a button. Icon size is auto scaled based on button sizes',
    },
  },
};

export const isIconOnly = () => {
  return (
    <div className="space-x-4">
      <Button isIconOnly size="lg">
        <AccessibleIcon aria-label="Mic">
          <MicIcon />
        </AccessibleIcon>
      </Button>
      <Button isIconOnly>
        <AccessibleIcon aria-label="Create New Folder">
          <FolderPlus />
        </AccessibleIcon>
      </Button>
      <Button variant="outline" isIconOnly>
        <AccessibleIcon aria-label="More Options">
          <MoreHorizontalIcon />
        </AccessibleIcon>
      </Button>
      <Button variant="plain" isIconOnly>
        <AccessibleIcon aria-label="Close">
          <XIcon />
        </AccessibleIcon>
      </Button>
    </div>
  );
};

isIconOnly.parameters = {
  docs: {
    description: {
      story:
        'Use the `isIconOnly` prop to render a icon only button. Use `aria-label`on the <a href="./?path=/docs/icon--docs" target="_blank">`AccessibleIcon`</a> component for none decorative buttons. Icon size is auto scaled based on button sizes.',
    },
  },
};

export const DisabledButtons = () => {
  return <Button isDisabled>Button</Button>;
};

DisabledButtons.parameters = {
  docs: {
    description: {
      story: 'Use the `isDisabled` prop to disable buttons.',
    },
  },
};

export const Loading = () => {
  const [isLoading] = React.useState(true);

  return (
    <div className="flex gap-2">
      <Button
        isDisabled={isLoading}
        isLoading={isLoading}
        loadingLabel="Searching"
      >
        Search
      </Button>

      <Button
        variant="outline"
        isDisabled={isLoading}
        isLoading={isLoading}
        loadingLabel="Searching"
      >
        Search
      </Button>

      <Button
        isLoading={isLoading}
        isCustomLoading
        isDisabled={isLoading}
        loadingLabel="Deploying"
      >
        {isLoading ? (
          <>
            <AccessibleIcon>
              <CloudUploadingIcon />
            </AccessibleIcon>
            Deploying
          </>
        ) : (
          <>
            <AccessibleIcon>
              <UploadCloudIcon />
            </AccessibleIcon>
            Deploy
          </>
        )}
      </Button>

      <Button
        isLoading={isLoading}
        isCustomLoading
        isDisabled={isLoading}
        loadingLabel="Refreshing"
      >
        {isLoading && <SpinnerIcon className="text-zinc-300" />}
        Refresh
      </Button>
    </div>
  );
};

Loading.parameters = {
  docs: {
    description: {
      story:
        'Use the `isLoading` prop to render a loading spinner. Use `loadingLabel` to provide accessible loading status. Use the `isCustomLoading` prop if you need to use a custom loading UI.',
    },
  },
};

export const ImageButtons = () => {
  return (
    <Button variant="unstyle">
      <Avatar
        alt="Taylor"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
    </Button>
  );
};

ImageButtons.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="/?path=/docs/avatar--docs" target="_blank">`Avatar`</a> component and the `unstyle` prop on the `Button` component to render image buttons.',
    },
  },
};

export const AsChild = () => {
  return (
    <Button asChild>
      <Link href="https://example.com" target="_blank">
        Login
      </Link>
    </Button>
  );
};

AsChild.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="https://www.jacobparis.com/content/react-as-child" target="_blank">`asChild`</a> prop to render a completely different component, e.g., render the <a href="./?path=/docs/link--docs" target="_blank">`Link`</a> component with button styles.',
    },
  },
};

export const ButtonGroups = () => {
  return (
    <div className="space-y-5">
      <ButtonGroup>
        <Button variant="outline">Oldest</Button>
        <Button variant="outline">Newest</Button>
        <Button variant="outline">Top</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isIconOnly color="success">
          <AccessibleIcon aria-label="Zoom In">
            <PlusIcon />
          </AccessibleIcon>
        </Button>
        <Button isIconOnly color="success">
          <AccessibleIcon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </AccessibleIcon>
        </Button>
      </ButtonGroup>

      <ButtonGroup blend>
        <Button isIconOnly variant="outline">
          <AccessibleIcon aria-label="Zoom In">
            <PlusIcon />
          </AccessibleIcon>
        </Button>
        <Button isIconOnly variant="outline">
          <AccessibleIcon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </AccessibleIcon>
        </Button>
      </ButtonGroup>

      <ButtonGroup blend orientation="vertical">
        <Button isIconOnly variant="outline">
          <AccessibleIcon aria-label="Zoom In">
            <PlusIcon />
          </AccessibleIcon>
        </Button>
        <Button isIconOnly variant="outline">
          <AccessibleIcon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </AccessibleIcon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

ButtonGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the `ButtonGroup` and `Button` component to compose button groups.',
    },
  },
};

export const SplitButtons = () => {
  const [selectedOption, setSelectedOption] = React.useState<Selection>(
    new Set(['merge']),
  );

  const descriptionsMap = {
    merge:
      'All commits from the source branch are added to the destination branch via a merge commit.',
    squash:
      'All commits from the source branch are added to the destination branch as a single commit.',
    rebase:
      'All commits from the source branch are added to the destination branch individually.',
  };

  const labelsMap = {
    merge: 'Create a merge commit',
    squash: 'Squash and merge',
    rebase: 'Rebase and merge',
  };

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <ButtonGroup>
      <Button color="success">
        {labelsMap[selectedOptionValue as keyof typeof labelsMap]}
      </Button>
      <MenuTrigger>
        <MenuButton
          variant="solid"
          color="success"
          isIconOnly
          aria-label="More merge options"
        />
        <MenuPopover placement="bottom end">
          <Menu
            disallowEmptySelection
            aria-label="Merge options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={setSelectedOption}
          >
            <MenuItem id="merge">
              <MenuItemLabel> {labelsMap['merge']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['merge']}
              </MenuItemDescription>
            </MenuItem>
            <MenuSeparator />
            <MenuItem id="squash">
              <MenuItemLabel> {labelsMap['squash']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['squash']}
              </MenuItemDescription>
            </MenuItem>

            <MenuItem id="rebase">
              <MenuItemLabel> {labelsMap['rebase']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['rebase']}
              </MenuItemDescription>
            </MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </ButtonGroup>
  );
};

SplitButtons.parameters = {
  docs: {
    description: {
      story:
        'A common use case for the ButtonGroup component is to display a group of two buttons one for the selected value and another for the dropdown.',
    },
  },
};

function CloudUploadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="size-5"
    >
      <path
        fill="currentColor"
        d="M17.5 18.25a.75.75 0 0 1 0-1.5c1.66 0 2.25-.83 2.25-3.18a3.57 3.57 0 0 0-3.25-3.25a3.3 3.3 0 0 0-1 .18a.74.74 0 0 1-1-.49a5.25 5.25 0 0 0-10.25 1.56c0 3.44.76 5.18 2.25 5.18a.75.75 0 0 1 0 1.5c-2.5 0-3.75-2.25-3.75-6.68a6.75 6.75 0 0 1 13-2.68a4.4 4.4 0 0 1 .8-.07a5.07 5.07 0 0 1 4.75 4.75c-.05 1.28-.05 4.68-3.8 4.68"
      ></path>
      <path
        fill="currentColor"
        d="M14.83 15.65a.77.77 0 0 1-.53-.22l-2.3-2.3l-2.3 2.3a.75.75 0 0 1-1.06-1.06l2.83-2.83a.74.74 0 0 1 1.06 0l2.83 2.83a.75.75 0 0 1 0 1.06a.8.8 0 0 1-.53.22"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 15"
          to="0 -3"
          dur="1.25s"
          fill="freeze"
          repeatCount="indefinite"
          keyTimes="0; 1"
          values="0 15; 0 -3"
        />

        <animate
          attributeName="opacity"
          from="1"
          to="0.25"
          dur="1.25s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="currentColor"
        d="M12 19.18a.75.75 0 0 1-.75-.75v-6.36a.75.75 0 0 1 1.5 0v6.36a.75.75 0 0 1-.75.75"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 15"
          to="0 -3"
          dur="1.25s"
          fill="freeze"
          repeatCount="indefinite"
          keyTimes="0; 1"
          values="0 15; 0 -3"
        />

        <animate
          attributeName="opacity"
          from="1"
          to="0.25"
          dur="1.25s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
