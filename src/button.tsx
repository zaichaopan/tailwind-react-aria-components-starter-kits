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
    'disabled:opacity-75',
  ],
  solid: [
    'border border-[var(--btn-bg)] dark:border-none dark:[--border-with:0px]',
    'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] pressed:bg-[var(--btn-bg-hover)]',
    'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
    'text-white',
  ],
  outline: [
    'border border-zinc-950/10 dark:border-white/15 border-b-zinc-950/15 dark:border-b-white/20',
    'hover:bg-zinc-50 pressed:bg-zinc-50 dark:hover:bg-zinc-800 dark:pressed:bg-zinc-800',
    'shadow-sm',
    'text-[var(--btn-color)]',
  ],
  plain: [
    '[--border-with:0px]',
    'hover:bg-zinc-50 dark:hover:bg-zinc-800',
    'text-[var(--btn-color)]',
  ],
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
      'py-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
      'sm:py-[calc(theme(spacing[1.5])-var(--border-with,1px))]',

      // svg
      '[&_svg:not([class*=size-])]:size-5',
      'sm:[&_svg:not([class*=size-])]:size-4',
    ],
    iconOnly: [
      'p-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
      'sm:p-[calc(theme(spacing[1.5])-var(--border-with,1px))]',

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
      'py-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
      // svg
      '[&_svg:not([class*=size-])]:size-5',
    ],
    iconOnly: [
      'p-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
      // svg
      '[&_svg:not([class*=size-])]:size-5',
      '[&_svg]:m-0.5',
    ],
  },
};

function buttonStyle({
  size,
  color,
  isIconOnly,
  variant = 'solid',
}: BasicButtonProps) {
  if (variant === 'unstyle') {
    return 'relative outline-none rounded-lg';
  }

  const buttonSize = size ?? 'md';
  const buttonType = isIconOnly ? 'iconOnly' : 'button';

  const buttonBackground = {
    accent: [
      '[--btn-bg:theme(colors.accent)]',
      '[--btn-bg-hover:theme(colors.accent/90%)]',
    ],
    destructive: [
      '[--btn-bg:theme(colors.destructive)]',
      '[--btn-bg-hover:theme(colors.destructive/90%)]',
    ],
    success: [
      '[--btn-bg:theme(colors.success)]',
      '[--btn-bg-hover:theme(colors.success/90%)]',
    ],
  };
  const buttonColor = {
    foreground: '[--btn-color:theme(colors.foreground)]',
    accent: '[--btn-color:theme(colors.accent)]',
    destructive: '[--btn-color:theme(colors.destructive)]',
    success: '[--btn-color:theme(colors.success)]',
  };

  return [
    buttonVariants.base,
    buttonVariants[variant],
    variant == 'solid'
      ? [buttonBackground[color ?? 'accent']]
      : [buttonColor[color ?? 'foreground']],
    buttonSizes[buttonSize][buttonType],
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
          data-variant={variant ?? 'solid'}
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

        // Add border to solid button which has not border in dark mode
        'dark:[&>button[data-variant=solid]]:border-solid',
        'dark:[&>button[data-variant=solid]]:[--border-with:1px]',
        '[&>button[data-variant=solid]:not(:first-of-type)]:border-s-black/15',
        className,
      )}
    />
  );
}
