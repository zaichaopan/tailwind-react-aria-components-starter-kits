import type { Meta } from '@storybook/react';
import { TextField } from '../../src/field.tsx';
import { SearchField, SearchInput } from '../../src/search-field.tsx';
import { docs } from '../../.storybook/docs.ts';
import { Button } from '../../src/button.tsx';
import { Strong } from '../../src/text.tsx';
import { AccessibleIcon } from '../../src/accessible-icon.tsx';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../src/menu.tsx';
import { Avatar } from '../../src/avatar.tsx';
import {
  Lightbulb,
  LogOut,
  SearchIcon,
  Settings,
  ShieldCheck,
  UserCircle,
  ChevronDownIcon,
} from 'lucide-react';
import { Modal } from '../../src/modal.tsx';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogHeader,
} from '../../src/dialog.tsx';
import { Link } from '../../src/link.tsx';
import { Kbd } from '../../src/kbd.tsx';
import {
  Disclosure,
  DisclosureControl,
  DisclosurePanel,
} from '../../src/disclosure.tsx';

const meta: Meta<typeof TextField> = {
  title: 'Layouts/Sidebar',
  parameters: {
    layout: 'fullscreen',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Sidebar = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-background md:flex-row">
      <header className="flex h-14 items-center px-4 md:hidden">
        <HamburgerMenu />

        <div className="ml-auto flex items-center gap-4 px-2">
          <SearchField aria-label="Search">
            <SearchInput className="bg-background" placeholder="Search" />
          </SearchField>
          <MenuTrigger>
            <MenuButton variant="plain">
              <Avatar
                className="size-8"
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                alt="Jessica Campbell"
              />
            </MenuButton>
            <MenuPopover placement="bottom">
              <Menu>
                <MenuItem>
                  <AccessibleIcon>
                    <UserCircle />
                  </AccessibleIcon>
                  <MenuItemLabel>My profile</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <AccessibleIcon>
                    <Settings />
                  </AccessibleIcon>
                  <MenuItemLabel>Settings</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <AccessibleIcon>
                    <ShieldCheck />
                  </AccessibleIcon>
                  <MenuItemLabel>Privacy policy</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <AccessibleIcon>
                    <Lightbulb />
                  </AccessibleIcon>
                  <MenuItemLabel>Share feedback</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <AccessibleIcon>
                    <LogOut />
                  </AccessibleIcon>
                  <MenuItemLabel>Sign out</MenuItemLabel>
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </header>

      <div className="hidden w-64 flex-col md:flex">
        <div className="flex items-center gap-x-2.5 p-6 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className="size-8"
          >
            <path
              fill="currentColor"
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M13.77 6.5a.87.87 0 0 0-.759.444L6.105 19.263a.87.87 0 0 0 0 .85l2.21 3.942a.87.87 0 0 0 .758.445h13.854a.87.87 0 0 0 .759-.445l2.209-3.942a.87.87 0 0 0 0-.85L18.989 6.944a.87.87 0 0 0-.759-.444zM16 11.401l4.653 8.287h-9.306z"
            ></path>
          </svg>
          <Strong>Acme.Co</Strong>
        </div>

        <Button
          variant="outline"
          className="mx-3 mt-2 justify-start bg-white font-medium font-normal text-muted dark:bg-zinc-900"
        >
          <AccessibleIcon>
            <SearchIcon className="size-4" />
          </AccessibleIcon>
          Search
          <Kbd className="ml-auto px-1">⌘K</Kbd>
        </Button>

        <MainNavigation />

        <div className="mt-auto flex p-4">
          <MenuTrigger>
            <MenuButton
              variant="plain"
              className="flex-1 justify-start space-x-1.5 px-2 text-sm font-medium text-muted hover:text-foreground"
            >
              <Avatar
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                alt="Jessica Campbell"
                className="size-8"
              />

              <div className="flex flex-1 items-start">Jessica Campbell</div>
            </MenuButton>
            <MenuPopover placement="top left" className="min-w-64">
              <Menu>
                <MenuItem>
                  <AccessibleIcon>
                    <UserCircle />
                  </AccessibleIcon>
                  <MenuItemLabel>My profile</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <AccessibleIcon>
                    <Settings />
                  </AccessibleIcon>
                  <MenuItemLabel>Settings</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <AccessibleIcon>
                    <ShieldCheck />
                  </AccessibleIcon>
                  <MenuItemLabel>Privacy policy</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <AccessibleIcon>
                    <Lightbulb />
                  </AccessibleIcon>
                  <MenuItemLabel>Share feedback</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <AccessibleIcon>
                    <LogOut />
                  </AccessibleIcon>
                  <MenuItemLabel>Sign out</MenuItemLabel>
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </div>

      <main className="flex-1 border-l border-l-border/50 bg-background p-6 dark:bg-zinc-900 lg:p-10">
        <div className="max-w-6xl">{/*  */}</div>
      </main>
    </div>
  );
};

function HamburgerMenu() {
  return (
    <DialogTrigger>
      <Button variant="plain" isIconOnly className="text-muted lg:hidden">
        <AccessibleIcon aria-label="Open Navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </AccessibleIcon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog>
          <DialogHeader>
            <div className="flex items-center gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M13.77 6.5a.87.87 0 0 0-.759.444L6.105 19.263a.87.87 0 0 0 0 .85l2.21 3.942a.87.87 0 0 0 .758.445h13.854a.87.87 0 0 0 .759-.445l2.209-3.942a.87.87 0 0 0 0-.85L18.989 6.944a.87.87 0 0 0-.759-.444zM16 11.401l4.653 8.287h-9.306z"
                ></path>
              </svg>
              <Strong>ACME.Co</Strong>
            </div>
          </DialogHeader>
          <DialogCloseButton />

          <DialogBody className="px-0">
            <MainNavigation />
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

function MainNavigation() {
  return (
    <nav>
      <ul className="grid gap-y-0.5 p-4">
        <li>
          <Link
            href="/"
            className="w-full gap-3 p-2 font-medium text-muted hover:no-underline"
          >
            <AccessibleIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
            </AccessibleIcon>
            Home
          </Link>
        </li>

        <li className="grid ">
          <Disclosure defaultExpanded>
            <DisclosureControl className="w-full gap-3 p-2 text-sm/6 font-medium">
              <AccessibleIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="size-5"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"
                  ></path>
                </svg>
              </AccessibleIcon>
              Authentications
              <AccessibleIcon>
                <ChevronDownIcon className="ml-auto size-4 transition-all  group-aria-[expanded=true]:rotate-180" />
              </AccessibleIcon>
            </DisclosureControl>
            <DisclosurePanel>
              <ul className="ml-7 grid gap-y-0.5">
                <li>
                  <Link
                    href="/"
                    className="w-full py-1.5 pl-3 font-medium hover:no-underline"
                  >
                    Email, Phone, Username
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Social Connections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Web3
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Enterprise Connections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Multi-factor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Restrictions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full py-2 pl-3 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Attack Protection
                  </Link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <li>
          <Link
            href="/"
            className="w-full flex-1 gap-3 p-2 font-medium text-muted hover:text-foreground hover:no-underline"
          >
            <AccessibleIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.785 6L18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215zM4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5"
                ></path>
              </svg>
            </AccessibleIcon>
            Integrations
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="w-full gap-3 p-2 font-medium text-muted hover:text-foreground hover:no-underline"
          >
            <AccessibleIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                className="size-5"
              >
                <path
                  fill="currentColor"
                  d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                ></path>
              </svg>
            </AccessibleIcon>
            Notifications
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="w-full gap-3 p-2 font-medium text-muted hover:text-foreground hover:no-underline"
          >
            <AccessibleIcon>
              <Settings className="size-5" />
            </AccessibleIcon>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
