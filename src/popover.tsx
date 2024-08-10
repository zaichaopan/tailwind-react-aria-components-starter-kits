import {
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  composeRenderProps,
  useSlottedContext,
  PopoverContext,
} from 'react-aria-components';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  children: React.ReactNode;
}

export function Popover({ children, className, ...props }: PopoverProps) {
  const popoverContext = useSlottedContext(PopoverContext)!;
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';
 
  let offset = 8;
  offset =
    props.offset !== undefined
      ? props.offset
      : isSubmenu
        ? offset - 14
        : offset;

  return (
    <RACPopover
      {...props}
      offset={offset}
      className={composeRenderProps(className, (className, renderProps) => {
        return twMerge(
          'rounded-lg bg-background shadow-md ring-1 ring-foreground/10 dark:ring-foreground/15',
          renderProps.isEntering &&
            'duration-50 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1',
          renderProps.isExiting &&
            'duration-50 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1',
          className,
        );
      })}
    >
      {children}
    </RACPopover>
  );
}
