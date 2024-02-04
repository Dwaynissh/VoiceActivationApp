import { useState } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/dummy.jpg";

const Main = () => {
  const [toggle2, setToggle2] = useState<boolean>(false);

  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };
  return (
    <div className="w-full h-[calc(100vh-70px)] bg-gray-100 mt-[70px] flex justify-center items-center">
      <div className=" w-[85%] h-full flex justify-center items-center py-4 flex-col">
        <div className="w-[95%] h-[90%]  flex justify-between items-center transition-all duration-300">
          <div className="font-bold text-[22px] text-black">Welcome User</div>

          <div className="transition-all duration-300">
            <div
              className="py-2 px-3 border border-[rgb(1,124,78)] rounded-full text-white cursor-pointer"
              onClick={toggleFunction2}
            >
              <img
                src={avatar}
                alt=""
                className="w-[30px] h-[40px] object-cover"
              />
            </div>
          </div>
          {toggle2 ? (
            <div className="w-[200px] h-[200px] bg-white bxs flex justify-center items-center rounded-xl transition-all duration-300 absolute top-[220px] right-[20px] md:block">
              <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                <div className="h-[100%] w-[90%] flex justify-center items-center flex-col">
                  {" "}
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full min-h-[600px] py-[30px] bg-white shadow-md flex justify-center items-center flex-col">
          <div className="w-full Text-[25px] mb-[20px] flex justify-center items-center font-bold">
            Welcome to Text to Speech
          </div>
          <div className="w-[80%] flex justify-center items-center flex-col mb-5 ">
            <div className="flex gap-3 items-center">
              <div className="text-blue-950">Click Here to speak 🗣️</div>
              <button className="py-2 px-3 bg-blue-900 text-white rounded-md flex items-center">
                <FaMicrophone className="mr-3" />
                Start
              </button>
            </div>
          </div>
          <div className="w-[80%] flex justify-center items-center flex-col ">
            <div className="flex gap-3 items-center">
              <div className="text-blue-950">End speech here 🗣️</div>
              <button className="py-2 px-3 bg-blue-900 text-white rounded-md flex items-center">
                <FaStop className="mr-3" />
                Stop
              </button>
            </div>
          </div>
          <textarea
            className="my-9 bg-gray-100"
            placeholder="View Your transcript"
          ></textarea>
          <div className="w-[80%] flex items-center gap-3 flex-col ">
            <div>Enter Your Emails Here ↓</div>
            <div className="py-4 px-4 rounded-full bg-blue-900 flex justify-center items-center text-white text-[23px]">
              <FaMicrophone className="animate-pulse" />
            </div>
            <input
              type="text"
              className="h-[40px] w-[70%] mb-2 pl-3 rounded-md bg-gray-100 outline-blue-950 outline"
              placeholder="John Doe"
            />
            <button className="py-2 px-4 mb-9 text-white bg-blue-900 rounded-md">
              Submit
            </button>
            <div className="flex gap-5 items-center">
              <div>Send Status</div>
              <div>.............................. 🔃</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>Send Verified</div>
              <div>............................. 🔃</div>
            </div>
          </div>
          <hr className="text-black w-[85%] mb-5" />
          <div className="font-medium mb-3">
            All done? Go back →
            <Link to="/">
              <span className="text-blue-950 ml-2 font-semibold">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
