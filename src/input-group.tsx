import {
  TextProps,
  Group as RACGroup,
  GroupProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, focusWithinRingStyle } from './utils';

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
        'flex',

        // When inside text field
        inline
          ? [
              '[[data-ui=text-field]_&_]:grid',
              '[[data-ui=text-field]_&_]:grid-cols-[auto_1fr_auto]',

              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:col-start-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:row-start-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:z-10',
              '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:-col-end-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:row-start-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:col-start-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:row-start-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:first-child]:z-10',
              '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:-col-end-1',
              '[[data-ui=text-field]_&>[data-ui=addon]:last-child]:row-start-1',
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

              '[[data-ui=text-field]_&>[data-ui=addon]:not(:first-child)]:border-s-0',
              '[[data-ui=text-field]_&>[data-ui=addon]:not(:last-child)]:border-e-0',
            ].join(' '),

        /**
         * When outside data-ui=text-field (multi inputs)
         */
        // Native select
        '[&>[data-ui=native-select-field]>[data-ui=label]]:sr-only',
        '[&>[data-ui=native-select-field]_select]:min-w-max',
        '[&>[data-ui=native-select-field]_select]:ps-3.5',
        '[&>[data-ui=native-select-field]:not(:first-child)_select]:rounded-s-none',
        '[&>[data-ui=native-select-field]:not(:first-child)_select]:border-s-0',
        '[&>[data-ui=native-select-field]:not(:last-child)_select]:rounded-e-none',
        '[&>[data-ui=native-select-field]:not(:last-child)_select]:border-e-0',
        '[&>[data-ui=native-select-field]:last-child_select]:text-center',

        // Select
        '[&>[data-ui=select]>[data-ui=label]]:sr-only',
        '[&>[data-ui=select]]:w-max',
        '[&>[data-ui=select]]:min-w-max',
        '[&>[data-ui=select]_button]:ps-3.5',
        '[&>[data-ui=select]:not(:first-child)_button]:rounded-s-none',
        '[&>[data-ui=select]:not(:first-child)_button]:border-s-0',
        '[&>[data-ui=select]:not(:has(+[aria-hidden]:last-child))_button]:border-e-0',
        '[&>[data-ui=select]:not(:has(+[aria-hidden]:last-child))_button]:rounded-e-none',

        // Button
        '[&_button[data-variant=outline]]:border-border',
        '[&>button:not(:first-child)]:rounded-s-none',
        '[&>button:not(:first-child)]:border-s-0',
        '[&>button:not(:last-child)]:rounded-e-none',
        '[&>button:not(:last-child)]:border-e-0',

        // Text Input
        '[&>[data-ui=text-field]>[data-ui=label]]:sr-only',
        '[&>[data-ui=text-field]]:flex-1',
        '[&>[data-ui=text-field]:not(:first-child)_input]:rounded-s-none',
        '[&>[data-ui=text-field]:not(:first-child)_input]:border-s-0',
        '[&>[data-ui=text-field]:not(:last-child)_input]:rounded-e-none',
        '[&>[data-ui=text-field]:not(:last-child)_input]:border-e-0',

        "[&>[data-ui=text-field]:not(:last-child)_input:after]:content-['']",

        /**
         * Separator
         */
        inline
          ? [
              '[&>[data-ui=separator]]:bg-[linear-gradient(to_bottom,_theme(colors.border)_1px,_transparent_1px,_transparent_calc(100%_-_1px),_theme(colors.border)_calc(100%_-_1px))]',
              '[&_input]:shadow-none',
              '[&_button]:shadow-none',
              '[&_select]:shadow-none',
              '[&:has(>[data-ui=text-field])]:shadow-sm',
              '[&:has(>[data-ui=text-field])]rounded-lg',
            ].join(' ')
          : ['[&>[data-ui=separator]]:bg-border'].join(' '),

        // separator before input
        '[&>[data-ui=separator]:has(+[data-ui=text-field]:focus-within)]:bg-none',
        '[&>[data-ui=separator]:has(+[data-ui=text-field]:focus-within)]:!bg-blue-500',
        '[&>[data-ui=separator]:has(+[data-ui=text-field][data-readonly]:focus-within)]:!bg-blue-300',
        '[&>[data-ui=separator]:has(+[data-ui=text-field][data-invalid]:not(:focus-within))]:bg-destructive',

        // separator after input
        '[&>[data-ui=text-field]:focus-within+[data-ui=separator]]:bg-none',
        '[&>[data-ui=text-field]:focus-within+[data-ui=separator]]:!bg-blue-500',
        '[&>[data-ui=text-field][data-readonly]:focus-within+[data-ui=separator]]:!bg-blue-300',
        '[&>[data-ui=text-field][data-invalid]:not(:focus-within)+[data-ui=separator]]:bg-destructive',

        // separator before native select
        '[&>[data-ui=separator]:has(+[data-ui=native-select-field]:focus-within)]:bg-none',
        '[&>[data-ui=separator]:has(+[data-ui=native-select-field]:focus-within)]:bg-blue-500',

        // separator after native select
        '[&>[data-ui=native-select-field]:focus-within+[data-ui=separator]]:bg-none',
        '[&>[data-ui=native-select-field]:focus-within+[data-ui=separator]]:bg-blue-500',

        // separator before select
        '[&>[data-ui=separator]:has(+[data-ui=select][data-focus-visible])]:bg-none',
        '[&>[data-ui=separator]:has(+[data-ui=select][data-focus-visible])]:!bg-blue-500',
        '[&>[data-ui=separator]:has(+[data-ui=select][data-invalid])]:bg-destructive',

        // separator after select
        '[&>[data-ui=select][data-focus-visible]+[aria-hidden]+[data-ui=separator]]:bg-none',
        '[&>[data-ui=select][data-focus-visible]+[aria-hidden]+[data-ui=separator]]:!bg-blue-500',
        '[&>[data-ui=select][data-invalid]+[aria-hidden]+[data-ui=separator]]:bg-destructive',
      ])}
    />
  );
}

export function InputAddon({ className, ...props }: TextProps) {
  return (
    <div
      {...props}
      data-ui="addon"
      aria-hidden
      className={twMerge(
        [
          'grid',
          'text-base/6 sm:text-sm/6',
          'text-muted',

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

export function InputSeparator({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      data-ui="separator"
      className={['w-[1px] shrink-0', className].join(' ')}
    />
  );
}

export function InputGroups(props: GroupProps) {
  return (
    <RACGroup
      {...props}
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        'shadow-sm',
        'grid',
        'grid-flow-col',
        'group',
        'items-center',
        'w-max',
        'rounded-lg border',
        'data-[invalid]:border-destructive',
        '[&>input]:border-0',
        '[&>input:focus]:border-0',
        '[&>input]:ring-0',
        '[&>input:focus]:ring-0',
        '[&>input]:shadow-none',
        '[&>input]:min-w-12',
        'sm:[&>input]:min-w-11',
        '[&>input:not(:first-of-type):not(:last-of-type)]:text-center',
        '[&>:not(input)]:text-muted',
        focusWithinRingStyle,
      ])}
    />
  );
}
