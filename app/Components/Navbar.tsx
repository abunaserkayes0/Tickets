"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiTargetDummy } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav>
        <GiTargetDummy className="text-3xl text-purple-700"/>
        <h1>Dummy Application</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create</Link>
      </nav>
    </>
  );
};

export default Navbar;
