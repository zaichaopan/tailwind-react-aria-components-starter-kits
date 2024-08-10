import React from 'react';
import type { Meta } from '@storybook/react';
import { ListBox, ListBoxItem } from '../src/list-box.tsx';
import { Available, Away, Busy, DoNotDisturb } from '../src/status.tsx';
import { Check } from 'lucide-react';
import { docs } from '../.storybook/docs.ts';
import { Selection } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Text } from '../src/text.tsx';
import { Separator } from '../src/separator.tsx';

const meta: Meta<typeof ListBox> = {
  title: 'Listbox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/ListBox.html#listbox" target="_blank">`listbox`</a> displays a list of options and allows a user to select one or more of them.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Status = {
  id: 'available' | 'busy' | 'away' | 'doNotDisturb';
  icon: React.FunctionComponent<JSX.IntrinsicElements['svg']>;
  textValue: string;
};
const statuses: Array<Status> = [
  {
    icon: Available,
    id: 'available',
    textValue: 'Available',
  },
  {
    icon: Away,
    id: 'away',
    textValue: 'Away',
  },
  {
    icon: Busy,
    id: 'busy',
    textValue: 'Busy',
  },
  {
    icon: DoNotDisturb,
    id: 'doNotDisturb',
    textValue: 'Do not disturb',
  },
];

export const BasicExample = () => {
  const [selectedStatus, setSelectedStatus] = React.useState<Selection>(
    new Set([statuses[0].id]),
  );

  return (
    <div className="p-6">
      <ListBox<Status>
        aria-label="Pick your status"
        selectedKeys={selectedStatus}
        defaultSelectedKeys={selectedStatus}
        items={statuses}
        onSelectionChange={setSelectedStatus}
        selectionMode="single"
        className="p-1.5"
        disallowEmptySelection
      >
        {(item) => {
          return (
            <ListBoxItem
              id={item.id}
              textValue={item.textValue}
              className={({ isSelected }) => {
                return twMerge(
                  'w-64 items-center gap-2 rounded p-1.5',
                  !isSelected && 'text-muted',
                );
              }}
            >
              <item.icon className="size-3" />
              <span className="text-sm">{item.textValue}</span>
              <Check
                className="ms-auto hidden h-5 w-5 group-selected:flex"
                strokeWidth={1.5}
              />
            </ListBoxItem>
          );
        }}
      </ListBox>
    </div>
  );
};

export function Appearance() {
  return (
    <div className="flex max-w-2xl flex-col gap-4 p-6">
      <SwitchThemes />
      <Separator />
      <AccentColors />
    </div>
  );
}

function AccentColors() {
  const accentColors = [
    {
      id: 'blue',
      textValue: 'Blue',
      border: 'border-blue-500',
      bg: 'bg-blue-500',
    },
    {
      id: 'purple',
      textValue: 'Purple',
      border: 'border-purple-500',
      bg: 'bg-purple-500',
    },
    {
      id: 'pink',
      textValue: 'Pink',
      border: 'border-pink-500',
      bg: 'bg-pink-500',
    },
    {
      id: 'red',
      textValue: 'Red',
      border: 'border-red-500',
      bg: 'bg-red-500',
    },
    {
      id: 'orange',
      textValue: 'Orange',
      border: 'border-orange-500',
      bg: 'bg-orange-500',
    },
    {
      id: 'yellow',
      textValue: 'Yellow',
      border: 'border-yellow-500',
      bg: 'bg-yellow-500',
    },
    {
      id: 'green',
      textValue: 'Green',
      border: 'border-green-500',
      bg: 'bg-green-500',
    },
    {
      id: 'gray',
      textValue: 'Gray',
      border: 'border-gray-500',
      bg: 'bg-gray-500',
    },
  ];

  const [selectedAccentId, setSelectedAccentId] = React.useState<Selection>(
    new Set([accentColors[0].id]),
  );

  return (
    <div className="flex justify-between p-6">
      <Text className="text-foreground">Accent color</Text>
      <ListBox
        aria-label="Accent Color"
        selectionMode="single"
        defaultSelectedKeys={'blue'}
        selectedKeys={'blue'}
        onSelectionChange={setSelectedAccentId}
        className="flex"
        items={accentColors}
      >
        {(item) => {
          return (
            <ListBoxItem
              id={item.id}
              textValue={item.textValue}
              className="flex w-10 flex-col items-center  justify-start gap-2 rounded text-xs"
            >
              <span
                id={item.id}
                className={`size-4 rounded-full outline outline-1 -outline-offset-1 outline-black/20 ${item.id === [...selectedAccentId][0] ? `border-[5px] bg-white ${item.border}` : item.bg}`}
              ></span>

              {item.id === [...selectedAccentId][0] && item.textValue}
            </ListBoxItem>
          );
        }}
      </ListBox>
    </div>
  );
}

function SwitchThemes() {
  return (
    <div className="flex justify-between">
      <Text className="text-foreground">Appearance</Text>
      <ListBox
        disallowEmptySelection
        aria-label="Choose your theme"
        selectionMode="single"
        defaultSelectedKeys={['light']}
        className="flex gap-4"
      >
        <ListBoxItem
          id="light"
          className="rounded-md px-2"
          textValue="Light"
          aria-label="Light"
        >
          <LightTheme />
        </ListBoxItem>

        <ListBoxItem
          id="dark"
          className="rounded-md px-2"
          textValue="Dark"
          aria-label="Dark"
        >
          <DarkTheme />
        </ListBoxItem>

        <ListBoxItem
          id="system"
          className="rounded-md px-2"
          textValue="System"
          aria-label="System"
        >
          <SystemTheme />
        </ListBoxItem>
      </ListBox>
    </div>
  );
}

function LightTheme() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex rounded-xl border-2 border-transparent  p-0.5 group-selected:border-accent">
        <div className="flex w-32 flex-col gap-2 overflow-hidden rounded-lg border bg-white ps-2 pt-4">
          <div className="h-6 w-1/2 rounded-sm border border-zinc-200 bg-zinc-100 p-1.5">
            <div className="h-full rounded-sm bg-accent"></div>
          </div>

          <div className="ms-auto flex h-8 w-3/4 flex-1 overflow-hidden rounded-tl-md border-t border-zinc-200 bg-white shadow-sm">
            <div className="flex h-8 w-3/5 gap-1 bg-zinc-100 px-2 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
            </div>

            <div className="h-8 w-2/5"></div>
          </div>
        </div>
      </div>

      <div className="text-sm leading-6 text-muted group-selected:font-semibold group-selected:text-foreground">
        Light
      </div>
    </div>
  );
}

function DarkTheme() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex rounded-xl border-2 border-transparent p-0.5 group-selected:border-accent">
        <div className="flex w-32 flex-col gap-2 overflow-hidden rounded-lg border bg-zinc-900 ps-2 pt-4 ">
          <div className="h-6 w-1/2 rounded-sm border border-zinc-700 bg-zinc-700 p-1.5">
            <div className="h-full rounded-sm bg-accent"></div>
          </div>

          <div className="ms-auto flex flex h-8 w-3/4 flex-1 rounded-tl-md border-t border-zinc-800 bg-zinc-800 shadow-sm">
            <div className="flex h-8 w-3/5 gap-1 bg-zinc-700/20 p-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
            </div>

            <div className="h-8 w-2/5"></div>
          </div>
        </div>
      </div>

      <div className="text-sm leading-6 text-muted group-selected:text-foreground">
        Dark
      </div>
    </div>
  );
}

function SystemTheme() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex rounded-xl border-2 border-transparent p-0.5 group-selected:border-accent">
        <div className="flex w-32">
          <div className="flex flex-1 flex-col gap-2 overflow-hidden rounded-l-lg border-b border-l border-t bg-white ps-2 pt-4">
            <div className="h-6 rounded-l-sm border border-zinc-200 bg-zinc-100 p-1.5">
              <div className="h-full rounded-sm bg-accent"></div>
            </div>

            <div className="ms-auto flex h-8 w-3/4 flex-1 rounded-tl-md border-l border-t border-zinc-200 bg-zinc-100 shadow-sm">
              <div className="flex h-8 gap-1 p-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 overflow-hidden rounded-r-lg border-b border-r border-t border-zinc-900 bg-zinc-900 ps-2 pt-4 dark:border-b-border dark:border-r-border dark:border-t-border">
            <div className="h-6 rounded-l-sm border border-zinc-700 bg-zinc-700 p-1.5">
              <div className="h-full rounded-sm border border-accent bg-accent"></div>
            </div>

            <div className="ms-auto flex h-8 w-3/4 flex-1 rounded-tl-md border-l border-t border-zinc-800 bg-zinc-800 shadow-sm">
              <div className="flex h-8 gap-1 p-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm leading-6 text-muted group-selected:text-foreground">
        System
      </div>
    </div>
  );
}

// mode
// allow empty selection
// group
// inside a popover
