import Authonicate from "../../layout/Authonicate";
import React from "react";
import CheckEmailContent from "../../components/CheckEmailContent/CheckEmailContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const CheckEmail = () => {
  return (
    <>
      <Authonicate
        LeftContent={<LeftSignUpContent />}
        RightContent={<CheckEmailContent />}
      />
    </>
  );
};

export default CheckEmail;
