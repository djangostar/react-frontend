import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlatformForm = ({ onAddPlatform }) => {
  const [formInfo, setFormData] = useState({
    platform_name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formInfo, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlatform(formInfo);
    navigate("/games/new");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Platform Name :
          <input
            type="text"
            name="platform_name"
            value={formInfo.platform_name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add Platform" />
      </form>
    </div>
  );
};

export default CreatePlatformForm;
