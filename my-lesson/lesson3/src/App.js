import React, {useState} from "react";
import HooksPage from "./pages/HooksPage";
import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";

export default function App(props) {
  const [state, setState] = useState(1);
  return (
    <div>
      {/* <button onClick={() => setState(state + 1)}>add : {state}</button> */}
      {/* <HooksPage /> */}
      {/* <ReactReduxPage /> */}
      <ReactReduxHookPage />
    </div>
  );
}
