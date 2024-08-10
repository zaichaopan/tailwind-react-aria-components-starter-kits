import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateHeading,
  EmptyStateIcon,
} from '../src/empty-state';
import { FolderPlus, Plus } from 'lucide-react';
import { AccessibleIcon } from '../src/accessible-icon';

const meta: Meta<typeof Button> = {
  title: 'Empty state',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '<a href="https://tailwindui.com/components/application-ui/feedback/empty-states" target="_blank">`EmptyState`</a> is used as placeholder to tell users why content is missing.',
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
    <EmptyState className="h-screen">
      <EmptyStateIcon>
        <FolderPlus strokeWidth="1" />
      </EmptyStateIcon>
      <EmptyStateHeading>No projects</EmptyStateHeading>
      <EmptyStateDescription>
        Get started by creating a new project.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <AccessibleIcon>
            <Plus />
          </AccessibleIcon>
          New Project
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
};
