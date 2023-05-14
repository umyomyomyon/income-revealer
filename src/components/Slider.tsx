import { Slider, SliderProps } from "@mantine/core";
import React from "react";

type Props = {
  min?: number;
  max: number;
  value: number;
  handleChange: (value: number) => void;
  interval: number;
  step?: number;
}

export const NumSlider: React.FC<Props> = ({ min = 0, max, value, handleChange, interval, step = 1 }) => {
  const marks = makeMarks(min, max, interval)
  return (
    <>
      <Slider value={value} onChange={handleChange} min={min} max={max} marks={marks} step={step} />
    </>
  )
}

const makeMarks = (min: number, max: number, interval: number): SliderProps['marks'] => {
  if (min >= max || min + interval > max) {
    return [];
  }
  const marks: SliderProps['marks'] = [];
  for (let i = min; i <= max; i += interval) {
    marks.push({ value: i, label: i.toString() });
  }
  if (max % interval !== 0) {
    marks.push({ value: max, label: max.toString() });
  }
  return marks;
}
