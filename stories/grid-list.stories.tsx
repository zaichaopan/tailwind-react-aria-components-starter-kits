import type { Meta } from '@storybook/react';
import { GridList, GridListItem } from '../src/grid-list';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof GridList> = {
  component: GridList,
  title: 'Grid list',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/GridList.html#disallow-empty-selection"  target="_blank">`grid list`</a> displays a list of interactive items, with support for keyboard navigation, single or multiple selection, and row actions.',
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

export const BasicExample = () => {
  return (
    <GridList aria-label="Ice cream flavors" selectionMode="multiple">
      <GridListItem id="chocolate">Chocolate</GridListItem>
      <GridListItem id="mint">Mint</GridListItem>
      <GridListItem id="strawberry">Strawberry</GridListItem>
      <GridListItem id="vanilla">Vanilla</GridListItem>
    </GridList>
  );
};

export const DisabledItems = () => {
  return (
    <GridList
      aria-label="Ice cream flavors"
      selectionMode="multiple"
      disabledKeys={['mint']}
    >
      <GridListItem id="chocolate">Chocolate</GridListItem>
      <GridListItem id="mint">Mint</GridListItem>
      <GridListItem id="strawberry">Strawberry</GridListItem>
      <GridListItem id="vanilla">Vanilla</GridListItem>
    </GridList>
  );
};
