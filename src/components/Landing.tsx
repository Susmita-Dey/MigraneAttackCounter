"use client";

import * as React from "react";
import { Button, TextField, Grid } from "@mui/material";
import doctor from "../../../public/doctor-1.png";
import Image from "next/image";

export default function Landing() {
  return (
    <Grid
      className="Landing"
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <h1>Track your migraines, help doctors find a cure.</h1>
        <p style={{ maxWidth: "800px", lineHeight: "1.45" }}>
          Migraine Tracker is a free app that helps you track your migraines and
          share your data with doctors and researchers.
        </p>
      </Grid>
      <Grid
        item
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ py: 2 }}
      >
        <TextField
          sx={{ mr: 2 }}
          label="Email"
          variant="outlined"
          size="small"
        />
        <Button variant="contained">Sign Up</Button>
      </Grid>
      <Grid item>
        <Image
          src={doctor}
          alt="doctor"
          className="pointer"
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}
