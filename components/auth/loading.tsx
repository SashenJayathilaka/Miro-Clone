"use client";

import { Hourglass } from "react-loader-spinner";
import Motion from "../motion";

type Props = {};

function Loading({}: Props) {
  return (
    <Motion style="h-full w-full flex justify-center items-center">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-Loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </Motion>
  );
}

export default Loading;
