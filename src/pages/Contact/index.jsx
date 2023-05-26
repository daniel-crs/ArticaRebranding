import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuestionForms from "./component/Forms";

import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <QuestionForms />

      <Footer />
    </div>
  );
}

export default Contact;
