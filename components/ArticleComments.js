import React from "react";
import { Button, Container, Icon, Img, Input, Text, Title } from "style-guide";
import { useForm } from "react-hook-form";
import WORDS from "common/words/article";

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const ArticleComments = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });
  const request = null;

  return (
    <div className="pb-24">
      <Container.Base>
        <div className="xs:pt-12 pt-10" />
        <Title.Base
          className="xs:text-1xl lg:text-2xl"
          children={WORDS.blog_about}
        />
        <div className="pt-5" />
        <div className="shadow-layout rounded-22 px-8 py-5 flex xs:flex-col md:flex-row lg:w-9/12 xl:w-8/12">
          <div className="flex justify-center md:w-3/12">
            <Img.Static className="m-auto" src="/avatar-large.png" />
          </div>
          <div className="flex flex-col md:w-7/12 md:px-4">
            <div className="xs:pt-5" />
            <Text.LG className="font-medium" children={WORDS.blog_name} />
            <div className="xs:pt-5" />
            <Text.MD className="" children={"lorem"} />
          </div>
        </div>
        <div className="xs:pt-10" />
        <div className="flex">
          <Title.Base
            className="xs:text-1xl md:text-2xl font-semibold"
            children={WORDS.blog_comments}
          />
          <Icon.Point className="ml-3 mt-3" />
          <div className="ml-3 font-semibold text-2xl">15</div>
        </div>
        <div className="xs:pt-6" />
        <div className="flex flex-col shadow-layout rounded-22 px-6 py-4 xl:w-10/12">
          <div className="flex">
            <Text.MD className="font-medium" children="John Smith" />
            <Icon.VerticalDiv className="ml-3 mt-2" />
            <div className="ml-3 font-normal text-sm">1 {WORDS.hours}</div>
          </div>
          <div className="xs:pt-3" />
          <Text.MD children={"lorem"} />
        </div>
        <div className="flex xs:justify-start xs:pt-10">
          <Button.Secondary
            className="xs:text-base xs:font-medium p-3 w-full block md:w-64"
            children={WORDS.read_more}
          />
        </div>
      </Container.Base>
      <div className="xs:pt-10" />
      <div className="shadow-layout rounded-22 p-5 md:w-690 md:mx-auto lg:w-930 xl:w-1100">
        <Text.MD
          className="font-semibold text-1xl"
          children={WORDS.leave_comment}
        />
        <div className="pt-5" />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data }))}
          noValidate
        >
          <Input.TextArea
            name="message"
            labeltext={WORDS.message}
            className="resize-none h-44"
            labelclassname="text-dark font-medium"
            placeholder={WORDS.comment_placeholder}
            register={register}
            error={errors.message}
            rules={{ required: "message_required_msg" }}
          />
          <div className="flex xs:w-full md:justify-end xs:pt-8 ">
            <Button.Primary
              children={WORDS.submit}
              className="text-base p-2 xs:w-full md:w-44 xs:font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleComments;
