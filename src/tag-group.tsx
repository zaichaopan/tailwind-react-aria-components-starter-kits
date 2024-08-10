import React from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList as RACTagList,
  TagListProps,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { XIcon } from './icons';

const colors = {
  default: {
    base: '',
    selected: 'border-accent bg-accent text-white outline-0',
  },
  success: {
    base: 'bg-success/5 border-success/15 dark:bg-success/25 dark:border-success/25',
    selected: 'bg-success text-white border-success dark:bg-success outline-0',
  },
  warning: {
    base: 'bg-warning/5 border-warning/15 dark:bg-warning/25 dark:border-warning/25',
    selected: 'bg-warning text-white border-warning dark:bg-warning outline-0',
  },
  destructive: {
    base: 'bg-destructive/5 border-destructive/15 dark:bg-destructive/25 dark:border-destructive/25',
    selected:
      'bg-destructive text-white border-destructive dark:bg-destructive outline-0',
  },
};

type Color = keyof typeof colors;

const ColorContext = React.createContext<Color>('default');

export interface TagGroupProps extends AriaTagGroupProps {
  color?: Color;
}

export interface TagProps extends AriaTagProps {
  color?: Color;
}

export function TagGroup({ children, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge('flex flex-col gap-1', props.className)}
    >
      <ColorContext.Provider value={props.color || 'default'}>
        {children}
      </ColorContext.Provider>
    </AriaTagGroup>
  );
}

export function TagList<T extends object>(props: TagListProps<T>) {
  return (
    <RACTagList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-wrap gap-1',
      )}
    />
  );
}

export function Tag({ children, color, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  const groupColor = React.useContext(ColorContext);

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'flex max-w-fit cursor-default items-center gap-1 rounded-md border px-1 py-0.5 text-xs transition',
            renderProps.allowsRemoving && 'pe-1',
            colors[color || groupColor].base,
            renderProps.isSelected && colors[color || groupColor].selected,
            renderProps.isFocusVisible && [
              focusOutlineStyle,
              'outline-offset-1',
            ],
            renderProps.isDisabled && 'opacity-50',
            className,
          );
        },
      )}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {children}
            {allowsRemoving && (
              <Button
                slot="remove"
                className={composeRenderProps('', (className, renderProps) => {
                  return twMerge(
                    'flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20',
                    renderProps.isFocusVisible && focusOutlineStyle,
                    className,
                  );
                })}
              >
                <XIcon className="size-3"></XIcon>
              </Button>
            )}
          </>
        );
      }}
    </AriaTag>
  );
}
