import Authonicate from "../../layout/Authonicate";
import React from "react";
import VerifyEmailContent from "../../components/VerifyEmailContent/VerifyEmailContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const VerifyEmail = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<VerifyEmailContent />}
      />
    </>
  );
};

export default VerifyEmail;
