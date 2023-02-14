import React, { useState } from 'react'

const Contact = () => {

  const [formState, setFormState] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      SecureToken: '57b92cfd-664f-47a5-9279-8236ec06d655',
      To: 'adilkhursheed60@gmail.com',
      From: formState.email,
      Subject: "Mail From Personal Portfolio Website",
      Body: formState.message
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("Email sent successfully!"))
    }
    setFormState('')
  }

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section name='contact' className='flex flex-col justify-between gap-8 md:flex-row mb-24'>
        <div className='max-w-sm mt-4'>
          <h2 className='text-white font-semibold text-2xl uppercase mb-5 md:text-4xl'>Contact Me</h2>
          <p className='text-slate-300 text-sm'>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='flex flex-col gap-3 max-w-md w-full'>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none'
            onChange={changeHandler}
            value={formState.name || ''}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none'
              onChange={changeHandler}
              value={formState.email || ''}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder='Message'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-none'
              onChange={changeHandler}
              value={formState.message || ''}
          />
         </div>
          <button
            type="submit"
            className="text-white relative mt-8 cursor-pointer border-b-2 border-emerald-500 py-2"
          >
            Send Message
          </button>
        </form>
      </section>

    </>
  )
}

export default Contact