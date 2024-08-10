import React from 'react';
import type { Meta } from '@storybook/react';
import { ToggleButton } from '../src/button';
import { Mic, MicOff } from 'lucide-react';
import { TooltipTrigger, Tooltip } from '../src/tooltip';
import { docs } from '../.storybook/docs';
import { AccessibleIcon } from '../src/accessible-icon';

const meta: Meta<typeof ToggleButton> = {
  title: 'Toggle button',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/ToggleButton.html#togglebutton" target="_blank">`toggle button`</a> allows a user to toggle a selection on or off, for example switching between two states or modes. Use the `isSelected` and `onChange` prop to control toggle state and behavior.',
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
  const [isPined, setIsPined] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isPined}
      onChange={setIsPined}
      {...(!isPined && {
        variant: 'outline',
      })}
    >
      Pin
    </ToggleButton>
  );
};

export const WithIconAndTooltips = () => {
  const [isMicMuted, setIsMicMuted] = React.useState(true);

  return (
    <TooltipTrigger>
      <ToggleButton
        variant="plain"
        isSelected={isMicMuted}
        onChange={setIsMicMuted}
        className="size-14 flex-col gap-y-1 p-1 text-sm sm:text-xs"
      >
        <AccessibleIcon aria-label="Mute mic">
          {isMicMuted ? (
            <MicOff className="size-6" strokeWidth="1.5px" />
          ) : (
            <Mic className="size-6" strokeWidth="1.5px" />
          )}
        </AccessibleIcon>
        Mic
      </ToggleButton>
      <Tooltip>{isMicMuted ? 'Un-mute Microphone' : 'Mute Microphone'}</Tooltip>
    </TooltipTrigger>
  );
};
