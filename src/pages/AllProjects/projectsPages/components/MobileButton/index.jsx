import "./mobileButton.css";

function MobileBtn() {
  return (
    <div className="elements-center">
      <div>
        <button type="button" className="mobileCustomBtn">
          Google Store
        </button>
      </div>

      <div id="space-between-mobile-buttons">
        <button type="button" className="mobileCustomBtn">
          Apple store
        </button>
      </div>
    </div>
  );
}

export default MobileBtn;
