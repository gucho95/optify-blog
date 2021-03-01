import React, { Fragment } from "react";
import Comments from "components/ArticleComments";
import Content from "components/ArticleContent";
import Header from "components/ArticleHeader";
import WORDS from "common/words/article";
import WORDS_GENERAL from "common/words/general";
import Head from "next/head";

export const data = {
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

const Article = () => {
  return (
    <Fragment>
      <Head>
        <title>
          {WORDS.article} | {WORDS_GENERAL.brand_name}
        </title>
      </Head>
      <Header data={data} />
      <Content />
      <Comments />
    </Fragment>
  );
};

export default Article;
