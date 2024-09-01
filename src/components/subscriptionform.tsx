

import React from 'react';

const SubscriptionForm = () => {
  return (
    <form className="flex flex-wrap gap-5 justify-between py-1 pr-1.5 pl-5 mt-16 max-w-full text-lg whitespace-nowrap bg-white rounded-[30px] w-[680px] max-md:mt-10">
      <label htmlFor="emailInput" className="sr-only">Enter your email</label>
      <input
        type="email"
        id="emailInput"
        placeholder="name@email.com"
        className="my-auto text-black text-opacity-20 bg-transparent border-none outline-none"
        aria-label="Enter your email"
      />
      <button type="submit" className="px-7 py-3 text-white bg-black rounded-[30px] max-md:px-5">
        Subscribe
      </button>
    </form>
  );
};

export default SubscriptionForm;
