import React from "react";
import ContextPage from "./pages/Context/ContextPage";
import HocPage from "./pages/Hoc/HocPage";
import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import DialogPage from "./pages/DialogPage";

export default function App(props) {
  return (
    <div>
      {/* <ContextPage /> */}
      {/* <HocPage /> */}
      {/* <AntdFormPage /> */}
      <MyRCFieldForm />
      {/* <DialogPage /> */}
    </div>
  );
}
