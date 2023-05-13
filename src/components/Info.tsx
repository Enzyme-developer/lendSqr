import React from "react";

const Info = ({
  title1,
  title2,
  title3,
  title4,
  value1,
  value2,
  value3,
  value4,
}: any) => {
  return (
    <div>
      <div>
        <span>{title1}</span>
        <span>{value1}</span>
      </div>

      {title2 && (
        <div>
          <span>{title2}</span>
          <span>{value2}</span>
        </div>
      )}

      {title3 && (
        <div>
          <span>{title3}</span>
          <span>{value3}</span>
        </div>
      )}

      {title4 && (
        <div>
          <span>{title4}</span>
          <span>{value4}</span>
        </div>
      )}
    </div>
  );
};

export default Info;
