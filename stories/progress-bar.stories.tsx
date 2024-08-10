import type { Meta } from '@storybook/react';
import { ProgressBar } from '../src/progress-bar';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Progress bar',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/ProgressBar.html" target="_blank">`Progress bars`</a> show either determinate or indeterminate progress of an operation over time.',
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
  return <ProgressBar label="loading" value={80} />;
};

export const Indeterminate = () => {
  return <ProgressBar label="loading" value={80} isIndeterminate />;
};
