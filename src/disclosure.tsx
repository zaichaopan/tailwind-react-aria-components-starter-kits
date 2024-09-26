import React from 'react';
import { twMerge } from 'tailwind-merge';

const AccordionContext = React.createContext<{
  name?: string;
} | null>(null);

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  if (!context) {
    return {};
  }
  return context;
};

export function Accordion({
  name,
  className,
  ...props
}: JSX.IntrinsicElements['section'] & { name?: string }) {
  return (
    <AccordionContext.Provider value={{ name }}>
      <section
        {...props}
        className={twMerge('flex w-full flex-col', className)}
      />
    </AccordionContext.Provider>
  );
}

export function Disclosure({
  className,
  ...props
}: JSX.IntrinsicElements['details']) {
  const { name } = useAccordionContext();

  return (
    <details
      {...props}
      className={twMerge('group', className)}
      {...(name && { name })}
    />
  );
}

export function DisclosureControl({
  className,
  ...props
}: JSX.IntrinsicElements['summary']) {
  return (
    <summary
      {...props}
      className={twMerge(
        'flex w-full cursor-pointer select-none justify-between rounded-lg text-left text-base/6 font-medium outline-none group-open:mb-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden',
        className,
      )}
    />
  );
}
