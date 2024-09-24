import type { Meta } from '@storybook/react';
import { Heading, HeadingProps, SubHeading } from '../src/heading';
import { docs } from '../.storybook/docs';

const meta: Meta<HeadingProps> = {
  title: 'Heading',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Heading** component is used to render semantic HTML heading elements. Use the `level` prop to render heading from h1 to h3. Default level `1`. Use the `displayLevel` to render display style of another level.',
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
    <div className="space-y-4">
      <Heading>H1: The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={2}>
        H2: The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={3}>
        H3: The quick brown fox jumps over the lazy dog
      </Heading>
      <SubHeading>
        Sub heading: The quick brown fox jumps over the lazy dog
      </SubHeading>
    </div>
  );
};

export const RenderAsDiv = () => {
  return (
    <div className="space-y-4">
      <Heading>Display level 1</Heading>
      <Heading elementType="div" displayLevel={2}>
        Display level 2
      </Heading>
      <Heading elementType="div" displayLevel={3}>
        Display level 3
      </Heading>
    </div>
  );
};

RenderAsDiv.parameters = {
  docs: {
    description: {
      story:
        'Use `elementType="div"`to render a div instead of headings.',
    },
  },
};


export const AutoFocusHeading = () => {
  return (
    <div className="space-y-2 max-w-lg">
      <Heading autoFocus>Auto focus heading</Heading>
      <SubHeading>Use `autoFocus` to focus the heading. This is useful in SPA after navigation. A screen reader will then announce the new heading when it gets focus.</SubHeading>
    </div>
  );
};