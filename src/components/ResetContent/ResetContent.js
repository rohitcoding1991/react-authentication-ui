import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ResetContent = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
      <Box>
        <Typography
          variant="inherit"
          className=" !text-[--black] !font-bold Inter700 !text-[32px]"
        >
          Reset Password
        </Typography>
        <Typography className=" !text-[--black] w-full Inter500 lg:!text-base !text-xs !mb-6">
          Choose a new password for your account
        </Typography>
      </Box>

      <Box className="!grid !gap-4 !mt-16">
        <TextField
          fullWidth
          size="small"
          autoComplete="off"
          placeholder="Your new password"
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
                  {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          size="small"
          autoComplete="off"
          placeholder="Confirm your new password"
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
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPassword} edge="end">
                  {showConfirmPassword ? (
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

      <Box className="!mt-7">
        <Link to="/reset-success">
          <PrimaryButton
            buttonName="Reset Password"
            className="!py-4 !w-full"
          />
        </Link>
      </Box>

      <Link to="/signin">
        <Box className="!mt-7">
          <Button
            variant="outlined"
            className="!py-[15px] !w-full !text-[--black] Inter700 !flex !gap-2 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
          >
            Back to Login
          </Button>
        </Box>
      </Link>
    </Box>
  );
};

export default ResetContent;
