"use client";
import React from "react";
import Image from "next/image";
import Calculator from "@/Calculator";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import ArrowIcon from "../../public/icon-arrow.svg";
export default function Home() {
  return (
    <div className="flex pt-11">
      <div
        id="calculator-background"
        aria-label="calculator background"
        className="flex items-start flex-col bg-white rounded-t-3xl rounded-tr-3xl rounded-br-none mx-auto mr-auto pt-7 pl-7"
      >
        {/* <Grid id="calculator-fieldLabels" aria-label="calculator field labels" className="flex flex-row text-black gap-2">
          <label></label>
          <p>DAY</p>
          <p>MONTH</p>
          <p>FIELD</p>
        </Grid> */}
        <Grid
          container
          id="calculator-fields"
          aria-label="calculator fields"
          direction="row"
          alignItems="center"
          // spacing={1} /*className="flex flex-row gap-1 py-4"*/
        >
          <Grid item md>
            <p>DAY</p>
            <TextField
              variant="outlined"
              id="day-field"
              aria-label="day field"
              size="medium"
              placeholder="DD"
              required
              sx={{
                input: {
                  "&::placeholder": {
                    fontWeight: "900",
                    color: "#151515",
                    lineHeight: "48px",
                  },
                },
              }}
            />
          </Grid>
          <Grid item md>
            <p>MONTH</p>
            <TextField
              variant="outlined"
              id="month-field"
              aria-label="month field"
              size="medium"
              placeholder="MM"
              required
              sx={{
                input: {
                  "&::placeholder": {
                    fontWeight: "900",
                    color: "#151515",
                    lineHeight: "48px",
                  },
                },
              }}
            />
          </Grid>
          <Grid item md>
            <p>YEAR</p>
            <TextField
              variant="outlined"
              id="year-field"
              aria-label="year field"
              size="medium"
              placeholder="YYYY"
              required
              sx={{
                input: {
                  "&::placeholder": {
                    fontWeight: "900",
                    color: "#151515",
                    lineHeight: "48px",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <div className="flex flex-row w-full" id="calculator-btn-divider">
          {/* <div style={{ display: "inline-block" }}> */}
          <div className="py-9 pl-9" id="divider-container">
            <hr id="calculator-divider" />
          </div>
          <div id="calculator-button" aria-label="calculator button">
            <Image src={ArrowIcon} alt="arrow image" width={70} height={70} />
          </div>
        </div>
        {/* </div> */}
        <div id="calculator-result" aria-label="calculator result">
          <span id="result-multilines">
            <p id="purple-value">--</p> <p id="result-text">years</p>
          </span>
          <span id="result-multilines">
            <p id="purple-value">--</p> <p id="result-text">months</p>
          </span>
          <span id="result-multilines">
            <p id="purple-value">--</p> <p id="result-text">days</p>
          </span>
        </div>
      </div>
    </div>
  );
}
