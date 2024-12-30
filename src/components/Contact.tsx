import Connection from "./Connection";
import ContactForm from "./ContactForm";
import Title from "./Title";

export default function Contact() {
  return (
    <div className="flex flex-col  max-w-[1280px] w-full ">
      <Title>Contact me</Title>
      <div className="flex sm:flex-row flex-col sm:justify-between max-w-[100%] px-6 sm:px-0">
        <ContactForm></ContactForm>
        <Connection></Connection>
      </div>
    </div>
  );
}
