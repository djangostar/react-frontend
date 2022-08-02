const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>
        Welcome to Your Game Lister! Follow the instructions to add or delete
        your game!
      </h3>
      <h2>Click on Add Game in the Navigation Bar.</h2>
      <h2>
        If your gaming platform is not included in the dropdown, click on Add
        Platform and enter the name of your platform.
      </h2>
      <h2>
        Once a platform is added, it will redirect you to the Add Game form
        where the platform will now be available in the drop down.
      </h2>
      <h2>
        Once game the game info is entered and you click the "Add Game" button,
        you will be redirected to your display list of added games.
      </h2>
      <h2>
        While in your Display List page there you can set the game to either
        "Not Playing" or "Currently Playing".
      </h2>
      <h2>
        If any game ceases to be in your collection, simply click "Delete Game"
        and Poof! GONE!
      </h2>
      <br />
      <h2>Last but not least, HAVE FUN!</h2>
    </div>
  );
};

export default Home;
