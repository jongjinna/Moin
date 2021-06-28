import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 0;
  background-color: #344754;
  @media (min-width: 481px) and (max-width: 940px) {
    padding: 60px 0 48px 0;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 60px 0 48px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
`;

const TextItem = styled.div`
  width: 15em;
  font-family: NotoSansCJKkr;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.27px;
  color: white;
  @media (min-width: 481px) and (max-width: 940px) {
    font-family: SpoqaHanSansNeo;
    font-size: 20px; 
    line-height: 1.2;
    letter-spacing: -0.2px;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-family: SpoqaHanSansNeo;
    font-size: 20px; 
    line-height: 1.2;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

const ImgTextItem = styled.div`
  grid-row: 1 / 3;
  grid-column: 2;
  width: 460px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media (min-width: 481px) and (max-width: 940px) {
    grid-row: 2;
    grid-column: 1;
    width: 280px;
    margin: 52px 0 26px 0;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 2;
    grid-column: 1;
    width: 280px;
    margin: 52px 0 26px 0;
  }
`;

const ImgText = styled.div`
  & > img {
    width: 96px;
    height: 96px;
    margin-bottom: 20px;
    object-fit: contain;
    color: white;
    @media (min-width: 481px) and (max-width: 940px) {
      width: 68px;
      height: 68px;
      margin-bottom: 13px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 68px;
      height: 68px;
      margin-bottom: 13px;
    }
  }
  & > p {
    width: 140px;
    height: 54px;
    margin: 0;
    opacity: 0.9;
    font-family: NotoSansCJKkr;
    font-size: 18px;
    letter-spacing: -0.15px;
    text-align: center;
    color: white;
    @media (min-width: 481px) and (max-width: 940px) {
      width: 68px;
      opacity: 0.7;
      font-size: 14px;
      letter-spacing: -0.12px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 68px;
      opacity: 0.7;
      font-size: 14px;
      letter-spacing: -0.12px;
    }
  } 
`;

const ButtonItem = styled.button`
  grid-row: auto;
  grid-column: 1;
  align-self: end;
  justify-self: start;
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: solid 1px white;
  background-color: transparent;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.13px;
  color: white; 
  @media (min-width: 481px) and (max-width: 940px) {
    justify-self: center;
    width: 280px;
    border-radius: 6px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-self: center;
    width: 280px;
    border-radius: 6px;
  }  
`;

const CustomerServiceSection = () => {
  return (
  <Container>
    <Wrapper>
      <TextItem>다양한 분야의 비즈니스를 어떻게<br/>지원하고 있는지 알아보세요.</TextItem>
      <ImgTextItem>
        <ImgText>
          <img alt="rocket"></img>
          <p>스타트업<br/>소상공인</p>
        </ImgText>
        <ImgText>
          <img alt="cart"></img>
          <p>이커머스<br/>기업</p>
        </ImgText>
        <ImgText>
          <img alt="building"></img>
          <p>중소기업<br/>대기업</p>
        </ImgText>
      </ImgTextItem>
      <ButtonItem onClick={()=>{}}>문의하기</ButtonItem>
    </Wrapper>
  </Container>
  )
}

export default CustomerServiceSection