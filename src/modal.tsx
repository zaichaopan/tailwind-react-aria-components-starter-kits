import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
  'fullWidth': 'h-full w-full'
};

type Size = keyof typeof sizes;

type DrawerProps =
  | { drawer?: never }
  | {
      drawer: true;
      placement?: 'left' | 'right';
    };

type ClassNames = {
  modalOverlay?: RACModalOverlayProps['className'];
  modal?: RACModalOverlayProps['className'];
};

type ModalProps = Omit<RACModalOverlayProps, 'className'> & {
  size?: Size;
  classNames?: ClassNames;
} & DrawerProps;

export function Modal({ classNames, ...props }: ModalProps) {
  const drawer = props.drawer;
  const placement = props.drawer ? props.placement ?? 'left' : undefined;

  return (
    <RACModalOverlay
      {...props}
      className={composeTailwindRenderProps(classNames?.modalOverlay, [
        'fixed left-0 top-0 isolate z-20',
        'h-[--visual-viewport-height] w-full',
        'bg-zinc-950/40 dark:bg-zinc-950/50',
        'flex items-end text-center sm:items-center',

        'entering:animate-in',
        'entering:fade-in',
        'entering:duration-300',
        'entering:ease-out',

        'exiting:animate-out',
        'exiting:fade-out',
        'exiting:duration-200',
        'exiting:ease-in',

        drawer
          ? [
              'p-2 [--visual-viewport-vertical-padding:16px]',
              '[&:has([data-replacement=right])]:justify-end',
            ].join(' ')
          : [
              'justify-center',
              'pt-4 [--visual-viewport-vertical-padding:16px]',
              'sm:p-4 sm:[--visual-viewport-vertical-padding:32px]',
            ].join(' '),
      ])}
    >
      <RACModal
        {...props}
        data-replacement={placement}
        className={composeTailwindRenderProps(classNames?.modal, [
          'max-h-full w-full overflow-hidden',
          'text-left align-middle',
          'shadow-lg',
          'bg-white dark:bg-zinc-900',
          'dark:ring-1 dark:ring-white/10',

          props.size
            ? sizes[props.size]
            : 'sm:has-[[role=alertdialog]]:max-w-md sm:has-[[role=dialog]]:max-w-lg',

          'entering:animate-in',
          'entering:ease-out',
          'entering:duration-200',
          'exiting:animate-out',
          'exiting:ease-in',
          'exiting:duration-200',

          drawer
            ? [
                'h-full',
                'rounded-lg',
                'data-[replacement=left]:entering:slide-in-from-left',
                'data-[replacement=right]:entering:slide-in-from-right',
                'data-[replacement=left]:exiting:slide-out-to-left',
                'data-[replacement=right]:exiting:slide-out-to-right',
              ].join(' ')
            : [
                'rounded-t-2xl sm:rounded-xl',
                'entering:slide-in-from-bottom',
                'entering:sm:zoom-in-95',
                'entering:sm:slide-in-from-bottom-0',
                'exiting:slide-out-to-bottom',
                'exiting:sm:zoom-out-95',
                'exiting:sm:slide-out-to-bottom-0',
              ].join(' '),
        ])}
      />
    </RACModalOverlay>
  );
}
