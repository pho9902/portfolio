/* This is imported components of dev-portfolio library */
import { Header, Contact, Experience, VisitorComment } from "dev-portfolio";
import Introduction from "./component/Introduction";
import styled from "styled-components";
import color from "./common/style/theme";
import useComment from "./hooks/useComment";
import "./App.css";
import TechList from "./component/TechList";
import TeamProject from "./component/TeamProject";

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
          title: "Front-end Developer | 박현우",
          logoHidden: true,
          titleColor: `gray`,
          titleSize: "30px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/pho9902",
            color: `gray`,
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
          iconColor: `gray`,
          iconMargin: "0px 12px 0px 12px",
          itemTextColor: "white",
          itemTextAlign: "left",
          itemBackgroundColor: `${color.mainColor}`,
          itemHoverdBackgroundColor: `${color.pointColor}`,
          backgroundColor: `${color.mainColor}`,
        }}
      />

      <Introduction id="['Manual Introduction', 'bx:home-smile']" />

      <Title id="['TechStackList', 'bx:coin-stack']">Tech Stack List</Title>
      <TechList />

      <Title id="['TeamProject(동그라미)', 'bx:coin-stack']">
        Team Project(동그라미)
      </Title>
      <TeamProject />

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

      <Experience id="['Experience', 'carbon:list-boxes']" theme="vertical" />

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

const Title = styled.h1`
  color: ${color.mainColor};
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

const VisitorCommentTitle = styled.h1`
  margin: 1em 1em 0 1em;
  padding-bottom: 15px;
`;
