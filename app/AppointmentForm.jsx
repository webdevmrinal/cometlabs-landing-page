"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "./context/ModalContext";

function AppointmentForm() {
  const { openModal } = useModal();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentType: "Type of Appointment",
  });
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      form.firstName &&
      form.lastName &&
      form.email &&
      form.phone &&
      form.appointmentType != "Type of Appointment"
    )
      openModal();
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

      <form className="text-black" onSubmit={formSubmitHandler}>
        <input
          name="firstName"
          value={form.firstName}
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="First Name*"
          required
        />
        <input
          name="lastName"
          value={form.lastName}
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Last Name*"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Email*"
          required
        />
        <input
          name="phone"
          value={form.phone}
          className="scheduleInput"
          onChange={inputChangeHandler}
          placeholder="Phone Number*"
          required
        />
        <select
          name="appointmentType"
          value={form.appointmentType}
          className="scheduleInput"
          onChange={inputChangeHandler}
        >
          <option value={"Type of Appointment"} disabled>
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
      </form>
    </article>
  );
}

export default AppointmentForm;
