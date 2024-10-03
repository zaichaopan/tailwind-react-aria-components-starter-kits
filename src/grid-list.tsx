import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  Button,
  GridListItemProps,
  GridListProps,
} from 'react-aria-components';
import { Checkbox } from './checkbox';
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from './utils';

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'relative overflow-auto rounded-lg border p-1',
      )}
    >
      {children}
    </AriaGridList>
  );
}

export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  
  return (
    <AriaGridListItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        'relative -mb-px flex cursor-default select-none gap-3 rounded-md px-2 py-1.5 text-sm outline-none',
        'hover:bg-zinc100 dark:hover:bg-zinc-700',
        '[&:not(:last-child)]:mb-0.5',
        'selected:z-20',
        'disabled:opacity-50',
        focusVisibleOutlineStyle,
        'focus-visible:-outline-offset-2',
      ])}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}
