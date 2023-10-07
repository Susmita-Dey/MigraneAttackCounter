"use client";

import * as React from "react";
import {
  Avatar,
  Grid,
  Button,
  Switch,
  FormControlLabel,
  Typography,
} from "@mui/material";
// import Logo from "@components/Logo";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ switchTheme }: { switchTheme: any }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction={"row"}
        justifyContent={pathname === "/" ? "center" : "space-between"}
        alignItems={"center"}
      >
        <Grid item lg={6}>
          <Typography variant={"h4"}>Migrane Tracker</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          rowSpacing={1}
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <FormControlLabel
            control={<Switch onChange={switchTheme} />}
            label={"Dark Mode"}
            name="gilad"
            color="primary"
          />
          <Avatar
            className="pointer"
            onClick={() => router.push("/profile")}
            sx={{ width: 56, height: 56, backgroundColor: "#1F6FFF" }}
          >
            S
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}
