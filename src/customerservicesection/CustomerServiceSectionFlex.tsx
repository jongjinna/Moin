import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #344754;
`;

const Wrapper = styled.div`
  max-width: 940px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 370px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 940px) {
    height: 417px;
  }
`;

const Subcontainer1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  margin: 10px;
  @media (min-width: 320px) and (max-width: 940px) {
    min-height: 168px;
    flex-direction: column;
    margin: 6.5px;
  }
`;

const Subcontainer2 = styled.div`
  width: 100%; 
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  margin: 10px;
  @media (min-width: 320px) and (max-width: 940px) {
    min-height:128px;
    flex-direction: column-reverse;
    margin:6.5px;
  }
`;

const Text = styled.div`
  max-width: 480px;
  font-family: NotoSansCJKkr;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.27px;
  color: white;
  @media (min-width: 320px) and (max-width: 940px) {
   
    max-width: 300px;
    font-family: SpoqaHanSansNeo;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

const Img = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 416px;
  @media (min-width: 320px) and (max-width: 940px) {
    max-width: 280px;
  }

  .icon-startup {
    width: 96px;
    height: 96px;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 940px) {
        width: 64px;
        height: 64px;
    }
  }

  .icon-ecommerce {
    width: 96px;
    height: 96px;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 940px) {
        width: 64px;
        height: 64px;
    }
  }
  .icon-building {
    width: 96px;
    height: 96px;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 940px) {
        width: 64px;
        height: 64px;
    }
  }
`;

const Button = styled.button`
    
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: solid 1px white;
  background-color: transparent;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.13px;
  text-align: center;
  color: white;
  @media (min-width: 320px) and (max-width: 940px) {
    width: 280px;
    border-radius: 6px;
  } 
`;

const Subtext = styled.div`
    width: 416px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 320px) and (max-width: 940px) {
      max-width: 280px;
    }

  & > p {
    width: 96px;
    opacity: 0.9;
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: white;
    @media (min-width: 320px) and (max-width: 940px) {
      width: 68px;
      font-size: 14px;
      letter-spacing: -0.12px;
    } 
  }
`;

const UsingFlex = () => {
  return (
    <Container>
      <Wrapper>
        <Subcontainer1>
          <Text>다양한 분야의 비즈니스를 어떻게 지원하고 있는지 알아보세요.</Text>
          <Img>
            <img className='icon-startup'></img>
            <img className='icon-ecommerce'></img>
            <img className='icon-building'></img>
          </Img>
        </Subcontainer1>
        <Subcontainer2>
          <Button onClick={() => {}}>문의하기</Button>
          <Subtext>
            <p>스타트업<br></br>소상공인</p>
            <p>이커머스<br></br>기업</p>
            <p>중소기업<br></br>대기업</p>
          </Subtext>
        </Subcontainer2>
      </Wrapper>
    </Container>
  )
}

export default UsingFlex
