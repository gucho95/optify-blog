import React from "react";
import { Container, Img, Text } from "style-guide";
const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`;

const ArticleContent = () => {
  return (
    <Container.Base>
      <div className="md:px-40 lg:px-48">
        <div className="xs:pt-3 md:pt-10 md:hidden" />
        <p>
          <Text.MD className="md:hidden" children={lorem} />
        </p>
        <div className="pt-8" />
        <Text.MD children={lorem} />
        <Text.MD children={lorem} />
        <div className="pt-8" />
        <Text.MD children={lorem} />
        <Text.MD children={lorem} />
        <div className="pt-10" />
        <Img.Static className="w-full" src="/dummy-1.png" />
        <div className="pt-10" />
        <Text.MD children={lorem} />
        <Text.MD children={lorem} />
        <div className="pt-10" />
        <Img.Static className="w-full" src="/dummy-2.png" />
      </div>
    </Container.Base>
  );
};

export default ArticleContent;
