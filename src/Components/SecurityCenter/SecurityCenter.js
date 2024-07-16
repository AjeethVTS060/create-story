// import React, { useState } from "react";

// import  Navbar  from "../Navbar/Navbar";
// import './SecurityCenter.css'; // Assuming you have some CSS for styling
// import Footer from '../Footer/Footer';
// import { Link } from "react-router-dom";


// const SecurityCenter = () => {
//     const [isChecked, setIsChecked] = useState(false);
  

//     const handleCheckboxChange = () => {
//       setIsChecked(!isChecked);
//     };
//   return (
//     <div>
//       <Navbar />
//       <div className="security-container">
//       <div className="security-header">
//         <h1>Security Center</h1>
//       </div>
//       <br/>
//         {/* <h1>Security Center</h1> */}
//         {/* <p>Last updated: [Date]</p> */}
//         <h2>Welcome to the InterAIview Security Center</h2>
//         <p>
//           At InterAIview, we take the security of your data seriously. This page provides information on how we protect your data and what you can do to ensure your own security while using our services.
//         </p>
//         <h2>Our Security Measures</h2>
//         <br/>
//         <h4>Data Encryption</h4>
//         <p>
//           We use industry-standard encryption to protect your data both in transit and at rest. This means that your data is encrypted when it is sent to and from our servers, as well as when it is stored on our servers.
//         </p>
//         <h4>Access Controls</h4>
//         <p>
//           Access to our systems and your data is restricted to authorized personnel only. We use multi-factor authentication (MFA) and other security measures to ensure that only those with the necessary permissions can access sensitive information.
//         </p>
//         <h4>Regular Security Audits</h4>
//         <p>
//           We perform regular security audits and assessments to identify and address potential vulnerabilities in our systems. This includes penetration testing, code reviews, and security compliance checks.
//         </p>
//         <h4>Data Anonymization</h4>
//         <p>
//           We anonymize your data wherever possible to protect your privacy. This ensures that even if data were to be accessed without authorization, it cannot be traced back to you.
//         </p>
//         <h2>What You Can Do</h2>
//         <br/>
//         <h4>Use Strong Passwords</h4>
//         <p>
//           Ensure that you use strong, unique passwords for your InterAIview account and change them regularly. Avoid using easily guessable passwords such as "password" or "123456".
//         </p>
//         <h4>Enable Two-Factor Authentication</h4>
//         <p>
//           Enable two-factor authentication (2FA) on your InterAIview account to add an extra layer of security. This requires you to provide a second form of identification in addition to your password when logging in.
//         </p>
//         <h4>Be Aware of Phishing Attempts</h4>
//         <p>
//           Be cautious of emails or messages that ask for your personal information or login credentials. InterAIview will never ask for your password via email. Always verify the sender's email address and look out for signs of phishing.
//         </p>
//         <h4>Keep Your Software Up to Date</h4>
//         <p>
//           Ensure that your operating system, browser, and other software are kept up to date with the latest security patches. This helps protect your devices from security vulnerabilities.
//         </p>
//         <h4>Report Suspicious Activity</h4>
//         <p>
//           If you notice any suspicious activity on your account or believe your account has been compromised, please contact our support team immediately.
//         </p>
//         <h2>Contact Us</h2>
//         <p>
//           If you have any questions or concerns about security, please contact us using the information below:
//         </p>
//         {/* <p>
//           InterAIview<br />
//           [Your Address]<br />
//           [City, State, Zip Code]<br />
//           [Email Address]<br />
//           [Phone Number]
//         </p> */}
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

// export default SecurityCenter;
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

const SecurityCenter = ({ headingText = "Security Center" }) => {
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
              Welcome to the Security Center. Our mission is to ensure your data is protected and our services are secure. Below are the key elements of our security protocols and best practices.
            </p>

            <h1>Account Security</h1>
            <h2>Password Management</h2>
            <p>
              To maintain the security of your account, use a strong, unique password. Avoid using easily guessable information such as birthdays or common words. We recommend using a combination of letters, numbers, and symbols.
            </p>

            <h2>Two-Factor Authentication</h2>
            <p>
              Enhance your account security by enabling two-factor authentication (2FA). This adds an extra layer of protection by requiring a second form of verification in addition to your password.
            </p>

            <h1>Data Encryption</h1>
            <h2>Encryption in Transit</h2>
            <p>
              We use industry-standard encryption protocols to protect data transmitted between your device and our servers. This ensures that any data you send or receive is secure and cannot be intercepted by unauthorized parties.
            </p>

            <h2>Encryption at Rest</h2>
            <p>
              Data stored on our servers is encrypted using robust encryption algorithms. This ensures that even if data is accessed without authorization, it remains unreadable and secure.
            </p>

            <h1>Regular Security Audits</h1>
            <h2>Internal Audits</h2>
            <p>
              We conduct regular security audits to identify and address potential vulnerabilities within our systems. These audits help us maintain a high standard of security and quickly respond to emerging threats.
            </p>

            <h2>External Audits</h2>
            <p>
              In addition to internal audits, we employ third-party security experts to perform external audits. These experts provide an unbiased assessment of our security measures and help us identify areas for improvement.
            </p>

            <h1>User Responsibilities</h1>
            <h2>Report Suspicious Activity</h2>
            <p>
              If you notice any suspicious activity on your account, please report it immediately. This helps us investigate and address potential security threats promptly.
            </p>

            <h2>Keep Software Updated</h2>
            <p>
              Ensure that your operating system, browser, and other software are up to date. Software updates often include security patches that protect against known vulnerabilities.
            </p>

            <h1>Secure Communications</h1>
            <h2>Email Security</h2>
            <p>
              Be cautious of phishing attempts. Verify the sender's email address and avoid clicking on suspicious links or downloading unexpected attachments. Report any suspicious emails to our security team.
            </p>

            <h2>Secure Messaging</h2>
            <p>
              Use encrypted messaging services for confidential communications. Avoid sharing sensitive information through unencrypted channels such as regular email or SMS.
            </p>

            <h1>Incident Response</h1>
            <h2>Incident Detection</h2>
            <p>
              We employ advanced monitoring systems to detect and respond to security incidents in real-time. Our team is trained to handle various types of security incidents efficiently and effectively.
            </p>

            <h2>Incident Reporting</h2>
            <p>
              In the event of a security breach, we have a clear incident response plan that includes notifying affected users and relevant authorities. We prioritize transparency and timely communication during such events.
            </p>

            <h1>Security Best Practices</h1>
            <h2>Personal Device Security</h2>
            <p>
              Protect your personal devices with strong passwords or biometric locks. Avoid using public Wi-Fi networks for sensitive transactions and ensure your devices have updated security software.
            </p>

            <h2>Recognizing Social Engineering</h2>
            <p>
              Be aware of social engineering tactics where attackers manipulate individuals into divulging confidential information. Always verify the identity of individuals requesting sensitive information.
            </p>

            <h1>Privacy Protection</h1>
            <h2>Data Minimization</h2>
            <p>
              We adhere to data minimization principles, collecting only the data necessary for providing our services. This reduces the risk associated with data breaches and unauthorized access.
            </p>

            <h2>Access Control</h2>
            <p>
              Access to your data is restricted to authorized personnel only. We implement strict access control measures to ensure that your information is accessed only when necessary and by individuals with the appropriate permissions.
            </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default SecurityCenter;
