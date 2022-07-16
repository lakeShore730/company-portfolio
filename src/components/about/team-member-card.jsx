import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const TeamMemberCard = (props) => {
  const { name, position, facebook, twitter, linkedIn, image } =
    props?.data || {};

  return (
    <div className="mb-10 w-full max-w-[300px] h-auto mx-auto py-8 px-2 rounded-2xl cursor-pointer bg-[#fcfcfc] hover:bg-indigo-50">
      <div className="flex justify-center">
        <img
          src={image}
          alt="staff"
          className="w-[100px] h-[100px] rounded-full object-cover border"
        />
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-600 text-sm font-semibold">
          {name}
        </p>
        <p className="text-center text-gray-600 text-xs mt-2">{position}</p>
      </div>
      <div className="flex justify-center mt-5">
        <Link to={facebook} className="px-1">
          <FaFacebookSquare size={18} className="text-primary" />
        </Link>
        <Link to={twitter} className="px-1">
          <AiFillTwitterSquare size={18} className="text-primary" />
        </Link>
        <Link to={linkedIn} className="px-1">
          <AiFillLinkedin size={18} className="text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
