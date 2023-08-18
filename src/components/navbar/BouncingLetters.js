import React from 'react';

const BouncingLetters = () => {
  return (
    <span className="flex flex-row text-3xl font-bold">
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out">J</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out">a</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out">g</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out">a</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out">d</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out">e</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 hover:text-4xl transition-transform duration-300 ease-in-out">e</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out">s</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out">h</span>
      <span className=" text-green-500  transition-transform duration-300 ease-in-out ">M</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out animate-bounceUp"> a</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out animate-bounceUp ">r</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-red-500 transition-transform duration-300 ease-in-out animate-bounceUp"> i</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out animate-bounceUp ">p</span>
      <span className=" animate-bounceUp hover:text-4xl hover:text-green-500 transition-transform duration-300 ease-in-out animate-bounceUp ">i</span>
    </span>
  );
};

export default BouncingLetters;
