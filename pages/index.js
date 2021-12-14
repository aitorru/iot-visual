import { useState } from "react";
import dynamic from 'next/dynamic';
import InputId from "../components/input";
import Head from 'next/head'
const QueryResults = dynamic(() => import('../components/queryResults'), {loading: () => {return<div>
  <div className='h-8 w-4/5 bg-gray-400 rounded-lg animate-pulse'></div>
  <div className='h-8 w-4/5 bg-gray-400 rounded-lg animate-pulse'></div>
  <div className='h-8 w-4/5 bg-gray-400 rounded-lg animate-pulse'></div>
</div>}});

export default function Home() {

  const [ inputValue, setInputValue ] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="flex flex-col align-middle justify-center items-center">
      <h1 className="text-5xl m-7 font-extrabold">Busqueda de datos de arranque</h1>
      <Head>
        <title>Buscando: {inputValue}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <InputId inputValue={inputValue} setInputValue={handleInputValue} />
      {
        inputValue === "" 
        ?
        null
        :
        <QueryResults id={inputValue} />
      }
    </div>
  )
}
