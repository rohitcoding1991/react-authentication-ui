import React from "react";
import SideImg from "../../assets/svg/SideImg.svg";
import DopeLogo from "../../assets/svg/DopeLogo.svg";
import { Box, CssBaseline, Typography } from "@mui/material";

const SideImage = () => {
  return (
    <Box className="!flex !h-screen !w-full !relative">
      <CssBaseline />
      <Box className="!relative !w-full">
        <img
          alt="SideImage"
          src={DopeLogo}
          className="!w-auto !h-auto !absolute !top-[100px] !left-[100px] !z-10"
        />
        <img
          alt="SideImage"
          src={SideImg}
          className="w-1/2 lg:!block !hidden overflow-hidden object-cover h-full fixed"
        />
        <Box className="!grid !absolute !bottom-[100px] !left-[100px] !z-10 xl:!gap-5 !gap-3 ">
          <Typography
            variant="h1"
            className=" !text-[--white] !font-bold Inter700 xl:!text-[40px] !text-[28px]"
          >
            Numquam architecto iure
          </Typography>
          <Typography
            variant="caption"
            className="xl:!text-2xl !text-base !max-w-[490px] Inter600 xl:!pr-0 !pr-10 !text-[--white] Inter400 xl:!leading-7 !leading-5"
          >
            Ut corrupti est molestiae occaecati voluptatem vel harum explicabo
            numquam.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideImage;
