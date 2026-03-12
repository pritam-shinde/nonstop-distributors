import NotFound from "@/components/NotFound";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import React from "react";

export const generateMetadata = () => {
  return handlerMetaDetails("not-found");
};

const Error404 = () => {
  return (
    <>
      <NotFound />
      <ScriptsLoader />
    </>
  );
};

export default Error404;
