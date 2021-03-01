import React from "react";
import { Icon, Img, Link, Text, Title } from "style-guide";
import { PATHS } from "common";
import WORDS from "common/words/article";

const ArticleHeader = ({ data }) => {
  return (
    <div className="xs:mx-0 xl:w-1100 xl:mx-auto">
      <div className="flex flex-col md:flex-row md:flex-nowrap xl:flex-col xl:px-48">
        <div className="xs:w-11/12 md:w-8/12 xl:w-full">
          <Img.Static
            className="w-full md:h-417 lg:h-490 object-cover"
            src={data.cover}
          />
        </div>
        <div className="xs:w-full xs:px-4 md:w-4/12 xl:w-full">
          <div className="md:pt-10 xs:pt-5" />
          <Link.Internal
            to="/"
            className="xs:hidden xl:flex xl:items-center hover:underline"
          >
            <Icon.LeftArrow className="fill-dark" />
            <Text.MD
              className="ml-5 font-medium text-dark text-base leading-0"
              children={WORDS.all_articles}
            />
          </Link.Internal>
          <div className="md:pt-8 xs:pt-0" />
          <Title.Base
            className="xs:text-2xl md:text-3xl xl:text-6xl font-medium"
            children={data.title}
          />
          <div className="xl:pt-5" />
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
            <div className="xs:pt-4 xl:pt-0 flex items-center">
              <Img.Static className="w-9 h-9" src={data.author.avatar} />
              <div className="flex flex-col pl-4 flex-wrap">
                <Text.LG
                  className="text-black"
                  children={data.author.fullName}
                />
              </div>
            </div>
            <div className="xs:pt-6 xl:pt-0" />
            <div className="flex flex-row ">
              <div className="flex items-center">
                <Icon.Calendar className="fill-primary" />
                <div className="pl-2 text-sm font-medium">15.11.2020</div>
              </div>
              <div className="flex items-center ml-4">
                <Icon.TimePrimary className=" fill-primary mt-1" />
                <div className="pl-2 text-sm font-medium">
                  <span>30</span>
                  {WORDS.blog_time}
                </div>
              </div>
            </div>
            <div className="xs:hidden md:block xl:hidden lg:pr-10">
              <div className="md:pt-10" />
              <Text.MD children={"lorem"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
