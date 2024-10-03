import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  Button,
  CellProps,
  Collection,
  ColumnProps,
  ColumnResizer,
  Group,
  ResizableTableContainer,
  RowProps,
  TableHeaderProps,
  TableProps,
  composeRenderProps,
  useTableOptions,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Checkbox } from './checkbox';
import {
  composeTailwindRenderProps,
  focusRingStyle,
  focusVisibleOutlineStyle,
  focusVisibleRingStyle,
} from './utils';
import { ChevronUpIcon } from './icons';

export function Table(props: TableProps) {
  return (
    <ResizableTableContainer className="relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border">
      <AriaTable {...props} className="border-separate border-spacing-0" />
    </ResizableTableContainer>
  );
}

export function Column(props: ColumnProps) {
  return (
    <AriaColumn
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'cursor-default border-b text-start text-sm font-semibold [&:focus-within]:z-20 [&:hover]:z-20',
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="flex items-center">
            <Group
              role="presentation"
              tabIndex={-1}
              className={twMerge(
                'outline-none',
                focusVisibleRingStyle,
                'flex h-5 flex-1 items-center gap-1 overflow-hidden px-2',
              )}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={`flex size-4 items-center justify-center transition ${
                    sortDirection === 'descending' ? 'rotate-180' : ''
                  }`}
                >
                  {sortDirection && (
                    <ChevronUpIcon className="size-4 text-muted" />
                  )}
                </span>
              )}
            </Group>
            {!props.width && (
              <ColumnResizer
                className={twMerge(
                  'outline-none',
                  focusRingStyle,
                  'box-content h-5 w-[1.5px] translate-x-[8px] cursor-col-resize rounded bg-border bg-clip-content px-[8px] py-1 -outline-offset-2 resizing:w-[2px] resizing:bg-accent resizing:pl-[7px] forced-colors:bg-[ButtonBorder] forced-colors:resizing:bg-[Highlight]',
                )}
              />
            )}
          </div>
        ),
      )}
    </AriaColumn>
  );
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <AriaTableHeader
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'sticky top-0 z-10 rounded-t-lg  backdrop-blur-md',
        "after:content-['']",

        'after:flex-1',
      ])}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <AriaColumn
          width={36}
          minWidth={36}
          className="cursor-default border-b p-2 text-start text-sm font-semibold"
        >
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </AriaColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  );
}

export function Row<T extends object>({
  id,
  columns,
  children,
  ...otherProps
}: RowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <AriaRow
      id={id}
      {...otherProps}
      className={twMerge(
        focusVisibleOutlineStyle,
        'focus-visible:outline-none',
        'focus-visible:rounded',
        'focus-visible:-outline-offset-2',
        'group/row relative cursor-default select-none text-sm  disabled:text-muted',
        'hover:bg-zinc-100 dark:hover:bg-zinc-700',
        'hover:selected:bg-zinc-100 dark:hover:selected:bg-zinc-700',
        'selected:bg-accent/5 dark:selected:bg-accent/35',
      )}
    >
      {allowsDragging && (
        <Cell>
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}

export function Cell(props: CellProps) {
  return (
    <AriaCell
      {...props}
      className={twMerge(
        'outline-none',
        focusVisibleOutlineStyle,
        'focus-visible:rounded',
        'focus-visible:-outline-offset-2',
        'truncate border-b p-2 group-last/row:border-b-0',
      )}
    />
  );
}
