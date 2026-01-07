import Authonicate from "../../layout/Authonicate";
import React from "react";
import ResetContent from "../../components/ResetContent/ResetContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const ResetPassword = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<ResetContent />}
      />
    </>
  );
};

export default ResetPassword;
