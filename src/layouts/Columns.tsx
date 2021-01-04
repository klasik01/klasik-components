import React from "react";
import styled from "styled-components";

interface IFullColumn {
  className?: string,
  children?: any
  padding?: string
}

const FullColumn = (props: IFullColumn) => {
  const {children, className, padding = "py-2"} = props;
  return (
    <div className={`${className} col-12`}>
      <div className={padding}>
        {children}
      </div>
    </div>
  );
};


export {
  FullColumn
}
