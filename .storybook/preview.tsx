import '../src/theme/index.css';
import '../src/theme/accent-colors.css';
import '../src/theme/avatar-initial-colors.css';
import './preview.css';
import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Light/dak mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        dynamicTitle: true,
        items: [
          {
            icon: 'sun',
            value: 'light',
            title: 'Light Mode',
          },
          {
            icon: 'moon',
            value: 'dark',
            title: 'Dark Mode',
          },
        ],
      },
    },
    theme: {
      description: 'Accent Color',
      defaultValue: 'zinc-theme',
      toolbar: {
        title: 'Accent Color',
        dynamicTitle: true,
        items: [
          {
            value: 'zinc-theme',
            title: 'Zinc',
          },
          {
            value: 'blue-theme',
            title: 'Blue',
          },
          {
            value: 'indigo-theme',
            title: 'Indigo',
          },
          {
            value: 'violet-theme',
            title: 'Violet',
          },
          {
            value: 'purple-theme',
            title: 'Purple',
          },
          {
            value: 'fuchsia-theme',
            title: 'Fuchsia',
          },
        ],
      },
    },
    textDirection: {
      description: 'Text Direction',
      defaultValue: 'ltr',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            value: 'ltr',
            title: 'LTR',
          },
          {
            value: 'rtl',
            title: 'RTL',
          },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      // change theme
      [
        `${context.globals.theme}`,
        ...(document
          .querySelector('body')
          ?.className.split(' ')
          .filter((name) => name.includes('-theme')) ?? []),
      ].forEach((name) => {
        if (name === '') {
          name = 'zinc-theme';
        }

        document.querySelector('body')?.classList.toggle(name);
      });

      // change mode
      document
        .querySelectorAll('.docs-story')
        ?.forEach((item) => item.classList.add('bg-background'));

      const htmlClass = document.querySelector('html')?.className ?? '';
      const mode = context.globals.mode;

      if (mode === 'light') {
        if (!htmlClass.includes('light')) {
          document.querySelector('html')?.classList.remove('dark');
          document.querySelector('html')?.classList.toggle('light');
        }
      } else if (mode === 'dark') {
        if (!htmlClass.includes('dark')) {
          document.querySelector('html')?.classList.remove('light');
          document.querySelector('html')?.classList.toggle('dark');
        }
      }

      const html = document.querySelector('html');

      if (html) {
        html.dir = context.globals.textDirection;
      }

      return <Story />;
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    grids: { disabled: true },
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {},
    },
    options: {
      storySort: {
        order: ['Overview', '*'],
      },
    },
  },
};

export default preview;
