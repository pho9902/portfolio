import React from "react";
import styled from "styled-components";
import color from "../style/theme";

/**
 * Just introduction for dev-portfolio-app.
 *
 * If you want to view internal of Introduction,
 * go to the './src/common/instruction/Introduction.tsx'
 */
const Introduction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
      <span style={{ color: `${color.pointColor}` }}>Hi there!</span>
      <br />
      <span>ㅎㅇ</span>
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
