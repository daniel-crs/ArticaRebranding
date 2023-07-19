import "./mobileButton.css";
import { Link } from "react-router-dom";

function MobileBtn(appGoogleLink, appAppleLink) {
  return (
    <div className="elements-center">
      <Link to={appGoogleLink}>
        <button type="button" className="mobileCustomBtn">
          Google Store
        </button>
      </Link>

      <div to={appAppleLink} id="space-between-mobile-buttons">
        <button type="button" className="mobileCustomBtn">
          Apple store
        </button>
      </div>
    </div>
  );
}

export default MobileBtn;
