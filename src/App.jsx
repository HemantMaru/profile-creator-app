import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [Text, setText] = useState("");
  const [ImgUrl, setImgUrl] = useState("");
  const [Role, setRole] = useState("");
  const [Decription, setDecription] = useState("");

  let localdata = JSON.parse(localStorage.getItem("users-item")) || [];
  const [AllUser, setAllUser] = useState(localdata);

  console.log(localdata);
  function handleform(e) {
    e.preventDefault();
    let OldUser = [...AllUser];
    OldUser.push({ Text, ImgUrl, Role, Decription });
    localStorage.setItem("users-item", JSON.stringify(OldUser));
    setAllUser(OldUser);

    setText("");
    setImgUrl("");
    setRole("");
    setDecription("");
  }

  function handledelete(idx) {
    let CopyUser = [...AllUser];
    CopyUser.splice(idx, 1);
    localStorage.setItem("users-item", JSON.stringify(CopyUser));
    setAllUser(CopyUser);
  }
  return (
    <div className="min-h-screen w-full bg-black p-1 pb-10 text-white ">
      <h1 className="text-center text-3xl text-shadow-gray-600 font-extrabold mb-3 mt-3">
        Create Profile
      </h1>
      <form
        onSubmit={function (e) {
          handleform(e);
        }}
        className="flex flex-wrap gap-2"
      >
        <input
          onChange={function (elem) {
            setText(elem.target.value);
          }}
          required
          className="px-4 font-semibold ml-4 py-3 w-full border-2 lg:w-[48%] mt-3 text-4xl outline-0"
          type="text"
          placeholder="Enter name"
          value={Text}
        />
        <input
          onChange={function (elem) {
            setImgUrl(elem.target.value);
          }}
          required
          className="px-4 font-semibold ml-4 py-3 w-full border-2 lg:w-[48%] mt-3 text-4xl outline-0"
          type="text"
          placeholder="Image Url"
          value={ImgUrl}
        />
        <input
          onChange={function (elem) {
            setRole(elem.target.value);
          }}
          required
          className="px-4 font-semibold w-full ml-4 py-3 border-2 lg:w-[48%] mt-3 text-4xl outline-0"
          type="text"
          placeholder="Enter Role"
          value={Role}
        />
        <input
          onChange={function (elem) {
            setDecription(elem.target.value);
          }}
          required
          className="px-4 font-semibold ml-4 w-full py-3 border-2 lg:w-[48%] mt-3 text-4xl outline-0"
          type="text"
          placeholder="Enter Description"
          value={Decription}
        />
        <input
          className="px-4 font-semibold transition bg-emerald-500 hover:bg-emerald-600 ml-4 py-3 border-2 w-[98%] active:scale-99 cursor-pointer mt-3 text-4xl outline-0"
          type="submit"
          placeholder="Enter Description"
        />
      </form>

      <div className="lg:flex gap-10 min-h-96 lg:flex-wrap px-3  lg:px-10 mt-10 ">
        {AllUser.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              idx={idx}
              handledelete={handledelete}
              title={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
