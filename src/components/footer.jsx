import siteSettings from "../settings/site-settings";
import cn from "classnames";

const Footer = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 lg:gap-x-10 mt-10 tracking-wide leading-6",
        className
      )}
    >
      <div>
        <div className="flex">
          <h1 className="text-md font-semibold text-gray-600">
            {siteSettings.name}
          </h1>
        </div>
        <p className="text-gray-600 mt-4 leading-6 text-sm">
          Are you looking for professional advice for your new business. Are you
          looking for professional advice for your new business. Are you looking
          for professional advice for your new business. If yes, you are in
          right place.
        </p>
      </div>

      <div>
        <h1 className="text-md font-semibold text-gray-600">Services</h1>
        <div className="text-gray-600 mt-4 leading-6 text-sm">
          <ul className="list-disc">
            <li>Innovation idea latest business tecnology</li>
            <li> Digital content marketing online clients plateform</li>
            <li> Digital content marketing online clients plateform</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-md font-semibold text-gray-600">Information</h1>
        <div className="mt-4">
          <p>
            <span className="text-primary text-sm font-semibold">Tel</span>
            <span className="ml-3 text-gray-600 text-sm">
              {siteSettings.contact}
            </span>
          </p>
          <p className="mt-3">
            <span className="text-primary text-sm font-semibold">Email</span>
            <span className="ml-3 text-gray-600 text-sm">
              {siteSettings.email}
            </span>
          </p>
          <p className="mt-3">
            <span className="text-primary text-sm font-semibold">Location</span>
            <span className="ml-3 text-gray-600 text-sm">
              {siteSettings.location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
