import React from "react";
// import AnimationRevealPage from "../helpers/AnimationRevealPage";
// import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import Header from "../../Components/headers/light";
// import Footer from "../Components/MiniCenteredFooter.js";
import ContactUsForm from "../Components/TwoColContactUsWithIllustrationFullForm";
// import ContactDetails from "../../Components/cards/ThreeColContactDetails";

/*
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;
*/

const ContactUsPage = () => {
  return (
    <>
    {/* // <AnimationRevealPage> */}
 
    <div className="stories-page">
      
      <ContactUsForm />
      </div>
   
    {/* // </AnimationRevealPage> */}
    </>
  );
};

export default ContactUsPage;
