import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Verified } from './~icons';
import { Avatar, AvatarBadge, AvatarGroup } from '../src/avatar';
import { Available, Away, Busy, DoNotDisturb } from '../src/status';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An **avatar** is a thumbnail representation of an entity, such as a user or an organization.',
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
    <Avatar
      alt="M A"
      src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=3&w=256&h=256&q=100"
    />
  );
};

export const RoundedAvatars = () => {
  return (
    <div className="flex gap-6">
      <Avatar
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  );
};

RoundedAvatars.parameters = {
  docs: {
    description: {
      story: 'Use `className="rounded-full"` to render a rounded avatar.',
    },
  },
};

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-8"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="size-9"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="size-11"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="size-12"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="size-14"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="size-16"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  );
};

AvatarSizes.parameters = {
  docs: {
    description: {
      story:
        'Use `className="size-*"` to render avatars with different sizes. Default avatar size is `size-10`.',
    },
  },
};

export const InitialFallbacks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-4">
        <Avatar alt="M A" />
        <Avatar alt="A B" />
        <Avatar alt="B O" />
        <Avatar alt="T W" />
      </div>
      <div className="flex items-end gap-4">
        <Avatar alt="A N" className="rounded-full" />
        <Avatar alt="D P" className="rounded-full" />
        <Avatar alt="S W" className="rounded-full" />
        <Avatar alt="W W" className="rounded-full" />
      </div>
      <div className="flex items-end gap-4">
        <Avatar alt="A J" className="rounded-full" colorless />
        <Avatar alt="T O" className="rounded-full" colorless />
        <Avatar alt="E M" className="rounded-full" colorless />
        <Avatar alt="D T" className="rounded-full" colorless />
      </div>
    </div>
  );
};

InitialFallbacks.parameters = {
  docs: {
    description: {
      story:
        'The `alt` prop is used to generate initial avatar when image is loading or src is unavailable. Use the `colorless` prop to render initial avatars with a single background.',
    },
  },
};

export const AvatarBadges = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Avatar
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="M A"
        >
          <AvatarBadge badge={<Available />} aria-label="Available" />
        </Avatar>

        <Avatar
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="M A"
        >
          <AvatarBadge badge={<Busy />} aria-label="Busy" />
        </Avatar>

        <Avatar
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="M A"
        >
          <AvatarBadge badge={<Away />} aria-label="Away" />
        </Avatar>

        <Avatar
          alt="M A"
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        >
          <AvatarBadge aria-label="Do not disturb" badge={<DoNotDisturb />} />
        </Avatar>

        <Avatar
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Jane Doe"
        >
          <AvatarBadge
            aria-label="Verified"
            className="border-none bg-blue-500 p-0 text-white"
            badge={<Verified />}
          ></AvatarBadge>
        </Avatar>
      </div>
    </div>
  );
};

export const AvatarBadgeSizesHiddenTitle = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-9"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-11"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-12"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-16"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-20"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
    </div>
  );
};

export const AvatarBadgeSizeRoundedHiddenTitle = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-9 rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        alt="M A"
        className="rounded-full"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-11 rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-12 rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-16 rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
      <Avatar
        className="size-20 rounded-full"
        alt="M A"
        src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge badge={<Available />} aria-label="Available" />
      </Avatar>
    </div>
  );
};

AvatarBadges.parameters = {
  docs: {
    description: {
      story:
        'Use the `AvatarBadge` component to add badges. Badge is auto wrapped within the <a href="./?path=/docs/icon--docs" target="_blank">`Icon`</a> component and auto scaled based on avatar sizes.\n\nUse `aria-label` to provide accessible badge. Use `className` to style badge border and background.',
    },
  },
};

export const AvatarGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar
          className="size-8"
          alt="D P"
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M C"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          className="size-8"
          alt="M H"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        />
      </AvatarGroup>

      <AvatarGroup>
        <Avatar
          className="size-8 rounded-full"
          alt="D P"
          src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8 rounded-full "
          alt="M C"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          className="size-8 rounded-full"
          alt="M H"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8 rounded-full"
          alt="M J"
          src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8 rounded-full"
          alt="M J"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        />
      </AvatarGroup>

      <div className="flex items-center gap-1">
        <AvatarGroup>
          <Avatar
            className="size-8 rounded-full"
            alt="D P"
            src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full "
            alt="M C"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M H"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
        </AvatarGroup>
        <div className="relative -ms-2 flex size-8 items-center justify-center rounded-full bg-hover text-xs/6 shadow-sm sm:text-sm/6">
          +2
        </div>
      </div>

      <div className="flex items-center gap-1">
        <AvatarGroup reverse>
          <Avatar
            className="size-8 rounded-full"
            alt="D P"
            src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full "
            alt="M C"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M H"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="Kurtis Gurrado"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
        </AvatarGroup>
        <div className="text-xs/6 sm:text-sm/6">+4</div>
      </div>
    </div>
  );
};

AvatarGroups.parameters = {
  docs: {
    description: {
      story: 'Use the `AvatarGroup` component to stack avatars.',
    },
  },
};
