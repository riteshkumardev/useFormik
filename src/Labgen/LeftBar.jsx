import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import style from "./styles.module.css";
function LeftBar() {
  return (
    <Paper
      sx={{
        width: "20%",
        backgroundColor: "#E1E4E8",
        height: "900px",
      }}
    >
      <div className={style.systumText}>
        System Dictionary > Canned Comments
      </div>

      <TextField
        sx={{
          marginLeft: "28px",
          width: "85%",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        label="Comment Number"
      />
      <TextField
        sx={{
          marginLeft: "28px",
          width: "85%",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        label="Description"
      />
      <Button
        variant="outlined"
        sx={{ marginLeft: "40%", marginRight: "25px", marginTop: "50px" }}
      >
        Reset
      </Button>
      <Button variant="contained" sx={{ marginTop: "50px" }}>
        Search
      </Button>
    </Paper>
  );
}

export default LeftBar;
