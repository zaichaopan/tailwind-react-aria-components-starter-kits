import React from 'react';
import type { Meta } from '@storybook/react';
import { RadioField, RadioGroup, Radio, Radios } from '../src/radio-group';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  FieldError,
  Label,
  Description,
  TextField,
  Input,
  LabeledGroup,
} from '../src/field';
import { InputGroup, InputSeparator } from '../src/input-group';
import { twMerge } from 'tailwind-merge';
import { focusVisibleOutlineStyle } from '../src/utils';
import { Strong, Text } from '../src/text';
import { SolidStar, Star, CheckCircle } from './~icons';
import { CopyButton } from '../src/clipboard';

const meta: Meta<typeof RadioGroup> = {
  title: 'Radio group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/RadioGroup.html#radiogroup" target="_blank">`radio group`</a> allows a user to select a single item from a list of mutually exclusive options.',
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
    <RadioGroup defaultValue="system" className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Radios>
        <Radio value="system">Sync with system</Radio>
        <Radio value="enable">Enable</Radio>
        <Radio value="disabled">Disabled</Radio>
      </Radios>
    </RadioGroup>
  );
};

export const WithRadioItemDescription = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>

      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithRadioItemDescriptionHidden = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>

      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithRadioGroupDescription = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithRadioGroupDescriptionHiddenTitle = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>

      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithLabelPosition = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>

      <Radios>
        <Radio value="system" labelPosition="left">
          Sync with system
        </Radio>

        <Radio value="enable" labelPosition="left">
          Approve
        </Radio>

        <Radio value="disabled" labelPosition="left">
          Disabled
        </Radio>
      </Radios>
    </RadioGroup>
  );
};

export const WithLabelPositionHidden = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>

      <Radios>
        <RadioField>
          <Radio value="system" labelPosition="left">
            Sync with system
          </Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable" labelPosition="left">
            Approve
          </Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled" labelPosition="left">
            Disabled
          </Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithDisabledRadioItems = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled" isDisabled>
            Disabled
          </Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithDisabledRadioGroup = () => {
  return (
    <RadioGroup className="max-w-md" isDisabled>
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithReadonlyRadioGroup = () => {
  return (
    <RadioGroup className="max-w-md" isReadOnly>
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const WithValidation = () => {
  return (
    <Form>
      <RadioGroup isRequired className="max-w-md">
        <Label>Autoplay animated images</Label>
        <Description>
          Select whether animated images should play automatically.
        </Description>
        <Radios>
          <RadioField>
            <Radio value="system">Sync with system</Radio>
            <Description>
              Adopts your system preference for reduced motion
            </Description>
          </RadioField>

          <RadioField>
            <Radio value="enable">Approve</Radio>
            <Description>Automatically plays animated images</Description>
          </RadioField>

          <RadioField>
            <Radio value="disabled">Disabled</Radio>
            <Description>
              Prevents animated images from playing automatically
            </Description>
          </RadioField>
        </Radios>
        <FieldError />
      </RadioGroup>

      <Button type="submit">Save motion preferences</Button>
    </Form>
  );
};

export const RadioCardGroups = () => {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <RadioGroup defaultValue={options[0].name}>
      <Label>Shipping</Label>
      <Radios className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((option) => {
          return (
            <Radio
              value={option.name}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                  isSelected && 'min-w-52 border-accent ring-1 ring-accent',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
                <div className="font-medium text-muted">{option.price}</div>
              </div>
            </Radio>
          );
        })}
      </Radios>
    </RadioGroup>
  );
};

export const WithCustomRender = () => {
  return (
    <RadioGroup defaultValue={'private_with_link'}>
      <Label>Private Generations</Label>
      <Description>Who can view this generation?</Description>
      <Radios className="gap-y-0 divide-y rounded-xl border shadow-sm">
        <Radio
          value="public"
          render={({ isSelected }) => {
            return (
              <div
                className={twMerge(
                  'flex flex-1 items-center justify-between space-x-6 p-4',
                  focusVisibleOutlineStyle,
                  'focus-visible:rounded-t-xl',
                  // isFocusVisible && ['rounded-t-xl', focusOutlineStyle],
                )}
              >
                <div className="flex-1">
                  <Strong>Public</Strong>

                  <Text className="max-w-80">
                    Anyone with a link can see this. It appears on your public
                    profile and access app galleries
                  </Text>
                </div>
                {isSelected ? (
                  <CheckCircle className="size-5 text-accent" />
                ) : (
                  <div className="size-5 p-0.5">
                    <div className="border-1.5 size-full rounded-full border"></div>
                  </div>
                )}
              </div>
            );
          }}
        ></Radio>
        <Radio
          value="private_with_link"
          render={({ isSelected }) => {
            return (
              <div
                className={twMerge(
                  'flex flex-1 items-center justify-between space-x-6 p-4',
                  focusVisibleOutlineStyle,
                )}
              >
                <div className="flex-1">
                  <Strong>Private with Link</Strong>

                  <Text className="mb-2 max-w-md">
                    Anyone with a link can see this.
                  </Text>

                  <LabeledGroup>
                    <Label className="sr-only">Copy install command</Label>
                    <InputGroup>
                      <TextField isReadOnly>
                        <Label className="sr-only">Install command</Label>
                        <Input
                          value="https://example.dev/r/YgqgxwxwVIy?share=ybOBQ"
                          className="truncate"
                        />
                      </TextField>
                      <InputSeparator />
                      <CopyButton
                        variant="outline"
                        copyText="https://example.dev/r/YgqgxwxwVIy?share=ybOBQ"
                      ></CopyButton>
                    </InputGroup>
                  </LabeledGroup>
                </div>
                {isSelected ? (
                  <CheckCircle className="size-5 text-accent" />
                ) : (
                  <div className="size-5 p-0.5">
                    <div className="border-1.5 size-full rounded-full border"></div>
                  </div>
                )}
              </div>
            );
          }}
        ></Radio>
        <Radio
          value="private"
          render={({ isSelected }) => {
            return (
              <div
                className={twMerge(
                  'flex flex-1 items-center justify-between space-x-6 p-4',
                  focusVisibleOutlineStyle,
                  'focus-visible:rounded-t-xl',
                )}
              >
                <div className="">
                  <Strong>Private</Strong>
                  <Text className="max-w-64">Only you can see this.</Text>
                </div>
                {isSelected ? (
                  <CheckCircle className="size-5 text-accent" />
                ) : (
                  <div className="size-5 p-0.5">
                    <div className="border-1.5 size-full rounded-full border"></div>
                  </div>
                )}
              </div>
            );
          }}
        ></Radio>
      </Radios>
    </RadioGroup>
  );
};

WithCustomRender.parameters = {
  docs: {
    description: {
      story:
        'Use the `render` prop of `Radio` to render completely custom radio groups.',
    },
  },
};

export function HorizontalRadioGroup() {
  return (
    <RadioGroup orientation="horizontal">
      <Label>Select your favorite city</Label>
      <Radios>
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </Radios>
    </RadioGroup>
  );
}

export function HorizontalRadioGroupRatingHidden() {
  return (
    <RadioGroup name="rate" orientation="horizontal">
      <Label>How do you rate your experience?</Label>
      <Radios className="gap-x-6">
        <Radio value="1" className="gap-2">
          1
        </Radio>
        <Radio value="2" className="gap-2">
          2
        </Radio>
        <Radio value="3" className="gap-2">
          3
        </Radio>
        <Radio value="4" className="gap-2">
          4
        </Radio>
        <Radio value="5" className="gap-2">
          5
        </Radio>
      </Radios>
    </RadioGroup>
  );
}

export function PreferredEmojisTitleHidden() {
  return (
    <RadioGroup name="emoji_preference" orientation="horizontal">
      <Label>Preferred default emoji skin tone</Label>
      <Radios>
        <Radio value="Neutral Tone" aria-label="Neutral">
          👋
        </Radio>
        <Radio
          value="Light Skin Tone"
          aria-label="Light Skin Tone"
          className="gap-1"
        >
          👋🏻
        </Radio>
        <Radio
          value="Medium-Light Skin Tone"
          aria-label="Medium-Light SKin Tone"
        >
          👋🏼
        </Radio>
        <Radio
          value="Medium Skin Tone"
          aria-label="Medium Skin Tone"
          className="gap-1"
        >
          👋🏽
        </Radio>
        <Radio
          value="Medium-Dark Skin Tone"
          aria-label="Medium-Dark Skin Tone"
          className="gap-1"
        >
          👋🏾
        </Radio>
        <Radio
          value="Dark Skin Tone"
          aria-label="Dark Skin Tone"
          className="gap-1"
        >
          👋🏿
        </Radio>
      </Radios>
    </RadioGroup>
  );
}

const options = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },
];

export const StarRatingsTitleHidden = () => {
  const [rating, setRating] = React.useState<string | null>(null);

  return (
    <RadioGroup
      orientation="horizontal"
      className="flex-1"
      value={rating}
      onChange={(value) => {
        setRating(value);
      }}
    >
      <Label>Rating</Label>
      <Radios className="gap-x-1">
        {options.map((option, index) => {
          const shouldLHighlight = Number(rating) > Number(option.value);
          return (
            <Radio
              value={option.value}
              aria-label={String(index + 1)}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-md',
                  isSelected || shouldLHighlight ? 'text-accent' : 'text-muted',
                  focusVisibleOutlineStyle,
                );
              }}
              render={({ isSelected }) => {
                return (
                  <div className="flex w-full items-center justify-between gap-3 ">
                    {isSelected || shouldLHighlight ? (
                      <SolidStar className="size-6 text-accent" />
                    ) : (
                      <Star className="size-6 text-muted/45" />
                    )}
                  </div>
                );
              }}
            />
          );
        })}
      </Radios>
    </RadioGroup>
  );
};
