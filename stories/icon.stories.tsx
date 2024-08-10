import type { Meta } from '@storybook/react';
import { Available, Away, Busy, DoNotDisturb } from '../src/status';
import { AccessibleIcon } from '../src/accessible-icon';
import { docs } from '../.storybook/docs';
import { MailIcon } from 'lucide-react';

const meta: Meta<typeof AccessibleIcon> = {
  title: 'Icon',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <a href="https://www.radix-ui.com/themes/docs/components/accessible-icon" target="_blank">`AccessibleIcon`</a> component with `aria-label=*` to render accessible icons. It is recommend to wrap your icons with the `AccessibleIcon` component.',
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
    <div className="flex gap-4">
      <AccessibleIcon aria-label="Available">
        <Available className="size-4" />
      </AccessibleIcon>
      <AccessibleIcon aria-label="Away">
        <Away className="size-4" />
      </AccessibleIcon>
      <AccessibleIcon aria-label="Do not disturb">
        <DoNotDisturb className="size-4" />
      </AccessibleIcon>
      <AccessibleIcon aria-label="Busy">
        <Busy className="size-4" />
      </AccessibleIcon>
    </div>
  );
};

export const DecorativeIcons = () => {
  return (
    <AccessibleIcon>
      <MailIcon strokeWidth={1.5}/>
    </AccessibleIcon>
  );
};

DecorativeIcons.parameters = {
  docs: {
    description: {
      story:
        'When `aria-label=*` is not provided, `aria-hidden="true"` is added automatically to create a decoration only icon.',
    },
  },
};
