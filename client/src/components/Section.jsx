import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Section = ({ title, logo, url }) => {
  return (
    <Link to={url}>
      <div className="section">
        <img src={logo} alt="" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default Section;
