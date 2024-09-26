import React from 'react';
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ToggleButton as RACToggleButton,
  ToggleButtonProps as RACToggleButtonProps,
  composeRenderProps,
} from 'react-aria-components';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { AsChildProps, Slot } from './slot';
import { SpinnerIcon } from './icons';

type Color = 'accent' | 'success' | 'destructive';

type Size = 'sm' | 'lg';

type Variant = 'solid' | 'outline' | 'plain' | 'unstyle';

export type BasicButtonProps = {
  color?: Color;
  size?: Size;
  isLoading?: boolean;
  isCustomLoading?: boolean;
  isIconOnly?: boolean;
  loadingLabel?: string;
  variant?: Variant;
};

export type ButtonProps = AsChildProps<RACButtonProps> & BasicButtonProps;

export type ButtonWithoutAsChildProps = RACButtonProps & BasicButtonProps;

const buttonVariants = {
  base: [
    'group relative inline-flex justify-center items-center whitespace-nowrap rounded-lg outline-none',
    'disabled:opacity-50',
  ],
  solid: {
    base: [
      'border dark:border-0 text-white',
      'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
    ],
    accent: ['border-accent bg-accent hover:bg-accent/90'],
    success: ['border-success bg-success hover:bg-success/90'],
    destructive: ['border-destructive bg-destructive hover:bg-destructive/90'],
  },
  outline: {
    base: [
      'border border-foreground/10 border-b-foreground/15 dark:border-foreground/15 hover:border-foreground/15',
      'bg-transparent hover:bg-hover/95 pressed:bg-hover',
      'shadow-sm',
    ],
    accent: [],
    success: ['text-success'],
    destructive: ['text-destructive'],
  },
  plain: {
    base: ['bg-transparent hover:bg-hover/95 pressed:bg-hover'],
    accent: [],
    success: ['text-success'],
    destructive: ['text-destructive'],
  },
};

const buttonSizes = {
  sm: {
    button: [
      'h-8 sm:h-7 px-2 gap-x-1 text-sm/6 sm:text-xs/6 rounded-md font-medium',
      // svg
      '[&_svg:not([class*=size-])]:size-3',
    ],
    iconOnly: [
      'size-8 sm:size-7 rounded-md',
      //svg
      '[&_svg:not([class*=size-])]:size-5',
      'sm:[&_svg:not([class*=size-])]:size-4',
    ],
  },
  md: {
    // H: 44px, sm:36px
    button: [
      'gap-x-2 text-base/6 sm:text-sm/6 font-semibold',
      'px-3',
      'py-[calc(theme(spacing[2.5])-1px)]',
      'sm:py-[calc(theme(spacing[1.5])-1px)]',

      // svg
      '[&_svg:not([class*=size-])]:size-5',
      'sm:[&_svg:not([class*=size-])]:size-4',
    ],
    iconOnly: [
      'p-[calc(theme(spacing[2.5])-1px)]',
      'sm:p-[calc(theme(spacing[1.5])-1px)]',

      // svg
      // 20+2x2=24px
      '[&_svg:not([class*=size-])]:size-5',
      '[&_svg]:m-0.5',

      // 16+4x2=24px
      'sm:[&_svg:not([class*=size-])]:size-4',
      'sm:[&_svg]:m-1',
    ],
  },
  lg: {
    button: [
      'gap-x-2 text-base/6 sm:text-sm/6 font-semibold',
      'px-4',
      'py-[calc(theme(spacing[2.5])-1px)]',
      // svg
      '[&_svg:not([class*=size-])]:size-5',
    ],
    iconOnly: [
      'p-[calc(theme(spacing[2.5])-1px)]',
      // svg
      '[&_svg:not([class*=size-])]:size-5',
      '[&_svg]:m-0.5',
    ],
  },
};

const svgColor = {
  button: {
    solid: ['[&:not(:hover)_svg:not([class*=text-])]:text-white/65'],
    outline: ['[&:not(:hover)_svg:not([class*=text-])]:text-foreground/50'],
    plain: ['[&:not(:hover)_svg:not([class*=text-])]:text-foreground/75'],
  },
  iconOnly: {
    solid: ['[&:not(:hover)_svg:not([class*=text-])]:text-white/90'],
    outline: ['[&:not(:hover)_svg:not([class*=text-])]:text-foreground/90'],
    plain: ['[&:not(:hover)_svg:not([class*=text-])]:text-foreground/90'],
  },
};

function buttonStyle({
  size,
  color = 'accent',
  isIconOnly,
  variant = 'solid',
  isLoading = false,
}: BasicButtonProps) {
  if (variant === 'unstyle') {
    return 'relative outline-none rounded-lg';
  }

  const buttonSize = size ?? 'md';
  const buttonType = isIconOnly ? 'iconOnly' : 'button';

  return [
    buttonVariants.base,
    buttonVariants[variant].base,
    buttonVariants[variant][color],
    buttonSizes[buttonSize][buttonType],
    isLoading ? ['disabled:opacity-75'] : svgColor[buttonType][variant],
  ];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    if (props.asChild) {
      return (
        <Slot className={twMerge(buttonStyle(props))}>{props.children}</Slot>
      );
    }

    const {
      asChild,
      children,
      isLoading,
      isCustomLoading,
      loadingLabel,
      size,
      color,
      variant,
      isIconOnly,
      ...buttonProps
    } = props;

    return (
      <>
        <RACButton
          {...buttonProps}
          ref={ref}
          className={composeRenderProps(
            props.className,
            (className, renderProps) => {
              return twMerge(
                buttonStyle({ size, color, isIconOnly, variant, isLoading }),
                renderProps.isFocusVisible && focusOutlineStyle,
                isLoading && !isCustomLoading && 'text-transparent',
                className,
              );
            },
          )}
        >
          {(renderProps) => {
            return (
              <>
                {isLoading && !isCustomLoading && (
                  <SpinnerIcon
                    className={twMerge(
                      'absolute flex h-full items-center justify-center',
                      isLoading ? 'flex' : 'hidden',
                      (!variant || variant === 'solid') && 'text-zinc-300',
                    )}
                  />
                )}

                {typeof children === 'function'
                  ? children(renderProps)
                  : children}
                <span
                  className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                  aria-hidden="true"
                ></span>
              </>
            );
          }}
        </RACButton>

        <span aria-live="polite" className="sr-only">
          {isLoading ? loadingLabel : ''}
        </span>
      </>
    );
  },
);

export type ToggleButtonProps = RACToggleButtonProps & BasicButtonProps;

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible }) =>
          twMerge(
            buttonStyle(props),
            isFocusVisible && focusOutlineStyle,
            className,
          ),
      )}
    />
  );
}

export function ButtonGroup({
  className,
  blend,
  orientation = 'horizontal',
  ...props
}: JSX.IntrinsicElements['div'] & {
  blend?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <div
      {...props}
      data-ui="button-group"
      className={twMerge(
        'group flex w-max items-center',

        orientation === 'horizontal'
          ? [
              '[&>button:first-of-type]:rounded-e-none',
              '[&>button:last-of-type]:rounded-s-none',
              '[&>button:not(:last-of-type)]:border-e-0',

              blend &&
                'shadow-sm [&>button:not(:first-of-type)]:border-s-0 [&>button]:shadow-none',
            ]
          : [
              'flex-col',
              '[&>button:first-of-type]:rounded-b-none',
              '[&>button:last-of-type]:rounded-t-none',
              '[&>button:not(:last-of-type)]:border-b-0',

              blend &&
                'shadow-sm [&>button:not(:first-of-type)]:border-t-0 [&>button]:shadow-none',
            ],

        '[&>button:not(:first-of-type):not(:last-of-type)]:rounded-none',

        // None outline button has not border in dark mode
        'dark:[&>button:not(.bg-transparent)]:border',

        '[&>button:not(.bg-transparent):not(:first-of-type)]:border-s-black/15',

        className,
      )}
    />
  );
}
