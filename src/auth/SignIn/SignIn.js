import React from "react";
import Authonicate from "../../layout/Authonicate";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";
import LoginRightContent from "../../components/LoginRightContent/LoginRightContent";
// import LoginRightContent from "@/components/LoginRightContent/LoginRightContent";
// import LeftSignUpContent from "@/components/LeftSignUpContent/LeftSignUpContent";

const SignIn = () => {
  return (
    <Authonicate
      LeftContent={<LeftSignUpContent />}
      RightContent={<LoginRightContent />}
    />
  );
};

export default SignIn;
