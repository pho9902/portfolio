/* This is imported components of dev-portfolio library */
import { Header, Contact, Experience, Gallery, Item } from "dev-portfolio";
import Introduction from "./component/Introduction";
import styled from "styled-components";
import color from "./common/style/theme";
import "./App.css";
import TechList from "./component/TechList";
import TeamProject from "./component/TeamProject";
import Contribution from "./component/Contribution";

function App() {
  return (
    <div className="App">
      <Header
        headerBackgroundColor={color.mainColor}
        logoOption={{
          redirectUrl: "/",
          title: "Front-end Developer | 박현우",
          logoHidden: true,
          titleColor: `${color.pointColor}`,
          titleSize: "30px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/pho9902",
            color: `${color.pointColor}`,
            size: "30px",
          },
          {
            name: "notion",
            redirectUrl:
              "https://www.notion.so/25f5a56ccbe94545be0a4608ca55f026",
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

      <Title id="['TechStackList', 'bx:coin-stack']">Tech Stack List</Title>
      <TechList />

      <Experience
        historyList={[
          {
            startDate: "2021.05",
            endDate: "2022.02",
            title: "모던 애자일",
            description:
              '인덕대학교 교내 소프트웨어 개발 동아리 (교내 동아리 중개 플랫폼 "동그라미" 개발, 유지보수',
          },
          {
            startDate: "2022.08.16",
            endDate: "2022.10.17",
            title: "메가넥스트",
            description:
              "신입 웹 개발자 포지션 (메인 포털 퍼블리싱, 동영상 학습창 개발)",
          },
        ]}
      />
      <Title id="['TeamProject(동그라미)', 'bx:coin-stack']">
        Team Project(동그라미)
      </Title>
      <TeamProject />
      <Title id="['ProjectContribution(동그라미)', 'bx:coin-stack']">
        Project Contribution(동그라미)
      </Title>
      <Contribution />

      <Title id="['Presentation', 'bx:coin-stack']">Presentation</Title>
      <Wrap>
        <span>
          팀 활동 중 제가 진행한 CS지식, 개발 지식 관련 발표 활동
          영상자료입니다.
        </span>
        <Gallery>
          <Item
            title="Javascript 에서의 this"
            description=""
            redirectURL="https://youtu.be/t-FzM7QiS2U"
            src="img/this.png"
          />
          <Item
            title="클로져&스코프"
            description=""
            redirectURL="https://youtu.be/rGpzdfWUJtE"
            src="img/closure.png"
          />
          <Item
            title="Promise,async/await"
            description=""
            redirectURL="https://www.youtube.com/watch?v=QJPJ-_SQKAg&list=PL3KMG4MoejTqN4xUNKoXEHPUKH6-EAs64&index=2"
            src="img/promise.png"
          />
        </Gallery>
      </Wrap>

      <Contact
        id="['Contact', 'fluent:contact-card-20-regular']"
        titleColor={color.pointColor}
        subTitleColor={color.lightGrey}
        backgroundColor={color.mainColor}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/pho9902",
            color: `${color.pointColor}`,
          },
          {
            name: "notion",
            redirectUrl:
              "https://www.notion.so/25f5a56ccbe94545be0a4608ca55f026",
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
            title: "Phone",
            titleColor: `${color.pointColor}`,
            description: "T. +82 (0)10 9169 3840",
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: "E-mail",
            titleColor: `${color.pointColor}`,
            description: "bagh9902@gmail.com",
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

const Wrap = styled.div`
  padding: 0 2em;
`;

const LinkSpan = styled.span`
  cursor: pointer;
  font-size: large;
  &:hover {
    color: #90e2d6;
  }
`;

const LinkWrap = styled.div`
  display: flex;
`;

const LinkItem = styled.div``;
