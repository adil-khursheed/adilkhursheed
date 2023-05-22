import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [statusMessage, setStatusMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_nx8wwii",
        "template_j7w8nya",
        form.current,
        "UoxXPJZwkoXNXrLEW"
      )
      .then((res) => {
        console.log(res);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        toast.error(`${error.text} happened!`);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section
        name="contact"
        className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start mb-24">
        <div className="md:max-w-sm mt-4 text-center md:text-left">
          <h2 className="text-white font-semibold text-2xl uppercase mb-5 md:text-4xl">
            Contact Me
          </h2>
          <p className="text-slate-300 text-sm">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className="flex flex-col gap-3 md:max-w-md w-full">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none"
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none"
            />
            <p className={`text-emerald-500 text-xs mt-1`}>{statusMessage}</p>
          </div>
          <button
            type="submit"
            className="text-white relative mt-8 cursor-pointer border-b-2 border-emerald-500 py-2">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
