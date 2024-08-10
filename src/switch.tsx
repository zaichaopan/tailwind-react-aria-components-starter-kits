import React from 'react';
import {
  Group,
  GroupProps,
  Switch as RACSwitch,
  SwitchProps as RACSwitchProps,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  focusOutlineStyle,
  groupBoxStyle,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionProvider, DescriptionContext, LabeledGroup } from './field';

export function SwitchGroup({ className, ...props }: GroupProps) {
  return (
    <LabeledGroup>
      <Group
        {...props}
        className={composeTailwindRenderProps(className, groupBoxStyle)}
      ></Group>
    </LabeledGroup>
  );
}

export function Switches({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex flex-col',
        // When any switch item has description, apply all `font-medium` to all switch item labels
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function SwitchField({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          'group flex flex-col gap-y-1',
          '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-[calc(theme(width.8)+12px)]',
          '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-[calc(theme(width.8)+12px)]',
          '[&_label]:has-[[data-ui=description]]:font-medium',
          '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface SwitchProps extends RACSwitchProps {
  labelPosition?: 'left' | 'right';
}

export function Switch({
  labelPosition = 'right',
  children,
  ...props
}: SwitchProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <RACSwitch
      {...props}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-position={labelPosition}
      className={composeTailwindRenderProps(props.className, [
        'group flex items-center gap-x-3',
        'data-[position=left]:flex-row-reverse',
        'data-[position=left]:justify-between',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
      ])}
    >
      {(renderProps) => (
        <>
          <div
            className={twMerge(
              'flex h-5 w-8 shrink-0 cursor-default items-center rounded-full border shadow-inner transition duration-200 ease-in-out',
              'bg-zinc-200 px-0.5 dark:bg-background',
              renderProps.isSelected &&
                'border-accent bg-accent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:border-0 dark:bg-accent',
              renderProps.isDisabled && 'bg-gray-200 dark:bg-zinc-700',
              renderProps.isFocusVisible && focusOutlineStyle,
            )}
          >
            <span
              className={twMerge(
                'h-[0.95rem] w-[0.95rem] translate-x-0 transform rounded-full border bg-white shadow-sm transition duration-200 ease-in-out',
                renderProps.isSelected &&
                  'translate-x-[78%] border-accent rtl:-translate-x-[78%]',
              )}
            />
          </div>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </RACSwitch>
  );
}
