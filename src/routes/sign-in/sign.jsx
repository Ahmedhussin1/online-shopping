import React from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { async } from "@firebase/util";

const Sign = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await CreateUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const logGoogleUser = async () => {
    //sign in with google function
    const { user } = await signInWithGooglePopup();
    const userDocRef = await CreateUserDocumentFromAuth(user);
  };

  return (
    <div>
      Sign
      <button onClick={logGoogleUser}>sign In With Google Popup</button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign In With Google Google Redirect
      </button> */}
    </div>
  );
};

export default Sign;
