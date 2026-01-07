import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import RightTick from "../../assets/svg/RightTick.svg";

const PasswordSuccessContent = () => {
  return (
    <Box>
      <Box className="!mt-7">
        <Box className="!flex !justify-center !mb-5">
          <img
            alt="SideImage"
            src={RightTick}
            className="!w-auto !h-auto !relative !bottom-[2px]"
          />
        </Box>

        <Typography className="!mb-8 !text-[--black] Inter600 !text-center w-full lg:!text-xl !text-base">
          Password reset successfully
        </Typography>

        <Link to="/signin">
          <PrimaryButton buttonName="Login" className="!py-4 !w-full" />
        </Link>
      </Box>
    </Box>
  );
};

export default PasswordSuccessContent;
