function WorkingCard({ title, subtitle, cardText }) {
  return (
    <section className="space-between-components">
      <div className="container-Card">
        <h2 className="custom-number">{title}</h2>
        <h3 className="custom-subtitle">{subtitle}</h3>
        <p className="custom-text">{cardText}</p>
      </div>
    </section>
  );
}

export default WorkingCard;
