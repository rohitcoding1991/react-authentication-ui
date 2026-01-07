import Authonicate from "../../layout/Authonicate";
import React from "react";
import PasswordSuccessContent from "../../components/PasswordSuccessContent/PasswordSuccessContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const PasswordSuccess = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<PasswordSuccessContent />}
      />
    </>
  );
};

export default PasswordSuccess;
