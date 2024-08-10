import React from 'react';
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps,
  Collection,
  Header,
  ListBoxItemProps,
  Section,
  SectionProps,
  composeRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from './icons';

export interface ListBoxProps<T>
  extends Omit<RACListBoxProps<T>, 'layout' | 'orientation'> {}

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Fix not auto scroll to selected item
  React.useEffect(() => {
    if (ref.current) {
      const selectedItem = ref.current.querySelector('[aria-selected=true]');
      if (selectedItem) {
        const timer = setTimeout(() => {
          selectedItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
          });
        }, 50);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <RACListBox
      {...props}
      className={composeTailwindRenderProps(props.className, ['outline-none'])}
      ref={ref}
    >
      {children}
    </RACListBox>
  );
}

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isFocusVisible }) => {
          return twMerge(
            'group relative flex outline-0',
            isDisabled && 'opacity-50',
            isFocusVisible && focusOutlineStyle,
            className,
          );
        },
      )}
    >
      {props.children}
    </RACListBoxItem>
  );
}

export function DropdownItem({
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
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isFocused }) => {
          return twMerge([
            'group flex cursor-default select-none items-center gap-x-1 rounded-md outline-none',
            'px-1.5 py-2.5 has-submenu:pe-0 sm:py-1.5',
            'text-base/6 sm:text-sm/6',
            isDisabled && 'opacity-50',
            isFocused && 'bg-hover',
            destructive && 'text-destructive',
            className,
          ]);
        },
      )}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => {
        return (
          <>
            <CheckIcon
              className={twMerge(
                'mt-1 size-4 shrink-0 self-start [[data-ui=select-value]_&]:hidden',
                isSelected ? 'visible' : 'invisible',
              )}
            />

            <div data-ui="item">{children}</div>
          </>
        );
      })}
    </RACListBoxItem>
  );
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string;
}

export function DropdownSection<T extends object>({
  className,
  ...props
}: DropdownSectionProps<T>) {
  return (
    <Section
      className={twMerge(
        '[&:first-child]:-mt-[1px]',
        '[&:not(:first-child)]:my-1.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40',
        className,
      )}
    >
      <Header
        className={twMerge(
          'sticky z-10 truncate bg-background px-7 pt-2 text-xs/4 text-muted',
          'top-[0px] -mx-[1px] rounded-md backdrop-blur-md',
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
