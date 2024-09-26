import React from 'react';
import {
  Heading as RACHeading,
  HeadingProps as RACHeadingProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { FocusScope } from 'react-aria';
import { DisplayLevel, displayLevels } from './utils';

type BaseHeadingProps = {
  displayLevel?: DisplayLevel;
  autoFocus?: boolean;
};

export type HeadingProps = {
  level?: DisplayLevel;
  elementType?: never;
} & RACHeadingProps;

type CustomElement = {
  level?: never;
  elementType: 'div';
} & JSX.IntrinsicElements['div'];

export const Heading = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement,
  BaseHeadingProps & (HeadingProps | CustomElement)
>(function Heading({ elementType, autoFocus, ...props }, ref) {
  if (elementType) {
    const { displayLevel = 1, className, ...restProps } = props;

    if (autoFocus) {
      return (
        <FocusScope autoFocus>
          <div
            {...restProps}
            ref={ref}
            {...(autoFocus && { tabIndex: -1 })}
            className={twMerge(
              [displayLevels[displayLevel], 'outline-none'],
              className,
            )}
          />
        </FocusScope>
      );
    }
    return (
      <div
        {...restProps}
        ref={ref}
        className={twMerge(displayLevels[displayLevel], className)}
      />
    );
  }

  const { level = 1, displayLevel, className, ...restProps } = props;

  if (autoFocus) {
    return (
      <FocusScope autoFocus>
        <RACHeading
          {...restProps}
          ref={ref}
          level={level}
          {...(autoFocus && { tabIndex: -1 })}
          className={twMerge(
            [displayLevels[displayLevel ?? level], 'outline-none'],
            className,
          )}
        />
      </FocusScope>
    );
  }

  return (
    <RACHeading
      {...restProps}
      ref={ref}
      level={level}
      className={twMerge(displayLevels[displayLevel ?? level], className)}
    />
  );
});

export const SubHeading = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(function SubHeading({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge('text-sm/6 text-muted', className)}
    />
  );
});
