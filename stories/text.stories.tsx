import type { Meta } from '@storybook/react';
import { Text, Strong, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The <a href="https://catalyst.tailwindui.com/docs/text" target="_blank">`Text`</a> component is the used to render text and paragraphs within an interface. The `Strong` component is used to render text you want to emphasize. The `TextLink` component is used to render links within a Text component.',
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
    <Text>
      <Strong>React Aria </Strong> is a library of unstyled React components and
      hooks that helps you build{' '}
      <Strong>accessible, high quality UI components</Strong> for your
      application or design system. It provides components for common UI
      patterns, with{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/accessibility.html">
        accessibility
      </TextLink>
      ,{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/internationalization.html">
        internationalization
      </TextLink>
      ,{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/interactions.html">
        interactions
      </TextLink>
      , and behavior built in, allowing you to focus on your unique design and
    </Text>
  );
};

export const ElementTypes = () => {
  return (
    <Text elementType="div">
      <Strong>TailwindCSS</Strong> is a utility-first CSS framework packed with
      classes like <Strong className="text-sky-500">flex</Strong>,{' '}
      <Strong className="text-sky-500">pt-4</Strong>,{' '}
      <Strong className="text-sky-500">text-center</Strong> and{' '}
      <Strong className="text-sky-500">rotate-90</Strong> that can be composed
      to build any design, directly in your markup.
    </Text>
  );
};

ElementTypes.parameters = {
  docs: {
    description: {
      story: 'Use the `elementType` prop to render a different html element rather than the default `p` tag.',
    },
  },
};