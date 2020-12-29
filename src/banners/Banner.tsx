import React from "react";
import styled from "styled-components";
import { Col, Row } from "reactstrap";

const BaseBannerStyle = styled(Row)<{ backgroundImage: any }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.backgroundImage});
  background-size: cover;
  margin: 0;
  border-radius: 0;
  min-height: 100vh;
  max-height: 100vh;
`;

const TitleHeader = styled.div`
  color: white;
  padding: 0;
`;

interface BannerInterface {
  className: string,
  backgroundImage: any,
  children: any
}

const BaseBanner = (props: BannerInterface) => {
  const { className, backgroundImage, children } = props;

  return (
    <BaseBannerStyle backgroundImage={backgroundImage} className={`${className}`}>
      <Col>
        <div className="text-center">
          <TitleHeader className="py-4 my-auto">
            <div className="d-block mx-auto">
              {children}
            </div>
          </TitleHeader>
        </div>
      </Col>
    </BaseBannerStyle>
  );
};

export { BaseBanner, BannerInterface };
