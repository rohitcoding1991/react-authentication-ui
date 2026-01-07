// import LeftSignUpContent from "@/components/LeftSignUpContent/LeftSignUpContent";
import Authonicate from "../../layout/Authonicate";
import React from "react";
// import SignupRightContent from "@/components/SignupRightContent/SignupRightContent";
import SignupRightContent from "../../components/SignupRightContent/SignupRightContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const Signup = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<SignupRightContent />}
      />
    </>
  );
};

export default Signup;
