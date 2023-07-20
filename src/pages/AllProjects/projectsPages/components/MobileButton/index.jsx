import "./mobileButton.css";
import { Link } from "react-router-dom";

function MobileBtn(appGoogleLink, appAppleLink) {
  return (
    <div className="elements-center">
      <Link href={appGoogleLink}>
        <button type="button" className="mobileCustomBtn">
          Google Store
        </button>
      </Link>

      <div id="space-between-mobile-buttons">
        <a href={appAppleLink}>
          <button type="button" className="mobileCustomBtn">
            Apple store
          </button>
        </a>
      </div>
    </div>
  );
}

export default MobileBtn;
