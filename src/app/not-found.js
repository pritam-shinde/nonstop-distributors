import NotFound from "@/components/NotFound";
import ScriptsLoader from "@/components/ScriptsLoader";
import React from "react";

const Error404 = () => {
  return (
    <>
      <NotFound />
      <ScriptsLoader />
    </>
  );
};

export default Error404;
