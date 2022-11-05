import { useState } from 'react';

import FormInput from "../formInput/formInput"
import Button, { Button_Type_Classes } from "../button/button";

import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase/firebaseUtils"

import { SignUpContainer, Title, ButtonsContainer } from "./signInForm-styles";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormField();

        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    alert("user don not exist")
                    break;
                case "auth/wrong-password":
                    alert("incorrect password for email")
                    break;
                default:
                    console.log(error);
            }
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <Title>Already have an account?</Title>
            <span>Sign up with email password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <ButtonsContainer>
                    <Button type='submit' onChange={handleChange}>Sign In</Button>
                    <Button type="button" buttonType={Button_Type_Classes.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>

            </form>
        </SignUpContainer >
    )
}

export default SignInForm;