import React from 'react'

function OptionCard({ info }) {
  return (
    <div className="grid gap-y-2 grid-cols-1 sm:grid-cols-3 shadow-lg bg-blanco h-auto hover:scale-105 duration-500 py-6 rounded-xl place-items-center">

      <div className="col-span-1 pl-2  max-w-[150px] ">
        <img
          src={`./src/assets/${info.src}.png`}
          className="shadow-xl rounded-full m-auto bg-cover"
        />
      </div>

      <div className="col-span-2 flex flex-col justify-between">
        <h2 className="text-center font-bold">{info.title}</h2>
        <div className="flex justify-center pt-3 pb-4">
          <div>
            <button className=" w-15 bg-blue-700 hover:bg-blue-500 hover:text-blue  text-blanco focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2 ">
              {info.button}
            </button>
          </div>
          <div className="pl-4">
            <button className=" w-15 bg-green-700 text-blanco hover:bg-green-500 hover:text-blue focus:outline-none rounded-md font-medium text-sm px-3 shadow-2xl py-2">
              {info.boton}
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default OptionCard;