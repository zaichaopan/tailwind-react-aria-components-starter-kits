import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { GlobalToastRegion } from '../src/toast/toast-region';
import { toast } from '../src/toast/toast-queue';

const meta: Meta = {
  title: 'Toast',
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/useToast.html#usetoast" target="_blank">`Toasts`</a> display brief, temporary notifications of actions, errors, or other events in an application.',
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
    <div className="flex flex-col items-center gap-4 p-12">
      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Description only
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'error',
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Error
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'warning',
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: 'Payment details saved',
            description: 'Your payment details have been save successfully.',
            type: 'success',
          });
        }}
      >
        Success
      </Button>

      <GlobalToastRegion aria-label="notification" />
    </div>
  );
};
