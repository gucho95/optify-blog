import React from "react";
import { Icon, Img, Text, Title } from "style-guide";
import { DateTime } from "luxon";

const data = {
  cover: "/banner.png",
  title: "The Best Marketing tools of 2021",
  date: new Date(),
  commentsCount: 22,
  author: {
    avatar: "/avatar.png",
    fullName: "Natalie Portman",
    position: "Search Engine Optimizer",
  },
};

const BlogHeader = () => {
  return (
    <div className="xs:px-0 md:px-10 lg:px-12 xl:w-918 xs:mx-auto">
      <div className="shadow-layout rounded-3xl rounded-br-none">
        <Img.Static src="/banner.png" />
        <div className="xs:py-5 xs:px-4">
          <Title.Base className="text-1xl font-medium" children={data.title} />
          <div className="pt-3" />
          <div className="md:flex md:justify-between">
            <div className="flex">
              <Img.Static className="w-10 h-10" src="/avatar.png" />
              <div className="flex flex-col pl-4 flex-wrap">
                <Text.SM
                  className="text-black"
                  children={data.author.fullName}
                />
                <Text.XS
                  className="text-dark-alpha"
                  children={data.author.position}
                />
              </div>
            </div>
            <div className="flex-col">
              <div className="invisible">
                <Text.SM
                  className="text-black hover:underline"
                  children="space"
                />
              </div>
              <div className="flex items-center">
                <Icon.Calendar className="fill-primary" />
                <div
                  className="pl-2 text-base font-medium"
                  children={DateTime.fromJSDate(data.date).toFormat("dd/MM/yy")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHeader;
