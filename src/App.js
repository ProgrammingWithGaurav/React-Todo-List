import React from "react";
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { Footer }  from "./components/Footer";

export default function App() {
  let todos = [
    {
        sno: 1,
        title: 'Go to the market',
        desc: 'you need to go to the market to get this job done'
    },
    {
        sno: 1,
        title: 'Go to the market',
        desc: 'you need to go to the market to get this job done'
    },
    {
        sno: 1,
        title: 'Go to the market',
        desc: 'you need to go to the market to get this job done'
    },
    {
        sno: 1,
        title: 'Go to the market',
        desc: 'you need to go to the market to get this job done'
    },
]
  return (
    <>
        <Navbar title="My Todos List" searchBar={false}/>
        <Todos  todos={todos}/>
        <Footer/>
    </>
  );
}
