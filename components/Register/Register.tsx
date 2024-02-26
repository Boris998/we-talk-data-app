import React, {useEffect, useRef, useState} from "react";
import useInput from "../../hooks/use-input";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

type Props = {};

const Register = (props: Props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const commentRef = useRef(null);
  const agreeRef = useRef(null);

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

    let comment = commentRef.current?.value;
    let agree = agreeRef.current?.checked;
  
    const data = {
      enteredName,
      enteredEmail,
      enteredExperience,
      comment,
      agree,
    };

    /* try {
      await sanityClient.create({
        _type: "registerForm",
        post: {
          _type: "reference",
          _ref: _id,
        },
        name,
        enteredEmail,
        enteredExperience,
        comment,
        agree
      });
    }
    catch (err) { console.log(err); }

    if (!formIsValid) return;

    const postFormData = async (data: any) => {
      
      
      const query = groq`*[_type=="registerForm"]`;
      sanityClient
        .fetch(query, {
          method: "POST",
          body: JSON.stringify(data),
        })
        .then(() => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    postFormData(data); */

    //submit registration

    resetNameInput();
    resetEmailInput();
    resetExperienceInput();
  };

  return (
    <form
      onSubmit={confirmRegistrationHandler}
      className="inner-wrapper-container space-y-8 text-white bg-black/20 rounded-xl mb-10"
    >
      <div className="flex flex-row space-x-16">
        <label htmlFor="Name">
          <input
            type="text"
            id="name"
            className={`input-group ${nameHasError ? "invalid" : ""}`}
            size={40}
            placeholder="Name"
            value={enteredName}
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
          />
          {nameHasError && (
            <p className="py-2 invalid-text">
              Name field required (Invalid Name)
            </p>
          )}
        </label>
        <label htmlFor="Email">
          <input
            type="email"
            id="email"
            className={`input-group ${emailHasError ? "invalid" : ""}`}
            size={40}
            placeholder="Email"
            value={enteredEmail}
            onBlur={emailInputBlurHandler}
            onChange={emailInputChangeHandler}
          />
          {emailHasError && (
            <p className="py-2 invalid-text">
              Email field required (Invalid Email)
            </p>
          )}
        </label>
      </div>
      <label htmlFor="Experience" className="flex flex-col space-y-2">
        <span>What is your experience with the respective domain?</span>
        <select
          id="experience"
          onBlur={experienceInputBlurHandler}
          onChange={experienceInputChangeHandler}
          className={`text-[#ffd700] ${
            experienceHasError ? "invalid" : ""
          } px-[4.5rem] input-group`}
        >
          <option className="bg-[#001330]/90" value="0">
            --- Please Choose an Option ---
          </option>
          <option className="bg-[#001330]/90" value="1">
            I do not have much experience, but I am interested and want to learn
            more.
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
      <label htmlFor="Expectations" className="space-y-2">
        <textarea
          id="expectations"
          name="expectations"
          rows={5}
          cols={100}
          placeholder="Please state your expectations and share some tips for the for the upcoming event"
          className="rounded-xl input-group text-[#ffd700]"
          ref={commentRef}
        />
      </label>
      <label htmlFor="Comment" className="space-y-2 ">
        <input
          id="comment"
          name="comment"
          type="checkbox"
          placeholder="Please state your expectations and share some tips for the for the upcoming event"
          className="rounded-xl input-group text-[#ffd700]"
          ref={agreeRef}
        />{" "}
        Do you agree to receive emails and information about upcoming events
      </label>

      <button
        type="submit"
        disabled={!formIsValid}
        className={`text-[#ffd700] rounded-full px-8 py-3 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] border-2 border-[#ffd700] ${
          formIsValid
            ? "cursor-pointer"
            : "cursor-not-allowed border-2 hover:border-red-700"
        }`}
      >
        Register
      </button>
    </form>
  );
};

export default Register;
