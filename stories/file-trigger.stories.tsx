import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { FileTrigger } from '../src/file-trigger';
import { Avatar } from '../src/avatar';

const meta: Meta<typeof Button> = {
  title: 'File trigger',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/FileTrigger.html" target="_blank">`FileTrigger`</a> allows a user to access the file system with any pressable React Aria component.',
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
  const [file, setFile] = React.useState<Array<string> | null>(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const files = Array.from(e);
          const filenames = files.map((file) => file.name);
          setFile(filenames);
        }}
      >
        <Button variant="outline">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
};

export const ChangeProfile = () => {
  const [src, setSrc] = React.useState<string | undefined>(undefined);

  return (
    <div className="flex items-center gap-2">
      <Avatar alt="D D" className="rounded-full" src={src}></Avatar>
      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const file = Array.from(e)[0];
          setSrc(URL.createObjectURL(file));
        }}
      >
        <Button variant="outline">Change</Button>
      </FileTrigger>
    </div>
  );
};
