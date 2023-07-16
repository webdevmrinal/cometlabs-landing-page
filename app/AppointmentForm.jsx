"use client";
import React, { useState } from "react";

function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentType: "",
  });
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <article className="w-[95%] lg:max-w-sm px-8 py-6 mx-auto md:pb-12 md:pt-2 bg-[#152f2e] text-white text-center">
      <h2 className="text-3xl font-semibold pt-4 pb-2">
        Schedule an Appointment
      </h2>
      <p className="text-sm py-4 md:px-4">
        Here, let visitors know what will happen when they complete your form.
      </p>

      <from className="text-black" onSubmit={formSubmitHandler}>
        <input
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="First Name*"
        />
        <input
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Last Name*"
        />
        <input
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Email*"
        />
        <input
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Phone Number*"
        />
        <select className="scheduleInput" onChange={inputChangeHandler}>
          <option value={"Type of Appointment"} selected disabled>
            Type of Appointment
          </option>
          <option value={"Option 1"}>Option 1</option>
          <option value={"Option 2"}>Option 2</option>
          <option value={"Option 3"}>Option 3</option>
        </select>
        <button
          type="submit"
          className="uppercase bg-[#00b8bb] text-xl font-semibold w-full py-4 rounded-md"
        >
          Schedule Now
        </button>
      </from>
    </article>
  );
}

export default About;
