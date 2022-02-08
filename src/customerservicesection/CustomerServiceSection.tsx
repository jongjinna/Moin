import React from 'react';
import styled from 'styled-components';
import { IMG_URL } from '@/model'; // 이미지 주소
import { PrimaryBorderButton } from 'src/assets/mds/Buttons'; // 위치만 확인

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
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.27px;
  color: white;
  @media (min-width: 481px) and (max-width: 940px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
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

const ButtonItem = styled(PrimaryBorderButton)`
  grid-row: auto;
  grid-column: 1;
  align-self: end;
  justify-self: start;
  width: 160px;
  height: 48px;
  border-color: white;
  background-color: transparent;
  color: white;
  @media (min-width: 481px) and (max-width: 940px) {
    justify-self: center;
    width: 280px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-self: center;
    width: 280px;
  }
`;

const CustomerServiceSection = () => {
  return (
    <Container>
      <Wrapper>
        <TextItem>
          다양한 분야의 비즈니스를 어떻게
          <br />
          지원하고 있는지 알아보세요.
        </TextItem>
        <ImgTextItem>
          <ImgText>
            <img src={`${IMG_URL}/landing/Customer_service/icon-startup.svg`} alt='rocket' />
            <p>
              스타트업
              <br />
              소상공인
            </p>
          </ImgText>
          <ImgText>
            <img src={`${IMG_URL}/landing/Customer_service/icon-ecommerce.svg`} alt='cart' />
            <p>
              이커머스
              <br />
              기업
            </p>
          </ImgText>
          <ImgText>
            <img src={`${IMG_URL}/landing/Customer_service/icon-buiding.svg`} alt='building' />
            <p>
              중소기업
              <br />
              대기업
            </p>
          </ImgText>
        </ImgTextItem>
        <ButtonItem
          status='normal'
          onClick={() => {
            window.hasOwnProperty('ChannelIO') ? window.ChannelIO('showMessenger') : null; // 채널톡으로 이동
          }}
        >
          문의하기
        </ButtonItem>
      </Wrapper>
    </Container>
  );
};

export default CustomerServiceSection;
