import React from "react";
import { SocialIcon } from "react-social-icons";

interface ISocialIcons {
  data: any
}

const SocialIcons = (props: ISocialIcons) => {
  const { data = [] } = props;

  return (
    <div className="text-center">
      {data.map((item, index) => {
        return (
          <span className="pb-3 m-3" key={index}>
                        <SocialIcon url={item} />
                    </span>
        );
      })}
    </div>
  );
};

export {
  SocialIcons, ISocialIcons
};
