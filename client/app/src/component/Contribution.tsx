import { Carousel, Item } from "dev-portfolio";
import styled from "styled-components";

export default function Contribution() {
  const item = [
    <ItemDiv>
      <Item
        title="일정관리 페이지"
        description="동아리별 일정 관리를 한 눈에 보기쉽게 구현한 페이지"
        src="img/일정.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/일정.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="일정 추가, 수정 모달"
        description="동아리별 일정 추가와 수정을 쉽게 하는 모달창"
        src="img/일정작성.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/일정작성.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="프로필 페이지"
        description="유저 개인정보 페이지, 본인에게만 보이는 정보 구현"
        src="img/프로필.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/프로필.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="스크랩 페이지"
        description="동아리 활동 내용 중 본인이 했던 활동을 스크랩 해서 모아둘 수 있는 개인 페이지"
        src="img/스크랩.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/스크랩.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="내가 쓴 글 페이지"
        description="모든곳에서 본인이 썼던 글, 댓글을 모아 볼 수 있는 페이지"
        src="img/내가쓴글.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/내가쓴글.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="게시판 페이지"
        description="게시판 관련 페이지 리팩토링"
        src="img/게시판.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/게시판.png"
      />
    </ItemDiv>,
    <ItemDiv>
      <Item
        title="게시글 페이지"
        description="게시판 관련 페이지 리팩토링"
        src="img/게시글.png"
        hoverdInnerBorderColor="none"
        descriptionColor="black"
        titleColor="black"
        redirectURL="img/게시글.png"
      />
    </ItemDiv>,
  ];

  return (
    <CarouselWrap>
      <Carousel isAutoplayControl={false} isAutoplay={false}>
        {item}
      </Carousel>
    </CarouselWrap>
  );
}

const CarouselWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  svg {
    color: black;
    width: 35px;
    height: 35px;
  }
  * {
    li {
      margin: 0 auto;
    }
  }
`;

const ItemDiv = styled.div`
  margin: 0 auto;
  * {
     {
      display: flex;
      section {
        background: lightgray;
        border-radius: 15px;
        height: 100px;
        width: 500px;
      }
    }
  }
`;
