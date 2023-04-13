import React, { SyntheticEvent, useState } from "react";
import "./VendorForm.css";
import { apiUrl } from "../../config/api";
import { Btn } from "../common/Btn";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { SaveModal } from "../common/SaveModal";
import Spinner from "react-bootstrap/Spinner";
import { SpinnerOne } from "../common/Spiner";

export const VendorForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    name: "",
  });

  const saveVendor = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/app/vendor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      const data = await res.json();

      setId(data.id);
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };
  if (loading) {
    return (
      <>
        <SpinnerOne />
      </>
    );
  }
  if (id) {
    return (
      <SaveModal />
      // <h2>
      //   Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do servisu pod
      //   ID: {id}.{" "}
      // </h2>
    );
  }

  return (
    <form action="" className="add-form" onSubmit={saveVendor}>
      <h1>Create new Vendor</h1>
      <p>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            required
            maxLength={60}
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </label>
      </p>

      <Btn text="Save" />
    </form>
  );
};
