import React from 'react';
import type { Selection } from 'react-aria-components';
import type { Meta } from '@storybook/react';
import {
  Menu,
  SubMenu,
  MenuSeparator,
  MenuItem,
  MenuSection,
  MenuButton,
  MenuTrigger,
  SubmenuTrigger,
  MenuPopover,
  MenuItemLabel,
  MenuItemDescription,
} from '../src/menu';
import { Switch } from '../src/switch';
import { docs } from '../.storybook/docs';
import { AccessibleIcon } from '../src/accessible-icon';
import { Small, Strong, Text } from '../src/text';
import { Avatar } from '../src/avatar';
import {
  ArchiveBox,
  ArrowRightStartOnRectangle,
  BelAlert,
  ChevronsUpDown,
  Cog8Tooth,
  CreditCard,
  DocumentDuplicate,
  EllipsisHorizontal,
  FolderPlus,
  InformationCircle,
  Moon,
  PencilSquare,
  User,
} from './~icons';
import { Kbd } from '../src/kbd';

const meta: Meta = {
  title: 'Menu',
  component: MenuTrigger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Menu.html#menu" target="_blank">`menu`</a> displays a list of actions or options that a user can choose.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MenuButtons = () => {
  return (
    <MenuTrigger>
      <MenuButton variant="solid">Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuButtons.parameters = {
  docs: {
    description: {
      story:
        'Menu Buttons are <a href="./?path=/docs/button--docs" target="_blank">`Buttons`</a>. The default style is `outline`. Use the `color` and `variant` props on the `MenuButton` component to config button style.',
    },
  },
};

export const DisabledMenuItems = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem isDisabled>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

DisabledMenuItems.parameters = {
  docs: {
    description: {
      story:
        'Use the `isDisabled` prop on the `MenuItem` to disable that item and prevent it from being selected.',
    },
  },
};

export const DisabledMenus = () => {
  return (
    <MenuTrigger>
      <MenuButton isDisabled>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

DisabledMenus.parameters = {
  docs: {
    description: {
      story:
        'Use the `isDisabled` prop on the `MenuButton` component to disable the menu.',
    },
  },
};

export const MenuPopoverPlacements = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover placement="top">
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuPopoverPlacements.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="https://react-spectrum.adobe.com/react-aria/Popover.html#placement" target="_blank">`placement`</a> prop on the `MenuPopover` component to position the menu relative to the trigger. The default replacement is `bottom`.',
    },
  },
};

export const CustomMenuWidth = (args: any) => {
  return (
    <MenuTrigger {...args}>
      <MenuButton>Options</MenuButton>
      <MenuPopover className="min-w-56">
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

CustomMenuWidth.parameters = {
  docs: {
    description: {
      story:
        'Use `min-w-*` and `max-w-*` utilities on the `MenuPopover` component to config the minimum and maximum width of the menu popover.',
    },
  },
};

export const MenuSeparators = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>New file</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Edit file</MenuItem>
          <MenuSeparator />
          <MenuItem>Delete file</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuSeparators.parameters = {
  docs: {
    description: {
      story:
        'Use the `MenuSeparator` component to render a separator between menu items.',
    },
  },
};

export const MenuDescriptions = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Copy link</MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithIcons = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <FolderPlus />
            </AccessibleIcon>
            <MenuItemLabel>New file</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <DocumentDuplicate />
            </AccessibleIcon>
            <MenuItemLabel>Copy link</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <PencilSquare />
            </AccessibleIcon>
            <MenuItemLabel>Edit file</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <ArchiveBox />
            </AccessibleIcon>
            <MenuItemLabel>Delete file </MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithMixedIconAndDescription = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <FolderPlus />
            </AccessibleIcon>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <DocumentDuplicate />
            </AccessibleIcon>
            <MenuItemLabel>Copy link</MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit file</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete file </MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithKbdShortcut = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>New file</MenuItemLabel>
            <Kbd>⌘N</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Copy link </MenuItemLabel>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete file</MenuItemLabel>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithKbdShortcutAndDescription = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
            <Kbd>⌘N</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Copy link </MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithIconKbdShortcutAndDescription = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <FolderPlus />
            </AccessibleIcon>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
            <Kbd>⌘N</Kbd>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <DocumentDuplicate />
            </AccessibleIcon>
            <MenuItemLabel>Copy link </MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <PencilSquare />
            </AccessibleIcon>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <ArchiveBox />
            </AccessibleIcon>
            <MenuItemLabel>Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const DestructiveMenuItems = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <FolderPlus />
            </AccessibleIcon>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
            <Kbd>⌘N</Kbd>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <DocumentDuplicate />
            </AccessibleIcon>
            <MenuItemLabel>Copy link </MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <PencilSquare />
            </AccessibleIcon>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem destructive>
            <AccessibleIcon>
              <ArchiveBox />
            </AccessibleIcon>
            <MenuItemLabel>Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

DestructiveMenuItems.parameters = {
  docs: {
    description: {
      story:
        'Use the `destructive` prop on the `MenuItem` component to show a destructive menu item`.',
    },
  },
};

export const WithSections = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuSection title="Actions">
            <MenuItem>New file</MenuItem>
            <MenuItem>Copy link</MenuItem>
            <MenuItem>Edit file</MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem>Delete file</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithSectionHiddenTitle = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuSection title="Actions">
            <MenuItem>
              <AccessibleIcon>
                <FolderPlus />
              </AccessibleIcon>
              <MenuItemLabel>New file</MenuItemLabel>
              <MenuItemDescription>Create a new file</MenuItemDescription>
              <Kbd>⌘N</Kbd>
            </MenuItem>

            <MenuItem>
              <AccessibleIcon>
                <DocumentDuplicate />
              </AccessibleIcon>
              <MenuItemLabel>Copy link</MenuItemLabel>
              <MenuItemDescription>Copy the file link</MenuItemDescription>
              <Kbd>⌘C</Kbd>
            </MenuItem>
            <MenuItem>
              <AccessibleIcon>
                <PencilSquare />
              </AccessibleIcon>
              <MenuItemLabel>Edit file</MenuItemLabel>
              <MenuItemDescription>
                Allows you to edit the file
              </MenuItemDescription>
              <Kbd>⌘⇧E</Kbd>
            </MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem>
              <AccessibleIcon>
                <ArchiveBox />
              </AccessibleIcon>

              <MenuItemLabel>Delete file</MenuItemLabel>
              <MenuItemDescription>
                Permanently delete the file
              </MenuItemDescription>
              <Kbd>⌘⇧D</Kbd>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithSections.parameters = {
  docs: {
    description: {
      story:
        'Use the `MenuSection` component with the `title` prop to group menu items into sections.',
    },
  },
};

export const WithIconTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton noIndicator variant="plain" isIconOnly>
        <AccessibleIcon>
          <EllipsisHorizontal />
        </AccessibleIcon>
      </MenuButton>
      <MenuPopover placement="bottom start">
        <Menu>
          <MenuItem>View Report</MenuItem>
          <MenuItem>Analyze Trend</MenuItem>
          <MenuSeparator />
          <MenuItem>Export Data</MenuItem>
          <MenuItem>Set Alerts</MenuItem>
          <MenuItem>Customize Alerts</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithIconTrigger.parameters = {
  docs: {
    description: {
      story:
        'Add the `Icon` component to the `MenuButton` component with the `aria-label` and `noIndicator` prop to make an icon-only menu trigger.',
    },
  },
};

export const WithAvatarTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton noIndicator variant='unstyle'>
        <Avatar
          className="rounded-full"
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Jane"
        />
      </MenuButton>
      <MenuPopover placement="bottom start">
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <User />
            </AccessibleIcon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <Cog8Tooth />
            </AccessibleIcon>
            <MenuItemLabel>Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <BelAlert />
            </AccessibleIcon>
            <MenuItemLabel>Notifications</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <CreditCard />
            </AccessibleIcon>
            <MenuItemLabel>Billing</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <InformationCircle />
            </AccessibleIcon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <Moon />
            </AccessibleIcon>
            <MenuItemLabel>Dark mode</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <ArrowRightStartOnRectangle />
            </AccessibleIcon>
            <MenuItemLabel>Sign out</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithAvatarTrigger.parameters = {
  docs: {
    description: {
      story:
        'Add the `Avatar` component to the `MenuButton` component with the `unstyled` prop to use an avatar as the menu trigger.',
    },
  },
};

export const WithCustomTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton
       variant='unstyle'
        noIndicator
        className="flex items-center rounded-xl border border-transparent py-1 pe-2 ps-1 hover:border hover:border-border"
        aria-label="Whitney"
      >
        <Avatar
          alt="Whitney"
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ></Avatar>
        <div className="me-12 ms-2 flex flex-col justify-center">
          <Strong className="self-start sm:leading-5">Julienne</Strong>
          <Small className="self-start sm:leading-5">
            jlangstrath@example.com
          </Small>
        </div>
        <AccessibleIcon>
          <ChevronsUpDown className="size-4 text-muted/75" />
        </AccessibleIcon>
      </MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <AccessibleIcon>
              <User />
            </AccessibleIcon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <Cog8Tooth />
            </AccessibleIcon>
            <MenuItemLabel>Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <BelAlert />
            </AccessibleIcon>
            <MenuItemLabel>Notifications</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <CreditCard />
            </AccessibleIcon>
            <MenuItemLabel>Billing</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <InformationCircle />
            </AccessibleIcon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <Moon />
            </AccessibleIcon>
            <MenuItemLabel>Dark mode</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <ArrowRightStartOnRectangle />
            </AccessibleIcon>
            <MenuItemLabel>Sign out</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithCustomTrigger.parameters = {
  docs: {
    description: {
      story:
        'Use `variant="unstyle"` prop on the `MenuButton` component to render your own custom menu trigger.',
    },
  },
};

export const WithLink = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem href="https://adobe.com/" target="_blank">
            Adobe
          </MenuItem>
          <MenuItem href="https://apple.com/" target="_blank">
            Apple
          </MenuItem>
          <MenuItem href="https://google.com/" target="_blank">
            Google
          </MenuItem>
          <MenuItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithLink.parameters = {
  docs: {
    description: {
      story:
        'Use the `href` prop on the `MenuItem` component to render a menu item as a link.',
    },
  },
};

export const SubMenus = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem id="new">New…</MenuItem>
          <MenuItem id="open">Open…</MenuItem>
          <MenuSeparator />
          <MenuItem id="save">Save</MenuItem>
          <MenuItem id="saveAs">Save as…</MenuItem>
          <MenuSeparator />
          <MenuItem id="print">Print…</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Email</MenuItem>
            <MenuPopover>
              <SubMenu aria-label="Email">
                <MenuItem>Work</MenuItem>
                <MenuItem>Personal</MenuItem>
              </SubMenu>
            </MenuPopover>
          </SubmenuTrigger>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

SubMenus.parameters = {
  docs: {
    description: {
      story:
        'Use the `SubmenuTrigger` and `SubMenu` component to render a sub menu.',
    },
  },
};

export const SubMenuOnMobile = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem id="new">New…</MenuItem>
          <MenuItem id="open">Open…</MenuItem>
          <MenuSeparator />
          <MenuItem id="save">Save</MenuItem>
          <MenuItem id="saveAs">Save as…</MenuItem>
          <MenuSeparator />
          <MenuItem id="print">Print…</MenuItem>
          <SubmenuTrigger>
            <MenuItem className="sm:hidden">Email</MenuItem>
            <MenuPopover className="sm:hidden" placement="bottom">
              <SubMenu aria-label="Email">
                <MenuItem>Work</MenuItem>
                <MenuItem>Personal</MenuItem>
              </SubMenu>
            </MenuPopover>
          </SubmenuTrigger>
          <SubmenuTrigger>
            <MenuItem className="hidden sm:flex">Email</MenuItem>
            <MenuPopover className="hidden sm:block">
              <SubMenu aria-label="Email">
                <MenuItem>Work</MenuItem>
                <MenuItem>Personal</MenuItem>
              </SubMenu>
            </MenuPopover>
          </SubmenuTrigger>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

SubMenuOnMobile.parameters = {
  docs: {
    description: {
      story:
        'To show submenu properly small screen, duplicate your `Submenu` with `placement="bottom"` and show it in small screen.',
    },
  },
};

export const SingleSelection = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['left']));

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
          <MenuItem id="left1">Left</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

SingleSelection.parameters = {
  docs: {
    description: {
      story:
        'Use `sectionMode="single"` and `defaultSelectedKey` on the `Menu` component to supports single selection.',
    },
  },
};

export const SingleSectionWithDescription = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['copy_link']),
  );

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="new_file">
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
            <Kbd>⌘N</Kbd>
          </MenuItem>

          <MenuItem id="copy_link">
            <MenuItemLabel>Copy link</MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel id="edit_file">Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel id="delete_file">Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSectionWithIcon = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['copy_link']),
  );

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="new_file">
            <AccessibleIcon>
              <FolderPlus />
            </AccessibleIcon>
            <MenuItemLabel>New file</MenuItemLabel>
            <MenuItemDescription>Create a new file</MenuItemDescription>
            <Kbd>⌘N</Kbd>
          </MenuItem>

          <MenuItem id="copy_link">
            <AccessibleIcon>
              <DocumentDuplicate />
            </AccessibleIcon>
            <MenuItemLabel>Copy link</MenuItemLabel>
            <MenuItemDescription>Copy the file link</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem id="edit_file">
            <AccessibleIcon>
              <PencilSquare />
            </AccessibleIcon>
            <MenuItemLabel>Edit file</MenuItemLabel>
            <MenuItemDescription>
              Allows you to edit the file
            </MenuItemDescription>
            <Kbd>⌘⇧E</Kbd>
          </MenuItem>
          <MenuItem id="delete_file">
            <AccessibleIcon>
              <ArchiveBox />
            </AccessibleIcon>

            <MenuItemLabel>Delete file</MenuItemLabel>
            <MenuItemDescription>
              Permanently delete the file
            </MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSelectionWithHeader = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['copy_link']),
  );

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Actions">
            <MenuItem id="new_file">New file</MenuItem>
            <MenuItem id="copy_link">Copy link</MenuItem>
            <MenuItem id="edit_file">Edit file</MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem id="delete_file">Delete file</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSectionWithItemDescription = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['copy_link']),
  );

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Actions">
            <MenuItem id="new_file">
              <MenuItemLabel>New file</MenuItemLabel>
              <MenuItemDescription>Create a new file</MenuItemDescription>
              <Kbd>⌘N</Kbd>
            </MenuItem>

            <MenuItem id="copy_link">
              <MenuItemLabel>Copy link</MenuItemLabel>
              <MenuItemDescription>Copy the file link</MenuItemDescription>
              <Kbd>⌘C</Kbd>
            </MenuItem>
            <MenuItem>
              <MenuItemLabel id="edit_file">Edit file</MenuItemLabel>
              <MenuItemDescription>
                Allows you to edit the file
              </MenuItemDescription>
              <Kbd>⌘⇧E</Kbd>
            </MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem>
              <MenuItemLabel id="delete_file">Delete file</MenuItemLabel>
              <MenuItemDescription>
                Permanently delete the file
              </MenuItemDescription>
              <Kbd>⌘⇧D</Kbd>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSectionWithHeaderIconAndDescription = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['copy_link']),
  );

  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Actions">
            <MenuItem id="new_file">
              <AccessibleIcon>
                <FolderPlus />
              </AccessibleIcon>
              <MenuItemLabel>New file</MenuItemLabel>
              <MenuItemDescription>Create a new file</MenuItemDescription>
              <Kbd>⌘N</Kbd>
            </MenuItem>

            <MenuItem id="copy_link">
              <AccessibleIcon>
                <DocumentDuplicate />
              </AccessibleIcon>
              <MenuItemLabel>Copy link</MenuItemLabel>
              <MenuItemDescription>Copy the file link</MenuItemDescription>
              <Kbd>⌘C</Kbd>
            </MenuItem>
            <MenuItem id="edit_file">
              <AccessibleIcon>
                <PencilSquare />
              </AccessibleIcon>
              <MenuItemLabel>Edit file</MenuItemLabel>
              <MenuItemDescription>
                Allows you to edit the file
              </MenuItemDescription>
              <Kbd>⌘⇧E</Kbd>
            </MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem id="delete_file">
              <AccessibleIcon>
                <ArchiveBox />
              </AccessibleIcon>

              <MenuItemLabel>Delete file</MenuItemLabel>
              <MenuItemDescription>
                Permanently delete the file
              </MenuItemDescription>
              <Kbd>⌘⇧D</Kbd>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MultiSelections = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console']),
  );

  return (
    <>
      <Text className="w-64 pb-4 pt-2">
        Current selection (controlled): {[...selected].join(', ')}
      </Text>

      <MenuTrigger>
        <MenuButton>Options</MenuButton>
        <MenuPopover>
          <Menu
            selectedKeys={selected}
            onSelectionChange={setSelected}
            selectionMode="multiple"
          >
            <MenuItem id="sidebar">Sidebar</MenuItem>
            <MenuItem id="searchbar">Searchbar</MenuItem>
            <MenuItem id="tools">Tools</MenuItem>
            <MenuItem id="console">Console</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </>
  );
};

MultiSelections.parameters = {
  docs: {
    description: {
      story:
        'Use `sectionMode="multiple"` and `defaultSelectedKey` on the `Menu` component to supports multi selections.',
    },
  },
};

export const MenuHeaders = () => {
  return (
    <MenuTrigger>
      <MenuButton>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <div className="flex flex-col">
              <Small>Signed in as Tony Reichert</Small>
              <Strong>@tonyreichert</Strong>
            </div>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Team Settings</MenuItem>
          <MenuItem>Analytics</MenuItem>
          <MenuItem>System</MenuItem>
          <MenuItem>Configuration</MenuItem>
          <MenuItem> Help & Feedback</MenuItem>
          <MenuItem>Log Out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ControlledMenuOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <MenuTrigger>
      <MenuButton onPress={() => setOpen((prev) => !prev)}>Options</MenuButton>
      <MenuPopover isOpen={isOpen} onOpenChange={setOpen}>
        <Menu
          onAction={(key) => {
            if (key === 'dark_mode') {
              setDarkMode((prev) => !prev);
              return;
            }

            setOpen(false);
          }}
        >
          <MenuItem>
            <AccessibleIcon>
              <User />
            </AccessibleIcon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <Cog8Tooth />
            </AccessibleIcon>
            <MenuItemLabel>Settings</MenuItemLabel>{' '}
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <CreditCard />
            </AccessibleIcon>
            <MenuItemLabel>Billing</MenuItemLabel>{' '}
          </MenuItem>
          <MenuItem>
            <AccessibleIcon>
              <InformationCircle />
            </AccessibleIcon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem id="dark_mode">
            <AccessibleIcon>
              <Moon />
            </AccessibleIcon>

            <Switch
              data-ui="label"
              isSelected={darkMode}
              className="flex-1 justify-between"
              labelPosition="left"
            >
              Dark mode
            </Switch>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <AccessibleIcon>
              <ArrowRightStartOnRectangle />
            </AccessibleIcon>
            <MenuItemLabel>Sign out</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

ControlledMenuOpenState.parameters = {
  docs: {
    description: {
      story:
        'Use the `isOpen` and `onOpenChange` props on the `MenuPopover` component to control menu popover open state.',
    },
  },
};
