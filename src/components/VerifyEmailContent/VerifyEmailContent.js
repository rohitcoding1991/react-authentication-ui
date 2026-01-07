import { Box, Typography } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const VerifyEmailContent = () => {
  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] !font-bold Inter700 !text-[32px]"
          >
            Verify your Email
          </Typography>
          <Typography className=" !text-[--black] w-full lg:!text-base Inter500 !text-xs !mb-6">
            We have sent a verification email to n****e@e***e.com.
          </Typography>
        </Box>

        <Box className="!grid  !mt-24">
          <Typography className=" !text-[--black] w-full lg:!text-base Inter500 !text-xs ">
            Didn’t receive the email? Check spam or promotion folder or
          </Typography>

          <Box className="!mt-5">
            <Link to="/reset-password">
              <PrimaryButton buttonName="Send" className="!py-4 !w-full" />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VerifyEmailContent;
