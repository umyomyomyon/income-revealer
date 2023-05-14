import React, { useState } from "react"
import { reveal, numToJpYen } from "./lib/calc";
import { NumSlider } from "./components/Slider";

export default function Home() {
  const [income, setIncome] = useState<number>(400);
  const [overworkHours, setOverworkHours] = useState<number>(20);
  const result = reveal(income, overworkHours);

  const handleChangeIncomeSlider = (v: number) => {
    setIncome(v);
  }

  const handleChangeOverWorkHoursSlider = (v: number) => {
    setOverworkHours(v);
  }

  return (
    <>
      <main>
        <p>年収</p>
        <NumSlider
          max={1200}
          value={income}
          handleChange={handleChangeIncomeSlider}
          interval={100}
          step={10}
        />
        <p>みなし残業時間</p>
        <NumSlider
          max={80}
          value={overworkHours}
          handleChange={handleChangeOverWorkHoursSlider}
          interval={10}
        />
        <p>みなし残業がない場合の年収</p>
        <p>{numToJpYen(result)}</p>
        <p>予想基本給</p>
        <p>{numToJpYen(result / 12)}</p>
      </main>
    </>
  )
}
