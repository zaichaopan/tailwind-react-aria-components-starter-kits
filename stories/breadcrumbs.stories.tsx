import { docs } from '../.storybook/docs';
import { Breadcrumb, Breadcrumbs } from '../src/breadcrumbs';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html#breadcrumbs" target="_blank">`Breadcrumbs`</a> display a hierarchy of links to the current page or resource in an application.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <Breadcrumbs>
      <Breadcrumb href="/">Home</Breadcrumb>
      <Breadcrumb href="/react-aria">React Aria</Breadcrumb>
      <Breadcrumb>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
};
