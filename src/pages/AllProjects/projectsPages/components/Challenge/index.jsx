import "./challenge.css";

function Challenge({ challengeTitle, challengeText }) {
  return (
    <div>
      <h3 className="challengeTitle">Qual foi o desafio</h3>
      <p className="challengeText">{challengeText}</p>
    </div>
  );
}

export default Challenge;
