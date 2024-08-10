import type { Meta } from '@storybook/react';
import React from 'react';
import { SortDescriptor, TableBody} from 'react-aria-components';
import { Cell, Column, Row, Table, TableHeader } from '../src/table';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Table.html" target="_blank">`table`</a> displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.',
      },

      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

const rows = [
  { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
  { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
  { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
  { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
  { id: 5, name: 'Proposal.ppt', date: '6/18/2022', type: 'PowerPoint file' },
  { id: 6, name: 'Taxes.pdf', date: '12/6/2023', type: 'PDF Document' },
  { id: 7, name: 'Photos', date: '8/2/2021', type: 'File folder' },
  { id: 8, name: 'Documents', date: '3/18/2023', type: 'File folder' },
  { id: 9, name: 'Budget.xls', date: '1/6/2024', type: 'Excel file' },
];

export const BasicExample = () => {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });

  const items = React.useMemo(() => {
    const items = rows.slice().sort((a, b) => {
      const column = sortDescriptor.column as keyof (typeof rows)[number];
      return String(a[column]).localeCompare(String(b[column]));
    });
    if (sortDescriptor.direction === 'descending') {
      items.reverse();
    }
    return items;
  }, [sortDescriptor]);

  return (
    <Table
      aria-label="Files"
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader>
        <Column id="name" isRowHeader allowsSorting>
          Name
        </Column>
        <Column id="type" allowsSorting>
          Type
        </Column>
        <Column id="date" allowsSorting>
          Date Modified
        </Column>
      </TableHeader>
      <TableBody items={items}>
        {(row) => (
          <Row>
            <Cell>{row.name}</Cell>
            <Cell>{row.type}</Cell>
            <Cell>{row.date}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
};
