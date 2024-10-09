import React from 'react';
import type { Meta } from '@storybook/react';
import { Modal } from '../src/modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogCloseButton,
} from '../src/dialog';
import { Button } from '../src/button';
import { Form } from '../src/form';
import {
  Description,
  FieldError,
  Input,
  InputGroup,
  Label,
  LabeledGroup,
  TextArea,
  TextField,
} from '../src/field';
import {
  MenuButton,
  MenuTrigger,
  Menu,
  MenuItem,
  MenuPopover,
  MenuSection,
} from '../src/menu';
import { Bell, Star } from 'lucide-react';
import { Tab, TabList, TabPanel, Tabs } from '../src/tabs';
import { TooltipTrigger, Tooltip } from '../src/tooltip';
import { Text } from '../src/text';
import { docs } from '../.storybook/docs';
import { Heading } from '../src/heading';
import { CopyButton } from '../src/clipboard';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';
import { AccessibleIcon } from '../src/accessible-icon';
import { Checkbox } from '../src/checkbox';

const meta: Meta = {
  title: 'Dialog',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html#dialog" target="_blank">`dialog`</a> is an overlay shown above other content in an application.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton/>
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const DialogSizes = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal size="xl">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

DialogSizes.parameters = {
  docs: {
    description: {
      story:
        'Use `size="xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | fullWidth"` on the`Modal` component to change the side of dialog. \n\nDefault `dialog` size is `lg`. Default `alert` dialog size is `md`.',
    },
  },
};

export const FullWidth = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal size="fullWidth">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const CustomHeaders = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal>
        <Dialog>
          <DialogHeader className="space-x-2">
            <AccessibleIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-6 text-muted"
              >
                <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
              </svg>
            </AccessibleIcon>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

CustomHeaders.parameters = {
  docs: {
    description: {
      story:
        'Use the `DialogTitle` component to compose header contains non text elements.',
    },
  },
};

export const NoHeader = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal size="md">
        <Dialog>
          <DialogBody className="pt-8">
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

NoHeader.parameters = {
  docs: {
    description: {
      story:
        'Without `DialogHeader`, dialog trigger button text will be used as dialog header.',
    },
  },
};

export const AutoFocusElements = (args: any) => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal {...args} size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

AutoFocusElements.parameters = {
  docs: {
    description: {
      story:
        'Add the `autoFocus` prop to any focusable element in the dialog to automatically focus it when the dialog opens. Use <a href="https://react-spectrum.adobe.com/react-aria/FocusScope.html#focusscope" target="_blank">`FocusScope`</a> if autofocus not working properly in some edge cases.',
    },
  },
};

AutoFocusElements.storyName = 'Auto-focusing elements';

export const WithIsDismissableAndKeyboardDismissDisabled = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal isDismissable isKeyboardDismissDisabled size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

WithIsDismissableAndKeyboardDismissDisabled.parameters = {
  docs: {
    description: {
      story:
        'Use the `isDismissable` prop of the `Modal` component to control whether the dialog can be closed by clicking outside. Default `false`. \n\nUse the `isKeyboardDismissDisabled` prop of the `Modal` to control whether the dialog can be closed by `ESC` key. Default `false`.',
    },
  },
};

export const WithScrollingContent = () => {
  return (
    <DialogTrigger>
      <Button>Terms Service</Button>
      <Modal isDismissable size="xl">
        <Dialog>
          <DialogHeader>Sample free terms of service template</DialogHeader>
          <DialogBody>
            <Text>
              This generic terms of service template will help you see how
              everything we talked about so far comes together to form a legal
              agreement. Keep in mind that this is just an example terms of
              service template and does not cover many of the important topics.
            </Text>
            <Heading level={3} className="mt-4">
              Privacy Policy
            </Heading>
            <Text className="text-foreground">
              Before you continue using our website we advise you to read our
              privacy policy [link to privacy policy] regarding our user data
              collection. It will help you better understand our practices.
            </Text>
            <Heading level={3} className="mt-4">
              Copyright
            </Heading>
            <Text className="text-foreground">
              Content published on this website (digital downloads, images,
              texts, graphics, logos) is the property of [name] and/or its
              content creators and protected by international copyright laws.
              The entire compilation of the content found on this website is the
              exclusive property of [name], with copyright authorship for this
              compilation by [name].
            </Text>
            <Heading level={3} className="mt-4">
              Communications
            </Heading>
            <Text className="text-foreground">
              The entire communication with us is electronic. Every time you
              send us an email or visit our website, you are going to be
              communicating with us. You hereby consent to receive
              communications from us. If you subscribe to the news on our
              website, you are going to receive regular emails from us. We will
              continue to communicate with you by posting news and notices on
              our website and by sending you emails. You also agree that all
              notices, disclosures, agreements, and other communications we
              provide to you electronically meet the legal requirements that
              such communications be in writing.
            </Text>
            <Heading level={3} className="mt-4">
              Applicable Law
            </Heading>
            <Text className="text-foreground">
              By visiting this website, you agree that the laws of the [your
              location], without regard to principles of conflict laws, will
              govern these terms of service, or any dispute of any sort that
              might come between [name] and you, or its business partners and
              associates.
            </Text>
            <Heading level={3} className="mt-4">
              Disputes
            </Heading>
            <Text className="text-foreground">
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court [your location] and you consent to exclusive
              jurisdiction and venue of such courts.
            </Text>
            <Heading level={3} className="mt-4">
              Comments, Reviews, and Emails
            </Heading>
            <Text className="text-foreground">
              Visitors may post content as long as it is not obscene, illegal,
              defamatory, threatening, infringing of intellectual property
              rights, invasive of privacy, or injurious in any other way to
              third parties. Content has to be free of software viruses,
              political campaigns, and commercial solicitation. We reserve all
              rights (but not the obligation) to remove and/or edit such
              content. When you post your content, you grant [name]
              non-exclusive, royalty-free and irrevocable right to use,
              reproduce, publish, modify such content throughout the world in
              any media.
            </Text>
            <Heading level={3} className="mt-4">
              License and Site Access
            </Heading>
            <Text className="text-foreground">
              We grant you a limited license to access and make personal use of
              this website. You are not allowed to download or modify it. This
              may be done only with written consent from us.
            </Text>
            <Heading level={3} className="mt-4">
              User Account
            </Heading>
            <Text className="text-foreground">
              If you are an owner of an account on this website, you are solely
              responsible for maintaining the confidentiality of your private
              user details (username and password). You are responsible for all
              activities that occur under your account or password. We reserve
              all rights to terminate accounts, edit or remove content and
              cancel orders at their sole discretion.
            </Text>
          </DialogBody>

          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button>I agree</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

WithScrollingContent.parameters = {
  docs: {
    description: {
      story:
        'Long content within the `DialogBody` component automatically becomes scrollable.',
    },
  },
};

export const WithControlledOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <MenuTrigger>
        <MenuButton>Options</MenuButton>
        <MenuPopover className="animate-none">
          <Menu>
            <MenuItem onAction={() => setOpen(true)}>Edit profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <Modal isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};

WithControlledOpenState.parameters = {
  docs: {
    description: {
      story:
        'Use the `isOpen` and `onOpenChange`  prop of the `Modal` component to control dialog open state.',
    },
  },
};

export const NestedDialogs = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    React.useState(false);
  const [post, setPost] = React.useState('');

  return (
    <div>
      <Button onPress={() => setIsEditDialogOpen(true)}>Edit profile</Button>
      <Modal
        size="lg"
        isOpen={isEditDialogOpen}
        isDismissable
        onOpenChange={() => {
          if (post !== '') {
            setIsConfirmationDialogOpen(true);
          } else {
            setIsEditDialogOpen(false);
          }
        }}
      >
        <Dialog aria-label="Edit profile">
          <DialogBody className="py-4">
            <TextField
              autoFocus
              value={post}
              onChange={(value) => {
                setPost(value);
              }}
            >
              <Label>Edit bio</Label>
              <TextArea placeholder="Add a bio" rows={4}></TextArea>
              <Description>
                Add some texts and click outside to close dialog
              </Description>
            </TextField>

            <Button
              className="ms-auto"
              onPress={() => {
                setIsEditDialogOpen(false);
              }}
            >
              Save changes
            </Button>
          </DialogBody>
        </Dialog>
      </Modal>

      <Modal
        isOpen={isConfirmationDialogOpen}
        onOpenChange={() => {
          setIsConfirmationDialogOpen(false);
          setIsEditDialogOpen(false);
        }}
      >
        <Dialog alert>
          <DialogHeader>Save changes?</DialogHeader>
          <DialogBody>
            You can save this to publish later from your drafts.
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>No, thanks</DialogCloseButton>
            <Button
              onPress={() => {
                alert('Your changes are saved');
                setIsConfirmationDialogOpen(false);
                setIsEditDialogOpen(false);
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </div>
  );
};

NestedDialogs.parameters = {
  docs: {
    description: {
      story:
        'Preventing users from accidentally closing a modal Dialog component with unsaved changes by displaying a nested confirmation dialog.',
    },
  },
};

export const WithMinHeight = () => {
  return (
    <DialogTrigger>
      <Button> Channel settings</Button>
      <Modal size="xl">
        <Dialog className="h-[min(85vh,820px)]">
          <DialogHeader>
            <div className="flex flex-1 flex-col">
              <DialogTitle>Channel settings</DialogTitle>
              <DialogCloseButton />
              <div className="flex flex-wrap gap-2 pt-2">
                <MenuTrigger>
                  <TooltipTrigger>
                    <MenuButton
                      aria-label="Start Conversation"
                      className="py-0.5 text-xs/6"
                    >
                      <Star className="h-4 w-4" strokeWidth={1.5} />
                    </MenuButton>
                    <Tooltip>Start Channel</Tooltip>
                  </TooltipTrigger>
                  <MenuPopover placement="bottom start">
                    <Menu>
                      <MenuSection title="Move to..">
                        <MenuItem>Started</MenuItem>
                        <MenuItem>Move to conversation</MenuItem>
                      </MenuSection>
                    </Menu>
                  </MenuPopover>
                </MenuTrigger>
                <Select
                  className="w-auto"
                  aria-label="Notification Settings"
                  defaultSelectedKey="all"
                >
                  <SelectButton>
                    <Bell />
                    Get notifications for
                  </SelectButton>
                  <SelectPopover>
                    <SelectListBox>
                      <SelectListItem id="all" textValue="All Messages">
                        <SelectListItemLabel>All messages</SelectListItemLabel>
                        <SelectListItemDescription>
                          Get notification for all messages
                        </SelectListItemDescription>
                      </SelectListItem>

                      <SelectListItem id="mention" textValue="@Mentions">
                        <SelectListItemLabel>@Mentions</SelectListItemLabel>
                        <SelectListItemDescription>
                          Get notifications for @mentions, @here and @channel
                          only
                        </SelectListItemDescription>
                      </SelectListItem>

                      <SelectListItem
                        id="mute_channel"
                        textValue="Mute Channel"
                      >
                        <SelectListItemLabel>Mute Channel</SelectListItemLabel>
                        <SelectListItemDescription>
                          Prevent this channel from bolding for unread messages
                          and only receive a badge if you're mentioned
                        </SelectListItemDescription>
                      </SelectListItem>
                    </SelectListBox>
                  </SelectPopover>
                </Select>
              </div>
            </div>
          </DialogHeader>
          <DialogCloseButton />
          <DialogBody className="overflow-hidden px-0">
            <Tabs className="overflow-auto p-0 pb-0 text-base/6 sm:text-sm/6">
              <div className="sticky top-0 bg-white dark:bg-zinc-900">
                <TabList
                  aria-label="History of Ancient Rome"
                  className="space-x-4 px-6"
                >
                  <Tab className="py-2" id="about">
                    About
                  </Tab>
                  <Tab className="py-2" id="members">
                    Members <span className="ps-2">24</span>
                  </Tab>
                  <Tab className="py-2" id="integrations">
                    Integrations
                  </Tab>
                  <Tab className="py-2" id="settings">
                    Settings
                  </Tab>
                </TabList>
              </div>

              <TabPanel id="about" className="flex flex-col gap-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur laudantium dolorum consectetur culpa repellat
                labore dolorem modi reprehenderit. Unde praesentium fugiat
                provident velit, reprehenderit labore pariatur quo vero
                obcaecati nostrum. Necessitatibus quae sint fugit et architecto
                odit, quaerat sapiente amet excepturi, placeat assumenda dicta
                veniam, iste quasi consequatur enim pariatur obcaecati.
                Voluptatibus esse possimus porro nisi repellendus atque facilis
                facere eum magnam doloremque, repudiandae veniam labore nobis
                neque, omnis ea dolorem illo, tempora similique reiciendis in
                iure placeat quibusdam? Atque id corporis, neque aliquam, ullam
                officiis tenetur animi recusandae doloribus pariatur repudiandae
                numquam officia natus sit placeat! Numquam, fugit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ab unde optio
                magni rerum, ex dolorum, laboriosam, ea asperiores deserunt
                culpa laudantium illum deleniti mollitia provident voluptatum
                quam aspernatur debitis iste tempora architecto voluptatem! Quod
                voluptas laudantium suscipit ut a perferendis? Eos cupiditate,
                fugit, at enim perferendis, ullam placeat aperiam quisquam amet
                ab error et officiis laboriosam similique in animi atque ipsa.
                Reprehenderit repellat iure doloribus rem dolorem, expedita
                fugit, facere soluta, at a non eligendi itaque. Laudantium
                quidem vel natus nostrum labore neque ad sint, pariatur dolore
                soluta, alias ab similique debitis aperiam eius, voluptate a
                iste error impedit quo corporis illo nobis dolor ipsa?
                Recusandae repellat sapiente tenetur, quod dicta pariatur quae
                vitae! Vero sapiente culpa temporibus reiciendis ut eligendi
                ipsam? Quasi nobis non reiciendis debitis, consequatur
                reprehenderit deleniti doloremque inventore aut error commodi
                vitae quia cumque illum a eaque, aspernatur quo enim ipsam!
                Aspernatur incidunt iste fugit quas totam quae atque impedit
                iure, commodi vero maiores, ad eum explicabo tenetur culpa neque
                voluptas. Soluta distinctio placeat eum omnis explicabo vel,
                delectus molestiae voluptatibus dignissimos vitae, rem ratione
                tempora assumenda eaque asperiores quidem voluptates, ab
                expedita dolores consectetur! Omnis culpa asperiores explicabo
                at qui, exercitationem vel id debitis necessitatibus, in, dolore
                enim minus saepe! Vel sunt excepturi reprehenderit autem dolorum
                perferendis obcaecati provident! Saepe iure veniam
                exercitationem officia nobis minima alias magni iusto fugiat
                pariatur ut ipsum, debitis accusamus ipsa dolore vero adipisci!
                Harum expedita culpa voluptate ut fuga, sapiente sunt eum maxime
                nihil hic ratione dignissimos minima! Esse, mollitia nisi
                repellendus, unde cum atque, sunt qui possimus asperiores
                doloremque modi inventore excepturi fuga itaque iure reiciendis
                saepe consequuntur! Possimus fuga laboriosam, sunt perspiciatis
                nostrum at neque pariatur quod itaque suscipit. Voluptatem quas
                dolore nihil aspernatur explicabo unde sed nesciunt quos
                dignissimos, nobis reprehenderit quia ullam itaque autem labore?
              </TabPanel>
              <TabPanel id="members"></TabPanel>
              <TabPanel id="integrations"></TabPanel>
              <TabPanel id="settings"></TabPanel>
            </Tabs>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

WithMinHeight.parameters = {
  docs: {
    description: {
      story:
        'Use `className="h-[min(*, *)]` to set min-height of the `Dialog` component.',
    },
  },
};

export const Drawers = (args: any) => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal drawer size="sm" {...args}>
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

Drawers.parameters = {
  docs: {
    description: {
      story:
        'Add the `drawer` and `placement="left" | "right"` prop to the `Modal` component to render dialogs out from the edge of the screen. Default placement is `left`.',
    },
  },
};

export const DialogCloseButtons = () => {
  return (
    <DialogTrigger>
      <Button>Add Block</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Add Block to Project</DialogHeader>
          <DialogCloseButton />
          <DialogBody className="space-y-4 pb-2">
            <Text>
              Run this command to add this Block to an existing project or to
              create a new one.
            </Text>
            <LabeledGroup>
              <Label className="sr-only">Copy install command</Label>
              <InputGroup>
                <TextField isReadOnly>
                  <Label className="sr-only">Install command</Label>
                  <Input
                    value="npm i tailwindcss-react-aria-components"
                    className="truncate"
                  />
                </TextField>
                <CopyButton
                  variant="outline"
                  copyText="npm i tailwindcss-react-aria-components"
                ></CopyButton>
              </InputGroup>
            </LabeledGroup>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton variant="solid">Close</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

DialogCloseButtons.parameters = {
  docs: {
    description: {
      story:
        '`DialogCloseButtons` are <a href="./?path=/docs/button--docs" target="_blank">`Buttons`</a>. By default, it will be rendered as <a href="./?path=/docs/button--docs#close%20buttons">`CloseButton`</a> to the top right corner of the dialog. It can be customized by providing children',
    },
  },
};

export const DialogFooters = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button variant="outline" onPress={() => setIsOpen(true)}>
        Publish
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog alert>
          <DialogHeader>Confirm Publish</DialogHeader>
          <DialogBody>
            Are you sure you want to publish this document?
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton className="sm:me-auto">Cancel</DialogCloseButton>
            <Button onPress={() => setIsOpen(false)} variant="outline">
              Save as draft
            </Button>
            <Button onPress={() => setIsOpen(false)}>Publish</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};

DialogFooters.parameters = {
  docs: {
    description: {
      story:
        'We can add `secondary action` and `checkbox` element to the `DialogFooter`.',
    },
  },
};

export const WithCheckboxFooterHiddenTitle = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button variant="plain" onPress={() => setIsOpen(true)}>
        Don't ask again
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog alert>
          <DialogHeader>Set yourself to active?</DialogHeader>
          <DialogBody>
            You're currently set to away, but it looks like you're back. Want to
            update your availability?
          </DialogBody>
          <DialogFooter>
            <Checkbox className="sm:me-auto">Don't ask again</Checkbox>
            <DialogCloseButton>No Thanks</DialogCloseButton>
            <Button
              onPress={() => setIsOpen(false)}
              variant="solid"
              color="success"
            >
              Set to Active
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};
