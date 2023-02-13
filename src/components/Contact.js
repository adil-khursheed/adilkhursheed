import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <div className='max-w-sm mt-4'>
          <h2 className='text-white font-semibold text-2xl uppercase mb-5 md:text-4xl'>Contact Me</h2>
          <p className='text-slate-300 text-sm'>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <form action="" method="post" className='flex flex-col gap-3 max-w-md w-full'>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-emerald-200'
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-emerald-200'
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder='Message'
            className='w-full rounded-sm bg-transparent py-4 px-3 border-b-2 border-slate-600 text-slate-200 outline-emerald-200'
          />
          <button
            type="submit"
            className="text-white mt-6 cursor-pointer block place-content-start"
          >
            Send Message</button>
        </form>
      </div>

    </>
  )
}

export default Contact