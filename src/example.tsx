import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  padding: 100px 0;
  background-color: #344754;
`;

const Wrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit , minmax(100px, 1fr));
`;
const GG = styled.div`
  // width: 100px;
  height: 100px;
`;

const ONE = styled(GG)`
  width: 120px;
  background-color:red;
`;
const TWO = styled(GG)`
  background-color:orange;
  width:80px;
  height:200px;
  grid-row: auto / span 2;
`;
const THR = styled(GG)`
  width: 30px;
  background-color:yellow;
`;


const CustomerServiceSection = () => {
  return (
  <Container>
    <Wrapper>
      <ONE>1</ONE>
      <TWO>2</TWO>
      <THR>3</THR>
    </Wrapper>
  </Container>
  )
}

export default CustomerServiceSection