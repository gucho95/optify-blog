import Head from "next/head";
import { Container, Title } from "style-guide";
import BlogHeader from "components/BlogHeader";
import BlogArticles from "components/BlogArticles";
import BlogFooter from "components/BlogFooter";
import WORDS_GENERAL from "common/words/general";
import WORDS_MENU from "common/words/menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          {WORDS_MENU.blog} | {WORDS_GENERAL.brand_name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog-container">
        <div className="xs:pt-8 md:pt-10" />
        <BlogHeader />
        <Container.Base>
          <div className="text-center">
            <div className="xs:pt-10 md:pt-16" />
            <Title.Base className="text-center xs:text-1xl md:text-3xl lg:text-5xl xl:text-6xl font-medium">
              {WORDS_GENERAL.find_the_article} <br />{" "}
              {WORDS_GENERAL.which_interests_most}
            </Title.Base>
          </div>
          <BlogArticles />
          <BlogFooter />
        </Container.Base>
      </div>
    </div>
  );
}
