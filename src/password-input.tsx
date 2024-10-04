import React from 'react';
import { InputProps, Group } from 'react-aria-components';
import { Input } from './field';
import { ToggleButton } from './button';
import { composeTailwindRenderProps } from './utils';
import { EyeIcon, EyeOffIcon } from './icons';

export function PasswordInput(props: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <Group
      data-ui="control"
      className={[
        'grid',
        'grid-cols-[1fr_calc(theme(size.5)+20px)]',
        'sm:grid-cols-[1fr_calc(theme(size.4)+20px)]',
      ].join(' ')}
    >
      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          'peer',
          'col-span-full',
          'row-start-1',
          'pe-10 sm:pe-9',
        ])}
        type={isPasswordVisible ? 'text' : 'password'}
      />
      <ToggleButton
        isIconOnly
        size="sm"
        variant="plain"
        aria-label="Show password"
        isSelected={isPasswordVisible}
        onChange={setIsPasswordVisible}
        className={[
          'group',
          'focus-visible:-outline-offset-1',
          'row-start-1',
          '-col-end-1',
          'place-self-center',
        ].join(' ')}
      >
        {isPasswordVisible ? (
          <EyeOffIcon className="text-muted group-hover:text-foreground" />
        ) : (
          <EyeIcon className="text-muted group-hover:text-foreground" />
        )}
      </ToggleButton>
    </Group>
  );
}
