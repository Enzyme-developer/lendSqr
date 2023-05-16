import React from "react";
import '../styles/info.scss'

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
    <div className="info">
      <div className="info__item">
        <p className="info__title">{title1}</p>
        <span className="info__value">{value1}</span>
      </div>

      {title2 && (
        <div className="info__item">
          <p className="info__title">{title2}</p>
          <span className="info__value">{value2}</span>
        </div>
      )}

      {title3 && (
        <div className="info__item">
          <p className="info__title">{title3}</p>
          <span className="info__value">{value3}</span>
        </div>
      )}

      {title4 && (
        <div className="info__item">
          <p className="info__title">{title4}</p>
          <span className="info__value">{value4}</span>
        </div>
      )}
    </div>
  );
};

export default Info;
