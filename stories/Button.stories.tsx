import type { Meta } from '@storybook/react';
import {
  FolderPlus,
  Mail,
  MicIcon,
} from 'lucide-react';
import { Button, CloseButton } from '../src/Button';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/Icon';
import { Avatar } from '../src/Avatar';
import { Link } from '../src/Link';


const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**button**</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
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
  return <Button>Press me</Button>;
};

export const ButtonColors = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button color="accent">Press me</Button>
      <Button color="destructive">Press me</Button>
      <Button color="success">Press me</Button>
    </div>
  );
};

ButtonColors.parameters = {
  docs: {
    description: {
      story:
        'Use **color** props to set the button color. \n\nAvailable **color** option includes **accent**, **success**, **destructive**. Default color value is **accent**.',
    },
  },
};

export const ButtonSizes = () => {
  return (
    <div className="flex items-end gap-4">
      <Button size="sm">Press me</Button>
      <Button>Press me</Button>
      <Button size="lg">Press me</Button>
    </div>
  );
};

ButtonSizes.parameters = {
  docs: {
    description: {
      story:
        'Use **size** prop to set the button size. Default size is **size-9**. Available size option includes **sm** and **lg**.',
    },
  },
};

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button>Press me</Button>
      <Button outline>Press me</Button>
      <Button plain>Press me</Button>
      <Button unstyle>Press me</Button>
    </div>
  );
};

ButtonVariants.parameters = {
  docs: {
    description: {
      story:
        'Use prop **outline**, **plain** or **unstyle** to render buttons with different variants.',
    },
  },
};

export const WithIcons = () => {
  return (
    <div className="flex gap-4">
      <Button>
        <Icon>
          <Mail />
        </Icon>
        Subscribe
      </Button>
      <Button outline>
        <Icon>
          <FolderPlus />
        </Icon>
        Create New Folder
      </Button>
    </div>
  );
};

WithIcons.parameters = {
  docs: {
    description: {
      story:
        'Use **Icon** component to place a decorative icon at the start or end of a button. Icon size is auto scaled based on button sizes.',
    },
  },
};

export const IconButtons = () => {
  return (
    <div className="flex gap-4">
      <Button isIconOnly>
        <Icon>
          <MicIcon />
        </Icon>
      </Button>
      <Button isIconOnly>
        <Icon aria-label="Create New Folder">
          <FolderPlus strokeWidth={1.5} />
        </Icon>
      </Button>
    </div>
  );
};

IconButtons.parameters = {
  docs: {
    description: {
      story:
        'Use **isIconOnly** prop to render a icon only button. Use **aria-label** for none decorative buttons. Icon size is auto scaled based on button sizes.',
    },
  },
};

export const CloseButtons = () => {
  return <CloseButton plain />;
};

CloseButtons.parameters = {
  docs: {
    description: {
      story: 'Use **CloseButton** component to render close button.',
    },
  },
};

export const DisabledButtons = () => {
  return <Button isDisabled>Press me</Button>;
};

DisabledButtons.parameters = {
  docs: {
    description: {
      story: 'Use **isDisabled** prop to disable buttons.',
    },
  },
};

export const LoadingState = () => {
  return (
    <div className="flex gap-2">
      <Button isDisabled isLoading loadingLabel="Searching">
        Search
      </Button>

      <Button color="success" isDisabled isLoading loadingLabel="Saving">
        Save
      </Button>

      <Button color="destructive" isDisabled isLoading loadingLabel="Deleting">
        Delete
      </Button>

      <Button outline isDisabled isLoading loadingLabel="Searching">
        Search
      </Button>
    </div>
  );
};

LoadingState.parameters = {
  docs: {
    description: {
      story:
        'Use **isLoading** prop to render a loading spinner. Use **loadingLabel** for accessibility.',
    },
  },
};

export const ImageButtons = () => {
  return (
    <Button unstyle>
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
        'Use **Avatar** component and **unstyle** button to render image buttons.',
    },
  },
};

export const CustomStyles = () => {
  return (
    <Button className="size-16 flex-col gap-0 px-4 text-xs/6" plain>
      <Icon>
        <MicIcon className="h-8" strokeWidth={1.5} />
      </Icon>
      Mic
    </Button>
  );
};

CustomStyles.parameters = {
  docs: {
    description: {
      story: 'Use **className=\\*** prop to customize button style.',
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
        'Use **asChild** prop to render another react components, e.g., render **Link** component with button styles.',
    },
  },
};
