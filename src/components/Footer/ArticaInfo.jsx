import { useState, useEffect } from "react";

function ArticaInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/contact-infos";
    fetch(url)
      .then((res) => res.json())
      .then((contact) => {
        setData(contact.data);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((contact, i) => (
        <div key={i}>
          <h2 className="artica-footer-title">Artica</h2>
          <div className="artica-footer-info">
            <p>{contact.attributes.phoneNumber}</p>
            <p>{contact.attributes.email}</p>
            <p>{contact.attributes.expedient}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticaInfo;
