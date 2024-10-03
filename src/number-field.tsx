import {
  NumberField as RACNumberField,
  NumberFieldProps as RACNumberFieldProps,
  InputProps,
  Group,
} from 'react-aria-components';
import { Input } from './field';
import { composeTailwindRenderProps, inputFieldStyle } from './utils';
import { Button } from './button';
import { Separator } from './separator';
import { MinusIcon, PlusIcon } from './icons';

export interface NumberFieldProps extends RACNumberFieldProps {}

export function NumberField(props: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={composeTailwindRenderProps(props.className, inputFieldStyle)}
    />
  );
}

export function NumberInput(props: InputProps) {
  return (
    <Group
      data-ui="control"
      className="group isolate grid grid-cols-[auto_auto_1fr_auto_auto]"
    >
      <Button
        slot="decrement"
        isIconOnly
        variant="plain"
        className="z-10 col-start-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent"
      >
        <MinusIcon />
      </Button>
      <Separator orientation="vertical" className="col-start-2 row-start-1" />
      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          'z-0',
          'col-span-full',
          'row-start-1',
          'px-[calc(theme(size.11)+10px)] sm:px-[calc(theme(size.9)+10px)]',
        ])}
      />

      <Separator orientation="vertical" className="-col-end-2 row-start-1" />

      <Button
        slot="increment"
        className="-col-end-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent"
        isIconOnly
        variant="plain"
      >
        <PlusIcon />
      </Button>
    </Group>
  );
}
