import siteSettings from "../settings/site-settings";
const CopyRight = () => {
  return (
    <div>
      <p className="py-5 text-sm text-gray-600">
        Copyright © 2022 {siteSettings.name} All Rights Reserved
      </p>
    </div>
  );
};

export default CopyRight;
