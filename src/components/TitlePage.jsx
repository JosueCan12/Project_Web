import React from 'react'
function TitlePage({ label = "h" }) {
  return (
    <div className="mx-auto bg-blanco h-14 text-botones shadow-lg text-center flex justify-center py-3">
      <h1 className="text-2xl font-bold">
        {label}
      </h1>
    </div>
  );
}

export default TitlePage;