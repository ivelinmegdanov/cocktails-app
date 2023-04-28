import React, { useState } from "react";

import {
  ContactUsWrapper,
  ContactUsTitle,
  ContactUsForm,
  ContactUsLabel,
  ContactUsInput,
  ContactUsTextarea,
  ContactUsSubmitButton,
} from "./styles";

export const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState({
          name: "",
          email: "",
          message: "",
        });
        setMessage("Thanks for contacting us!");
      } else {
        setMessage("Oops, something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Oops, something went wrong. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <ContactUsWrapper>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsForm
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mrgvayoo"
        method="POST"
      >
        <ContactUsLabel htmlFor="name">Name</ContactUsLabel>
        <ContactUsInput
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />

        <ContactUsLabel htmlFor="email">Email</ContactUsLabel>
        <ContactUsInput
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <ContactUsLabel htmlFor="message">Message</ContactUsLabel>
        <ContactUsTextarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        ></ContactUsTextarea>

        <ContactUsSubmitButton type="submit">Submit</ContactUsSubmitButton>
      </ContactUsForm>
      {message && <p className="info__message">{message}</p>}
    </ContactUsWrapper>
  );
};
