import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string | Array<string | undefined>,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}

export const focusOutlineStyle = [
  'outline outline-2 outline-blue-500 outline-offset-2',
  'group-data-[readonly]:outline-blue-300',
];

export const focusRingStyle = [
  'ring-1 ring-blue-500 border-blue-500 ring-inset',
  'invalid:border-blue-500 group-invalid:border-blue-500',

  // Readonly style
  '[&[readonly]]:ring-blue-300 [&[readonly]]:border-blue-300',
  '[&:has(:is([readonly],[aria-readonly]))]:ring-blue-300 [&:has(:is([readonly],[aria-readonly]))]:border-blue-300',
];

// RAC uses `slot=*`. We use `data-ui=* to avoid potential conflict
export const inputFieldStyle = [
  'group',
  // Label style
  '[&_[data-ui=label]:not([class*=mb-])]:mb-1',
  '[&_[data-ui=label]:not([class*=mb-]):has(+:is(input,textarea,[data-ui=control]))]:mb-2',

  // Description style
  '[&>:is(input,[data-ui=control])+[data-ui=description]:not([class*=mt-])]:mt-2',
  '[&>textarea+[data-ui=description]:not([class*=mt-])]:mt-0.5',
  '[&_[data-ui=description]:not([class*=mb-]):has(+:is(input,textarea,[data-ui=control]))]:mb-3',

  // Error
  // RAC FieldError does not accept data-ui
  '[&>:is(input,textarea,[data-ui=control])+[slot=errorMessage]:not([class*=mt-])]:mt-2',
  '[&:has([data-ui=description]+[slot=errorMessage])_[slot=errorMessage]]:mt-1',
];

export const groupBoxStyle = [
  'group flex flex-col',

  // Group description style
  '[&_[data-ui=description]:not([class*=mt-]):has(+[data-ui=box])]:mt-1',
  '[&_[data-ui=description]:not([class*=mt-]):has(+[data-ui=box])]:mb-4',

  // Group box style
  '[&:not(:has([data-ui=description]+[data-ui=box]))>[data-ui=box]]:mt-3',

  '[&:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-])]:gap-y-3',

  // Box item description inside
  '[&:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:has([data-ui=description]):not([class*=gap-y])]:gap-y-4',

  // Horizontal
  '[&[data-orientation=horizontal]:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-x-])]:gap-x-4',
  '[&[data-orientation=horizontal]:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-y-])]:gap-y-2',

  // Error
  '[&:has([data-ui=box]+[slot=errorMessage])_[slot=errorMessage]]:mt-2',
];

// Chevron down as select box indicator
export const selectBoxIndicator = [
  'after:pointer-events-none',
  'after:absolute',
  'after:border-muted',
  "after:content-['']",
  'after:size-[9px] after:sm:size-[7px]',
  'after:border-b-[1.5px] after:border-r-[1.5px]',
  'after:bottom-[55%] after:end-3 after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45 rtl:after:translate-x-1.5',
];

export const displayLevels = {
  1: 'font-medium text-2xl',
  2: 'font-medium text-base/6',
  3: 'font-medium text-base/6 sm:text-sm/6',
};

export type DisplayLevel = keyof typeof displayLevels;
