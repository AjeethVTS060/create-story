// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import './PrivacyPolicy.css'; // Assuming you have some CSS for styling
// import Footer from '../Footer/Footer';
// import { Link } from "react-router-dom";


// const PrivacyPolicy = () => {
//      const [isChecked, setIsChecked] = useState(false);
  

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   return (
//     <div>
//       <Navbar />
//       <div className="privacy-container">
//       <div className="privacy-header">
//         <h1>Privacy Policy</h1>
//       </div>
//       <br/>
//         {/* <h1>Privacy Policy</h1> */}
//         {/* <p>Last updated: [Date]</p> */}
//         <p>Welcome to InterAIview!</p>
//         <p>
//           InterAIview ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by InterAIview.
//         </p>
//         <p>
//           By accessing or using our website, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
//         </p>
//         <h2>Information We Collect</h2>
//         <p>
//           We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or enter information on our site.
//         </p>
//         <ul>
//           <li><strong>Personal Identification Information:</strong> Name, email address, mailing address, phone number, or other details to help you with your experience.</li>
//           <li><strong>Interview Data:</strong> Video recordings, audio recordings, responses to interview questions, and any other information you provide during the interview process.</li>
//           <li><strong>Usage Data:</strong> Information on how you access and use our website.</li>
//           <li><strong>Cookies and Tracking Technologies:</strong> Cookies, web beacons, and other tracking technologies to collect information about your interactions with our site.</li>
//         </ul>
//         <h2>How We Use Your Information</h2>
//         <p>
//           We use the information we collect in the following ways:
//         </p>
//         <ul>
//           <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
//           <li>To improve our website in order to better serve you.</li>
//           <li>To allow us to better service you in responding to your customer service requests.</li>
//           <li>To administer a contest, promotion, survey, or other site feature.</li>
//           <li>To quickly process your transactions.</li>
//           <li>To ask for ratings and reviews of services or products.</li>
//           <li>To follow up with them after correspondence (live chat, email, or phone inquiries).</li>
//         </ul>
//         <h2>How We Protect Your Information</h2>
//         <p>
//           Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning.
//         </p>
//         <p>
//           Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology.
//         </p>
//         <h2>Sharing Your Information</h2>
//         <p>
//           We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
//         </p>
//         <h2>Your Consent</h2>
//         <p>
//           By using our site, you consent to our website privacy policy.
//         </p>
//         <h2>Changes to Our Privacy Policy</h2>
//         <p>
//           If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
//         </p>
//         <h2>Contacting Us</h2>
//         <p>
//           If there are any questions regarding this privacy policy, you may contact us using the information below:
//         </p>
       
//         <div>      
//       <div className="terms-action">
//           <div>
//             <input
//               type="checkbox"
//               id="acceptTerms"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="acceptTerms">
//               {" "}
//               I accept the terms and conditions
//             </label>
//           </div>
//         </div>
//         <button className="accept-button"  disabled={!isChecked}><Link to={"/"}>Accept</Link></button>
//       </div>
//       </div>
     
//       <Footer/>
//     </div>
//   );
// }

// export default PrivacyPolicy;
// import React, { useState } from "react";
// import AnimationRevealPage from "../../helpers/AnimationRevealPage";
// import { Container, ContentWithPaddingXl } from "../../Components/misc/Layouts";
// import tw from "twin.macro";
// import styled from "styled-components";
// import Footer from "../../Components/MiniCenteredFooter";
// import { SectionHeading } from "../../Components/misc/Headings";

// const HeadingRow = tw.div`flex justify-center`;
// const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
// const Text = styled.div`
//   ${tw`text-lg text-gray-800 mx-auto`}
//   max-width: 800px; // Limit width for better readability
//   p {
//     ${tw`mt-4 leading-loose`}
//   }
//   h1 {
//     ${tw`text-3xl font-bold mt-10 text-center`}
//   }
//   h2 {
//     ${tw`text-2xl font-bold mt-8 text-center`}
//   }
//   h3 {
//     ${tw`text-xl font-bold mt-6 text-center`}
//   }
//   ul {
//     ${tw`list-disc list-inside`}
//     li {
//       ${tw`ml-5 mb-3`}
//       p {
//         ${tw`mt-0 inline leading-normal`}
//       }
//     }
//   }
// `;

// const PrivacyPolicy = ({ headingText = "Privacy Policy" }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <AnimationRevealPage>
//       <Container>
//         <ContentWithPaddingXl>
//           <HeadingRow>
//             <Heading>{headingText}</Heading>
//           </HeadingRow>
//           <Text>
//             <p>Last updated: April 21, 2048</p>

//             <p>
//               This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
//               information when You use the Service and tells You about Your privacy rights and how the law protects You.
//             </p>

//             <p>
//               We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
//               collection and use of information in accordance with this Privacy Policy.
//             </p>

//             <h1>Interpretation and Definitions</h1>
//             <h2>Interpretation</h2>
//             <p>
//               The words of which the initial letter is capitalized have meanings defined under the following conditions.
//             </p>
//             <p>
//               The following definitions shall have the same meaning regardless of whether they appear in singular or in
//               plural.
//             </p>

//             <h2>Definitions</h2>
//             <p>For the purposes of this Privacy Policy:</p>
//             <ul>
//               <li>
//                 <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
//               </li>
//               <li>
//                 <p><strong>Company</strong> refers to CareerIQ AI Video Interview.</p>
//               </li>
//               <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
//               <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
//               <li><strong>Website</strong> refers to CareerIQ AI Video Interview, accessible from https://careeriq.com</li>
//               <li><strong>Service</strong> refers to the Website.</li>
//               <li><strong>Country</strong> refers to: Canada</li>
//               <li>
//                 <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</p>
//               </li>
//               <li><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
//               <li><p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p></li>
//               <li><strong>Cookies</strong> are small files placed on Your device, containing details of Your browsing history.</li>
//               <li><strong>Usage Data</strong> refers to data collected automatically.</li>
//             </ul>

//             <h1>Collecting and Using Your Personal Data</h1>
//             <h2>Types of Data Collected</h2>

//             <h3>Personal Data</h3>
//             <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information.</p>
//             <ul>
//               <li>Email address</li>
//               <li>First name and last name</li>
//               <li>Phone number</li>
//               <li>Address, State, Province, ZIP/Postal code, City</li>
//               <li>Usage Data</li>
//             </ul>

//             <h3>Usage Data</h3>
//             <p>Usage Data is collected automatically when using the Service.</p>

//             <h3>Tracking Technologies and Cookies</h3>
//             <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>

//             {/* Add more content sections here as needed */}

//             <h1>Contact Us</h1>
//             <p>If you have any questions about this Privacy Policy, You can contact us:</p>
//             <ul>
//               <li>By email: contact@careeriq.com</li>
//               <li>By visiting: https://careeriq.com</li>
//               <li>By phone: +1234567890</li>
//             </ul>
//           </Text>
//         </ContentWithPaddingXl>
//       </Container>
//       <Footer />
//     </AnimationRevealPage>
//   );
// };

// export default PrivacyPolicy;
import React from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { Container, ContentWithPaddingXl } from "../../Components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "../../Components/MiniCenteredFooter";
import { SectionHeading } from "../../Components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-1`;
const Text = styled.div`
  ${tw`text-lg text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  .terms-action {
    ${tw`flex mt-10`}
  }
  
  .terms-action input {
    ${tw`mr-4`}
  }
  
  .accept-button {
    ${tw`py-2 px-4 bg-green-500 text-white mt-5 rounded cursor-pointer transition duration-300`}
  }
  
  .accept-button:disabled {
    ${tw`bg-gray-400 cursor-not-allowed`}
  }

  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const PrivacyPolicy = ({ headingText = "Privacy Policy" }) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 21, 2048</p>
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy Policy.
            </p>
            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
            </p>
            <p>
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </p>
            <h2>Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </li>
              <li>
                <p><strong>Company</strong> refers to CareerIQ AI Video Interview.</p>
              </li>
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
              <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
              <li><strong>Website</strong> refers to CareerIQ AI Video Interview, accessible from https://careeriq.com</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Country</strong> refers to: Canada</li>
              <li>
                <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</p>
              </li>
              <li><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
              <li><p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p></li>
              <li><strong>Cookies</strong> are small files placed on Your device, containing details of Your browsing history.</li>
              <li><strong>Usage Data</strong> refers to data collected automatically.</li>
            </ul>
            <h1>Collecting and Using Your Personal Data</h1>
            <h2>Types of Data Collected</h2>
            <h3>Personal Data</h3>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information.</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
            </ul>
            <h3>Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <h3>Tracking Technologies and Cookies</h3>
            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>
            {/* Add more content sections here as needed */}
            <h1>Contact Us</h1>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul>
              <li>By email: contact@careeriq.com</li>
              <li>By visiting: https://careeriq.com</li>
              <li>By phone: +1234567890</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default PrivacyPolicy;


