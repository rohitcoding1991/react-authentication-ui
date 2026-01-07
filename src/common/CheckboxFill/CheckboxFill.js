import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function ControlledCheckbox({ className }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className={className}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
  );
}
