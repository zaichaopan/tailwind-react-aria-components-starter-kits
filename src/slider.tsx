import {
  Slider as RACSlider,
  SliderProps as RACSliderProps,
  SliderThumb,
  SliderTrack as RACSliderTrack,
  SliderRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export { SliderOutput } from 'react-aria-components';

export interface SliderProps<T> extends RACSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>(props: SliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2 orientation-horizontal:min-w-64 orientation-vertical:items-center',
      )}
    />
  );
}

const trackStyle = [
  'absolute top-[50%] translate-y-[-50%] rounded-full',
  'group-orientation-horizontal:h-1',
  'group-orientation-horizontal:w-full',
  'group-orientation-vertical:left-[50%]',
  'group-orientation-vertical:h-full',
  'group-orientation-vertical:w-[6px]',
  'group-orientation-vertical:translate-x-[-50%]',
  'group-orientation-vertical:translate-y-[-50%]',
  'group-disabled:opacity-50',
];

export function SliderTack({ thumbLabels }: { thumbLabels?: string[] }) {
  return (
    <RACSliderTrack className="group relative flex w-full items-center orientation-horizontal:h-7 orientation-vertical:h-44 orientation-vertical:w-7">
      {({ state, orientation }) => {
        return (
          <>
            <div
              className={twMerge('bg-zinc-200 dark:bg-zinc-300', trackStyle)}
            />
            <div
              className={twMerge('bg-accent', trackStyle)}
              style={getTrackHighlightStyle(state, orientation)}
            />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={composeTailwindRenderProps('', [
                  'size-5 rounded-full border bg-white shadow-xl dark:border-0',
                  'group-orientation-horizontal:top-[50%] group-orientation-vertical:left-[50%]',
                  'dragging:border-8  dragging:border-accent',
                  'disabled:cursor-not-allowed',
                  focusVisibleOutlineStyle,
                ])}
              />
            ))}
          </>
        );
      }}
    </RACSliderTrack>
  );
}

function getTrackHighlightStyle(
  state: SliderRenderProps['state'],
  orientation: SliderRenderProps['orientation'],
) {
  const hasTwoThumbs = state.values.length == 2;
  const highlightPercentage = hasTwoThumbs
    ? (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%'
    : state.getThumbPercent(0) * 100 + '%';
  const highlightStartPosition = hasTwoThumbs
    ? state.getThumbPercent(0) * 100 + '%'
    : '0';

  return orientation === 'horizontal'
    ? {
        width: highlightPercentage,
        left: highlightStartPosition,
      }
    : {
        height: highlightPercentage,
        bottom: highlightStartPosition,
        top: 'auto',
        transform: 'translate(-50%,0px)',
      };
}
