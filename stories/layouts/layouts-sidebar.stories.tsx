import type { Meta } from '@storybook/react';
import { TextField } from '../../src/field.tsx';
import { SearchField, SearchInput } from '../../src/search-field.tsx';
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
  Lightbulb,
  LogOut,
  MenuIcon,
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
} from '../../src/dialog.tsx';
import { Link } from '../../src/link.tsx';
import { Kbd } from '../../src/kbd.tsx';
import { Disclosure, DisclosureControl } from '../../src/disclosure.tsx';

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
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 dark:bg-background md:flex-row">
      <header className="flex h-14 items-center md:hidden">
        <HamburgerMenu />

        <div className="ml-auto flex items-center gap-4 px-2">
          <SearchField aria-label="Search">
            <SearchInput className="bg-background" placeholder="Search" />
          </SearchField>
          <MenuTrigger>
            <MenuButton noIndicator variant="unstyle">
              <Avatar
                className="size-8"
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                alt="Jane"
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

      <div className="hidden w-64 flex-col px-2.5 py-4 md:flex">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-x-2.5 px-1">
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
            className="justify-start gap-4 px-2 font-normal text-muted"
          >
            <AccessibleIcon>
              <SearchIcon />
            </AccessibleIcon>
            Quick search&hellip;
            <Kbd className="ml-auto px-1">⌘K</Kbd>
          </Button>
        </div>

        <nav className="mt-6 flex flex-col">
          <ul className="flex flex-1 flex-col gap-y-1">
            <li className="flex flex-1">
              <Link
                href="/"
                className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
              >
                <AccessibleIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      color="currentColor"
                    >
                      <path d="M12 17h.009M20 8.5v5c0 3.771 0 5.657-1.172 6.828S15.771 21.5 12 21.5s-5.657 0-6.828-1.172S4 17.271 4 13.5v-5"></path>
                      <path d="m22 10.5l-4.343-4.165C14.99 3.778 13.657 2.5 12 2.5S9.01 3.778 6.343 6.335L2 10.5"></path>
                    </g>
                  </svg>
                </AccessibleIcon>
                Home
              </Link>
            </li>

            <li className="flex flex-1 flex-col">
              <Disclosure open>
                <DisclosureControl className="flex-1 items-center gap-x-2 px-2 py-1 text-sm/6 text-muted group-open:text-foreground ">
                  <AccessibleIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="size-4"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                      ></path>
                    </svg>
                  </AccessibleIcon>
                  User & Authentications
                  <AccessibleIcon>
                    <ChevronDownIcon className="ml-auto size-4 transition-all  group-open:rotate-180" />
                  </AccessibleIcon>
                </DisclosureControl>

                <ul className="ml-8 mt-2 flex flex-1 flex-col space-y-1 border-l border-l-border/50">
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-foreground hover:text-foreground hover:no-underline"
                    >
                      Email, Phone, Username
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Social Connections
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Web3
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Enterprise Connections
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Multi-factor
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Restrictions
                    </Link>
                  </li>
                  <li className="flex flex-1">
                    <Link
                      href="/broadcasts"
                      className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                    >
                      Attack Protection
                    </Link>
                  </li>
                </ul>
              </Disclosure>
            </li>
          </ul>

          <Separator className="my-4 border-foreground/5" />

          <ul className="flex flex-1 flex-col gap-y-1.5">
            <li className="flex flex-1">
              <Link
                href="/"
                className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
              >
                <AccessibleIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4"
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
            <li className="flex flex-1">
              <Link
                href="/broadcasts"
                className="flex-1 gap-2 px-2 py-1 text-muted hover:text-foreground hover:no-underline"
              >
                <AccessibleIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="size-4"
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
            <li className="flex flex-1">
              <Link
                href="/broadcasts"
                className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
              >
                <AccessibleIcon>
                  <Settings className="size-4" />
                </AccessibleIcon>
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto flex">
          <MenuTrigger>
            <MenuButton
              noIndicator
              variant="unstyle"
              className="mt-auto flex flex-1 items-center justify-start space-x-1.5 p-1.5 text-sm font-medium text-muted hover:text-foreground"
            >
              <Avatar
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                alt="Jane"
                className="size-8"
              />

              <div className="flex flex-1 items-start font-medium text-muted">
                Jessica Campbell
              </div>
              <AccessibleIcon>
                <ChevronDownIcon className="size-4 text-muted" />
              </AccessibleIcon>
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

      <main className="flex-1 border-l border-l-border/50  bg-background p-6 dark:bg-zinc-900 lg:p-10">
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
          <MenuIcon />
        </AccessibleIcon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog>
          <DialogCloseButton />
          <DialogBody className="px-0 py-6">
            <div className="flex items-center gap-2.5 px-6">
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

            <Separator className="my-4" />

            <nav className="flex flex-col px-4">
              <ul className="flex flex-1 flex-col gap-y-1">
                <li className="flex flex-1">
                  <Link
                    href="/"
                    className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    <AccessibleIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="size-4"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          color="currentColor"
                        >
                          <path d="M12 17h.009M20 8.5v5c0 3.771 0 5.657-1.172 6.828S15.771 21.5 12 21.5s-5.657 0-6.828-1.172S4 17.271 4 13.5v-5"></path>
                          <path d="m22 10.5l-4.343-4.165C14.99 3.778 13.657 2.5 12 2.5S9.01 3.778 6.343 6.335L2 10.5"></path>
                        </g>
                      </svg>
                    </AccessibleIcon>
                    Home
                  </Link>
                </li>

                <li className="flex flex-1 flex-col">
                  <Disclosure open>
                    <DisclosureControl className="flex-1 items-center justify-start gap-x-2 px-2 py-1 text-sm/6 font-medium text-muted group-open:text-foreground ">
                      <AccessibleIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="size-4"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                          ></path>
                        </svg>
                      </AccessibleIcon>
                      User & Authentications
                      <AccessibleIcon>
                        <ChevronDownIcon className="ml-6 size-4 transition-all  group-open:rotate-180" />
                      </AccessibleIcon>
                    </DisclosureControl>

                    <ul className="ml-8 mt-2 flex flex-1 flex-col space-y-1 border-l border-l-border/40">
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium font-medium hover:text-foreground hover:no-underline"
                        >
                          Email, Phone, Username
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Social Connections
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Web3
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Enterprise Connections
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Multi-factor
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Restrictions
                        </Link>
                      </li>
                      <li className="flex flex-1">
                        <Link
                          href="/broadcasts"
                          className="ml-3 flex-1 gap-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                        >
                          Attack Protection
                        </Link>
                      </li>
                    </ul>
                  </Disclosure>
                </li>
              </ul>

              <Separator className="my-4 border-foreground/5" />

              <ul className="flex flex-1 flex-col gap-y-1.5">
                <li className="flex flex-1">
                  <Link
                    href="/"
                    className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    <AccessibleIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="size-4"
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
                <li className="flex flex-1">
                  <Link
                    href="/broadcasts"
                    className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    <AccessibleIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        className="size-4"
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
                <li className="flex flex-1">
                  <Link
                    href="/broadcasts"
                    className="flex-1 gap-2 px-2 py-1 font-medium text-muted hover:text-foreground hover:no-underline"
                  >
                    <AccessibleIcon>
                      <Settings className="size-4" />
                    </AccessibleIcon>
                    Settings
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
