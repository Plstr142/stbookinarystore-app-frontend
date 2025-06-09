import React from 'react'
function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">
        Hello Tailwind CSS & ReactJS Vite
      </h1>
      <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <hr className="h-2 w-[700px] bg-gray-400 border-0" />

    </header>
  );
}

export default Header

