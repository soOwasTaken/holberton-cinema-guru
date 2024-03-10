import "./App.css";
import ContainedButton from "./components/general/Button";
import StandardTextField from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import { useState } from "react";
import SearchBar from "./components/general/SearchBar";
import Authentication from "./routes/auth/Authentication";
import Header from "./components/navigation/Header";
import SideBar from "./components/navigation/Sidebar";

function App() {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <>
      <Header userUsername="Nathan" />
      <StandardTextField />
      <SelectInput />
      <ContainedButton />
      <SearchBar title={searchTitle} setTitle={setSearchTitle} />
      <Authentication />
      <SideBar />
    </>
  );
}

export default App;
