import React from "react";
import Button from "../components/Button";
import withCounter from "../components/Button/withCounter";
import PostAPI from "../helpers/api/postAPI";

const ButtonWithCounter = withCounter(Button);
function Landing() {
  const postApi = new PostAPI();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonWithCounter>halo</ButtonWithCounter>
      <Button onClick={() => postApi.listPost()}>fetch data</Button>
    </div>
  );
}

export default Landing;
