import ContactClass from "./ContactClass";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <ContactClass
        name={"Sahil"}
        email={"sahilgoyal9598@gmail.com"}
        phone_number={"please call me if you get one"}
      />
    </div>
  );
};

export default Contact;
