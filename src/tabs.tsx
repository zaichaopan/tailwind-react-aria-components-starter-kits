import React from 'react';
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps as RACTabProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusVisibleRingStyle } from './utils';

const TabsContext = React.createContext<{
  variant: 'underline' | 'pills' | 'segment';
  orientation: 'vertical' | 'horizontal';
}>({
  variant: 'underline',
  orientation: 'horizontal',
});

export type TabsProps = RACTabProps &
  (
    | { variant?: 'underline' | 'pills' }
    | { variant: 'segment'; orientation?: never }
  );

export function Tabs({
  variant = 'underline',
  orientation = 'horizontal',
  keyboardActivation = 'manual',
  ...props
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, orientation }}>
      <RACTabs
        {...props}
        keyboardActivation={keyboardActivation}
        orientation={orientation}
        className={composeTailwindRenderProps(props.className, [
          'group flex',
          orientation === 'horizontal' ? 'flex-col' : 'flex-row',
        ])}
      />
    </TabsContext.Provider>
  );
}

const tabList = {
  base: {
    horizontal: ['whitespace-nowrap'],
    vertical: ['flex-col'],
  },
  underline: {
    horizontal: ['w-full space-x-4 border-b'],
    vertical: ['space-y-3.5 self-start border-l'],
  },
  pills: {
    horizontal: ['space-x-4'],
    vertical: ['space-y-2'],
  },
  segment: {
    horizontal: [
      'gap-x-4',
      'rounded-lg',
      'bg-zinc-100',
      'p-1',
      'dark:bg-zinc-600/45',
      'dark:border',
      'dark:border-zinc-600/30',
    ],
    vertical: [],
  },
};

export function TabList<T extends object & { title: string }>(
  props: TabListProps<T>,
) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <div className="flex overflow-x-auto pb-px pl-px">
      <RACTabList
        {...props}
        className={composeTailwindRenderProps(props.className, [
          'flex',
          'text-base/6 sm:text-sm/6',
          tabList.base[orientation].join(' '),
          tabList[variant][orientation].join(' '),
        ])}
      />
    </div>
  );
}

const tabPanel = {
  underline: {
    horizontal: ['py-4'],
    vertical: ['px-4'],
  },
  pills: {
    horizontal: ['px-5 py-4'],
    vertical: ['pl-8'],
  },
  segment: {
    horizontal: ['px-3 py-4'],
    vertical: [],
  },
};

export function TabPanel(props: TabPanelProps) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <RACTabPanel
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'flex-1 outline-0',
        tabPanel[variant][orientation].join(' '),
      ])}
    />
  );
}

const tab = {
  underline: {
    base: ['before:absolute', 'before:bg-accent'],
    horizontal: [
      'before:bottom-[-1.5px]',
      'before:w-full',
      'before:inset-x-0',
      'selected:before:h-[2px]',
      'p-2',
    ],
    vertical: [
      'before:inset-y-0',
      'before:selected:bg-accent',
      'before:selected:left-[-1.5px]',
      'before:selected:w-[2px]',
      'px-4',
    ],
  },
  pills: {
    base: [
      'flex',
      'items-center',
      'px-3',
      'py-2',
      'rounded-lg',
      'selected:bg-accent',
      'selected:text-white',
    ],
    horizontal: [],
    vertical: [],
  },
  segment: {
    base: [
      'flex-1',
      'justify-center',
      'px-6',
      'py-1',
      'selected:bg-background',
      'dark:selected:bg-zinc-600',
      'selected:text-foreground',
      'selected:shadow-sm',
      'selected:rounded-[calc(theme(borderRadius.lg)-2px)]',
      '[&>[data-ui=icon]:not([class*=size-])]:size-4',
    ],
    horizontal: [],
    vertical: [],
  },
};

export function Tab(props: TabProps) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <RACTab
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'relative flex items-center gap-x-3 rounded font-medium outline-none outline-0',
        // disable
        'disabled:opacity-50',

        '[&>[data-ui=icon]:not([class*=size-])]:size-[1.125rem]',

        // hover
        '[&:not([data-selected])]:text-muted',
        '[&:not([data-selected])]:hover:text-foreground',

        tab[variant].base.join(' '),
        tab[variant][orientation].join(' '),
        focusVisibleRingStyle,
        'focus-visible:ring-2',
      ])}
    />
  );
}
