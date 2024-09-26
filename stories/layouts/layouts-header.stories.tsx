import type { Meta } from '@storybook/react';
import { TextField } from '../../src/field.tsx';
import { docs } from '../../.storybook/docs.ts';
import { Button } from '../../src/button.tsx';
import { Strong } from '../../src/text.tsx';
import { Separator } from '../../src/separator.tsx';
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
  ChevronDownIcon,
  Lightbulb,
  LogOut,
  SearchIcon,
  Settings,
  ShieldCheck,
  UserCircle,
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
import { NotificationBadge } from '../../src/notification-badge.tsx';
import { Disclosure, DisclosureControl } from '../../src/disclosure.tsx';

const meta: Meta<typeof TextField> = {
  title: 'Layouts/Header',
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

export const Header = () => {
  return (
    <div className="bg-zinc-10 flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-background">
      <header className="flex h-14 items-center px-2 md:px-6 lg:px-8">
        <HamburgerMenu />

        <div className="mx-auto flex w-full max-w-7xl">
          <div className="flex hidden space-x-4 lg:flex">
            <div className="mr-3 flex items-center gap-2">
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
              <Strong>Acme.Co</Strong>
            </div>

            <Separator orientation="vertical" className="my-2" />

            <nav className="flex">
              <ul className="flex flex-1 gap-4">
                <li className="flex">
                  <Link
                    href="/"
                    className={[
                      'p-2 font-semibold hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800',
                      'before:absolute',
                      'before:left-[8px]',
                      'before:-bottom-2',
                      "before:content-['']",
                      'before:w-[calc(100%-16px)]',
                      'before:border-b-2',
                      'before:border-accent',
                    ].join(' ')}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex">
                  <MenuTrigger>
                    <MenuButton className="px-2 sm:py-2" variant="plain">
                      Projects
                    </MenuButton>
                    <MenuPopover offset={4}>
                      <Menu>
                        <MenuItem href="#">Project 1</MenuItem>
                        <MenuItem href="#">Project 2</MenuItem>
                        <MenuItem href="#">Project 3</MenuItem>
                        <MenuItem href="#">Project 4</MenuItem>
                      </Menu>
                    </MenuPopover>
                  </MenuTrigger>
                </li>
                <li className="flex">
                  <Link
                    href="/orders"
                    className="p-2 font-semibold hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/broadcasts"
                    className="p-2 font-semibold hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Apps
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button
              variant="outline"
              className="justify-start bg-white font-normal text-muted dark:bg-transparent"
            >
              <AccessibleIcon>
                <SearchIcon />
              </AccessibleIcon>
              Quick search&hellip;
              <Kbd className="ml-auto px-1">⌘K</Kbd>
            </Button>
            <Button isIconOnly size="lg" variant="plain" className="group">
              <AccessibleIcon aria-label="New Notification">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-muted group-hover:text-foreground"
                >
                  <path
                    fill="currentColor"
                    d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                  ></path>
                </svg>
              </AccessibleIcon>

              <NotificationBadge show className="right-2 top-1.5" />
            </Button>
            <MenuTrigger>
              <MenuButton variant="plain">
                <Avatar
                  className="size-8"
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                  alt="Jessica Campbell"
                />
              </MenuButton>
              <MenuPopover placement="bottom end" className="min-w-64" offset={4}>
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
      </header>
      <main className="flex-1 border-t border-border/65 bg-background p-6 dark:bg-zinc-900 lg:p-8">
        <div className="mx-auto max-w-7xl"></div>
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
            <nav>
              <ul className="grid gap-y-0.5 p-4">
                <li>
                  <Link
                    href="/"
                    className="w-full p-2 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Home
                  </Link>
                </li>

                <li className="grid ">
                  <Disclosure>
                    <DisclosureControl className="flex-1 items-center p-2 text-sm/6 text-muted group-open:mb-0 group-open:text-foreground ">
                      Projects
                      <AccessibleIcon>
                        <ChevronDownIcon className="ml-auto size-4 transition-all  group-open:rotate-180" />
                      </AccessibleIcon>
                    </DisclosureControl>

                    <ul className="ml-2.5 grid border-l border-l-border/50">
                      <li>
                        <Link
                          href="/"
                          className="w-full py-2 pl-4 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Project 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="w-full py-2 pl-4 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Project 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="w-full py-2 pl-4 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Project 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="w-full py-2 pl-4 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Project 4
                        </Link>
                      </li>
                    </ul>
                  </Disclosure>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-full flex-1 p-2 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Integrations
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="w-full p-2 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    Apps
                  </Link>
                </li>
              </ul>
            </nav>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
