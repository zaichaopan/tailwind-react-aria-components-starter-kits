import React from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList as RACTagList,
  TagListProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from './utils';
import { XIcon } from './icons';

const colors = {
  default:
    'selected:border-accent selected:bg-accent selected:text-white selected:outline-0',
  success:
    'bg-success/5 border-success/15 dark:bg-success/25 dark:border-success/25 selected:bg-success selected:border-success selected:dark:bg-success',
  warning:
    'bg-warning/5 border-warning/15 dark:bg-warning/25 dark:border-warning/25 selected:bg-warning selected:border-warning selected:dark:bg-warning',
  destructive:
    'bg-destructive/5 border-destructive/15 dark:bg-destructive/25 dark:border-destructive/25 selected:bg-destructive selected:border-destructive selected:dark:bg-destructive',
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
      className={composeTailwindRenderProps(props.className, [
        'flex max-w-fit cursor-default items-center gap-1 rounded-md border px-1 py-0.5 text-xs transition',
        colors[color || groupColor],
        focusVisibleOutlineStyle,
        'focus-visible:outline-offset-1',
        'disabled:opacity-50',
      ])}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {children}
            {allowsRemoving && (
              <Button
                slot="remove"
                className={composeTailwindRenderProps('', [
                  'flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20',
                  focusVisibleOutlineStyle,
                ])}
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
