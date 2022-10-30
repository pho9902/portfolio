/* This is imported components of dev-portfolio library */
import {
  Header,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Masonry,
  Image,
  Carousel,
  Experience,
  TechStackInput,
  VisitorComment,
} from "dev-portfolio";
import styled from "styled-components";

import {
  CardInstruction,
  Introduction,
  TeckstackInputInstruction,
  DisplayPortfolioInstruction,
  VisitorCounterInstruction,
  SkillInstruction,
  ChannelInstruction,
  ProgressBarInstruction,
  ContactInstruction,
} from "./common";
import color from "./common/style/theme";
import useComment from "./hooks/useComment";
import "./App.css";

function App() {
  const {
    comment,
    commentList,
    password,
    nickname,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    handleCreateComment,
  } = useComment();

  return (
    <div className="App">
      <Header
        headerBackgroundColor={color.lightGrey}
        logoOption={{
          redirectUrl: "/",
          title: "헤더헤더헤더헤더헤더헤더헤더",
          logoHidden: true,
          titleColor: `gray`,
          titleSize: "30px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/pho9902",
            color: `${color.pointColor}`,
            size: "30px",
          },
        ]}
        sideBarOption={{
          mainTitle: "",
          mainTitleSize: "24px",
          mainTitleColor: "white",
          mainTitleAlign: "left",
          mainTitleBorderColor: "white",
          iconName: "ant-design:menu-fold-outlined", //Refer to the guidelines.
          iconSize: "28px",
          iconColor: `${color.pointColor}`,
          iconMargin: "0px 12px 0px 12px",
          itemTextColor: "white",
          itemTextAlign: "left",
          itemBackgroundColor: `${color.mainColor}`,
          itemHoverdBackgroundColor: `${color.pointColor}`,
          backgroundColor: `${color.mainColor}`,
        }}
      />

      <Introduction id="['Manual Introduction', 'bx:home-smile']" />

      {/* <Intro
        id="['Intro', 'clarity:cursor-hand-open-line']"
        backgroundColor={color.mainColor}
        titleColor={color.pointColor}
        shortIntroColor="white"
      /> */}

      {/* <TeckstackInputInstruction id="['TechStackInput', 'fa:stack-overflow']" /> */}

      {/* <TechStackInput /> */}

      <TechStackListTitle id="['TechStackList', 'bx:coin-stack']">
        Tech Stack List
      </TechStackListTitle>
      <TechStackList
        techStackList={[
          {
            nameOption: {
              name: "Javascript",
              logoName: "Javascript",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "45%",
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: "100%",
              height: "35px",
            },
          },
          {
            nameOption: {
              name: "HTML5",
              logoName: "HTML-5",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "30%",
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              colorFrom: `${color.pointColor}`,
              width: "100%",
              height: "35px",
              isBlinking: true,
            },
          },
          {
            nameOption: {
              name: "Nodejs",
              logoName: "Nodejs",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "85%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: "100%",
              height: "35px",
            },
          },
        ]}
      />

      <ProgressBarInstruction id="['ProgressBar', 'ci:bar-chart-horizontal']" />

      <SkillInstruction id="['Skill', 'charm:stack']" />

      <DisplayPortfolioInstruction />

      <CarouselWrap>
        <Carousel id="['Carousel', 'bx:carousel']">
          <Item title="1" />
          <Item title="2" />
          <Item title="3" />
        </Carousel>
      </CarouselWrap>

      <Gallery id="['Gallery', 'clarity:image-gallery-line']">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
          <Item
            key={idx}
            hoverdInnerBorderColor={color.mainColor}
            titleColor={color.pointColor}
          />
        ))}
      </Gallery>

      <Masonry id="['Masonry', 'ri:layout-masonry-line']">
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/700/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
        <Image src="https://picsum.photos/700/600/?random" />
      </Masonry>

      <VisitorCounterInstruction id="['VisitorCounter', 'mdi:counter']" />

      <VisitorCommentTitle id="['VisitorComment', 'bx:comment-dots']">
        Visitor Comments
      </VisitorCommentTitle>
      <VisitorComment
        backgroundColor={color.mainColor}
        progressbarColor={color.pointColor}
        handleChangeDescription={handleChangeDescription}
        handleChangeNickname={handleChangeNickname}
        handleChangePassword={handleChangePassword}
        handleCreateComment={handleCreateComment}
        comment={comment}
        nickname={nickname}
        password={password}
        commentList={commentList}
        buttonColor={color.mainColor}
        listNicknameColor={color.mainColor}
        listDateColor={color.pointColor}
      />

      <CardInstruction id="['Card', 'bi:card-list']" />

      <Experience id="['Experience', 'carbon:list-boxes']" theme="vertical" />

      <ChannelInstruction id="['Channel', 'fluent:channel-48-filled']" />

      <ContactInstruction />

      <Contact
        id="['Contact', 'fluent:contact-card-20-regular']"
        titleColor={color.pointColor}
        subTitleColor={color.lightGrey}
        backgroundColor={color.mainColor}
        channels={[
          {
            name: "github",
            redirectUrl: "https://",
            color: `${color.pointColor}`,
          },
          {
            name: "facebook",
            redirectUrl: "https://",
            color: `${color.pointColor}`,
          },
        ]}
        aboutMeInfos={[
          {
            title: "Where I live",
            titleColor: `${color.pointColor}`,
            description: "Seoul, Republic of Korea",
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: "Give me a call",
            titleColor: `${color.pointColor}`,
            description: "T. +82 (0)10 1234 5678",
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: "Or, why don’t you email me?",
            titleColor: `${color.pointColor}`,
            description: "dev-portfolio@gmail.com",
            descriptionColor: `${color.lightGrey}`,
          },
        ]}
      />
    </div>
  );
}

export default App;

const TechStackListTitle = styled.h1`
  color: ${color.mainColor};
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

const VisitorCommentTitle = styled.h1`
  margin: 1em 1em 0 1em;
  padding-bottom: 15px;
`;

const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: white;
  }
`;
