import React from 'react';
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  focusVisibleOutlineStyle,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { AsChildProps, Slot } from './slot';

export type LinkProps = AsChildProps<RACLinkProps>;

const linkStyle = [
  'relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline',
  'text-base/6 sm:text-sm/6',
  'disabled:no-underline disabled:opacity-50 disabled:cursor-default',
  '[&.border]:hover:no-underline',
].join(' ');

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    if (props.asChild) {
      return <Slot className={twMerge(linkStyle)}>{props.children}</Slot>;
    }

    const { asChild, ...rest } = props;

    return (
      <RACLink
        {...rest}
        ref={ref}
        className={composeTailwindRenderProps(props.className, [
          linkStyle,
          focusVisibleOutlineStyle,
        ])}
      />
    );
  },
);
