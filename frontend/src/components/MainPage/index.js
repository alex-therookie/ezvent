import "./MainPage.css";
import MainPageBanner from "../MainPageHeader";
import CategoryBar from "../CategoryBar";

function MainPage() {
  return (
    <div className="main-container">
      <MainPageBanner />
      <CategoryBar />
    </div>
  );
}

export default MainPage;
