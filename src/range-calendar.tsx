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
import { focusOutlineStyle } from './utils';
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
              {({
                formattedDate,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isFocusVisible,
                isUnavailable,
                isDisabled,
              }) => (
                <span
                  className={twMerge(
                    'flex size-[calc(theme(size.9)-1px)] items-center justify-center',
                    //  selectionStateStyle
                    isSelected && (isSelectionStart || isSelectionEnd)
                      ? [
                          'border border-accent bg-accent text-white dark:border-0',
                          'rounded-lg',
                          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                          'group-invalid:border-destructive',
                          'group-invalid:bg-destructive',
                          'group-invalid:text-white',
                        ]
                      : isSelected
                        ? [
                            'rounded-lg',
                            'group-hover:bg-accent/15 dark:group-hover:bg-accent/50',
                            'group-pressed:bg-accent group-pressed:text-white',
                          ]
                        : [
                            isUnavailable
                              ? ''
                              : 'group-hover:rounded-lg group-hover:bg-hover group-pressed:bg-accent/90',
                          ],
                    isFocusVisible && [focusOutlineStyle, 'rounded-lg'],
                    isDisabled && 'opacity-50',
                    isUnavailable &&
                      'text-destructive line-through decoration-destructive',
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
