import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "../Components/misc/Headings.js";
import { SectionDescription } from "../Components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "../Components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "../Components/misc/Layouts.js";
// import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-red-900 font-bold`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-black text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${(props) =>
    props.featured &&
    css`
      background: #ffcc00;
      background: linear-gradient(135deg, #ffcc00 0%, #ff6600 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
      }
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;

const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase text-white bg-orange-600 tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

// const DecoratorBlob = styled(SvgDecoratorBlob)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
// `;

const defaultPlans = [
  {
    name: "Basic",
    price: "$9.99",
    duration: "Monthly",
    mainFeature: "Simple Stories for Kids",
    features: [
      "Prompt Length 220 characters",
      "Chapter Count Up to 20",
      "Story Length 600 words",
      "Stories Allowed 40/Month",
      "Genre Selection Unlocked",
      "Ads No",
      "Story Archive Up to 20",
      "Prompt Library Access Standard",
      "Prompt Enhancement Basic",
      "Exclusive Story Themes Basic",
      "AI Prompt Optimization Basic",
    ],
  },
  {
    name: "Premium",
    price: "$19.99",
    duration: "Monthly",
    mainFeature: "Advanced Stories with Interactivity",
    features: [
      "Prompt Length 420 characters",
      "Chapter Count Up to 20",
      "Story Length 800 words",
      "Stories Allowed 90/Month",
      "Genre Selection Unlocked",
      "Ads No",
      "Story Archive Up to 80",
      "Prompt Library Access Standard",
      "Prompt Enhancement Basic",
      "Exclusive Story Themes Basic",
      "AI Prompt Optimization Basic",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$39.99",
    duration: "Monthly",
    mainFeature: "Customizable Stories for Schools",
    features: [
      "Prompt Length 500 characters",
      "Chapter Count Up to 22",
      "Story Length 4000 words",
      "Stories Allowed 1200/Yr",
      "Genre Selection Unlocked",
      "Ads No",
      "Story Archive Unlimited",
      "Prompt Library Access Standard",
      "Prompt Enhancement Advanced",
      "Exclusive Story Themes Advanced",
      "AI Prompt Optimization Advanced",
    ],
  },
];

const PricingSection = ({
  subheading = "Pricing",
  heading = "Flexible Plans",
  description = "Explore our flexible plans and choose the one that best fits your needs. Enjoy unlimited story creation with our advanced AI technology.",
  plans = defaultPlans,
  primaryButtonText = "Get Started",
}) => {
  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `,
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && (
                <div
                  className="planHighlight"
                  css={
                    highlightGradientsCss[index % highlightGradientsCss.length]
                  }
                />
              )}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton
                  css={!plan.featured && highlightGradientsCss[index]}
                >
                  {primaryButtonText}
                </BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          {/* <DecoratorBlob /> */}
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default PricingSection;
