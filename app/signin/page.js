import React from "react";
import AuthForm from '../auth-form'
import SigninForm from "./signinform";

function page() {
  return (
    <div className="h-[100vh] grid justify-center content-center">
      <SigninForm />
    </div>
    
  );
}

export default page;
