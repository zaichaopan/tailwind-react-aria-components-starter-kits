import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { useListData } from 'react-stately';
import { Avatar } from '../src/avatar';
import { Strong, Text } from '../src/text';
import {
  MultiSelect,
  MultiSelectField,
  MultiSelectItem,
} from '../src/multi-select';
import { Tag } from '../src/tag-group';
import { Description, Label } from '../src/field';
import React from 'react';

const meta: Meta = {
  title: 'Multi select',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Use the `MultiSelectField`, `MultiSelect`, `Tag`, `MultiSelectItem` to build multi select components.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Framework = { id: string; textValue: string };

const frameworks = [
  {
    id: 'react',
    textValue: 'React',
  },
  {
    id: 'vue',
    textValue: 'Vue',
  },
  {
    id: 'solid',
    textValue: 'Solid',
  },
  {
    id: 'svelte',
    textValue: 'Svelte',
  },
  {
    id: 'qwik',
    textValue: 'Qwik',
  },
];

export const BasicExample = () => {
  const selectedList = useListData<Framework>({
    initialItems: [],
  });

  return (
    <MultiSelectField>
      <Label>Your favorite libraries</Label>
    
      <MultiSelect
        selectedList={selectedList}
        items={frameworks}
        tag={(item) => <Tag textValue={item.textValue}>{item.textValue}</Tag>}
        renderEmptyState={(inputValue) => {
          return (
            <Text className="p-2">
              {inputValue ? (
                <>
                  No results found for: <Strong>{inputValue}</Strong>
                </>
              ) : (
                `No options`
              )}
            </Text>
          );
        }}
      >
        {(item) => {
          return (
            <MultiSelectItem textValue={item.textValue}>
              {item.textValue}
            </MultiSelectItem>
          );
        }}
      </MultiSelect>
    </MultiSelectField>
  );
};

type User = {
  id: string;
  src: string;
  userName: string;
  textValue: string;
  disabled?: boolean;
};

const users = [
  {
    id: '1',
    textValue: 'Cameron',
    userName: 'Cameron',
    src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: '2',
    textValue: 'Jane Cooper',
    userName: 'Jane Cooper',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    disabled: true,
  },
  {
    id: '3',
    textValue: 'Kristin Watson',
    userName: 'Kristin Watson',
    src: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: '4',
    textValue: 'Courtney Henry',
    userName: 'Courtney Henry',
    src: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: '5',
    textValue: 'Theresa Webb',
    userName: 'Theresa Webb',
    src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: '6',
    textValue: 'Jenny Wilson',
    userName: 'Jenny Wilson',
    src: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: '7',
    textValue: 'Gilberto Miguel',
    userName: 'Gilberto Miguel',
    src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
  },
  {
    id: '8',
    textValue: 'Wade Redington',
    userName: 'Wade Redington',
    src: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '9',
    textValue: 'Kurtis Gurrado',
    userName: 'Kurtis Gurrado',
    src: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '10',
    textValue: 'Sonja Balmann',
    userName: 'Sonja Balmann',
    src: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '11',
    textValue: 'Brent Mickelwright',
    userName: 'Brent Mickelwright',
    src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '12',
    textValue: 'Charles Webb',
    userName: 'Charles Webb',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
];

export const WithAvatars = () => {
  const selectedList = useListData<User>({
    initialItems: [],
  });

  const [isInvalid, setIsInvalid] = React.useState(false);

  return (
    <Form
      onSubmit={(e) => {
        if (selectedList.items.length === 0) {
          setIsInvalid(true);

          e.preventDefault();
          return;
        }

        setIsInvalid(false);
      }}
    >
      <MultiSelectField>
        <Label>Assignee</Label>
        <Description>The assignee will be notified once assigned.</Description>
        <MultiSelect
          isInvalid={isInvalid}
          selectedList={selectedList}
          name="member"
          onItemAdd={(key) => {
            console.log('item add', key);
            setIsInvalid(false);
          }}
          onItemRemove={(key) => {
            console.log('item remove', key);
          }}
          items={users}
          tag={(item) => {
            return (
              <Tag textValue={item.textValue}>
                <Avatar
                  src={item.src}
                  alt={item.userName}
                  className="size-4 rounded-full"
                />
                {item.textValue}
              </Tag>
            );
          }}
          renderEmptyState={(inputValue) => {
            return (
              <Text className="p-2">
                {inputValue ? (
                  <>
                    No results found for: <Strong>{inputValue}</Strong>
                  </>
                ) : (
                  `No options`
                )}
              </Text>
            );
          }}
        >
          {(item) => {
            return (
              <MultiSelectItem
                isDisabled={item.disabled}
                id={item.id}
                className="gap-2"
                textValue={item.textValue}
              >
                <Avatar
                  alt={item.userName}
                  src={item.src}
                  className="size-6 rounded-full"
                />
                <span>{item.userName}</span>
              </MultiSelectItem>
            );
          }}
        </MultiSelect>
        {isInvalid && (
          <Text className="text-destructive">
            Please select an item in the list.
          </Text>
        )}
      </MultiSelectField>

      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};
