import React from "react";
import { render } from "react-dom";
import ToastrContainer from 'react-toastr-basic'

import Bio from "./modules/Bio/Bio";

  render(
    <div>
      <ToastrContainer />
      <Bio />
    </div>,
    document.getElementById("root")
);
