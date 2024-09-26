import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuProps as RACMenuProps,
  MenuItemProps as RACMenuItemProps,
  composeRenderProps,
  Separator,
  useSlottedContext,
  PopoverContext,
  Header,
  SectionProps,
  Section,
  Collection,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverProps } from './popover';
import { Button, ButtonWithoutAsChildProps } from './button';
import { composeTailwindRenderProps } from './utils';
import { Small } from './text';
import { CheckIcon, ChevronDownIcon, ChevronRightIcon } from './icons';

export { MenuTrigger, SubmenuTrigger } from 'react-aria-components';

type MenuButtonProps = ButtonWithoutAsChildProps & {
  noIndicator?: boolean;
};

export function MenuButton({
  className,
  noIndicator,
  variant,
  children,
  ...props
}: MenuButtonProps) {
  // Set`outline` as the default button style
  if (!variant) {
    variant = 'outline';
  }

  return (
    <Button
      {...props}
      variant={variant}
      className={composeTailwindRenderProps(className, [
        'gap-1',
        'pressed:scale-[0.97] pressed:opacity-75',
        'group-data-[ui=button-group]:pressed:scale-100',
        'group-data-[ui=button-group]:pressed:opacity-100',
        variant === 'unstyle' ? '' : 'px-2.5',
      ])}
    >
      {(renderProps) => {
        return (
          <>
            {typeof children === 'function' ? children(renderProps) : children}
            {!noIndicator && (
              <ChevronDownIcon
                className={twMerge(
                  !!children && 'ms-1',
                  '[.justify-start_&]:ms-auto',
                )}
              />
            )}
          </>
        );
      }}
    </Button>
  );
}

export function MenuPopover({ className, placement, ...props }: PopoverProps) {
  const popoverContext = useSlottedContext(PopoverContext)!;
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';

  return (
    <Popover
      {...props}
      placement={placement ?? (isSubmenu ? undefined : 'bottom')}
      className={composeTailwindRenderProps(
        className,
        twMerge(
          'dark:bg-zinc-800',
          'dark:ring-zinc-700',
          'max-w-72',
          'rounded-xl',
          'min-w-[max(112px,var(--trigger-width))]',
          'has-[[data-ui=item]_[data-ui=icon]]:min-w-[max(200px,var(--trigger-width))]',
          'has-[[data-ui=item]_kbd]:min-w-[max(176px,var(--trigger-width))]',
        ),
      )}
    />
  );
}
export function Menu<T extends object>(props: RACMenuProps<T>) {
  return (
    <RACMenu
      {...props}
      className={twMerge(
        'flex max-h-[inherit] flex-col overflow-auto outline-none',
        'p-1 has-[header]:px-2 has-[header]:pt-0',

        // MeuItem style
        '[&_[data-ui=item]]:flex-1',
        '[&_[data-ui=item]]:grid',
        '[&_[data-ui=item]:has([data-ui=label])]:grid-cols-[16px_1fr_minmax(50px,max-content)]',
        '[&_[data-ui=item]]:items-center',
        '[&_[data-ui=item]]:gap-x-2',

        // icon
        '[&_[data-ui=item]>[data-ui=icon]:not([class*=text-])]:text-muted',
        '[&_[data-ui=item][data-destructive]>[data-ui=icon]]:text-destructive/75',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=icon]:not([class*=size-])]:size-4',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=icon]]:col-start-1',

        '[&_[data-ui=item]>[data-ui=label]]:col-span-full',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2',

        // kbd
        '[&:has([data-ui=kbd])_[data-ui=item]>[data-ui=label]]:col-end-[-2]',
        '[&_[data-ui=item]>[data-ui=kbd]]:col-span-1',
        '[&_[data-ui=item]>[data-ui=kbd]]:row-start-1',
        '[&_[data-ui=item]>[data-ui=kbd]]:col-start-3',
        '[&_[data-ui=item]>[data-ui=kbd]]:justify-self-end',
        '[&_[data-ui=item][data-destructive]>[data-ui=kbd]]:text-destructive',

        // Description
        '[&_[data-ui=item]>[data-ui=description]]:col-span-full',
        '[&:has([data-ui=kbd])_[data-ui=item]>[data-ui=description]]:col-end-[-2]',
        '[&:has([data-ui=icon]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2',
        props.className,
      )}
    />
  );
}

export function SubMenu<T extends object>(
  props: RACMenuProps<T> & { 'aria-label': string },
) {
  return <Menu {...props} />;
}

export function MenuSeparator({ className }: { className?: string }) {
  return (
    <Separator
      className={twMerge(
        'my-1 w-[calc(100%-24px)] self-center border-t border-zinc-950/5 dark:border-white/10',
        className,
      )}
    />
  );
}

type MenuItemProps = RACMenuItemProps & {
  destructive?: true;
};

export function MenuItem({ destructive, ...props }: MenuItemProps) {
  return (
    <RACMenuItem
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocused, isDisabled }) => {
          return twMerge([
            'group flex cursor-default select-none items-center gap-x-2 outline-none',
            'px-3 py-2.5 sm:py-1.5 [&[data-selection-mode]]:px-2',
            'rounded-lg',
            'text-base/6 sm:text-sm/6',
            isDisabled && 'opacity-50',
            isFocused && 'bg-zinc-100 dark:bg-zinc-700',
            destructive && 'text-destructive',
            className,
          ]);
        },
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, isHovered }) => (
          <>
            {selectionMode !== 'none' && (
              <span
                data-ui="icon"
                className={twMerge(
                  'flex w-4 shrink-0 self-start',
                  isSelected && 'mt-[5px]',
                )}
              >
                {isSelected && <CheckIcon className="size-4" />}
              </span>
            )}

            <div
              data-ui="item"
              data-destructive={destructive ? destructive : undefined}
              data-hovered={isHovered}
            >
              {children}
            </div>
            {/* Submenu indicator */}
            <ChevronRightIcon className="-me-2 hidden size-4 text-muted group-data-[has-submenu]:inline-block" />
          </>
        ),
      )}
    </RACMenuItem>
  );
}

export function MenuItemLabel({
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <span
      slot="label"
      data-ui="label"
      className={twMerge('mb-0 truncate', className)}
      {...props}
    />
  );
}

export function MenuItemDescription({
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <Small
      slot="description"
      data-ui="description"
      className={className}
      {...props}
    />
  );
}

export interface MenuSectionProps<T> extends SectionProps<T> {
  title?: string;
}

export function MenuSection<T extends object>({
  className,
  ...props
}: MenuSectionProps<T>) {
  return (
    <Section
      className={twMerge(
        '[&:first-child]:-mt-[1px]',
        '[&:not(:first-child)]:my-1.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40',
        // Header
        // selectionMode = none
        '[&_header]:px-3',
        // has icon
        '[&:has([data-ui=item]>[data-ui=icon]+[data-ui=label])_header]:px-4',
        // electionMode !== none
        '[&:has([role=menuitemradio])_header]:ps-8',
        // has icon
        '[&:has([role=menuitemradio]>[data-ui=item]>[data-ui=icon]+[data-ui=label])_header]:ps-9',
        className,
      )}
    >
      <Header
        className={twMerge(
          'sticky z-10 bg-white dark:bg-zinc-800 truncate pt-2 text-xs/4 text-muted',
          'top-[0px] -mx-[1px] rounded-lg backdrop-blur-md',
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
