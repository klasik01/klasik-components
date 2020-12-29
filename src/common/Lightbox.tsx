import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const LightBox = (props) => {

  const { images = [] } = props;

  return (
    <div>
      <SRLWrapper>
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-self-stretch">
            {images.map((img, index) =>
              <div key={index} className="d-flex p-2 align-self-stretch col">
                <img src={img.url} alt={img.alt} className="img-fluid rounded" />
              </div>
            )}
          </div>
        </div>
      </SRLWrapper>
    </div>
  );
};


export { LightBox };
