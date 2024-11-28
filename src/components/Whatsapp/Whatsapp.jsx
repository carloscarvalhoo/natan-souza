import React, { useState, useEffect } from "react";
import whatsapp from "assets/icons/whatsapp.svg";

const data = {
  number: "5543999228811",
  message: "Olá, vim pelo site e gostaria de agendar uma consulta.",
};

function Whatsapp() {
  return (
    <button className="fixed bottom-4 right-4 z-30 animate-scale-up transition-all duration-500 md:bottom-6 md:right-6">
      <a
        href={`https://api.whatsapp.com/send?phone=${data.number}&text=${encodeURIComponent(data.message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <picture>
          <img src={whatsapp} alt="Whatsapp" className="h-20 w-20" />
        </picture>
      </a>
    </button>
  );
}

export default Whatsapp;
