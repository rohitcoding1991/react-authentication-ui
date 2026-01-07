import Authonicate from "../../layout/Authonicate";
import React from "react";
import ForgotPasswordContent from "../../components/ForgotPasswordContent/ForgotPasswordContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const ForgotPassword = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<ForgotPasswordContent />}
      />
    </>
  );
};

export default ForgotPassword;
