import React from 'react';
import {
  LabelContext,
  type Key,
} from 'react-aria-components';
import { Tag, TagGroup, TagGroupProps, TagList } from './TagGroup';
import { ListData } from 'react-stately';
import { Input, InputFieldGroup, WithLabelContext } from './Field';
import { twMerge } from 'tailwind-merge';

interface TagItem {
  id: number;
  name: string;
}

type ContextType = {
  list: ListData<TagItem>;
};

const TagInputContext = React.createContext<ContextType | null>(null);

function useTagInputContext() {
  const context = React.useContext(TagInputContext);

  if (!context) {
    throw new Error('<TagInputContext.Provider> is required');
  }

  return context;
}

export interface TagInputProps extends TagGroupProps {
  list: ContextType['list'];
}

export function TagInputField({
  list,
  onRemove,
  className,
  ...props
}: TagInputProps) {
  const labelId = React.useId();

  function handleRemove(keys: Set<Key>) {
    list.remove(...keys);
  }

  return (
    <TagInputContext.Provider value={{ list }}>
      <LabelContext.Provider value={{ id: labelId }}>
        <TagGroup
          {...props}
          onRemove={(key) => {
            handleRemove(key);
            onRemove?.(key);
          }}
          className={twMerge(className, 'w-full')}
        />
      </LabelContext.Provider>
    </TagInputContext.Provider>
  );
}

export function TagInput() {
  const [inputValue, setInputValue] = React.useState('');
  const { list } = useTagInputContext();

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ',' || e.key === ';') {
      e.preventDefault();
      addTag();
    }
  }

  function addTag() {
    const tagNames = inputValue.split(/[,;]/);

    tagNames.forEach((tagName) => {
      const adjustedTagName = tagName
        .trim()
        .replace(/\s\s+/g, ' ')
        .replace(/\t|\\t|\r|\\r|\n|\\n/g, '');

      if (adjustedTagName === '') {
        return;
      }

      list.append({
        id: (list.items.at(-1)?.id || 0) + 1,
        name: adjustedTagName,
      });
    });

    setInputValue('');
  }

  const [inputFocus, setInputFocus] = React.useState(false);

  return (
    <WithLabelContext>
      {(context) => {
        return (
          <InputFieldGroup
            className={twMerge(
              'px-1.5 py-[5px]',
              'flex w-full flex-wrap items-center gap-1 rounded-md bg-transparent transition',
              !inputFocus && 'border-border ring-0',
            )}
          >
            <TagList items={list.items} className="contents">
              {(item) => <Tag>{item.name}</Tag>}
            </TagList>

            <Input
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              className="min-w-0 p-0.5"
              aria-labelledby={context?.['aria-labelledBy']}
              onKeyDown={handleKeyDown}
              placeholder="Enter tag"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </InputFieldGroup>
        );
      }}
    </WithLabelContext>
  );
}
