import type { Meta } from '@storybook/react';
import {
  DisclosureGroup,
  Disclosure,
  DisclosurePanel,
  DisclosureControl,
} from '../src/disclosure';
import { docs } from '../.storybook/docs';
import { Text } from '../src/text';
import { ChevronDown } from 'lucide-react';
import { Heading } from '../src/heading';

const meta: Meta<typeof Disclosure> = {
  title: 'Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Disclosure.html" target="_blank">`disclosure`</a>  is a collapsible section of content. It is composed of a a header with a heading and trigger button, and a panel that contains the content.',
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
    <div className="p-6">
      <Disclosure>
        <DisclosureControl>What is web accessibility?</DisclosureControl>

        <DisclosurePanel>
          <Text>
            Web accessibility is all about ensuring all people, including
            disabled people, can perceive, operate, and understand web content.
          </Text>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const DefaultExpanded = () => {
  return (
    <div className="p-6">
      <Disclosure defaultExpanded>
        <DisclosureControl>What is web accessibility?</DisclosureControl>

        <DisclosurePanel>
          <Text>
            Web accessibility is all about ensuring all people, including
            disabled people, can perceive, operate, and understand web content.
          </Text>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const WithToggleIcon = () => {
  return (
    <div className="p-6">
      <Disclosure defaultExpanded>
        <DisclosureControl className="gap-x-2">
          What is web accessibility?
          <ChevronDown
            className="h-5 w-5 text-muted transition-all group-aria-[expanded=true]:rotate-180"
            strokeWidth={1.5}
          />
        </DisclosureControl>

        <DisclosurePanel>
          <Text>
            Web accessibility is all about ensuring all people, including
            disabled people, can perceive, operate, and understand web content.
          </Text>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const WithDisclosureGroups = () => {
  return (
    <div className="p-6">
      <DisclosureGroup className="flex flex-col gap-6" id="frequently asked">
        <Heading className="self-center pb-6">
          Frequently asked questions
        </Heading>
        <Disclosure defaultExpanded>
          <DisclosureControl>
            Is there a free trial available?
          </DisclosureControl>
          <DisclosurePanel>
            <Text>
              Yes, you can try us for free for 30 days. If you want, we'll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </Text>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="plan">
          <DisclosureControl>Can I change my plan later?</DisclosureControl>

          <DisclosurePanel>
            <Text>
              Of course you can! Our pricing scales with your company Chat to
              our friendly team to find a solution that works for yu as you
              grow.
            </Text>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="cancellation">
          <DisclosureControl>
            What is your cancellation policy?
          </DisclosureControl>
          <DisclosurePanel>
            <Text>
              Plans are per workspace, not per account. You can upgrade one
              workspace, and still hav any number of free workspace.
            </Text>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="invoice">
          <DisclosureControl>
            Can other info be added to an invoice?
          </DisclosureControl>
          <DisclosurePanel>
            <Text>
              At the comment, the only way to add additional information to
              invoices is to add the information to the workspace name manually.
            </Text>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="billing">
          <DisclosureControl>How does billing work?</DisclosureControl>
          <DisclosurePanel>
            <Text>
              Plans are per workspace, not per account. You can upgrade one
              workspace, and still have number of free workspace.
            </Text>
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
};
