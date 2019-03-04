import { useLoggedState } from "../dist/plugin";
import React from "react";
import { useState } from "react"; // react hooks logger enabled

const Comp = props => {
  const [opened, setOpened] = useLoggedState(false);
  return <div></div>;
};
