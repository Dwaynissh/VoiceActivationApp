import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-blue-950 shadow-sm fixed top-0">
      <div className="w-[85%] h-[80%] flex justify-center items-center">
        <Link to="/">
          <div className="text-[20px] font-bold text-white">
            Dwayne Voice App
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
