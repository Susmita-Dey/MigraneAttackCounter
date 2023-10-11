"use client";
import * as React from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import dayjs from "dayjs";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import { Event } from "../../../types";

type Props = {
  events: Event[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Calendar({ events, setOpen }: Props) {
  let yearly = dayjs().subtract(365, "days").format("YYYY-MM-DD");
  const formattedEvents = events.map((event) => ({
    ...event,
    date: dayjs(event.date).format("YYYY-MM-DD"),
  }));
  return (
    <Grid item className="Calendar border" sx={{ p: 4 }}>
      <Grid
        direction={"row"}
        container
        item
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        sx={{ mb: 4 }}
      >
        <h2>Migraine</h2>
        <Button
          className="info"
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          New
        </Button>
      </Grid>
      <ReactCalendarHeatmap
        startDate={yearly}
        showWeekdayLabels={true}
        values={formattedEvents}
        classForValue={(value: any) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.intensity}`;
          //   return `primary opacity-${value.count}`;
        }}
      />
      <Alert severity="info">
        <AlertTitle>Beta</AlertTitle>
        <span>
          Migrainedata.app is currently in beta; more is coming about the app
        </span>
      </Alert>
    </Grid>
  );
}
