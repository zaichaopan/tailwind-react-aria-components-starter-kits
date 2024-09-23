import React from 'react';

interface IconProps extends Omit<JSX.IntrinsicElements['svg'], 'ara-hidden'> {
  children: React.ReactNode;
}

// See: https://www.radix-ui.com/themes/docs/components/accessible-icon
export function AccessibleIcon({
  children,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        'aria-hidden': 'true',
        'aria-label': undefined,
        'data-ui': 'icon',
        focusable: 'false',
        ...props,
      })}
      {ariaLabel ? <span className='sr-only'>{ariaLabel}</span> : null}
    </>
  );
}
