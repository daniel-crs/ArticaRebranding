import "./info.css";

function Info({ projectInfoTitle, projectInfoText }) {
  return (
    <div>
      <h3 id="space-between-info-elements">{projectInfoTitle}</h3>
      <p className="customInfo">{projectInfoText}</p>
    </div>
  );
}

export default Info;
