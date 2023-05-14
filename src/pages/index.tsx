import React, { useState } from "react"
import { reveal, numToJpYen } from "./lib/calc";
import { NumSlider } from "./components/Slider";
import { Info } from "./components/Info";

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
        <h1>年収revealer</h1>
        <section>
          <h2>年収</h2>
          <NumSlider
          max={1200}
          value={income}
          handleChange={handleChangeIncomeSlider}
          interval={100}
          step={10}
        />
        </section>
        <section>
          <h2>みなし残業時間</h2>
          <NumSlider
          max={80}
          value={overworkHours}
          handleChange={handleChangeOverWorkHoursSlider}
          interval={10}
        />
        </section>
        <section>
          <h2>結果</h2>
          <p>みなし残業がない場合の年収</p>
          <p>{numToJpYen(result)}</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
            <p>予想基本給</p>
            <Info label="みなし残業がない場合の年収 / 12" />
          </div>
          <p>{numToJpYen(result / 12)}</p>
        </section>
      </main>
    </>
  )
}
