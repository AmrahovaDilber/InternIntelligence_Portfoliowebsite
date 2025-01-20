import { useState, useRef } from "react";
import { validationType } from "../type/types";
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const validationErrors: validationType = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (
      !/^((?!\.)[\w\-_.]*[^.])@(\w+)(\.\w+(\.\w+)?[^.\W])$/.test(formData.email)
    ) {
      validationErrors.email = "Email is not valid!";
    }

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required!";
    } else if (formData.firstName.length < 6) {
      validationErrors.firstName =
        "First name must be at least 6 characters long!";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required!";
    } else if (formData.lastName.length < 5) {
      validationErrors.lastName =
        "Last name must be at least 5 characters long!";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required!";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_38l5bqr", // Replace with your service ID
          "template_fpr4tx2", // Replace with your template ID
          formRef.current,
          "tLHxzJLhqO4YWH7bh" // Replace with your public key
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Your message has been sent successfully! We'll get back to you soon.");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }); // Clear form
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send email. Please try again later.");
          }
        );
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      ref={formRef}
      className="max-w-[100%] sm:max-w-[50%] shadow-lg space-y-6 bg-[rgb(23,11,42)] rounded-xl w-full p-6"
      onSubmit={handleSubmitForm}
    >
      <p className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center leading-relaxed">
        Interested in working together? <br />
        <span className="text-violet-400">Let’s connect!</span>
      </p>

      <div>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full h-12 px-4 bg-[#1a1a33] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        {errors.firstName && (
          <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full h-12 px-4 bg-[#1a1a33] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        {errors.lastName && (
          <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full h-12 px-4 bg-[#1a1a33] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="h-13 p-4 bg-[#1a1a33] text-white w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 h-24"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      <div className="text-white w-[170px] cursor-pointer font-semibold text-lg rounded-full h-[40px] text-center bg-gradient-to-r from-indigo-500 to-purple-600">
        <button type="submit" className="w-full h-full">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
