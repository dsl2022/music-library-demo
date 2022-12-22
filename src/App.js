import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Search for Music!");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://itunes.apple.com/search?term=the%20grateful%20dead`
      );
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
    };
    fetchData();
  }, []);
  console.log({ data, message });
  return (
    <div className="App">
      <h1>Music app</h1>
      <SearchBar />
      <Gallery />
    </div>
  );
}

export default App;
