import {
  Calendar as RACCalendar,
  CalendarGridHeader as RACCalendarGridHeader,
  CalendarProps as RACCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
  useLocale,
} from 'react-aria-components';
import { Button } from './button';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

export interface CalendarProps<T extends DateValue>
  extends Omit<RACCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <RACCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid weekdayStyle="short">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={({
                isSelected,
                isDisabled,
                isUnavailable,
                isFocusVisible,
              }) => {
                return twMerge(
                  'flex size-9 cursor-default items-center justify-center rounded-lg text-sm outline-none',
                  isSelected
                    ? [
                        'border border-accent bg-accent text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:border-0',
                        'invalid:border-destructive invalid:bg-destructive invalid:text-white',
                      ]
                    : isUnavailable
                      ? ''
                      : [
                          'hover:bg-zinc-100 dark:hover:bg-zinc-700',
                          'pressed:bg-accent/90 pressed:text-white',
                        ],
                  isDisabled && 'opacity-50',
                  isUnavailable &&
                    'text-destructive line-through decoration-destructive',
                  isFocusVisible && [focusOutlineStyle],
                );
              }}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-destructive">
          {errorMessage}
        </Text>
      )}
    </RACCalendar>
  );
}

export function CalendarHeader() {
  const { direction } = useLocale();

  return (
    <header className="flex w-full items-center gap-1">
      <Button slot="previous" variant="plain" isIconOnly aria-label="Previous">
        {direction === 'rtl' ? (
          <ChevronRightIcon className="text-muted sm:size-5" />
        ) : (
          <ChevronLeftIcon className="text-muted sm:size-5" />
        )}
      </Button>

      <Heading
        className="mx-2 flex-1 text-center text-sm/6"
        level={2}
        aria-hidden
      />

      <Button slot="next" variant="plain" isIconOnly aria-label="Next">
        {direction === 'rtl' ? (
          <ChevronLeftIcon className="text-muted sm:size-5" />
        ) : (
          <ChevronRightIcon className="text-muted sm:size-5" />
        )}
      </Button>
    </header>
  );
}

export function CalendarGridHeader() {
  return (
    <RACCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="size-9 text-sm/6 font-normal text-muted">
          {day}
        </CalendarHeaderCell>
      )}
    </RACCalendarGridHeader>
  );
}
