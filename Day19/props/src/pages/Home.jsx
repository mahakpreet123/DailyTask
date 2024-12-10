import React from "react";
import Card from "../component/Card";
import Images from "../assets/images";

const Home = () => {
  const cardData = [
    {
      id: 1,
      title: "Instagram",
      description: "Instagram is a social media app that allows users to Upload, edit, and share photos and videos",
      image: Images.Card1,
    },
    {
      id: 2,
      title: "Facebook",
      description: "Facebook is a social media app that allows users to Upload, edit, and share photos and videos",
      image: Images.Card2,
    },
    {
      id: 3,
      title: "World Food Day",
      description: "The World Food Programme (WFP) is the world's largest humanitarian organization, working to save lives and end hunger",
      image: Images.Card3,
    },
    {
      id: 4,
      title: "HeadPhone",
      description: "Headphones are a pair of small speakers that are worn around or on the head to listen to audio privately",
      image: Images.Card4,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {cardData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          description={data.description}
          image={data.image}
        />
      ))}
    </div>
  );
};

export default Home;
