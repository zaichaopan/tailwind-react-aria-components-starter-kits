import React from 'react';
import { createPortal } from 'react-dom';
import { useToastQueue } from '@react-stately/toast';
import type { AriaToastRegionProps, ToastAria } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useToastRegion } from '@react-aria/toast';
import type { AriaToastProps } from '@react-aria/toast';
import { useToast } from '@react-aria/toast';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Button } from '../button';
import { twMerge } from 'tailwind-merge';
import { toast, ToastConfig } from './toast-queue';
import { XIcon } from '../icons';

interface ToastRegionProps extends AriaToastRegionProps {
  state: ToastState<ToastConfig>;
}

interface ToastProps extends AriaToastProps<ToastConfig> {
  state: ToastState<ToastConfig>;
}

function ToastRegion({ state, ...props }: ToastRegionProps) {
  const ref = React.useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  const position =
    state.visibleToasts[state.visibleToasts.length - 1].content.position ??
    'bottom-right';

  let className = 'bottom-6 right-6 anim ';
  switch (position) {
    case 'bottom-left':
      className = 'bottom-6 left-6';
      break;
    case 'bottom-center':
      className = 'bottom-6 left-1/2 -translate-x-1/2';
      break;
    case 'top-left':
      className = 'top-6 left-6 ';
      break;
    case 'top-center':
      className = 'top-6 left-1/2 -translate-x-1/2';
      break;
    case 'top-right':
      className = 'top-6 right-6';
      break;

    default:
      break;
  }

  return (
    <div
      {...regionProps}
      ref={ref}
      className={twMerge(
        'toast-region fixed isolate z-20 flex flex-col gap-2 outline-none',
        className,
      )}
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}

export function GlobalToastRegion(props: AriaToastRegionProps) {
  const state = useToastQueue<ToastConfig>(toast);

  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion {...props} state={state} />, document.body)
    : null;
}

function Toast({ state, ...props }: ToastProps) {
  const ref = React.useRef(null);
  const {
    toastProps,
    titleProps,
    closeButtonProps,
    descriptionProps,
  }: Omit<ToastAria, 'closeButtonProps'> & {
    closeButtonProps: Omit<AriaButtonProps, 'children'>;
  } = useToast(props, state, ref);

  let enteringClassName = '';
  const position = props.toast.content.position ?? 'bottom-right';

  switch (position) {
    case 'bottom-right':
    case 'top-right':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-right animate-in ease-out'
          : '';
      break;
    case 'bottom-left':
    case 'top-left':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-left animate-in ease-out'
          : '';
      break;
    case 'bottom-center':
    case 'top-center':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-top animate-in ease-out'
          : '';
      break;
    default:
      break;
  }

  const type = props.toast.content.type;

  return (
    <div
      {...toastProps}
      ref={ref}
      className="flex flex-1 rounded-lg bg-background outline-none"
    >
      <div
        className={twMerge(
          'toast flex w-[min(85vw,360px)] gap-1 rounded-lg border px-3 py-2 shadow-sm transition',
          type === undefined &&
            !props.toast.content.render &&
            'border-border/50 bg-background',
          type === 'error' && 'border-destructive/15 bg-destructive/5',
          type === 'warning' && 'border-warning/15 bg-warning/5',
          type === 'success' && 'border-success/15 bg-success/5',
          enteringClassName,
        )}
      >
        {props.toast.content.render ? (
          props.toast.content.render()
        ) : (
          <>
            <div className="flex flex-1 items-center gap-2 self-center">
              {type === 'error' && (
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 flex size-5 self-start text-destructive"
                >
                  <path d="M12 16h.01" />
                  <path d="M12 8v4" />
                  <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
                </svg>
              )}

              {type === 'warning' && (
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 flex size-5 self-start text-warning"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              )}

              {type === 'success' && (
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 flex size-5 self-start text-success"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              )}

              <div className="flex flex-1 flex-col gap-1 text-sm/6">
                {props.toast.content.title ? (
                  <div
                    {...titleProps}
                    className={twMerge(
                      props.toast.content.description && 'font-medium',
                    )}
                  >
                    {props.toast.content.title}
                  </div>
                ) : null}

                {props.toast.content.description ? (
                  <div {...descriptionProps}>
                    {props.toast.content.description}
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}

        <Button
          variant="plain"
          size="sm"
          isIconOnly
          {...closeButtonProps}
          className={twMerge('rounded', 'hover:bg-transparent')}
        >
          <XIcon aria-label="Close"  className='text-muted/75 group-hover:text-foreground'/>
        </Button>
      </div>
    </div>
  );
}
