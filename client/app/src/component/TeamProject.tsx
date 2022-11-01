import { Gallery, Item, Masonry, Image, Carousel } from "dev-portfolio";
import color from "../common/style/theme";
import styled from "styled-components";

export default function TeamProject() {
  return (
    <>
      <Container>
        <BigSpan>발견한 문제 : </BigSpan>
        <SmallSpan>
          1. 학생들이 교내에 어떤 동아리가 있는지 모르는 경우가 많다.
        </SmallSpan>
        <SmallSpan>
          2. 동아리 관리에 있어 카카오톡 등과 같은 메신져 어플을 사용해야 한다.
        </SmallSpan>
      </Container>

      <Container>
        <BigSpan>제품 정의</BigSpan>
        <SmallSpan>
          교내 학생들을 대상으로 하는 교내 동아리 중개 플랫폼
        </SmallSpan>
      </Container>

      <Container>
        <BigSpan>제품 기대효과(결과)</BigSpan>
        <SmallSpan>- 교내 동아리들의 효과적인 홍보</SmallSpan>
        <SmallSpan>
          - 학생들의 취미에 맞는 동아리 정보 조회, 가입신청, 동아리 관리
        </SmallSpan>
        <SmallSpan>- 결과</SmallSpan>
        <SmallSpan>1. 회원수 360명 유치</SmallSpan>
      </Container>

      <CarouselWrap>
        <Carousel>
          <Item title="1" />
          <Item title="2" />
          <Item title="3" />
        </Carousel>
      </CarouselWrap>
      <Gallery>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
          <Item
            key={idx}
            hoverdInnerBorderColor={color.mainColor}
            titleColor={color.pointColor}
          />
        ))}
      </Gallery>
    </>
  );
}
const Container = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;
const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: white;
  }
`;

const SmallSpan = styled.span`
  font-size: large;
  margin-left: 30px;
`;

const BigSpan = styled.span`
  font-size: larger;
`;
