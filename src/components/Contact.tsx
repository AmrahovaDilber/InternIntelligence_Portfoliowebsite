import Connection from "./Connection";
import ContactForm from "./ContactForm";
import { SparklesPreview } from "./SparklesPreview";


export default function Contact() {
  return (
    <div id='contact' className="flex flex-col mx-auto max-w-[1280px] w-full mb-20">
      <SparklesPreview>Contact me</SparklesPreview>
      <div className="flex sm:flex-row flex-col gap-[30px] sm:gap-[100px] mt-6 sm:mt-14 max-w-[1200px] w-full px-6 sm:px-0">
        <ContactForm></ContactForm>
        <Connection></Connection>
      </div>
    </div>
  );
}
