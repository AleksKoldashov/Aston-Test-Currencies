import React, { useEffect, useState } from "react";
import cat from "../assets/img/cat.png";
import "./app.css";
import { useGetCurencuQuery } from "../services/Currens";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface IData {
  id: string;
  min_size: string;
  name: string;
}
export interface IObj {
  data: IData[];
}
export default function App() {
  const { data, error, isLoading, isError } = useGetCurencuQuery("");
  const [value, setValue] = useState<string>("Russian Ruble");

  console.log(data?.data);
  console.log(error);

  const handelChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    const nameError = error as FetchBaseQueryError;
    return <div>{nameError.status}</div>;
  }
  return (
    <div className="app">
      <div className="content">
        <div className="left">
          <div className="header">
            <div className="text1">CAT</div>
            <div className="text2">
              currencies <br />
              academic <br />
              terms
            </div>
          </div>
          <select onChange={handelChange} name="select" title="v">
            {data?.data.map((currenc) => (
              <>
                <option value={currenc.name} selected={currenc.id === "RUB"}>
                  {currenc.id}
                </option>
              </>
            ))}
          </select>
        </div>
        <img src={cat} alt="cat" />
      </div>

      <footer>
        <>{value}</>
      </footer>
    </div>
  );
}
