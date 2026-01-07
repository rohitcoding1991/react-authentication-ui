import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import Google from "../../assets/svg/Google.svg";
import Apple from "../../assets/svg/Apple.svg";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import DividerLine from "../../common/DividerLine/DividerLine";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { inputLabelClasses } from "@mui/material/InputLabel";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginRightContent = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] Inter700 !font-bold !text-[32px]"
          >
            Welcome Back
          </Typography>
          <Typography className=" !text-[--black] Inter500 w-full lg:!text-base !text-xs  !mb-6">
            Don’t have an account?
            <Link to="/">
              <span className="text-[--primary] Inter500">&nbsp;Sign Up </span>
            </Link>
          </Typography>
        </Box>

        <Box className="!grid !gap-4 !mt-16">
          <TextField
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Email"
            InputLabelProps={{
              sx: {
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "var(--black-text)",
                  fontWeight: "500",
                },
              },
            }}
            sx={{
              "& input": {
                padding: "15px",
              },
            }}
          />

          <TextField
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Password"
            InputLabelProps={{
              sx: {
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "var(--black-text)",
                  fontWeight: "500",
                },
              },
            }}
            sx={{
              "& input": {
                padding: "15px",
              },
            }}
            type={showNewPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleNewPassword} edge="end">
                    {showNewPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Link to="/forgot-password">
          <Typography
            variant="inherit"
            className=" !text-[--primary] !pt-5 !text-right !pb-2 !text-[14px] Inter500 "
          >
            Forgot Password
          </Typography>
        </Link>

        <Box className="!mt-5">
          <PrimaryButton buttonName="Login" className="!py-4 !w-full" />
        </Box>

        <DividerLine />
        <Box className="!grid !gap-5">
          <Button
            variant="outlined"
            className="!py-[15px] !text-[--black] !flex !gap-2 Inter500 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
          >
            <img
              alt="SideImage"
              src={Google}
              className="!w-auto !h-auto !relative  !bottom-[2px]"
            />{" "}
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            className="!py-[15px] !text-[--black] !flex !gap-2  Inter500 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
          >
            <img
              alt="SideImage"
              src={Apple}
              className="!w-auto !h-auto !relative  !bottom-[2px]"
            />{" "}
            Continue with Apple
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginRightContent;
