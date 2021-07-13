import {useHistory} from "react-router-dom"
import ezBanner from "../../img/ezvent-banner.jpg";
import "./MainPageHeader.css";

const MainPageHeader = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/events")
  }
  return (
    <div className="banner-container">
      <div className="text-container">
        <span className="span-discover">Discover the best</span>
        <span className="span-events">events</span>
        <button className="browse-btn" onClick={handleClick}>Browse events</button>
        </div>
      <div className="img-container">
      <img className="main-page-header" src={ezBanner}></img>
      </div>
    </div>
  );
};

export default MainPageHeader;
