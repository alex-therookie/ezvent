import "./MainPage.css";
import MainPageBanner from "../MainPageHeader";
import CategoryBar from "../CategoryBar";
import Footer from "../Footer";

function MainPage() {
  return (
    <div className="main-container">
      <MainPageBanner />
      <CategoryBar />
      <Footer />
    </div>
  );
}

export default MainPage;
