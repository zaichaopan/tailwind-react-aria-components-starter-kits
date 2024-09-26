import {
  DropZoneProps,
  DropZone as RACDropZone,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { focusOutlineStyle } from './utils';

export function DropZone(props: DropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'sm:min-w-96',
            'flex flex-shrink-0 flex-col items-center justify-center rounded-xl',
            'border border-dashed p-2',
            renderProps.isFocusVisible && focusOutlineStyle,
            renderProps.isDropTarget && [
              'drop-target:border-solid',
              'bg-accent/20 dark:bg-accent/75',
              focusOutlineStyle,
            ],
            className,
          );
        },
      )}
    />
  );
}
