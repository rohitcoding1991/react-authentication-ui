import React from "react";
import { Box } from "@mui/material";

const Authonicate = ({ LeftContent, RightContent }) => {
  return (
    <Box className="!flex !flex-row">
      <Box className=" block lg:basis-1/2 overflow-hidden sm:h-screen">
        {LeftContent}
      </Box>

      <Box className="lg:basis-1/2 !w-full !max-w-[570px] !m-auto md:!px-8 px-4 ">
        {RightContent}
      </Box>
    </Box>
  );
};

export default Authonicate;
