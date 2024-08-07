import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Button } from '../src/Button';
import { Modal } from '../src/Modal';
import { Text, TextLink } from '../src/Text';
import {
  AlertDialog,
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogCloseButton,
} from '../src/Dialog';
import { Checkbox } from '../src/Checkbox';

const meta: Meta = {
  title: 'AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Alert dialogs** are a special type of <a href="./?path=/docs/dialog--docs" target="_blank">**dialog**</a> meant to present a prompt that the user must confirm before an action proceeds.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Update</Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog>
          <DialogHeader>Update Available</DialogHeader>
          <DialogBody>A new version is ready to be installed.</DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button onPress={() => setIsOpen(false)}>Install now</Button>
          </DialogFooter>
        </AlertDialog>
      </Modal>
    </>
  );
};

export const DestructiveAlerts = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button color="destructive" onPress={() => setIsOpen(true)}>
        Delete&hellip;
      </Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog>
          <DialogHeader>Delete folder</DialogHeader>
          <DialogBody>
            Are you sure you want to delete "Documents"? All contents will be
            permanently destroyed.
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button color="destructive" onPress={() => setIsOpen(false)}>
              Delete
            </Button>
          </DialogFooter>
        </AlertDialog>
      </Modal>
    </>
  );
};

export const WithSecondaryActions = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button outline onPress={() => setIsOpen(true)}>
        Secondary
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog>
          <DialogHeader>Rate this app</DialogHeader>
          <DialogBody>
            If you enjoy the app, would you mind taking a moment to rate it? It
            will take a few minutes.
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton className="sm:mr-auto">
              No, thanks
            </DialogCloseButton>
            <Button onPress={() => setIsOpen(false)} outline>
              Remind me later
            </Button>
            <Button onPress={() => setIsOpen(false)}>Rate now</Button>
          </DialogFooter>
        </AlertDialog>
      </Modal>
    </>
  );
};

export const DoNotAskAgain = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button plain onPress={() => setIsOpen(true)}>
        Do not ask again
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog>
          <DialogHeader>Rate this app</DialogHeader>
          <DialogBody>
            If you enjoy the app, would you mind taking a moment to rate it? It
            will take a few minutes.
          </DialogBody>
          <DialogFooter>
            <Checkbox defaultSelected className="sm:mr-auto">
              Do not ask me again
            </Checkbox>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button onPress={() => setIsOpen(false)}>Rate now</Button>
          </DialogFooter>
        </AlertDialog>
      </Modal>
    </>
  );
};

export const UncontrolledAlertDialogs = () => {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal>
        <AlertDialog>
          <DialogHeader>Unable to connect your account</DialogHeader>
          <DialogBody>
            <Text>
              Your changes were saved, but we could not connect your account due
              to a technical issue on our end. Please try connecting again. If
              the issue keeps happening, contact{' '}
              <TextLink>Customer Care.</TextLink>
            </Text>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>OK</DialogCloseButton>
          </DialogFooter>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
};

export const AlertDialogsVsDialogs = () => {
  return (
    <DialogTrigger>
      <Button>Check new version</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader displayLevel={3}>Not Update Available</DialogHeader>
          <DialogBody>
            <Text>You are already using the latest version.</Text>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>OK</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

AlertDialogsVsDialogs.parameters = {
  docs: {
    description: {
      story: `**Use alert dialogs sparingly**
        \nAlert dialogs are interruptive, so they're best for displaying important information that users need to acknowledge before moving forward with a task or workflow. Use them only when absolutely necessary. Use <a href="./?path=/docs/dialog--docs" target="_blank">**Dialog**</a> for low-signal notifications or excessive confirmations.`,
    },
  },
};
