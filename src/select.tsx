import {
  Select as RACSelect,
  SelectProps as RACSelectProps,
  Header,
  Button,
  ListBoxItemProps,
  SelectValue,
  composeRenderProps,
  Collection,
  Section,
  SectionProps as RACSectionProps,
  ListBoxItem as RACListBoxItem,
} from 'react-aria-components';
import { ListBoxProps, ListBox } from './list-box';
import { Popover, PopoverProps } from './popover';
import {
  selectBoxIndicator,
  composeTailwindRenderProps,
  inputFieldStyle,
  focusVisibleRingStyle,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { Small } from './text';
import { CheckIcon } from './icons';

export function Select<T extends object>(props: RACSelectProps<T>) {
  return (
    <RACSelect
      {...props}
      data-ui="select"
      className={composeTailwindRenderProps(props.className, [
        'w-full min-w-56',
        inputFieldStyle,
      ])}
    />
  );
}

export function SelectButton(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        'relative flex w-full cursor-default items-center gap-x-1 rounded-lg border shadow-sm outline-none transition',
        'pe-8 ps-2.5',
        'py-[calc(theme(spacing[2.5])-1px)]',
        ' sm:py-[calc(theme(spacing[1.5])-1px)]',
        'group-invalid:border-destructive',
        'group:disabled:cursor-not-allowed group-disabled:opacity-50',
        'text-base/6 sm:text-sm/6',
        '[&>*:has(+[data-ui=select-value])>svg]:size-4',
        '[&>*:has(+[data-ui=select-value])>svg]:text-muted',
        focusVisibleRingStyle,
        'focus-visible:ring-offset-0',
        selectBoxIndicator,
      ])}
    >
      {!!props.children && (
        <span className="flex items-center gap-x-2">{props.children}</span>
      )}
      <SelectValue
        data-ui="select-value"
        className={twMerge([
          'flex-1 truncate  data-[placeholder]:text-start data-[placeholder]:text-muted dark:data-[placeholder]:text-white',
          // Selected Item style
          '[&>[data-ui=item]]:flex',
          '[&>[data-ui=item]]:items-center',
          '[&>[data-ui=item]]:gap-x-2',
          '[&>[data-ui=item]_[data-ui=description]]:sr-only',
          '[&>[data-ui=item]_[data-ui=icon]:not([class*=size-])]:size-5',
          '[&>[data-ui=item]_[role=img]]:size-6',
          'sm:[&>[data-ui=item]_[data-ui=icon]:not([class*=size-])]:size-4',
          'sm:[&>[data-ui=item]_[role=img]]:size-5',
        ])}
      />
    </Button>
  );
}

export function SelectPopover({
  className,
  placement = 'bottom',
  ...props
}: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(className, [
        'w-[--trigger-width]',
        'dark:bg-zinc-800',
        'dark:ring-zinc-700',
      ])}
      placement={placement}
    />
  );
}

export function SelectListBox<T extends object>(props: ListBoxProps<T>) {
  return (
    <ListBox
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'flex max-h-[inherit] flex-col overflow-auto p-1 has-[header]:px-2 has-[header]:pt-0',

        // Listbox item
        '[&_[data-ui=item]]:grid',
        '[&_[data-ui=item]]:grid-cols-[minmax(16px,max-content)_1fr]',
        '[&_[data-ui=item]]:items-center',
        '[&_[data-ui=item]]:gap-x-2',

        // icon
        '[&_[data-ui=item]>[data-ui=icon]:has(+[data-ui=label]):not([class*=size-])]:size-4',

        // icon + label
        '[&_[data-ui=item]>[data-ui=label]]:col-span-full',
        // label
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2',

        // icon + label + description
        // description
        '[&:has([data-ui=icon]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2',

        // image
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label])]:size-5',

        // label
        '[&:has([role=img]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2',

        // Image + label + description
        // Image
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:size-7',
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:self-start',
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:mt-0.5',
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:row-start-1',
        '[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:row-end-3',

        // label
        '[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=label]]:leading-5',

        // description
        '[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-row-2',
        '[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2',
      ])}
    />
  );
}

export interface SectionProps<T> extends RACSectionProps<T> {
  title?: string;
}

export function SelectSection<T extends object>(props: SectionProps<T>) {
  return (
    <Section
      className={twMerge(
        '[&:first-child]:-mt-[1px]',
        '[&:not(:first-child)]:my-1.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40',
        props.className,
      )}
    >
      <Header
        className={twMerge(
          'sticky z-10 truncate bg-white ps-8 pt-2 text-xs/4 text-muted dark:bg-zinc-800',
          'top-[0px] -mx-[1px] rounded-lg',
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}

export function SelectListItem({
  destructive,
  ...props
}: ListBoxItemProps & { destructive?: true }) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        'group flex cursor-default select-none items-center gap-x-2 rounded-lg outline-none',
        'px-1.5 py-2.5 has-submenu:pe-0 sm:py-1.5',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
        'focus:bg-zinc-100 focus:dark:bg-zinc-700',
        destructive && 'text-destructive',
      ])}
    >
      {composeRenderProps(props.children, (children) => {
        return (
          <>
            <CheckIcon
              className={twMerge(
                'invisible mt-1 size-4 shrink-0 self-start group-selected:visible [[data-ui=select-value]_&]:hidden',
              )}
            />

            <div data-ui="item">{children}</div>
          </>
        );
      })}
    </RACListBoxItem>
  );
}

export function SelectListItemLabel({
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <span
      {...props}
      slot="label"
      data-ui="label"
      className={twMerge('mb-0 truncate', className)}
    />
  );
}

export function SelectListItemDescription({
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <Small
      {...props}
      slot="description"
      data-ui="description"
      className={className}
    />
  );
}
