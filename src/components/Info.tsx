import React from "react";
import './styles/info.scss'

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
    <div style={{display: 'flex', flexWrap:'wrap', alignItems:'center', gap:'60px'}}>
      <div>
        <p>{title1}</p>
        <span>{value1}</span>
      </div>

      {title2 && (
        <div>
          <p>{title2}</p>
          <span>{value2}</span>
        </div>
      )}

      {title3 && (
        <div>
          <p>{title3}</p>
          <span>{value3}</span>
        </div>
      )}

      {title4 && (
        <div>
          <p>{title4}</p>
          <span>{value4}</span>
        </div>
      )}
    </div>
  );
};

export default Info;
