import { Label, Description } from '../src/field';
import { SearchField, SearchInput } from '../src/search-field';
import { docs } from '../.storybook/docs';

const meta = {
  title: 'Search Field',
  component: SearchField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/SearchField.html#searchfield" target="_blank">`search field`</a> allows a user to enter and clear a search query..',
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
    <SearchField>
      <Label>Search</Label>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithDescription = () => {
  return (
    <SearchField>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithFollowingDescription = () => {
  return (
    <SearchField>
      <Label>Search</Label>
      <SearchInput placeholder="Search&hellip;" />
      <Description>Input search. Beep boop.</Description>
    </SearchField>
  );
};

export const WithDisabled = () => {
  return (
    <SearchField isDisabled>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithReadonly = () => {
  return (
    <SearchField isReadOnly>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};
