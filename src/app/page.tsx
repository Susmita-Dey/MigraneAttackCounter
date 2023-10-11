"use client";
import * as React from "react";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Form from "@/components/Form";
import UserHeader from "@/components/User/Header";
import Calendar from "@/components/Calendar";
import { Event } from "@/types";

export default function Home() {
  const [events, setEvents] = useState<Array<Event>>([]);
  return (
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        <Calendar events={events} />
        <Form />
      </Grid>
    </Container>
  );
}
