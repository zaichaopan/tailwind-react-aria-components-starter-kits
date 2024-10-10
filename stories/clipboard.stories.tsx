import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { CopyButton, Clipboard } from '../src/clipboard';
import { docs } from '../.storybook/docs';
import { Input, Label, LabeledGroup, TextField } from '../src/field';
import { InputGroup, InputSeparator } from '../src/input-group';

const meta: Meta = {
  title: 'Clipboard',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A clipboard copies given text to clipboard. Use the `CopyButton` component to copy text to clipboard.',
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
    <CopyButton
      copyText="http://example.com"
      label="Copy link"
      labelCopied="Link is copied"
    ></CopyButton>
  );
};

export const WithReadonlyInput = () => {
  const value = `npm i tailwindcss-react-aria-components`;
  return (
    <LabeledGroup>
      <Label className="sr-only">Copy install command</Label>
      <InputGroup inline>
        <TextField isReadOnly>
          <Label className="sr-only">Install command</Label>
          <Input value={value} className="truncate" />
        </TextField>
        <InputSeparator />
        <CopyButton copyText={value} variant="outline" />
      </InputGroup>
    </LabeledGroup>
  );
};

export const CopyToClipboard = () => {
  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <Button
            isDisabled={copied}
            onPress={() => copy('http://example.com')}
          >
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        );
      }}
    </Clipboard>
  );
};

CopyToClipboard.parameters = {
  docs: {
    description: {
      story:
        'Use the `Clipboard` component to build your own copy to clipboard UI.',
    },
  },
};
