import React from "react";
import styled from "styled-components";
import color from "../style/theme";
import movePage from "../func/movePage";

/**
 * Just introduction for dev-portfolio-app.
 *
 * If you want to view internal of Introduction,
 * go to the './src/common/instruction/Introduction.tsx'
 */
const Introduction = ({ id }: { id: string }) => {
  const url = ["https://mandu9902.tistory.com/", "https://github.com/pho9902"];
  return (
    <Wrap id={id}>
      <IntroHead>
        <span>안녕하세요! 신입</span>
        &nbsp;
        <span style={{ color: `${color.pointColor}` }}>프론트엔드 개발자</span>
        &nbsp;
        <span>박현우입니다.</span>
      </IntroHead>
      <IntroduceBox>
        <Smallspan>저는 이런 개발자입니다.</Smallspan>
        <br />
        <Smallspan>- 협업, 서비스 개발, 운영 경험이 있습니다.</Smallspan>
        <br />
        <Smallspan>- 열정을 가지고 매 순간 성장하려 합니다.</Smallspan>
        <br />
        <Smallspan>
          - 배움을 즐기고 개발과 그에 관련된 공부에서 즐거움을 얻습니다.
        </Smallspan>
      </IntroduceBox>
      <InfoBox>
        <LeftInfo>
          <div>
            <Smallspan>E-Mail : </Smallspan>
            <Smallspan>bagh9902@gmail.com</Smallspan>
          </div>
          <div>
            <Smallspan>Phone : </Smallspan>
            <Smallspan>010-9169-3840</Smallspan>
          </div>
          <div>
            <Smallspan>이름 : </Smallspan>
            <Smallspan>박현우</Smallspan>
          </div>
          <div>
            <Smallspan>학교 : </Smallspan>
            <Smallspan>인덕대학교</Smallspan>
          </div>
        </LeftInfo>
        <RightInfo>
          <div>
            <Smallspan>Blog : </Smallspan>
            <Linkspan onClick={() => movePage(url[0])}>{url[0]}</Linkspan>
          </div>
          <div>
            <Smallspan>Github : </Smallspan>
            <Linkspan onClick={() => movePage(url[1])}>{url[1]}</Linkspan>
          </div>
          <div>
            <Smallspan>생년월일 : </Smallspan>
            <Smallspan>1999 / 02 / 12</Smallspan>
          </div>
          <div>
            <Smallspan>병역 : </Smallspan>
            <Smallspan>군필 | 18/10 ~ 20/06</Smallspan>
          </div>
        </RightInfo>
      </InfoBox>
    </Wrap>
  );
};

export default Introduction;

const Wrap = styled.div`
  padding: 2em;
  /* height: 30vh; */
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
  /* text-align: center; */
  /* justify-content: space-between; */
`;

const IntroHead = styled.div`
  display: flex;
`;

const Smallspan = styled.span`
  font-size: large;
`;

const Linkspan = styled.span`
  cursor: pointer;
  font-size: large;
  &:hover {
    color: #90e2d6;
  }
`;

const InfoBox = styled.div`
  display: flex;
`;

const RightInfo = styled.div`
  border-left: 3px solid lightgray;
  margin-left: 14px;
  padding-left: 14px;
`;

const LeftInfo = styled.div``;

const IntroduceBox = styled.div`
  border-bottom: 3px solid lightgray;
  margin-bottom: 9px;
  padding-bottom: 9px;
`;
