import React from "react";

function index() {
  return (
    <article className="w-[95%] lg:max-w-sm px-4 mx-auto py-8 bg-[#152f2e] text-white text-center">
      <h2 className="text-3xl font-semibold pt-4 pb-2">Schedule an Appointment</h2>
      <p className="text-sm py-4">
        Here, let visitors know what will happen when they complete your form.
      </p>

      <from className="text-black">
        <input className="scheduleInput" placeholder="First Name*"/>
        <input className="scheduleInput" placeholder="Last Name*"/>
        <input className="scheduleInput" placeholder="Email*"/>
        <input className="scheduleInput" placeholder="Phone Number*"/>
        <select  className="scheduleInput">
            <option value={"Type of Appointment"} selected disabled>Type of Appointment</option>
            <option value={"Option 1"}>Option 1</option>
            <option value={"Option 2"}>Option 2</option>
            <option value={"Option 3"}>Option 3</option>
        </select>
        <button className="uppercase bg-[#00b8bb] text-xl font-semibold w-full py-4 rounded-md">Schedule Now</button>
      </from>
    </article>
  );
}

export default index;
