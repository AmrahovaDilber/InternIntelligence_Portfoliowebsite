import { useState } from "react";
import { validationType } from "../type/types";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();

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

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form
      className="max-w-[100%] sm:max-w-[50%] shadow-lg  space-y-6  bg-[rgb(11,11,28)] rounded-xl w-full  p-6"
      onSubmit={handleSubmitForm}
    >
      <p className="text-2xl font-semibold text-white mb-8 text-center">
        Let's work together!
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
          className="h-13 p-4  bg-[#1a1a33] text-white  w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 h-24"
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
