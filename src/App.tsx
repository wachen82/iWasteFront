import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { VendorForm } from "./components/vendorForm/VendorForm";
import { WasteTypeForm } from "./components/wasteTypeForm/WasteTypeForm";
import { Header } from "./components/layout/Header";
import { WasteForm } from "./components/wasteForm/wasteForm";
import { Page404 } from "./views/Page404";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/waste" element={<WasteForm />} />
        <Route path="/waste-type" element={<WasteTypeForm />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
