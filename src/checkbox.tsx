import React, { ReactNode } from 'react';
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  focusOutlineStyle,
  groupBoxStyle,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionContext, DescriptionProvider } from './field';
import { CheckIcon, MinusIcon } from './icons';

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

export function CheckboxGroup({
  orientation = 'vertical',
  ...props
}: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      data-orientation={orientation}
      className={composeTailwindRenderProps(props.className, groupBoxStyle)}
    />
  );
}

export function Checkboxes({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex flex-col group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:flex-wrap',
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function CheckboxField({
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
          '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7',
          '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7',
          '[&_label]:has-[[data-ui=description]]:font-medium',
          '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface CheckboxProps extends RACCheckboxProps {
  labelPosition?: 'left' | 'right';
}

export function Checkbox({
  labelPosition = 'right',
  children,
  ...props
}: CheckboxProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <RACCheckbox
      {...props}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-position={labelPosition}
      className={composeTailwindRenderProps(props.className, [
        'group flex items-center gap-x-3',
        'group-data-[orientation=horizontal]:text-nowrap',
        'data-[position=left]:flex-row-reverse',
        'data-[position=left]:justify-between',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
      ])}
    >
      {(renderProps) => {
        return (
          <>
            <div
              className={twMerge([
                'flex flex-shrink-0 items-center justify-center',
                'size-[1.125rem] rounded shadow-sm transition sm:size-4',
                'border border-zinc-400/75 dark:border-[1.5px] dark:border-zinc-600',
                renderProps.isInvalid &&
                  'border-destructive dark:border-destructive',
                (renderProps.isSelected || renderProps.isIndeterminate) && [
                  'border-accent bg-accent dark:border-0 dark:border-accent',
                  'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                ],
                renderProps.isFocusVisible && focusOutlineStyle,
              ])}
            >
              {renderProps.isIndeterminate ? (
                <MinusIcon className="size-4 text-white sm:size-3.5" />
              ) : renderProps.isSelected ? (
                <CheckIcon className="size-4 text-white sm:size-3.5" />
              ) : null}
            </div>

            {typeof children === 'function' ? children(renderProps) : children}
          </>
        );
      }}
    </RACCheckbox>
  );
}
