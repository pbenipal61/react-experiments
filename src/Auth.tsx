import React from 'react';
import Auth from '@aws-amplify/auth';

Auth.configure({
    identityPoolId: "eu-central-1:3cbe0af8-9301-450f-b13b-505ddee5da55",
    region: "eu-central-1",
    userPoolId: "eu-central-1_s7Gxlw4MD",
    userPoolWebClientId: "kojrss4u053o1pgc14f7ng7gr"
});

const CustomAuth =  (props: any) => {


    const register = async () => {
    try{
        console.log("registering ...");
        const user = await Auth.signUp({
            username: "pbenipal62",
            password: "Theprodigyclub1!",
            attributes: {
                name: "Prabhjot Singh",
                email: "prabhjotbenipal1997@gmail.com",
                "custom:isBusiness": "false"
            }
        });

          console.log( { user } );
        }
        catch(err){
            console.log(err);
        }
    };

    const confirmRegister = async () => {
      try{

          console.log("Confirming account ...");

          const user = await Auth.confirmSignUp("pbenipal61", "049589");
          console.log(user);

      }
      catch(err){
          console.log(err);
      }
    };

    const resendConfirmationCode = async () => {
        try{

            console.log("Resending confirmation code ...");

            const user = await Auth.resendSignUp("prabhjotbenipal97@gmail.com");
            console.log(user);

        }
        catch(err){
            console.log(err);
        }
    };

    const login = async () => {
        try{

            console.log("Login in ...");
            const user = await Auth.signIn("pbenipal62", "Theprodigyclub1!");
            console.log(user);

        }
        catch(err){
            console.log(err);
        }
    };
    return <div>
        <button onClick={register}>Register</button>
        <button onClick={confirmRegister}>Confirm account</button>
        <button onClick={resendConfirmationCode}>Resend confirmation code</button>
        <button onClick={login}>Login</button>
    </div>
};
export default  CustomAuth;

// user.code = UsernameExistsException - Username registered already
// user.userConfirmed = false - User not confirmed

