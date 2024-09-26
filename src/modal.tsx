import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

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
  animate?: boolean;
  classNames?: ClassNames;
} & DrawerProps;

export function Modal({ animate = true, classNames, ...props }: ModalProps) {
  const drawer = props.drawer;

  const placement = props.drawer ? props.placement ?? 'left' : undefined;

  return (
    <RACModalOverlay
      {...props}
      className={composeRenderProps(
        classNames?.modalOverlay,
        (className, renderProps) => {
          return twMerge(
            'fixed left-0 top-0 isolate z-20',
            'h-[--visual-viewport-height] w-full',
            'bg-zinc-950/25 dark:bg-zinc-950/50',
            'flex items-end text-center sm:items-center',
            drawer
              ? [
                  'p-2 [--visual-viewport-vertical-padding:16px]',

                  placement === 'left' ? 'justify-start ' : 'justify-end',

                  renderProps.isEntering &&
                    'duration-200 ease-out animate-in fade-in',

                  renderProps.isExiting &&
                    'duration-200 ease-in animate-out fade-out',
                ]
              : [
                  'justify-center',
                  'pt-4 [--visual-viewport-vertical-padding:16px] sm:p-4 sm:[--visual-viewport-vertical-padding:32px]',

                  renderProps.isEntering &&
                    'duration-200 ease-out animate-in fade-in',

                  renderProps.isExiting &&
                    'duration-200 ease-in animate-out fade-out',
                ],
            className,
          );
        },
      )}
    >
      <RACModal
        {...props}
        className={composeRenderProps(
          classNames?.modal,
          (className, renderProps) => {
            return twMerge(
              'max-h-full w-full overflow-hidden text-left align-middle shadow-lg',
              'bg-white dark:bg-zinc-900',
              'dark:ring-1 dark:ring-white/10',
              'w-full',
              props.size
                ? sizes[props.size]
                : 'sm:has-[[role=alertdialog]]:max-w-md sm:has-[[role=dialog]]:max-w-lg',
              drawer
                ? [
                    'h-full rounded-lg',
                    animate &&
                      renderProps.isEntering && [
                        placement === 'left'
                          ? 'duration-200 ease-out animate-in slide-in-from-left'
                          : 'duration-200 ease-out animate-in slide-in-from-right',
                      ],
                    animate &&
                      renderProps.isExiting && [
                        placement === 'left'
                          ? 'duration-200 ease-in animate-out slide-out-to-left'
                          : 'duration-200 ease-in animate-out slide-out-to-right',
                      ],
                  ]
                : [
                    'rounded-t-2xl sm:rounded-xl',
                    animate &&
                      renderProps.isEntering &&
                      'duration-200 ease-out animate-in slide-in-from-bottom sm:zoom-in-105 sm:slide-in-from-bottom-0',

                    animate &&
                      renderProps.isExiting &&
                      'duration-200 ease-in animate-out slide-out-to-bottom sm:zoom-out-95 sm:slide-out-to-bottom-0',
                  ],
              className,
            );
          },
        )}
      />
    </RACModalOverlay>
  );
}
