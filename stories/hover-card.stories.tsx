import type { Meta } from '@storybook/react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../src/hover-card';
import { docs } from '../.storybook/docs';
import { Link } from '../src/link';
import { Small, Strong, Text } from '../src/text';

const meta: Meta<typeof HoverCard> = {
  title: 'Hover card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/hovercard" target="_blank">`Hover cards`</a> show commands and information, such as metadata and activity, when someone hovers over an item.',
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
    <div className="flex flex-col items-center gap-6 p-6">
      <Text>
        <Strong>
          Hover cards are not accessible to anyone not using a mouse with hover
          capability.
        </Strong>{' '}
        It is strongly suggested that any information or functionality available
        in the hover card is also easily accessible through another means. An
        example is using a hover card to preview page content on a link, where
        the content can also be accessed by following the link. It is strongly
        suggested that any information or functionality available in the hover
        card is also easily accessible through another means. An example is
        using a hover card to preview page content on a link, where the content
        can also be accessed by following the link.
      </Text>
      <HoverCard placement="top">
        <HoverCardTrigger>
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="relative"
          >
            Hover Me
          </Link>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4 p-4">
            <img
              className="size-8"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            />
            <div className='flex flex-col gap-2'>
              <div className="flex flex-col">
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="font-medium sm:leading-5"
                >
                  Tailwind CSS
                </Link>
                <Small className="text-muted">@tailwindCSS</Small>
              </div>

              <Text>
                Rapidly build modern websites without ever leaving your HTML{' '}
              </Text>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
