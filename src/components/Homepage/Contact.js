import React, { useEffect, useState } from "react";

function Contact(props) {
  const [data, updateData] = useState(null);
  const [phoneIsActive, setPhoneActive] = useState(false);
  const [emailIsActive, setEmailActive] = useState(false);
  const [studentEmailIsActive, setStudentEmailActive] = useState(false);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "contact",
        props: "title,metadata",
      })
      .then((data) => {
        updateData(data.object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  const meta = data?.metadata;
  const title = data?.title;
  const contact = meta?.extra_data;
  return data ? (
    <section className="contact flex" id="homepage-contact">
      <div className="section-title-container flex">
        <h2 className="section-title">{title}</h2>
        <div className="header-underline" />
      </div>
      <div className="content">
        <h3 className="message">{meta.summary}</h3>
        <div className="contact-info flex-row">
          <div
            className={`h4 phone ${phoneIsActive ? "inactive" : "active"}`}
            onClick={() => setPhoneActive(true)}
          >
            Phone
          </div>
          <a
            href={`tel:+1${contact.phone.replace(/([ ()-])+/g, "")}`}
            className={`h4 phone ${phoneIsActive ? "active" : "inactive"}`}
          >
            {contact.phone}
          </a>
          <div className="h4 dot-char"> &#9679; </div>
          <div
            className={`h4 email ${emailIsActive ? "inactive" : "active"}`}
            onClick={() => setEmailActive(true)}
          >
            Email
          </div>
          <a
            href={`mailto:${contact.email}`}
            className={`h4 email ${emailIsActive ? "active" : "inactive"}`}
          >
            {contact.email}
          </a>
          {/* <div className="dot-char"> &#9679; </div>
          <div
            className={`h4 student-email ${
              studentEmailIsActive ? "inactive" : "active"
            }`}
            onClick={() => setStudentEmailActive(true)}
          >
            Student Email
          </div>
          <div
            className={`h4 student-email ${
              studentEmailIsActive ? "active" : "inactive"
            }`}
          >
            {contact.student}
          </div> */}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Contact;
