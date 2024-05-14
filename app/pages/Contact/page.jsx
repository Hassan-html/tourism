"use client";
import React from "react";
import Banner from "@/app/components/secondaryBanner/Banner";
import { useState } from "react";
import { FaLocationPin, FaMap, FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import "./style.css";
import { Tours } from "@/app/staticdata/data";
import axios from "axios";
import toast from "react-hot-toast";

export default function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [Booking, setBooking] = useState({});
  const [loading, setLoading] = useState(false);

  const handelBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/Booking", { Booking: Booking, Tours: Tours })
      .then((e) => {
        toast.success("Booking submited check your email!");
        alert("We sent you Your Booking confirmation Email !");
        setLoading(false); 
      })
      .catch((err) => {
        toast.error("error in Server please try again");
        setLoading(false);
      });
  };
  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // axios
    //   .post(
    //     "https://formcarry.com/s/XXXXXXX",
    //     {
    //       email: email,
    //       message: message,
    //       phone: phone,
    //       name: name,
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (res.data.code === 200) {
    //       setSubmitted(true);
    //     } else {
    //       setError(res.data.message);
    //     }
    //   });
  }

  return (
    <>
      <section className=" min-h-[400px] ">
        <Banner ForCrumb="Contact" />
        <section className="section-1 px-4">
          <h1 className="secondaryTitle w-fit m-auto">
            provide authentic credentials
          </h1>
          <h2 className="mainTitle w-fit m-auto">Book Now</h2>
        </section>
        <form onSubmit={handelBooking}>
          <div className={`absolute ${loading && "overlay"}`}></div>
          <div className="oneway">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setBooking({ ...Booking, Email: e.target.value });
                }}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="time"
                name="Fligh No"
                id="FlighNo"
                onChange={(e) => {
                  setBooking({ ...Booking, Time: e.target.value });
                }}
                max="20:00"
                min="8:00"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="FlighNo"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select Time
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="Sec"
                id="Sector"
                onChange={(e) => {
                  setBooking({ ...Booking, Name: e.target.value });
                }}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="Sector"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="Date"
                id="Date"
                placeholder="Choose Date"
                onChange={(e) => {
                  setBooking({
                    ...Booking,
                    BookingDate: e.target.value,
                  });
                }}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               
                required
              />
               <label
                htmlFor="Date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select Date
              </label>
            </div>

            <div className="time flex justify-center items-center flex-col">
              <select
                className="text-[14px]"
                onChange={(e) => {
                  setBooking({ ...Booking, Tour: parseInt(e.target.value) });
                }}
                required
              >
                <option value="">Select Tour</option>
                {Tours.map((item) => {
                  return (
                    <option value={item.Id}>
                      {item.Title.substring(0, 80) + "..."}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="Sector"
                  id="Bagge"
                  onChange={(e) => {
                    setBooking({ ...Booking, phone: e.target.value });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Bagge"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select
                  className="text-black"
                  onChange={(e) => {
                    setBooking({ ...Booking, group: parseInt(e.target.value) });
                  }}
                  required
                >
                  <option value="">5 person per Group</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              {Booking.Tour ? (
                <>
                  {Booking.group && (
                    <>
                      <h1 className="p-2 bg-red-700 text-white text-[20px]">
                        {" "}
                        price:{" "}
                        {Tours.map((item) => {
                          if (item.Id === Booking.Tour)
                            return <>{item.Price * Booking.group}$</>;
                        })}
                      </h1>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <button>Book</button>
        </form>
        {/* feed back form */}

        <section className="section-1 px-4">
          <h1 className="secondaryTitle w-fit m-auto">Leave us a message</h1>
          <h2 className="mainTitle w-fit m-auto">Contact Form</h2>
        </section>
        <section className="section-1 min-h-[500px] text-Dark md:grid flex flex-col gap-8 lg:gap-2 justify-center item-center grid-cols-2 m-4">
          <form
            onSubmit={submit}
            className="bg-white flex gap-2 flex-col p-4 justify-center min-w-[400px] max-w-[500px]  justify-self-end rounded-md   hover:drop-shadow-2xl shadow-xl transition-all md:hover:translate-x-[-10px] hover:translate-y-[-10px] "
          >
            <h1 className="text-center tracking-[5px]">Fill out all fields</h1>
            <input
              id="email"
              placeholder="Email"
              className="rounded-md h-10 p-2 border-2 border-Dark border-opacity-25"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="group grid grid-cols-2 gap-1">
              <div className="Input-group">
                <input
                  className="rounded-md w-full h-10 p-2 border-2 border-Dark border-opacity-25"
                  placeholder="Phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="Input-group">
                <input
                  id="email"
                  placeholder="Name"
                  className="rounded-md h-10 p-2 border-2 border-Dark border-opacity-25 w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <textarea
              className="w-full  resize-none rounded-md h-[200px] border-2  border-Dark border-opacity-25 p-2"
              id="message"
              maxLength={100}
              placeholder="100 words"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="bg-Dark hover:bg-opacity-45 text-white h-[50px] rounded-lg"
              type="submit"
            >
              Send
            </button>
          </form>
          <section className="info p-4 text-Dark text-opacity-80 flex flex-col justify-center  gap-4">
            <p className="text-Dark text-opacity-40">Contact Information</p>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nam, est laboriosam quibusdam libero ad, ratione corrupti
              voluptatem illum in provident eos alias accusamus vero atque.
              Perferendis vero quae architecto?
            </p>
            <p className="text-sm flex gap-2">
              <FaLocationPin className="text-primary text-2xl" /> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Provident rerum
              impedit, fuga vero odit quaerat. Culpa repellendus
            </p>
            <p className="text-md flex gap-2">
              <FaPhone className="text-primary text-2xl" /> 00-00-00-00
            </p>
            <p className="text-md flex gap-2">
              <HiMail className="text-primary text-2xl" />{" "}
              info@tourismtojapan.com
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
