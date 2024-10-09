import {
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  useSlottedContext,
  PopoverContext,
} from 'react-aria-components';
import React from 'react';
import { composeTailwindRenderProps } from './utils';

export interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  children: React.ReactNode;
  noEnteringAnimation?: boolean;
  noExitingAnimation?: boolean;
}

export function Popover(props: PopoverProps) {
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
      className={composeTailwindRenderProps(props.className, [
        'bg-white',
        'dark:bg-zinc-900',
        'shadow-md',
        'rounded-lg',
        'ring-1',
        'ring-zinc-950/10',
        'dark:ring-zinc-800',

      
        'entering:animate-in',
        'entering:ease-out',
        'entering:fade-in',
        'entering:placement-left:slide-in-from-right-1',
        'entering:placement-right:slide-in-from-left-1',
        'entering:placement-top:slide-in-from-bottom-1',
        'entering:placement-bottom:slide-in-from-top-1',
        'entering:duration-50',

        'exiting:animate-out',
        'exiting:ease-in',
        'exiting:fade-out',
        'exiting:placement-left:slide-out-to-right-1',
        'exiting:placement-right:slide-out-to-left-1',
        'exiting:placement-top:slide-out-to-bottom-1',
        'exiting:placement-bottom:slide-out-to-top-1',
        'exiting:duration-50',
      ])}
    />
  );
}
