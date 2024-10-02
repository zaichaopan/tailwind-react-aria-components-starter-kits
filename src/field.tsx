import React from 'react';
import {
  FieldErrorProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  TextProps,
  composeRenderProps,
  LabelContext,
  GroupContext,
  Group as RACGroup,
  GroupProps,
  TextFieldProps as RACTextFieldProps,
  TextField as RACTextField,
  TextArea as RACTextArea,
  TextAreaProps as RACTextAreaProps,
  Text as RACText,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import {
  composeTailwindRenderProps,
  DisplayLevel,
  displayLevels,
  focusRingStyle,
  inputFieldStyle,
} from './utils';
import { Text } from './text';

// https://react-spectrum.adobe.com/react-aria/Group.html#advanced-customization
export function LabeledGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: 'span' }}>
      <GroupContext.Provider value={{ 'aria-labelledby': labelId }}>
        <div
          className={twMerge(
            ['[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2'],
            className,
          )}
        >
          {children}
        </div>
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

export function Label({
  requiredHint,
  displayLevel = 3,
  ...props
}: LabelProps & {
  requiredHint?: boolean;
  displayLevel?: DisplayLevel;
}) {
  return (
    <RACLabel
      {...props}
      data-ui="label"
      className={twMerge(
        'inline-block min-w-max text-pretty',
        'group-disabled:opacity-50',
        displayLevels[displayLevel],
        requiredHint &&
          "after:ms-0.5 after:text-destructive after:content-['*']",
        props.className,
      )}
    />
  );
}

export const DescriptionContext = React.createContext<{
  'aria-describedby'?: string;
} | null>(null);

export function DescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const descriptionId: string | null = React.useId();
  const [descriptionRendered, setDescriptionRendered] = React.useState(true);

  React.useLayoutEffect(() => {
    if (!document.getElementById(descriptionId)) {
      setDescriptionRendered(false);
    }
  }, [descriptionId]);

  return (
    <DescriptionContext.Provider
      value={{
        'aria-describedby': descriptionRendered ? descriptionId : undefined,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
}

/**
 * RAC will auto associate <RACText slot="description"/> with TextField/NumberField/RadioGroup/CheckboxGroup/DatePicker etc,
 * but not for Switch/Checkbox/Radio and our custom components. We use follow pattern to associate description for
 * Switch/Checkbox/Radio https://react-spectrum.adobe.com/react-aria/Switch.html#advanced-customization
 */
export function Description({ className, ...props }: TextProps) {
  const describedby =
    React.useContext(DescriptionContext)?.['aria-describedby'];

  return describedby ? (
    <Text
      {...props}
      id={describedby}
      data-ui="description"
      className={twMerge('block group-disabled:opacity-50', className)}
    />
  ) : (
    <RACText
      {...props}
      data-ui="description"
      slot="description"
      className={twMerge(
        'block text-pretty text-base/6 text-muted sm:text-sm/6',
        'group-disabled:opacity-50',
        className,
      )}
    />
  );
}

export function TextField(props: RACTextFieldProps) {
  return (
    <RACTextField
      {...props}
      data-ui="text-field"
      className={composeTailwindRenderProps(props.className, inputFieldStyle)}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'block text-base/6 text-destructive sm:text-sm/6',
      )}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <RACInput
        {...props}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, { isDisabled, isInvalid, isFocused }) => {
            return twMerge(
              'w-full rounded-lg border bg-inherit shadow-sm outline-none',
              'px-2.5 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
              'text-base/6 placeholder:text-muted sm:text-sm/6',
              isInvalid && 'border-destructive',
              isDisabled && 'opacity-50',
              isFocused && focusRingStyle,
              className,
            );
          },
        )}
      />
    );
  },
);

export function TextArea(props: RACTextAreaProps) {
  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isInvalid, isFocused }) => {
          return twMerge(
            'w-full rounded-lg border bg-inherit px-2.5 py-1 outline-none',
            'text-base/6 placeholder:text-muted sm:text-sm/6 ',
            isDisabled && 'opacity-50',
            isInvalid && 'border-destructive',
            isFocused && focusRingStyle,
            className,
          );
        },
      )}
    />
  );
}

export function InputGroup({
  inline = false,
  ...props
}: GroupProps & {
  inline?: boolean;
}) {
  return (
    <RACGroup
      {...props}
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        'isolate',
        'grid',
        'grid-cols-[auto_1fr_auto]',
        'items-center',

        /**
         * When inside data-ui=text-field
         */
        '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:col-start-1',
        '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:row-start-1',
        '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:z-10',
        '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:-col-end-1',
        '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:row-start-1',

        inline
          ? [
              '[[data-ui=text-field]_&>[data-ui=addon]]:border-0',
              '[[data-ui=text-field]_&>input]:col-span-full',
              '[[data-ui=text-field]_&>input]:row-start-1',
              '[[data-ui=text-field]_&>input:not(:first-child):not([class*=ps-])]:ps-10',
              'sm:[[data-ui=text-field]_&>input:not(:first-child):not([class*=ps-])]:ps-8',

              '[[data-ui=text-field]_&>input:not(:last-child):not([class*=pe-])]:pe-10',
              'sm:[[data-ui=text-field]_&>input:not(:last-child):not([class*=pe-])]:pe-8',
            ].join(' ')
          : [
              '[[data-ui=text-field]_&>input:not(:first-child)]:rounded-s-none',
              '[[data-ui=text-field]_&>input:not(:last-child)]:rounded-e-none',
              '[[data-ui=text-field]_&>input:not(:last-child)]:-col-end-2',
            ].join(' '),

        /**
         * When outside data-ui=text-field (multi input)
         */
        // Native select
        '[&>[data-ui=native-select-field]>[data-ui=label]]:sr-only',
        '[&>[data-ui=native-select-field]_select]:min-w-max',
        '[&>[data-ui=native-select-field]:first-child_select]:rounded-e-none',
        '[&>[data-ui=native-select-field]:first-child_select]:border-e-0',
        '[&>[data-ui=native-select-field]:last-child_select]:rounded-s-none',
        '[&>[data-ui=native-select-field]:last-child_select]:border-s-0',
        '[&>[data-ui=native-select-field]:last-child_select]:text-center',

        // Select
        '[&>[data-ui=select]>[data-ui=label]]:sr-only',
        '[&>[data-ui=select]]:min-w-max',
        '[&>[data-ui=select]:first-child_button]:rounded-e-none',
        '[&>[data-ui=select]:first-child_button]:border-e-0',

        // Text Field
        '[&>[data-ui=text-field]>[data-ui=label]]:sr-only',
        '[&>[data-ui=text-field]+[data-ui=select]>button]:rounded-s-none',
        '[&>[data-ui=text-field]+[data-ui=select]>button]:border-s-0',

        // Button
        '[&>button:first-child]:rounded-e-none',
        '[&>button:first-child]:border-e-0',
        'dark:[&>button:first-child]:border',
        'dark:[&>button:first-child]:border-e-0',

        '[&>[data-ui=text-field]+button]:rounded-s-none',
        '[&>[data-ui=text-field]+button]:border-s-0',
        '[&>[data-ui=text-field]+button]:border-border',
        'dark:[&>[data-ui=text-field]+button]:border',
        'dark:[&>[data-ui=text-field]+button]:border-s-0',

        // Input
        '[&>[data-ui=text-field]:not(:first-child)>input]:rounded-s-none',
        '[&>[data-ui=text-field]:not(:last-child)>input]:rounded-e-none',
        '[&>[data-ui=text-field]:not(:last-child)]:-col-end-2',
      ])}
    />
  );
}

export function InputAddon({
  className,
  ...props
}: TextProps & {
  blend?: boolean;
}) {
  return (
    <div
      aria-hidden
      {...props}
      data-ui="addon"
      className={twMerge(
        [
          'grid',
          'text-base/6 sm:text-sm/6',
          'text-muted',
          'h-full',
          'border-y',
          'place-content-center',
          'px-2.5',
          'first:border-s',
          'first:rounded-s-lg',
          'last:rounded-e-lg',
          'last:border-e',
          'group-focus-within:border-red-400',

          '[&>[data-ui=icon]]:size-5',
          'sm:[&>[data-ui=icon]]:size-4',
          '[&>[data-ui=icon]]:text-muted/65',
        ],
        className,
      )}
    />
  );
}

export function InputGroups(props: GroupProps) {
  return (
    <RACGroup
      {...props}
      data-ui="control"
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'shadow-sm',
            'grid',
            'grid-flow-col',
            'group',
            'items-center',
            'w-max',
            'rounded-lg border',
            'data-[invalid]:border-destructive',

            '[&>input]:border-0',
            '[&>input]:ring-0',
            '[&>input]:shadow-none',
            '[&>input]:min-w-12',
            'sm:[&>input]:min-w-11',
            '[&>input:not(:first-of-type):not(:last-of-type)]:text-center',
            '[&>:not(input)]:text-muted',
            renderProps.isFocusWithin && focusRingStyle,
            className,
          );
        },
      )}
    />
  );
}
