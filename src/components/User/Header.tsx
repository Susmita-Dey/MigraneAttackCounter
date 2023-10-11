"use client";

import { Avatar, Grid } from "@mui/material";
import * as React from "react";

export default function UserHeader() {
  return (
    <Grid sx={{ my: 6 }} container alignItems={"center"}>
      <Grid item sx={{ mr: 4 }}>
        <Avatar sx={{ width: 115, height: 115, backgroundColor: "#1F6FFF" }}>
          S
        </Avatar>
      </Grid>
      <Grid item>
        <h1>Hi, Susmita!</h1>
        <p style={{ marginBottom: "12px" }}>myhappyagency@gmail.com</p>
        {/* <p>Here&#39s your migraine calendar for October 2021.</p> */}
      </Grid>
    </Grid>
  );
}
