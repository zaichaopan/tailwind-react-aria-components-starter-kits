import {
  DropZoneProps,
  DropZone as RACDropZone,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  dropTargetOutlineStyle,
  focusVisibleOutlineStyle,
} from './utils';

export function DropZone(props: DropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'sm:min-w-96',
        'flex flex-shrink-0 flex-col items-center justify-center rounded-xl',
        'border border-dashed p-2',
        focusVisibleOutlineStyle,
        'drop-target:border-solid',
        'drop-target:bg-accent/20 drop-target:dark:bg-accent/75',
        dropTargetOutlineStyle,
      ])}
    />
  );
}
