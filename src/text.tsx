import { LinkProps, TextProps } from 'react-aria-components';
import { Link } from './link';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { composeTailwindRenderProps } from './utils';

export function Text({
  className,
  elementType,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    elementType ?? 'p',
    {
      ...props,
      className: twMerge(
        'text-pretty text-base/6 text-muted sm:text-sm/6',
        className,
      ),
    },
    children,
  );
}

export function Strong({
  className,
  ...props
}: JSX.IntrinsicElements['strong']) {
  return (
    <Text
      {...props}
      elementType="strong"
      className={twMerge('font-medium text-foreground', className)}
    />
  );
}

export function Small({ className, ...props }: JSX.IntrinsicElements['small']) {
  return (
    <Text
      {...props}
      elementType="small"
      className={twMerge('text-sm sm:text-xs', className)}
    />
  );
}

export function TextLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={composeTailwindRenderProps(props.className, 'underline underline-offset-4')}
    />
  );
}
