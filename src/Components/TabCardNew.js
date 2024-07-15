import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { keyframes, css } from "styled-components";
import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "../Components/misc/Layouts.js";
import { SectionHeading } from "../Components/misc/Headings.js";
import { SectionDescription } from "../Components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "../Components/misc/Buttons.js";
import backgroundImage from "../Assets/Images/anchal-spacing-background-aceb-ca-b-bdcdd.jpg"; // Import the background image

// const HeaderRow = tw.div`flex flex-col xl:flex-row justify-between items-center`;
// const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2  mb-10 leading-none mt-12 xl:mt-4 w-full`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
// const Subheading = tw(SubheadingBase)`mb-4 text-red-900 font-bold`;
const Heading = tw(SectionHeading)`w-full text-blue-500`;
const Description = tw(SectionDescription)`w-full text-white text-center`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-full sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 rounded-lg`;
const Card = tw(motion.a)`bg-gray-300 rounded-lg block max-w-xs mx-auto sm:max-w-none sm:mx-0 transition duration-300`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-lg`} 
`;

// Rest of your code...

const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
//   ${tw`mr-1 text-sm font-bold flex items-end`}
//   svg {
//     ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
//   }
// `;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
// const CardPrice = tw.p`mt-4 text-xl font-bold`;

const moveClouds = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 1000px 0; }
`;

const Background = styled.div`
  ${tw`absolute inset-0 w-full h-full`}
  background: url(${backgroundImage}) repeat-x;
  background-size: cover; /* Add background-size property */
  animation: ${moveClouds} 60s linear infinite;
  z-index: -1;
`;


const StoryTabs = ({
  heading = "AI generated stories for kids",
  description = "Explore last weeks top AI generated stories by the awesome AI Story Generator",
  tabs = {
    "Fairy Tale": getRandomCards("Fairy Tale"),
    Fable: getRandomCards("Fable"),
    Fantasy: getRandomCards("Fantasy"),
    Mystery: getRandomCards("Mystery"),
    "Realistic Fiction": getRandomCards("Realistic Fiction"),
    "Historical Fiction": getRandomCards("Historical Fiction"),
    Mythology: getRandomCards("Mythology"),
    Poetry: getRandomCards("Poetry"),
    Biography: getRandomCards("Biography"),
    Educational: getRandomCards("Educational"),
    Adventure: getRandomCards("Adventure"),
    "Science Fiction": getRandomCards("Science Fiction"),
    Horror: getRandomCards("Horror"),
  },
}) => {
  const navigate = useNavigate();
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <Background />
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <br />
        <br />
        <TabsControl>
          {tabsKeys.map((tabName, index) => (
            <TabControl
              key={index}
              active={activeTab === tabName}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </TabControl>
          ))}
        </TabsControl>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  onClick={() => navigate(`/story/${card.title}`, { state: { card } })}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Read Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};

export default StoryTabs;


/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = (genre) => {
  const titles = {
    "Fairy Tale": [
      "The Little Mermaid",
      "Cinderella",
      "Sleeping Beauty",
      "Snow White",
      "Rapunzel",
      "Hansel and Gretel",
      "Beauty and the Beast",
      "Rumpelstiltskin",
    ],
    Fable: [
      "The Tortoise and the Hare",
      "The Fox and the Grapes",
      "The Boy Who Cried Wolf",
      "The Ant and the Grasshopper",
      "The Lion and the Mouse",
      "The Dog and the Shadow",
      "The Crow and the Pitcher",
      "The Wolf in Sheep's Clothing",
    ],
    Fantasy: [
      "Harry Potter",
      "Lord of the Rings",
      "The Hobbit",
      "Game of Thrones",
      "The Chronicles of Narnia",
      "Percy Jackson",
      "The Golden Compass",
      "Eragon",
    ],
    Mystery: [
      "Sherlock Holmes",
      "Nancy Drew",
      "The Da Vinci Code",
      "Gone Girl",
      "Big Little Lies",
      "The Girl with the Dragon Tattoo",
      "And Then There Were None",
      "The Hound of the Baskervilles",
    ],
    "Realistic Fiction": [
      "To Kill a Mockingbird",
      "The Fault in Our Stars",
      "Wonder",
      "The Perks of Being a Wallflower",
      "Eleanor & Park",
      "The Outsiders",
      "Speak",
      "Looking for Alaska",
    ],
    "Historical Fiction": [
      "The Book Thief",
      "All the Light We Cannot See",
      "Gone with the Wind",
      "The Help",
      "War and Peace",
      "The Nightingale",
      "Memoirs of a Geisha",
      "Outlander",
    ],
    Mythology: [
      "The Iliad",
      "The Odyssey",
      "Percy Jackson",
      "Norse Mythology",
      "Circe",
      "American Gods",
      "The Song of Achilles",
      "Mythos",
    ],
    Poetry: [
      "The Raven",
      "The Road Not Taken",
      "Ode to a Nightingale",
      "The Waste Land",
      "Howl",
      "Stopping by Woods on a Snowy Evening",
      "Sonnet 18",
      "Daffodils",
    ],
    Biography: [
      "Steve Jobs",
      "Becoming by Michelle Obama",
      "The Diary of a Young Girl",
      "Long Walk to Freedom",
      "Malcolm X",
      "Bossypants",
      "The Glass Castle",
      "Educated",
    ],
    Educational: [
      "Sapiens: A Brief History of Humankind",
      "Thinking, Fast and Slow",
      "Freakonomics",
      "The Power of Habit",
      "Guns, Germs, and Steel",
      "The Sixth Extinction",
      "Blink",
      "Outliers",
    ],
    Adventure: [
      "Treasure Island",
      "Journey to the Center of the Earth",
      "Around the World in Eighty Days",
      "The Adventures of Tom Sawyer",
      "Robinson Crusoe",
      "Swiss Family Robinson",
      "White Fang",
      "The Call of the Wild",
    ],
    "Science Fiction": [
      "Dune",
      "1984",
      "Brave New World",
      "The Martian",
      "Ender's Game",
      "Neuromancer",
      "Foundation",
      "Hyperion",
    ],
    Horror: [
      "Dracula",
      "Frankenstein",
      "The Shining",
      "It",
      "The Exorcist",
      "Pet Sematary",
      "House of Leaves",
      "Bird Box",
    ],
  };

  const cards = [];
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * titles[genre].length);
    const title = titles[genre][randomIndex];
    const imageSrc = `https://bedtime-ai.nokk.io/_/dim/2hygHHJginkThawJoVC4Tr1zQv4/cover.png?c=1&w=500&h=500&dpr=1${encodeURIComponent(
      title
    )}`;
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const price = "$9.99";
    const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
    const reviews = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    const url = "#";
    cards.push({ imageSrc, title, content, price, rating, reviews, url });
  }

  return cards;
};
