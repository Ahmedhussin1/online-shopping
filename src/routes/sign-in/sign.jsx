import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { CreateUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const Sign = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef= await CreateUserDocumentFromAuth(user);
};
  return (
    <div>
      Sign
      <button onClick={logGoogleUser}>sign In With Google Popup</button>
    </div>
  );
};

export default Sign;
