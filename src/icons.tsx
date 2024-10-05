import { twMerge } from 'tailwind-merge';
import { AccessibleIcon } from './accessible-icon';

export function EyeIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    </AccessibleIcon>
  );
}

export function EyeOffIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
          clipRule="evenodd"
        />
        <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
      </svg>
    </AccessibleIcon>
  );
}

export function CheckIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        strokeWidth="2"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
    </AccessibleIcon>
  );
}

export function PlusIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </AccessibleIcon>
  );
}

export function MinusIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M5 12h14" />
      </svg>
    </AccessibleIcon>
  );
}

export function XIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </AccessibleIcon>
  );
}

export function CalendarIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 56 56"
        {...props}
      >
        <path
          fill="currentColor"
          d="M11.992 49.574h32.016c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H11.992c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m-.328-3.773c-2.086 0-3.258-1.102-3.258-3.282V20.419c0-2.156 1.172-3.281 3.258-3.281h32.649c2.085 0 3.28 1.125 3.28 3.281V42.52c0 2.18-1.195 3.28-3.28 3.28Zm11.742-20.25h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.281-1.078-1.102-1.078h-1.383c-.82 0-1.078.258-1.078 1.078v1.383c0 .82.258 1.055 1.078 1.055m7.805 0h1.36c.843 0 1.101-.235 1.101-1.055v-1.383c0-.82-.258-1.078-1.102-1.078h-1.359c-.82 0-1.101.258-1.101 1.078v1.383c0 .82.28 1.055 1.101 1.055m7.781 0h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.282-1.078-1.102-1.078h-1.383c-.82 0-1.101.258-1.101 1.078v1.383c0 .82.281 1.055 1.101 1.055m-23.367 7.664h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.055 1.101 1.055m7.781 0h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.281-1.054-1.102-1.054h-1.383c-.82 0-1.078.234-1.078 1.054v1.383c0 .82.258 1.055 1.078 1.055m7.805 0h1.36c.843 0 1.101-.235 1.101-1.055v-1.383c0-.82-.258-1.054-1.102-1.054h-1.359c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.055 1.101 1.055m7.781 0h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.281 1.055 1.101 1.055m-23.367 7.687h1.383c.82 0 1.102-.258 1.102-1.078v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.078 1.101 1.078m7.781 0h1.383c.82 0 1.102-.258 1.102-1.078v-1.383c0-.82-.281-1.054-1.102-1.054h-1.383c-.82 0-1.078.234-1.078 1.054v1.383c0 .82.258 1.078 1.078 1.078m7.805 0h1.36c.843 0 1.101-.258 1.101-1.078v-1.383c0-.82-.258-1.054-1.102-1.054h-1.359c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.078 1.101 1.078"
        ></path>
      </svg>
    </AccessibleIcon>
  );
}

export function ChevronUpIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </AccessibleIcon>
  );
}

export function ChevronDownIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </AccessibleIcon>
  );
}

export function ChevronRightIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </AccessibleIcon>
  );
}

export function ChevronLeftIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </AccessibleIcon>
  );
}

export function SearchIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        ></path>
      </svg>
    </AccessibleIcon>
  );
}

export function SpinnerIcon({
  className,
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon aria-label={arialLabel}>
      <svg
        className={twMerge('animate-spin', className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </AccessibleIcon>
  );
}

export function CopyIcon({
  'aria-label': arialLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <AccessibleIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    </AccessibleIcon>
  );
}
