const DisplayPlatforms = ({ platform }) => {
  return (
    <div className="container">
      <h3>Platform: {platform.platform_name}</h3>
      <button className="delete-platform">Delete Platform</button>
    </div>
  );
};

export default DisplayPlatforms;
