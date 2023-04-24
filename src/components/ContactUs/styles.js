import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  margin-top: 100px !important;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  margin-bottom: 100px !important;

  .info__message {
    text-align: center;
    color: white;
    margin-top: 20px;
    font-size: 20px;
  }
`;

export const ContactUsTitle = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactUsLabel = styled.label`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const ContactUsInput = styled.input`
  padding: 0.5rem;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  border: 1px solid #fff;
  border-radius: 4px;
`;

export const ContactUsTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  border: 1px solid #fff;
  border-radius: 4px;
  resize: none;
`;

export const ContactUsSubmitButton = styled.button`
  transition: all 0.2s ease 0s;
  background-color: white;
  padding: 15px 7px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: rgb(255 255 255 / 80%) 0px 0px 11px 1px;
  }
`;
