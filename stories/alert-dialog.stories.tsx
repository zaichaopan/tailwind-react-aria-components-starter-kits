import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Button } from '../src/button';
import { Modal } from '../src/modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogCloseButton,
} from '../src/dialog';

const meta: Meta = {
  title: 'Alert dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Alert dialogs** are a special type of <a href="./?path=/docs/dialog--docs" target="_blank">`dialog`</a> meant to present a prompt that the user must confirm before an action proceeds. Visit <a href="./?path=/docs/dialog--docs" target="_blank">`dialog`</a> to learn dialog usage. Use the `alert` prop on the `Dialog` component to render an alert dialog.',
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button color="destructive" onPress={() => setIsOpen(true)}>
        Revoke access
      </Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog alert>
          <DialogHeader>Revoke access</DialogHeader>
          <DialogBody>
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button color="destructive" onPress={() => setIsOpen(false)}>
              Revoke access
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};

export const WhenToUseAlertDialogs = () => {
  return (
    <DialogTrigger>
      <Button>About</Button>
      <Modal>
        <Dialog>
          <DialogHeader>About</DialogHeader>
          <DialogBody>Copyright © 2023 Adobe. All rights reserved.</DialogBody>
          <DialogFooter>
            <DialogCloseButton>OK</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

WhenToUseAlertDialogs.parameters = {
  docs: {
    description: {
      story:
        '**Use alert dialogs sparingly**. Alert dialogs are interruptive, so they\'re best for displaying important information that users need to acknowledge before moving forward with a task or workflow. Use them only when absolutely necessary. Use <a href="./?path=/docs/dialog--docs" target="_blank">`Dialog`</a> for low-signal notifications or excessive confirmations.',
    },
  },
};
