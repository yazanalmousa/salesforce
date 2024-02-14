import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import List from "./components/List";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { RadioHandle } from "./Helper/Context";
import { CheckboxHandle } from "./Helper/Context";

function App() {
  const [checkbox, setCheckbox] = useState("pwc,tariq,omar");
  const [radio, setRadio] = useState("All");

  const [search, setSearch] = useState("pwc");
  const [response, setResponse] = useState([]);
  const setSearchQuery = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const sendQuery = async () => {
    console.log(search, "search");
    try {
      const response = await axios.get(
        `http://10.81.230.210:8000/?query=${search}&date=${radio}&publisher=${checkbox}`
      );
      setResponse(response.data);
      console.log(response.data, "-----------------------Tairq Erro");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://10.81.230.210:8000/?query=${search}&date=${radio}&publisher=${checkbox}`
        );
        setResponse(response.data);
        console.log(response.data, "-----------------------");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Initial data fetch
  }, []);
  return (
    <RadioHandle.Provider value={{ radio, setRadio }}>
      <CheckboxHandle.Provider value={{ checkbox, setCheckbox }}>
        <div className="my-app">
          <div className="nav-container1">
            <NavBar />
          </div>
          <div className="app-body">
            <span className="list">
              <List />
            </span>
            <span className="search">
              <h1>Results: {response.length}</h1>
              <div className="search-wrapper">
                <div className="serach-element">
                  <input
                    className="search-bar"
                    type="text"
                    onChange={setSearchQuery}
                  />
                  <button className="search-button" onClick={sendQuery}>
                    Search
                  </button>
                </div>
              </div>
              <div className="results">
                {response.map((item) => {
                  return (
                    <Card
                      url={item["url"]}
                      name={item["fileName"]}
                      desc={item["Description"]}
                      rate={item["Rate"]}
                    />
                  );
                })}
              </div>
            </span>
          </div>
          <div className="chatbot-area">
            <button className="chatbot-btn">
              <i class="fa-brands fa-rocketchat"></i>
            </button>
          </div>
        </div>
      </CheckboxHandle.Provider>
    </RadioHandle.Provider>
  );
}

export default App;
