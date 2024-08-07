import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import {
  NonFousableTooltipTarget,
  TooltipTrigger,
  Tooltip,
  NativeTooltip,
} from '../src/Tooltip';
import { docs } from '../.storybook/docs';
import { Moon, Sun } from 'lucide-react';
import { Icon } from '../src/Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**tooltip**</a> displays a description of an element on hover or focus. Tooltip target need to be focusable.',
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

export const Example = () => (
  <TooltipTrigger>
    <Button outline>Hover me</Button>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const WithNonFocusableElements = () => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>Hover me</div>
    </NonFousableTooltipTarget>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

WithNonFocusableElements.parameters = {
  docs: {
    description: {
      story:
        'Use the **NonFousableTooltipTarge** to show a tooltip on **non-focusable** element. <a href="https://argos-ci.com/blog/react-aria-migration" target="_blank">**Learn more**</a>:',
    },
  },
};

export const WithDisabledElements = () => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>
        <Button outline isDisabled>
          Hover me
        </Button>
      </div>
    </NonFousableTooltipTarget>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

WithDisabledElements.parameters = {
  docs: {
    description: {
      story:
        'Use **NonFousableTooltipTarget** and **div** to show a tooltip on disabled elements:',
    },
  },
};

export const NativeTooltips = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const title =
    theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <NativeTooltip title={title}>
      <Button
        isIconOnly
        outline
        onPress={() =>
          setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
        }
      >
        <Icon aria-label={title}>{theme === 'light' ? <Moon /> : <Sun />}</Icon>
      </Button>
    </NativeTooltip>
  );
};

NativeTooltips.parameters = {
  docs: {
    description: {
      story:
        '**NativeTooltip** component uses <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title" target="_blank">**title**</a> attribute to create a native html tooltip.',
    },
  },
};
