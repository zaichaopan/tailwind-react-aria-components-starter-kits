import React from 'react';
import {
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ComboBoxStateContext,
  GroupProps,
  Group,
  Keyboard,
} from 'react-aria-components';
import { ButtonWithoutAsChildProps, Button } from './button';
import { composeTailwindRenderProps, inputFieldStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import {
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
  SelectSection,
} from './select';
import { Input } from './field';
import { ChevronDownIcon, XIcon } from './icons';

export function ComboBox(props: RACComboBoxProps<object>) {
  return (
    <RACComboBox
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'w-full min-w-56',
        ...inputFieldStyle,
      ])}
    />
  );
}

export function ComboBoxGroup(props: GroupProps) {
  return (
    <Group
      data-ui="control"
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'isolate',
        'grid',
        'grid-cols-[36px_1fr_minmax(40px,max-content)_minmax(40px,max-content)]',
        'sm:grid-cols-[36px_1fr_minmax(36px,max-content)_minmax(36px,max-content)]',
        'items-center',

        // Icon
        'sm:[&>[data-ui=icon]:has(+input)]:size-4',
        '[&>[data-ui=icon]:has(+input)]:size-5',
        '[&>[data-ui=icon]:has(+input)]:row-start-1',
        '[&>[data-ui=icon]:has(+input)]:col-start-1',
        '[&>[data-ui=icon]:has(+input)]:place-self-center',
        '[&>[data-ui=icon]:has(+input)]:text-muted',

        // Input
        '[&>input]:row-start-1',
        '[&>input]:col-span-full',
        '[&>input:not([class*=pe-])]:pe-10',
        'sm:[&>input:not([class*=pe-])]:pe-9',

        '[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-20',
        'sm:[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-16',

        '[&:has([data-ui=icon]+input)>input]:ps-10',
        'sm:[&:has([data-ui=icon]+input)>input]:ps-8',

        // Trigger button
        '[&>[data-ui=trigger]]:row-start-1',
        '[&>[data-ui=trigger]]:-col-end-1',
        '[&>[data-ui=trigger]]:place-self-center',

        // Clear button
        '[&>[data-ui=clear]]:row-start-1',
        '[&>[data-ui=clear]]:-col-end-2',
        '[&>[data-ui=clear]]:justify-self-end',
        '[&>[data-ui=clear]:last-of-type]:-col-end-1',
        '[&>[data-ui=clear]:last-of-type]:place-self-center',
      ])}
    />
  );
}

export const ComboBoxInput = Input;

export function ComboBoxButton() {
  return (
    <Button isIconOnly size="sm" data-ui="trigger" variant="plain">
      <ChevronDownIcon strokeWidth={2} />
    </Button>
  );
}

export function ComboBoxClearButton({
  onPress,
}: {
  onPress?: ButtonWithoutAsChildProps['onPress'];
}) {
  const state = React.useContext(ComboBoxStateContext);

  return (
    <Button
      className={twMerge(state?.inputValue ? 'visible' : 'invisible')}
      slot={null}
      data-ui="clear"
      size="sm"
      isIconOnly
      variant="plain"
      onPress={(e) => {
        state?.setSelectedKey(null);
        onPress?.(e);
      }}
    >
      <XIcon aria-label="Clear" />
    </Button>
  );
}

export function CommandButton() {
  return (
    <>
      <Button
        variant="outline"
        data-ui="trigger"
        size="sm"
        className="me-1 flex font-normal peer-data-[focused=true]:hidden"
      >
        <Keyboard className="font-sans">⌘K</Keyboard>
      </Button>

      <Keyboard
        data-ui="trigger"
        className="me-1 hidden rounded-lg border p-1 text-xs peer-data-[focused=true]:flex ltr:ms-1"
      >
        ESC
      </Keyboard>
    </>
  );
}

export const ComboBoxPopover = SelectPopover;

export const ComboBoxSection = SelectSection;

export const ComboBoxListBox = SelectListBox;

export const ComboBoxListItem = SelectListItem;

export const ComboBoxListItemLabel = SelectListItemLabel;

export const ComboBoxListItemDescription = SelectListItemDescription;
