import { TextInput } from "@mantine/core"
import React, { useState, useRef } from "react"
import { reveal } from "./lib/calc";

export default function Home() {
  const [revealed, setRevealed] = useState<number>();
  const incomeRef = useRef<HTMLInputElement>(null);
  const overworkHoursRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const income = incomeRef.current?.value;
    const overworkHours = overworkHoursRef.current?.value;
    if (income && overworkHours) {
      const revealed = reveal(Number(income), Number(overworkHours));
      setRevealed(revealed);
    }
  }

  return (
    <>
      <main>
        <p>年収</p>
        <TextInput ref={incomeRef} placeholder="年収" type="number" onChange={handleChange} />
        <p>みなし残業時間</p>
        <TextInput ref={overworkHoursRef} placeholder="みなし残業時間" type="number" onChange={handleChange} />
        <p>みなし残業がない場合の年収</p>
        <p>{revealed}</p>
        <p>予想基本給</p>
        <p>{revealed && revealed / 12}</p>
      </main>
    </>
  )
}
