import React, { useState } from "react"
import { reveal, numToJpYen } from "../lib/calc";
import { NumSlider } from "../components/Slider";
import { Info } from "../components/Info";
import { createStyles, Text, Title, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    display: 'grid',
    placeContent: 'center',
    margin: "1rem"
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 500,
    margin: 'auto',
    padding: 20,
  },
  sliderSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  numText: {
    marginTop: "3rem",
  },
  sectionTitle: {
    marginBottom: "1rem",
  },
  resultNum: {
    margin: "1rem",
  }
}))

export default function Home() {
  const { classes } = useStyles();
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
      <header className={classes.header}>
        <Title order={1}>年収revealer</Title>
      </header>
      <main className={classes.main}>
        <section className={classes.sliderSection}>
          <Title order={2} className={classes.sectionTitle}>年収</Title>
          <NumSlider
          max={800}
          value={income}
          handleChange={handleChangeIncomeSlider}
          interval={100}
          step={10}
        />
        <Text className={classes.numText} size="xl" weight="bold" align="center">{`${income}万円`}</Text>
        </section>
        <section className={classes.sliderSection}>
          <Title order={2} className={classes.sectionTitle}>みなし残業時間</Title>
          <NumSlider
          max={80}
          value={overworkHours}
          handleChange={handleChangeOverWorkHoursSlider}
          interval={10}
        />
        <Text className={classes.numText} size="xl" weight="bold" align="center">{`${overworkHours}時間`}</Text>
        </section>
        <section className={classes.section}>
          <Title order={2} className={classes.sectionTitle}>結果</Title>
          <Text>みなし残業がない場合の年収</Text>
          <Text className={classes.resultNum} size="xl" weight="bold" align="center">{numToJpYen(result)}</Text>
          <Flex>
            <Text>予想基本給</Text>
            <Info label="みなし残業がない場合の年収 / 12" />
          </Flex>
          <Text className={classes.resultNum} size="xl" weight="bold" align="center">{numToJpYen(result / 12)}</Text>
        </section>
      </main>
    </>
  )
}
