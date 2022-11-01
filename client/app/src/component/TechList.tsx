import { TechStackList } from "dev-portfolio";
import styled from "styled-components";
import color from "../common/style/theme";

export default function TechList() {
  const left = [
    {
      nameOption: {
        name: "Javascript",
        logoName: "Javascript",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "50%",
        backgroundColor: `${color.lightGrey}`,
        colorTo: `#F7DF1F`,
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "React",
        logoName: "React",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "65%",
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#01D8FF",
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "NextJS",
        logoName: "Nextjs",
        fontSize: "18px",
        logoSize: "16px",
      },
      progressBarOption: {
        rateText: "75%",
        rateTextColor: `${color.lightGrey}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: `${color.mainColor}`,
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "Redux",
        logoName: "Redux",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "45%",
        rateTextColor: `${color.mainColor}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#8862C5",
        width: "100%",
        height: "35px",
      },
    },
  ];

  const right = [
    {
      nameOption: {
        name: "Publish",
        logoName: "HTML-5",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "90%",
        rateTextColor: `${color.lightGrey}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#E44D26",
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "Git",
        logoName: "Git",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "75%",
        rateTextColor: `${color.lightGrey}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#DE4C36",
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "Database",
        logoName: "Mysql",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "20%",
        rateTextColor: `${color.mainColor}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#B6D3DC",
        width: "100%",
        height: "35px",
      },
    },
    {
      nameOption: {
        name: "aws",
        logoName: "aws",
        fontSize: "18px",
        logoSize: "24px",
      },
      progressBarOption: {
        rateText: "20%",
        rateTextColor: `${color.maincolor}`,
        backgroundColor: `${color.lightGrey}`,
        colorTo: "#FFC684",
        width: "100%",
        height: "35px",
      },
    },
  ];
  return (
    <Wrap>
      <ListWrap>
        <TechStackList techStackList={left}></TechStackList>
        <TechStackList techStackList={right}></TechStackList>
      </ListWrap>
      <Introduce>
        <SmallSpan>- React, Next를 주로 사용하며 개발합니다.</SmallSpan>
        <SmallSpan>
          - 전반적인 퍼블리싱 툴(ex. SASS, styled-component 등) 사용이
          가능합니다.
        </SmallSpan>
        <SmallSpan>- Git을 사용해 협업을 진행 해 왔습니다.</SmallSpan>
        <SmallSpan>
          - 프론트엔드 개발서버 배포를 AWS EC2에 해본 경험이 있습니다.
        </SmallSpan>
      </Introduce>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
`;

const ListWrap = styled.div`
  display: flex;
  width: 420px;
  background: lightgray;
  border-radius: 10px;
  margin: 0 5px 10px 30px;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  * {
    margin: 3px;
  }
`;

const SmallSpan = styled.span`
  font-size: large;
`;
