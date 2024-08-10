import {
  DialogProps as RACDialogProps,
  OverlayTriggerStateContext,
  Dialog as RACDialog,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { Heading, HeadingProps } from './heading';
import { Button, ButtonWithoutAsChildProps } from './button';
import { composeTailwindRenderProps } from './utils';
import { Text } from './text';
import { XIcon } from './icons';

export { DialogTrigger } from 'react-aria-components';

export interface DialogProps extends RACDialogProps {
  alert?: boolean;
}

export function Dialog({ role, alert = false, ...props }: DialogProps) {
  return (
    <RACDialog
      {...props}
      role={role ?? alert ? 'alertdialog' : 'dialog'}
      className={twMerge(
        'relative flex max-h-[inherit] flex-col overflow-hidden outline-none',
        props.className,
      )}
    />
  );
}

type DialogHeaderProps = HeadingProps;

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          '--dialog-header-height',
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(header);
    return () => {
      observer.unobserve(header);
    };
  }, []);

  return typeof props.children === 'string' ? (
    <DialogTitle
      {...props}
      ref={headerRef}
      className={twMerge('px-6 pb-2 pt-6', className)}
    />
  ) : (
    <div
      ref={headerRef}
      className={twMerge(
        'relative flex w-full items-center px-6 pb-2 pt-6',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

export function DialogBody(props: JSX.IntrinsicElements['div']) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        'flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col gap-2 overflow-auto px-6',
        className,
      )}
      {...rest}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </div>
  );
}

export function DialogFooter({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          '--dialog-footer-height',
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      {...props}
      ref={footerRef}
      className={twMerge(
        'mt-auto flex flex-col flex-col-reverse justify-end gap-3 p-6 sm:flex-row',
        className,
      )}
    />
  );
}

export function DialogCloseButton(props: ButtonWithoutAsChildProps) {
  const state = React.useContext(OverlayTriggerStateContext)!;

  if (props.children === undefined) {
    const {
      onPress,
      className,
      'aria-label': ariaLabel,
      isIconOnly = true,
      variant = 'plain',
      ...restProps
    } = props;

    return (
      <Button
        {...restProps}
        isIconOnly={isIconOnly}
        variant={variant}
        className={composeTailwindRenderProps(
          className,
          'absolute end-4 top-4 p-1.5',
        )}
        onPress={(e) => {
          state.close();
          onPress?.(e);
        }}
      >
        <XIcon aria-label={ariaLabel ?? 'Close'} />
      </Button>
    );
  }

  const { onPress, ...restProps } = props;

  if (!restProps.variant) {
    restProps.variant = 'plain';
  }

  return (
    <Button
      {...restProps}
      onPress={(e) => {
        state.close();
        onPress?.(e);
      }}
    />
  );
}

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogHeaderProps
>(function DialogTitle({ level = 2, ...props }, ref) {
  return <Heading {...props} ref={ref} slot="title" level={level} />;
});
