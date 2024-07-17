import React from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import Header from "../../Components/headers/light";
// import Footer from "../../Components/footers/MiniCenteredFooter";
import MainFeature1 from "../../Components/features/TwoColWithButton";
import Features from "../../Components/features/ThreeColSimple.js";
import TeamCardGrid from "../../Components/cards/ProfileThreeColGrid";
import ancientPaperImage from "images/17348.jpg";
// import tw from "twin.macro";
import styled from "styled-components";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
const AncientPaperBackgroundContainer = styled.div`
  ${tw`bg-cover bg-center bg-no-repeat w-screen`} /* Apply Tailwind CSS classes */
  background-image: url(${ancientPaperImage}); /* Set background image using styled-components syntax */
`;
const AIStoryGeneratorSection = () => (
  <MainFeature1
    subheading={<Subheading>AI Story Generator</Subheading>}
    heading="Generate Stories Using AI"
    buttonRounded={false}
    primaryButtonText="Generate Story"
    primaryButtonUrl="/generate-story"
    imageSrc="https://example.com/ai-story-generator-image.jpg"
    textOnLeft={false}
  />
);

const HomePage = () => (
  <AncientPaperBackgroundContainer>

  <AnimationRevealPage>
    {/* <Header />
    
    */}
    <AIStoryGeneratorSection />
    <MainFeature1
        subheading={<Subheading>AI Story Generator</Subheading>}
    heading="Generate Stories Using AI"
      buttonRounded={false}
      primaryButtonText="See Home"
      primaryButtonUrl="/"
      imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
    />
    <MainFeature1
     subheading={<Subheading>AI Story Generator</Subheading>}
    heading="Generate Stories Using AI"
      buttonRounded={false}
      primaryButtonText="Contact Us"
      primaryButtonUrl="/contactUs"
      imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
      textOnLeft={false}
    />
    <Features
      subheading={<Subheading>Our Values</Subheading>}
      heading="We Follow These."
      description="Generate Stories Using AI"
      cards={[
        {
          imageSrc: "https://example.com/support-icon.svg",
          title: "24/7 Support",
          description:
            "Our dedicated support team is available around the clock to assist with any questions or issues, ensuring a smooth and stress-free interview process.",
        },
        {
          imageSrc: "https://example.com/shield-icon.svg",
          title: "Strong Teams",
          description:
            "We believe in the power of collaboration and innovation. Our teams are composed of experts who work together to continuously improve our AI technology, ensuring accuracy and fairness.",
        },
        {
          imageSrc: "https://example.com/simple-icon.svg",
          title: "Customer Satisfaction",
          description:
            "Our top priority is your satisfaction. We strive to provide an exceptional interview experience, leveraging advanced AI to deliver insightful, unbiased, and respectful interactions.",
        },
      ]}
      linkText=""
    />

    {/* <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} /> */}
    {/* <Footer /> */}
  </AnimationRevealPage>
    </AncientPaperBackgroundContainer>

);

export default HomePage;
