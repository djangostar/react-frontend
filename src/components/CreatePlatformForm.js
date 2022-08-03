import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPlatforms from "./DisplayPlatforms";

const CreatePlatformForm = ({ platforms, onAddPlatform }) => {
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
          <h2>Platform Name :</h2>
          <input
            type="text"
            name="platform_name"
            value={formInfo.platform_name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add Platform" />
      </form>
      <hr />
      {platforms.map((p) => (
        <DisplayPlatforms platform={p} key={`${p.id}`} />
      ))}
    </div>
  );
};

export default CreatePlatformForm;
