import {
  RangeCalendar as RACRangeCalendar,
  RangeCalendarProps as RACRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from 'react-aria-components';
import { CalendarGridHeader, CalendarHeader } from './calendar';
import { groupFocusVisibleOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<RACRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <RACRangeCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid className="[&_td]:px-0" weekdayStyle="short">
        <CalendarGridHeader />
        <CalendarGridBody className="before:block before:w-full before:leading-[0.25rem] before:opacity-0 before:content-['.']">
          {(date) => (
            <CalendarCell
              date={date}
              className={[
                'group size-9 cursor-default text-sm outline-none',
                'selected:bg-accent/[0.085] dark:selected:bg-accent/40',
                'invalid:selected:bg-destructive/15 dark:invalid:selected:bg-destructive/30',
                'selection-start:rounded-s-lg',
                'selection-end:rounded-e-lg',
                '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg',
              ].join(' ')}
            >
              {({ formattedDate }) => (
                <span
                  className={twMerge(
                    'flex size-[calc(theme(size.9)-1px)] items-center justify-center',
                    'group-hover:rounded-lg',
                    'group-hover:bg-zinc-100',
                    'dark:group-hover:bg-zinc-700',
                    'group-pressed:bg-accent/90',

                    // selected
                    'group-selected:group-hover:bg-accent/15',
                    'group-selected:dark:group-hover:bg-accent/50',
                    'group-selected:group-pressed:bg-accent',
                    'group-selected:group-pressed:text-white',

                    // disabled
                    'group-disabled:opacity-50',

                    // unavailable
                    'group-unavailable:text-destructive',
                    'group-unavailable:decoration-destructive',
                    'group-unavailable:line-through',

                    // selection start
                    'group-selected:group-selection-start:border',
                    'group-selected:group-selection-start:dark:border-0',
                    'group-selected:group-selection-start:border-accent',
                    'group-selected:group-selection-start:rounded-lg',
                    'group-selected:group-selection-start:bg-accent',
                    'group-selected:group-selection-start:text-white',
                    'group-selected:group-selection-start:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                    'group-selected:group-selection-start:group-hover:bg-accent/90',
                    'group-selected:group-selection-start:dark:group-hover:bg-accent/90',
                    'group-selected:group-selection-start:group-invalid:border-destructive',
                    'group-selected:group-selection-start:group-invalid:bg-destructive',
                    'group-selected:group-selection-start:group-invalid:text-white',

                    // selection end
                    'group-selected:group-selection-end:border',
                    'group-selected:group-selection-end:dark:border-0',
                    'group-selected:group-selection-end:border-accent',
                    'group-selected:group-selection-end:rounded-lg',
                    'group-selected:group-selection-end:bg-accent',
                    'group-selected:group-selection-end:text-white',
                    'group-selected:group-selection-end:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                    'group-selected:group-selection-end:group-hover:bg-accent/90',
                    'group-selected:group-selection-end:dark:group-hover:bg-accent/90',
                    'group-selected:group-selection-end:group-invalid:border-destructive',
                    'group-selected:group-selection-end:group-invalid:bg-destructive',
                    'group-selected:group-selection-end:group-invalid:text-white',

                    groupFocusVisibleOutlineStyle,
                    'group-focus-visible:rounded-lg',
                  )}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-destructive">
          {errorMessage}
        </Text>
      )}
    </RACRangeCalendar>
  );
}
