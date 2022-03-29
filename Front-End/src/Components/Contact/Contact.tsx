import { useState } from "react";
import { StyledHeading } from "../About/AboutElements";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";

import {
  ContactBody,
  Form,
  Input,
  Message,
  PersonInfo,
  LeftContainer,
  SubmitButton,
  RightContainer,
  Icon,
  IconContainer,
  IconText,
  SubmitRow,
  CaptchaHolder,
} from "./ContactElements";

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });

  function handleStateChange(e: any) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const [wrongCaptcha, setWrongCaptcha] = useState(false);

  const submitEmail = async (e: any) => {
    e.preventDefault();

    if (
      mailerState.captcha === null ||
      mailerState.captcha === undefined ||
      mailerState.captcha === ""
    ) {
      setWrongCaptcha(true);
      return;
    }

    setWrongCaptcha(false);

    const port = "3999";
    const backendURL = "/test"

    const response = await fetch("https://mruzunov.com:" + port + backendURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "fail") {
          alert("Message failed to send");
        } else {
          alert("Message Sent");
          window.location.reload();
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          subject: "",
          message: "",
          captcha: "",
        });
      });
  };

  function onChange(value: any) {
    setMailerState((prevState) => ({
      ...prevState,
      ["captcha"]: value,
    }));
  }

  let captcha: any;

  const resetCaptcha = () => {
    captcha.reset();
  };

  return (
    <>
      <ContactBody id="contact">
        <LeftContainer>
          <StyledHeading>Contact Me</StyledHeading>
          <Form
            method="POST"
            action="send"
            encType="multipart/form-data"
            onSubmit={submitEmail}
          >
            <PersonInfo>
              <Input
                name="name"
                placeholder="Name"
                onChange={handleStateChange}
                required
              />
              <Input
                name="email"
                placeholder="Email"
                onChange={handleStateChange}
                required
              />
            </PersonInfo>
            <Input
              name="subject"
              placeholder="Subject"
              onChange={handleStateChange}
              required
            />
            <Message
              name="message"
              placeholder="Enter your message."
              onChange={handleStateChange}
              required
            />
            <SubmitRow>
              <CaptchaHolder>
                <ReCAPTCHA
                  sitekey="randomKey"
                  onChange={onChange}
                  theme="dark"
                  ref={(el) => {
                    captcha = el;
                  }}
                />
                {wrongCaptcha && (
                  <span
                    style={{
                      fontSize: "1em",
                      alignSelf: "center",
                      color: "red",
                    }}
                  >
                    Please solve the captcha
                  </span>
                )}
              </CaptchaHolder>
              <SubmitButton onClick={resetCaptcha} type="submit">
                Send Message
              </SubmitButton>
            </SubmitRow>
          </Form>
        </LeftContainer>
        <RightContainer>
          <IconContainer>
            <Icon>
              <AiFillLinkedin />
            </Icon>
            <IconText>Martin</IconText>
            <IconText>Uzunov</IconText>
          </IconContainer>
          <IconContainer>
            <Icon>
              <FaLocationArrow />
            </Icon>
            <IconText>Sofia,</IconText>
            <IconText>Bulgaria</IconText>
          </IconContainer>
          <IconContainer>
            <Icon>
              <MdEmail />
            </Icon>
            <IconText>martiuz77@gmail.com</IconText>
          </IconContainer>
        </RightContainer>
      </ContactBody>
    </>
  );
};

export default Contact;
