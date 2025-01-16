import Connection from "./Connection";
import ContactForm from "./ContactForm";
import Title from "./Title";

export default function Contact() {
  return (
    <div id='contact' className="flex flex-col mx-auto max-w-[1280px] w-full mb-20">
      <Title>Contact me</Title>
      <div className="flex sm:flex-row flex-col gap-[100px] max-w-[1200px] w-full px-6 sm:px-0">
        <ContactForm></ContactForm>
        <Connection></Connection>
      </div>
    </div>
  );
}
