import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { TagInput, TagInputField } from '../src/TagInput';
import { Label } from '../src/Field';
import { useListData } from 'react-stately';

const meta: Meta = {
  title: 'TagInput',
  parameters: {
    layout: 'centered',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  const list = useListData({
    initialItems: [
      { id: 1, name: 'react-aria-components' },
      { id: 2, name: 'tailwind-css' },
    ],
  });
  return (
    <TagInputField list={list}>
      <Label>Tags</Label>
      <TagInput />
    </TagInputField>
  );
};
