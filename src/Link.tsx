import React from 'react';
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
  composeRenderProps,
} from 'react-aria-components';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { AsChildProps, Slot } from './slot';

export type LinkProps = AsChildProps<RACLinkProps>;

const linkStyle = [
  'relative inline-flex cursor-pointer items-center gap-1 rounded outline-none hover:underline',
  'text-base/6 sm:text-sm/6',
  'disabled:no-underline disabled:opacity-50 disabled:cursor-default',
];

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    if (props.asChild) {
      return <Slot {...props} className={twMerge(linkStyle)} />;
    }

    return (
      <RACLink
        {...props}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge([
              linkStyle,
              renderProps.isFocusVisible && focusOutlineStyle,
              className,
            ]);
          },
        )}
      />
    );
  },
);
