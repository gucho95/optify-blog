import React from "react";
import Card from "components/Card";

export const data = [
  {
    cover: "/banner.png",
    title: "The Best Marketing tools of 2021",
    date: new Date(),
    commentsCount: 22,
    author: {
      avatar: "/avatar.png",
      fullName: "Natalie Portman",
      position: "Search Engine Optimizer",
    },
  },
  {
    cover: "/banner.png",
    title: "The Best Marketing tools of 2021",
    date: new Date(),
    commentsCount: 1,
    author: {
      avatar: "/avatar.png",
      fullName: "Natalie Portman",
      position: "Search Engine Optimizer",
    },
  },
  {
    cover: "/banner.png",
    title: "The Best Marketing tools of 2021",
    date: new Date(),
    commentsCount: 0,
    author: {
      avatar: "/avatar.png",
      fullName: "Natalie Portman",
      position: "Search Engine Optimizer",
    },
  },
];

const Main = () => {
  const articles = [...data, ...data, ...data];
  return (
    <div>
      <div className="pt-8" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default Main;
