import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import {
  ComboBox,
  ComboBoxListBox,
  ComboBoxPopover,
  ComboBoxClearButton,
  ComboBoxSection,
  ComboBoxGroup,
  ComboBoxInput,
  CommandButton,
  ComboBoxListItem,
} from '../src/combobox';
import { docs } from '../.storybook/docs';
import { Search } from 'lucide-react';
import { AccessibleIcon } from '../src/accessible-icon';
import { Modal } from '../src/modal';
import { Dialog } from '../src/dialog';
import { Text } from '../src/text';

const meta: Meta<typeof Button> = {
  title: 'CommandK',

  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Combobox can be used as a `Command Menu`.',
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

export function CommandK() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <div className="h-min-screen flex w-full flex-col items-center">
      <ComboBox
        allowsCustomValue
        menuTrigger="focus"
        aria-label="Search"
        className="w-full p-4 sm:w-96"
      >
        <ComboBoxGroup>
          <AccessibleIcon>
            <Search />
          </AccessibleIcon>

          <ComboBoxInput
            ref={ref}
            placeholder="Search for apps and commands&hellip;"
            className="peer pe-12"
          />
          <CommandButton />
        </ComboBoxGroup>

        <ComboBoxPopover>
          <ComboBoxListBox
            selectionMode="none"
            renderEmptyState={() => (
              <div className="text-center">
                <Text>Not result found </Text>
              </div>
            )}
          >
            <ComboBoxSection title="Suggestion">
              <ComboBoxListItem textValue="linear">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Linear />
                  </AccessibleIcon>
                  Linear
                </div>
              </ComboBoxListItem>
              <ComboBoxListItem textValue="slack">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Slack />
                  </AccessibleIcon>
                  Slack
                </div>
              </ComboBoxListItem>
              <ComboBoxListItem textValue="youtube">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Youtube />
                  </AccessibleIcon>
                  Youtube
                </div>
              </ComboBoxListItem>
              <ComboBoxListItem textValue="raycast">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Raycast />
                  </AccessibleIcon>
                  Raycast
                </div>
              </ComboBoxListItem>
            </ComboBoxSection>
            <ComboBoxSection title="Commands">
              <ComboBoxListItem textValue="clipboard history">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Clipboard />
                  </AccessibleIcon>
                  Clipboard history
                </div>
              </ComboBoxListItem>
              <ComboBoxListItem textValue="import extension">
                <div className="flex items-center gap-x-2">
                  <AccessibleIcon>
                    <Extension />
                  </AccessibleIcon>
                  Import Extension
                </div>
              </ComboBoxListItem>
            </ComboBoxSection>
          </ComboBoxListBox>
        </ComboBoxPopover>
      </ComboBox>
    </div>
  );
}

export function OpenInDialog() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };
    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <div className="h-min-screen flex w-full flex-col">
      <div className="flex flex-1 justify-center p-6">
        <Button variant="outline" onPress={() => setIsModalOpen(true)}>
          ⌘ K
        </Button>
      </div>

      <Modal
        isDismissable
        animate={false}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        classNames={{
          modal:
            'self-start shadow-none ring-0 sm:self-start bg-transparent dark:bg-transparent dark:ring-0',
        }}
      >
        <Dialog
          aria-label="Search for apps and commands&hellip;"
          className="px-3"
        >
          <ComboBox
            allowsCustomValue
            onSelectionChange={() => {
              setIsModalOpen(false);
            }}
            menuTrigger="focus"
            aria-label="Search"
            autoFocus
            allowsEmptyCollection
            className="min-w-72"
          >
            <ComboBoxGroup>
              <AccessibleIcon>
                <Search />
              </AccessibleIcon>

              <ComboBoxInput
                className="rounded-b-none border-border bg-white ring-0 dark:bg-zinc-800"
                placeholder="Search for apps and commands&hellip;"
              />

              <ComboBoxClearButton
                onPress={() => {
                  setIsModalOpen(false);
                }}
              />
            </ComboBoxGroup>

            <ComboBoxPopover
              className="rounded-t-none border border-t-0 ring-0"
              offset={0}
              isOpen
            >
              <ComboBoxListBox
                renderEmptyState={() => (
                  <div className="text-center">
                    <Text>Not result found </Text>
                  </div>
                )}
              >
                <ComboBoxSection title="Suggestion">
                  <ComboBoxListItem textValue="linear">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Linear />
                      </AccessibleIcon>
                      Linear
                    </div>
                  </ComboBoxListItem>
                  <ComboBoxListItem textValue="slack">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Slack />
                      </AccessibleIcon>
                      Slack
                    </div>
                  </ComboBoxListItem>
                  <ComboBoxListItem textValue="youtube">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Youtube />
                      </AccessibleIcon>
                      Youtube
                    </div>
                  </ComboBoxListItem>
                  <ComboBoxListItem textValue="raycast">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Raycast />
                      </AccessibleIcon>
                      Raycast
                    </div>
                  </ComboBoxListItem>
                </ComboBoxSection>
                <ComboBoxSection title="Commands">
                  <ComboBoxListItem textValue="clipboard history">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Clipboard />
                      </AccessibleIcon>
                      Clipboard history
                    </div>
                  </ComboBoxListItem>
                  <ComboBoxListItem textValue="import extension">
                    <div className="flex items-center gap-x-2">
                      <AccessibleIcon>
                        <Extension />
                      </AccessibleIcon>
                      Import Extension
                    </div>
                  </ComboBoxListItem>
                </ComboBoxSection>
              </ComboBoxListBox>
            </ComboBoxPopover>
          </ComboBox>
        </Dialog>
      </Modal>
    </div>
  );
}

function Extension() {
  return (
    <svg
      className="size-4 rounded bg-green-500 p-0.5 text-white"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.73762 6.19288L2.0488 11.2217C1.6504 11.649 1.6504 12.3418 2.0488 12.769L3.13083 13.9295C3.52923 14.3568 4.17515 14.3568 4.57355 13.9295L9.26238 8.90071M6.73762 6.19288L7.0983 5.80605C7.4967 5.37877 7.4967 4.686 7.0983 4.25872L6.01627 3.09822L6.37694 2.71139C7.57213 1.42954 9.50991 1.42954 10.7051 2.71139L13.9512 6.19288C14.3496 6.62017 14.3496 7.31293 13.9512 7.74021L12.8692 8.90071C12.4708 9.328 11.8248 9.328 11.4265 8.90071L11.0658 8.51388C10.6674 8.0866 10.0215 8.0866 9.62306 8.51388L9.26238 8.90071M6.73762 6.19288L9.26238 8.90071"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function Youtube() {
  return (
    <svg
      className="size-4 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill="currentColor"
    >
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  );
}

function Clipboard() {
  return (
    <svg
      className="size-4 rounded bg-red-500 p-0.5 text-white"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.07512 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V12.25C2.75 13.3546 3.64543 14.25 4.75 14.25H11.25C12.3546 14.25 13.25 13.3546 13.25 12.25V4.75C13.25 3.64543 12.3546 2.75 11.25 2.75H9.92488M9.88579 3.02472L9.5934 4.04809C9.39014 4.75952 8.73989 5.25 8 5.25V5.25C7.26011 5.25 6.60986 4.75952 6.4066 4.04809L6.11421 3.02472C5.93169 2.38591 6.41135 1.75 7.07573 1.75H8.92427C9.58865 1.75 10.0683 2.3859 9.88579 3.02472Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function Raycast() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 18.073V20.994L0 13.994L1.46 12.534L7 18.075V18.073ZM9.921 20.994H7L14 27.994L15.46 26.534L9.921 20.994V20.994ZM26.535 15.456L27.996 13.994L13.996 -0.00598145L12.538 1.46002L18.077 6.99802H14.73L10.864 3.14002L9.404 4.60002L11.809 7.00402H10.129V17.87H20.994V16.19L23.399 18.594L24.859 17.134L20.994 13.268V9.92102L26.534 15.456H26.535ZM7.73 6.27002L6.265 7.73202L7.833 9.29802L9.294 7.83802L7.73 6.27002ZM20.162 18.702L18.702 20.164L20.268 21.732L21.73 20.27L20.162 18.702V18.702ZM4.596 9.40402L3.134 10.866L7 14.732V11.809L4.596 9.40402ZM16.192 21H13.268L17.134 24.866L18.596 23.404L16.192 21Z"
        fill="#FF6363"
      ></path>
    </svg>
  );
}

function Linear() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className="size-4 text-purple-500"
    >
      <path d="M37.3833 39.6083C37.5686 39.7936 37.866 39.8049 38.0605 39.6291C38.3259 39.3892 38.5867 39.1414 38.8425 38.8856C47.0518 30.6763 47.0518 17.3663 38.8425 9.15699C30.6332 0.947669 17.3232 0.947669 9.11388 9.15699C8.85807 9.4128 8.61024 9.67357 8.37037 9.93897C8.19462 10.1334 8.20585 10.4309 8.39119 10.6162L37.3833 39.6083Z"></path>
      <path d="M34.6753 42.1232C34.951 41.9601 34.9928 41.5817 34.7663 41.3552L6.64432 13.2332C6.41779 13.0066 6.03942 13.0485 5.87624 13.3242C5.4889 13.9786 5.14011 14.6495 4.82985 15.3336C4.74507 15.5206 4.78727 15.74 4.93243 15.8851L32.1144 43.067C32.2595 43.2122 32.4789 43.2544 32.6659 43.1696C33.35 42.8594 34.0209 42.5106 34.6753 42.1232Z"></path>
      <path d="M28.2357 44.6093C28.6164 44.531 28.7471 44.0636 28.4722 43.7887L4.21072 19.5272C3.93591 19.2524 3.4685 19.3831 3.39015 19.7638C3.2071 20.6531 3.08205 21.552 3.01501 22.4544C3.00437 22.5976 3.05768 22.738 3.15924 22.8396L25.1599 44.8402C25.2615 44.9418 25.4018 44.9951 25.5451 44.9845C26.4475 44.9174 27.3464 44.7924 28.2357 44.6093Z"></path>
      <path d="M19.2493 44.5067C19.7204 44.6149 20.0112 44.0554 19.6694 43.7136L4.28592 28.3301C3.9441 27.9883 3.38454 28.2791 3.49282 28.7502C4.34654 32.4646 6.22023 35.9919 9.11388 38.8856C12.0075 41.7792 15.5349 43.6529 19.2493 44.5067Z"></path>
    </svg>
  );
}

function Slack() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      className="size-4"
    >
      <title>Slack</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
          fill="#44BEDF"
        ></path>
        <path
          d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
          fill="#2EB67D"
        ></path>
        <path
          d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
          fill="#ECB22E"
        ></path>
        <path
          d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
          fill="#E01E5A"
        ></path>
      </g>
    </svg>
  );
}
