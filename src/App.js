import React from "react";

const api = {
  key: "aca3d6a6afefbfab909dadcfb8482b59",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
