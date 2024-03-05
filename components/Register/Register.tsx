import React, {useEffect, useRef, useState} from "react";
import useInput from "../../hooks/use-input";
import Image from "next/image";
import sucessGif from "../../public/assets/success.gif";
import {motion} from "framer-motion";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGISTRATION_API_URL = "https://sheetdb.io/api/v1/cyl33uuvvxsot";

export const Register = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [registerIsCompleted, setRegisterIsCompleted] = useState(false);
    const [dataIsSucess, setDataIsSucess] = useState(false);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const expRef = useRef<HTMLSelectElement | null>(null);
    const commentRef = useRef<HTMLTextAreaElement | null>(null);
    const agreeRef = useRef<HTMLInputElement | null>(null);

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueInputChangeHandler: nameInputChangeHandler,
        valueInputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "" && value.length > 3);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueInputChangeHandler: emailInputChangeHandler,
        valueInputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.trim() !== "" && emailRegex.test(value));

    const {
        value: enteredExperience,
        isValid: experienceIsValid,
        hasError: experienceHasError,
        valueInputChangeHandler: experienceInputChangeHandler,
        valueInputBlurHandler: experienceInputBlurHandler,
        reset: resetExperienceInput,
    } = useInput((value) => !!value);

    useEffect(() => {
        if (nameIsValid && emailIsValid && experienceIsValid) setFormIsValid(true);
        else setFormIsValid(false);
    }, [nameIsValid, emailIsValid, experienceIsValid]);

    const confirmRegistrationHandler = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const experience = expRef.current?.value;
        const comment = commentRef.current?.value;
        const agree = agreeRef.current?.checked;

        try {
            const data = {
                name,
                email,
                experience,
                comment,
                agree,
            };

            const res = await fetch(REGISTRATION_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to submit data!");
            else setDataIsSucess(true);
        } catch (err) {
            console.error("Error submitting data", err);
        }

        resetNameInput();
        resetEmailInput();
        resetExperienceInput();
    };

    const handleRegistration = () => {
        setTimeout(() => {
            setRegisterIsCompleted(!registerIsCompleted);
        }, 50);
    };

    return (
        <form
            action="https://sheetdb.io/api/v1/cyl33uuvvxsot"
            method="post"
            id="sheetdb-form"
            onSubmit={confirmRegistrationHandler}
            className="inner-wrapper-container space-y-8 text-white bg-black/20 rounded-xl max-w-7xl mb-10"
        >
            {dataIsSucess && (
                <>
                    <Image
                        src={sucessGif}
                        className="flex rounded-xl object-cover md:rounded-xl"
                        alt="success"
                        height={400}
                        width={400}
                    />

                    <p className="text-[#ffd700] font-bold text-[1.05rem] sm:text-xl">
                        You are sucessfully registered for the event at 27th!
                    </p>
                </>
            )}
            {!dataIsSucess && (
                <>
                    <div
                        className="flex flex-col sm:flex-row space-x-0 sm:space-x-12 md:space-x-16 lg:space-x-36 space-y-4 sm:space-y-0 w-full justify-between">
                        <label htmlFor="Name" className="w-full">
                            <input
                                type="text"
                                name="data[name]"
                                id="name"
                                className={`input-group flex ${nameHasError ? "invalid" : ""}`}
                                size={40}
                                placeholder="Name and Surname"
                                ref={nameRef}
                                value={enteredName}
                                onBlur={nameInputBlurHandler}
                                onChange={nameInputChangeHandler}
                            />
                            {nameHasError && (
                                <p className="py-2 invalid-text">
                                    Invalid Name (It needs to be at least 4 characters long)
                                </p>
                            )}
                        </label>
                        <label htmlFor="Email" className="w-full">
                            <input
                                type="email"
                                name="data[email]"
                                id="email"
                                className={`input-group ${emailHasError ? "invalid" : ""}`}
                                size={40}
                                placeholder="Email"
                                ref={emailRef}
                                value={enteredEmail}
                                onBlur={emailInputBlurHandler}
                                onChange={emailInputChangeHandler}
                            />
                            {emailHasError && (
                                <p className="py-2 invalid-text">
                                    Invalid Email (Please check the format) -
                                    [something@domain.subdomain]
                                </p>
                            )}
                        </label>
                    </div>
                    <label
                        htmlFor="Experience"
                        className="flex flex-col space-y-2 w-full"
                    >
                        <span>What is your experience with the respective domain?</span>
                        <select
                            ref={expRef}
                            value={enteredExperience}
                            onBlur={experienceInputBlurHandler}
                            onChange={experienceInputChangeHandler}
                            className={`text-[#ffd700] ${
                                experienceHasError ? "invalid" : ""
                            } input-group`}
                        >
                            <option className="bg-[#001330]/90" value="0">
                                --- Please Choose an Option ---
                            </option>
                            <option className="bg-[#001330]/90" value="1">
                                I do not have much experience, but I am interested and want to
                                learn more.
                            </option>
                            <option className="bg-[#001330]/90" value="2">
                                I’m already working in this field.
                            </option>
                            <option className="bg-[#001330]/90" value="3">
                                I have extensive experience and would like to teach/share that
                                experience in the future.
                            </option>
                        </select>
                        {experienceHasError && (
                            <p className="py-2 invalid-text">Experience field required</p>
                        )}
                    </label>
                    <label htmlFor="Comment" className="space-y-2 w-full">
            <textarea
                id="comment"
                name="data[comment]"
                rows={5}
                cols={100}
                placeholder="Please state your expectations and share some tips for the for the upcoming event"
                className="rounded-xl input-group text-[#ffd700]"
                ref={commentRef}
            />
                    </label>
                    <label htmlFor="agree" className="space-y-2 flex flex-row">
                        <input
                            id="agree"
                            name="data[agree]"
                            type="checkbox"
                            placeholder="Please state your expectations and share some tips for the for the upcoming event"
                            className="input-group text-[#ffd700] w-4 h-4 p-4 mt-3 mr-2"
                            ref={agreeRef}
                        />{" "}
                        <span>
              Do you agree to receive emails and information about upcoming
              events
                        </span>
                    </label>
                    {registerIsCompleted && <span className="loader"></span>}
                    {registerIsCompleted || (
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            type="submit"
                            disabled={!formIsValid}
                            onClick={handleRegistration}
                            className={`text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full px-8 py-3 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] border-2 border-[#ffd700] ${
                                formIsValid
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed border-2 hover:border-red-700"
                            }`}
                        >
                            Register
                        </motion.button>
                    )}
                </>
            )}
        </form>
    );
};
