import { Button, ButtonProps, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { focusOutlineStyle } from './utils';

export {
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosureGroup as DisclosureGroup,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
} from 'react-aria-components';


export function DisclosureControl(props: ButtonProps) {
  return (
    <Button
      slot="trigger"
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'group flex items-center rounded-md outline-none gap-x-1',
            renderProps.isFocusVisible && focusOutlineStyle,
            className,
          );
        },
      )}
    />
  );
}
