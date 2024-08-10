import React from 'react';
import {
  Tooltip as RACTooltip,
  TooltipProps as RACTooltipProps,
  OverlayArrow,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';
import { mergeProps, useFocusable } from 'react-aria';

export { TooltipTrigger } from 'react-aria-components';

export interface TooltipProps extends Omit<RACTooltipProps, 'children'> {
  children: React.ReactNode;
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RACTooltip
      {...props}
      offset={10}
      className={composeTailwindRenderProps(
        props.className,
        'shadow-xs group max-w-56 text-wrap text-pretty rounded-lg bg-zinc-950 dark:bg-zinc-800 p-2 text-xs text-white dark:shadow-none',
      )}
    >
      <OverlayArrow>
        <svg
          width={12}
          height={12}
          viewBox="0 0 8 8"
          className="fill-zinc-950 stroke-zinc-950 stroke-[0.5px] group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  );
}

// https://argos-ci.com/blog/react-aria-migration
export function NonFousableTooltipTarget(props: {
  children: React.ReactElement;
}) {
  const triggerRef = React.useRef(null);
  const { focusableProps } = useFocusable(props.children.props, triggerRef);

  return React.cloneElement(
    props.children,
    mergeProps(focusableProps, { tabIndex: 0 }, props.children.props, {
      ref: triggerRef,
    }),
  );
}

export function NativeTooltip({
  title,
  ...props
}: JSX.IntrinsicElements['div'] & { title: string }) {
  return <div title={title} role="presentation" {...props} />;
}
