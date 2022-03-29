import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <IconButton>
        All <ExpandMoreIcon className="home__icon" />
      </IconButton>
    </div>
  );
}

export default Home;
