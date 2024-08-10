import React from 'react';
import { getInitials, getInitialsToken } from './get-initials';
import { twMerge } from 'tailwind-merge';
import { AccessibleIcon } from './accessible-icon';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

export type AvatarProps = {
  src?: string;
  alt: string;
  colorless?: boolean;
} & JSX.IntrinsicElements['div'];

export function Avatar({
  colorless = false,
  className,
  children,
  src,
  alt,
}: AvatarProps) {
  const badgeId = React.useId();
  const avatarId = React.useId();
  const ariaLabelledby = [avatarId, children ? badgeId : ''].join(' ');
  const status = useImageLoadingStatus(src);

  return (
    <AvatarContext.Provider value={{ badgeId }}>
      <div
        role="img"
        className={twMerge([
          'group relative flex size-10 shrink-0 items-center justify-center rounded-lg @container',
          'outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/5 ring-background',
          '[&.rounded-full>svg]:rounded-full [&>svg]:size-full [&>svg]:rounded-lg',
          '[&.rounded-full>img]:rounded-full [&>img]:size-full [&>img]:rounded-lg',
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        {status === 'loaded' ? (
          <img
            aria-hidden
            id={avatarId}
            src={src}
            alt={alt}
            className="object-cover"
          />
        ) : (
          <InitialAvatar alt={alt} id={avatarId} colorless={colorless} />
        )}
        {children}
      </div>
    </AvatarContext.Provider>
  );
}

function InitialAvatar({
  alt,
  id,
  colorless,
}: {
  alt: string;
  id: string;
  colorless: boolean;
}) {
  const initials = getInitials(alt);
  const token = getInitialsToken(alt, colorless);

  return (
    <svg
      aria-hidden
      id={id}
      aria-label={alt}
      style={{
        background: `var(--${token})`,
      }}
      fill="currentColor"
      viewBox="0 0 24 24"
      className="font-medium text-white"
    >
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        textAnchor="middle"
        dy=".125em"
        fontSize="65%"
      >
        {initials}
      </text>
    </svg>
  );
}

type AvatarBadgeProps = {
  className?: string;
  badge: React.ReactNode;
  'aria-label': string;
};

export const AvatarBadge = ({
  'aria-label': ariaLabel,
  badge,
  ...props
}: AvatarBadgeProps) => {
  const context = React.useContext(AvatarContext);

  if (!context) {
    throw new Error('<AvatarContext.Provider> is required');
  }

  return (
    <span
      aria-hidden
      id={context.badgeId}
      className={twMerge([
        '@[32px]:w-2/5 @[40px]:w-1/3 @[64px]:w-1/4 @[128px]:w-1/5',
        'z-1 absolute bottom-0 end-0 z-10 rounded-full border-2 border-background bg-background',
        'translate-x-[15%] translate-y-[20%]',
        '[.rounded-full_&]:translate-x-[35%] [.rounded-full_&]:translate-y-[5%] rtl:[.rounded-full_&]:translate-y-[45%]',
        '@[40px]:[.rounded-full_&]:translate-x-[15%]',
        '@[64px]:[.rounded-full_&]:-translate-x-[5%] @[64px]:[.rounded-full_&]:-translate-y-[10%]',
        '@[128px]:[.rounded-full_&]:translate-x-[-20%]',
        props.className,
      ])}
    >
      <AccessibleIcon aria-label={ariaLabel}>{badge}</AccessibleIcon>
    </span>
  );
};

type AvatarGroupProps = {
  reverse?: boolean;
} & JSX.IntrinsicElements['div'];

export function AvatarGroup({
  reverse = false,
  className,
  ...props
}: AvatarGroupProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center -space-x-2 rtl:space-x-reverse',
        '[&>[role=img]:not([class*=ring-4])]:ring-2',
        reverse && 'flex-row-reverse ps-2 [&>[role=img]:first-of-type]:-ms-2',
        className,
      )}
    />
  );
}
