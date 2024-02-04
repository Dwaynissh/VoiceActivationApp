import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { Link } from "react-router-dom";

document.title = "Homepage";
const HomeScreen = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] bg-gray-100 mt-[70px] flex justify-center items-center">
      <div className=" w-[85%] h-full flex justify-center items-center py-4 flex-col">
        <div className="w-full min-h-[500px] bg-white shadow-md flex justify-center items-center flex-col">
          <div className="mb-2 text-[20px] font-semibold">Your Name</div>
          <input
            type="text"
            className="h-[40px] w-[70%] mb-5 pl-3 rounded-md bg-gray-100 outline-blue-950 outline"
            placeholder="John Doe"
          />
          <button className="py-2 px-4 mb-9 text-white bg-blue-900 rounded-md">
            Submit
          </button>
          <div className="font-medium">
            Having problem? Go to →
            <Link to="/mainscreen">
              <span className="text-blue-950 ml-2 font-semibold">
                MainScreen
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
