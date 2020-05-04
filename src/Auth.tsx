import React from 'react';
import Auth from '@aws-amplify/auth';

Auth.configure({
    identityPoolId: "eu-central-1:c3a2bfaa-cf75-45cc-b328-79d0363f0dac",
    region: "eu-central-1",
    userPoolId: "eu-central-1_ebEgxyTEV",
    userPoolWebClientId: "1jro5ae4nn1kn2k667st6udivm"
});

const CustomAuth =  (props: any) => {

    const register = async () => {
    try{
        console.log("registering ...");
        const user = await Auth.signUp({
            username: "claritye59@zdecadesgl.com",
            password: "Theprodigyclub1!",
            attributes: {
                name: "Prabhjot Singh"
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

          const user = await Auth.confirmSignUp("prabhjotbenipal97@gmail.com", "609981");
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
    return <div>
        <button onClick={register}>Register</button>
        <button onClick={confirmRegister}>Confirm account</button>
        <button onClick={resendConfirmationCode}>Resend confirmation code</button>
    </div>
};
export default  CustomAuth;