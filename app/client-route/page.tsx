"use client";
import { serverSideFunction } from "../utils/server-utils";
export default function ClientRoutePage() {
  const result = serverSideFunction();
  return <h1>Client Route {result} </h1>;
}


//to prevent using seve code in client component use sever-only package