import type { Meta } from '@storybook/react';
import { Accordion, Disclosure, DisclosureControl } from '../src/disclosure';
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
          'A <a href="https://govtnz.github.io/web-a11y-guidance/wct/disclosures-and-accordions/#what-are-disclosures-and-accordions" target="_blank">`disclosure`</a> is a single component or widget for showing and hiding one section of content.',
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

        <Text>
          Web accessibility is all about ensuring all people, including disabled
          people, can perceive, operate, and understand web content.
        </Text>
      </Disclosure>
    </div>
  );
};

export const DefaultOpen = () => {
  return (
    <div className="p-6">
      <Disclosure open>
        <DisclosureControl>What is web accessibility?</DisclosureControl>

        <Text>
          Web accessibility is all about ensuring all people, including disabled
          people, can perceive, operate, and understand web content.
        </Text>
      </Disclosure>
    </div>
  );
};

DefaultOpen.parameters = {
  docs: {
    description: {
      story: 'Use the `open` prop to expand the content by default.',
    },
  },
};

export const WithToggleIcon = () => {
  return (
    <div className="p-6">
      <Disclosure open>
        <DisclosureControl>
          What is web accessibility?
          <ChevronDown
            className="h-5 w-5 text-muted transition-all group-open:rotate-180"
            strokeWidth={1.5}
          />
        </DisclosureControl>

        <Text>
          Web accessibility is all about ensuring all people, including disabled
          people, can perceive, operate, and understand web content.
        </Text>
      </Disclosure>
    </div>
  );
};

WithToggleIcon.parameters = {
  docs: {
    description: {
      story: 'Use `className="group-open:*"` modifier to style the toggle icon.',
    },
  },
};

export const UsingAsAccordion = () => {
  return (
    <div className="p-6">
      <Accordion
        className="flex flex-col gap-6"
        name="frequently_ask_questions"
      >
        <Heading className="self-center pb-6">
          Frequently asked questions
        </Heading>
        <Disclosure open>
          <DisclosureControl>
            Is there a free trial available?
          </DisclosureControl>
          <Text>
            Yes, you can try us for free for 30 days. If you want, we'll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </Text>
        </Disclosure>

        <Disclosure>
          <DisclosureControl>Can I change my plan later?</DisclosureControl>

          <Text>
            Of course you can! Our pricing scales with your company Chat to our
            friendly team to find a solution that works for yu as you grow.
          </Text>
        </Disclosure>

        <Disclosure>
          <DisclosureControl>
            What is your cancellation policy?
          </DisclosureControl>

          <Text>
            Plans are per workspace, not per account. You can upgrade one
            workspace, and still hav any number of free workspace.
          </Text>
        </Disclosure>

        <Disclosure>
          <DisclosureControl>
            Can other info be added to an invoice?
          </DisclosureControl>
          <Text>
            At the comment, the only way to add additional information to
            invoices is to add the information to the workspace name manually.
          </Text>
        </Disclosure>

        <Disclosure>
          <DisclosureControl>How does billing work?</DisclosureControl>
          <Text>
            Plans are per workspace, not per account. You can upgrade one
            workspace, and still have number of free workspace.
          </Text>
        </Disclosure>
      </Accordion>
    </div>
  );
};

UsingAsAccordion.parameters = {
  docs: {
    description: {
      story: 'An `accordion` can be thought of as a collection of 2 or more disclosures one after the other. Use the `name` prop to only expand one disclosure at one time.',
    },
  },
};
