import { Box, Button, Typography } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const CheckEmailContent = () => {
  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] Inter700 !font-bold !text-[32px]"
          >
            Check your Email
          </Typography>
          <Typography className="Inter500 !text-[--black] w-full lg:!text-base !text-xs !mb-6">
            We have sent an email with password reset information to
            n****e@e***e.com.
          </Typography>
        </Box>

        <Box className="!grid  !mt-24">
          <Typography className="Inter500 !text-[--black] w-full lg:!text-base !text-xs ">
            Didn’t receive the email? Check spam or promotion folder or
          </Typography>

          <Box className="!mt-5">
            <Link to="/verify-email">
              <PrimaryButton
                buttonName="Resend Email"
                className="!py-4 !w-full"
              />
            </Link>
          </Box>

          <Link to="/signin">
            <Box className="!mt-5">
              <Button
                variant="outlined"
                className="!py-[15px] !w-full !text-[--black] Inter500 !flex !gap-2 !items-center !text-base !font-semibold !capitalize !rounded-md !border-2 !border-black"
              >
                Back to Login
              </Button>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CheckEmailContent;
