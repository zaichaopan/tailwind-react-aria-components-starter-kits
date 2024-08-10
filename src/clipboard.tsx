import React from 'react';
import { Button, ButtonWithoutAsChildProps } from './button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './tooltip';
import { CopyIcon } from './icons';

export type ClipboardProps = {
  timeout?: number;
  children: (payload: {
    copied: boolean;
    copy: (value: string) => void;
  }) => React.ReactNode;
};

export function Clipboard({ timeout, children }: ClipboardProps) {
  const { copied, copy } = useCopyToClipboard({ timeout });
  return children({ copied, copy });
}

export function CopyButton({
  copyText,
  label = 'Copy',
  labelCopied = 'Copied to clipboard',
  variant = 'plain',
  children,
  ...props
}: {
  copyText: string;
  label?: string;
  labelCopied?: string;
} & ButtonWithoutAsChildProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              variant={variant}
              {...(!children && {
                iconOnly: true,
              })}
              aria-label={label}
              {...props}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
            >
              {children ?? <CopyIcon />}
            </Button>
            <Tooltip>{copied ? labelCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
