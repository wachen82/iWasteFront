import React, { SyntheticEvent, useState } from "react";
import "./WasteTypeForm.css";
import { apiUrl } from "../../config/api";
import { Btn } from "../common/Btn";
import {SaveModal} from "../common/SaveModal";

export const WasteTypeForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    name: "",
    EWC: "",
  });

  const saveWasteType = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/waste-type`, {
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
    return <h2>Trwa dodawanie ogłoszenia...</h2>;
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
    <form action="" className="add-form" onSubmit={saveWasteType}>
      <h1>Create new Waste Type</h1>
      <p>
        <label>
          name: <br />
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
      <p>
        <label>
          EWC Code: <br />
          <input
            type="number"
            name="EWC"
            min={6}
            maxLength={6}
            value={form.EWC}
            onChange={(e) => updateForm("EWC", Number(e.target.value))}
          />
        </label>
      </p>

      <Btn text="Save" />
    </form>
  );
};
