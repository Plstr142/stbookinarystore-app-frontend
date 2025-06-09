import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { href, Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoSearchOutline, IoTimeSharp } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
// import { HiOutlineHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar_user.png";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { routeDefs } from "../routers/showRoutes";

{/* <aside className="w-64 bg-gray-100 p-4">
<ul>
  {routeDefs.map((r) => (
    <li key={r.path} className="mb-2">
      <NavLink to={r.path} className="block hover:text-blue-500">
        <span className="mr-2">{r.icon}</span>
        {r.label}
      </NavLink>
    </li>
  ))}
</ul>
</aside> */}