import React, { SyntheticEvent, useEffect, useState } from "react";
import "./WasteForm.css";
import { apiUrl } from "../../config/api";
import { Btn } from "../common/Btn";
import axios from "axios";
import { SaveModal } from "../common/SaveModal";
import { SpinnerOne } from "../common/Spiner";

export type WasteTypeDTO = {
  id: string;
  name: string;
};

export const WasteForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [types, setTypes] = useState<WasteTypeDTO[] | null>(null);
  const [vendor, setVendor] = useState([
    {
      id: "",
      name: "",
    },
  ]);
  const [form, setForm] = useState({
    quantity: "",
    receivedOn: "",
    vendorId: "",
    wasteTypeId: "",
  });
  useEffect(() => {
    axios.get(`${apiUrl}/app/waste-type`).then((response) => {
      setTypes(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${apiUrl}/app/vendor`).then((response) => {
      setVendor(response.data);
    });
  }, []);

  const saveWaste = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/app/waste`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      const data = await res.json();
      console.log(data);

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
      <>
        <SaveModal />

        {/*<h2>New Waste records was successful added!</h2>*/}
        {/*    <h3>ID: {id}.</h3>*/}
      </>
    );
  }

  return (
    <>
      <form action="" className="add-form" onSubmit={saveWaste}>
        <h1>New Waste Record</h1>

        <label>
          Waste Type: <br />
          <select
            onChange={(e) => {
              const vendorId = e.target.value;
            }}
            required={true}
          >
            <option aria-required>Select...</option>
            {types
              ? types.map((type) => {
                  return (
                    <option key={type.id} value={(form.wasteTypeId = type.id)}>
                      {type.name}
                    </option>
                  );
                })
              : null}
          </select>
        </label>

        <p>
          <label>
            Vendor: <br />
            <select
              onChange={(e) => {
                const vendorId = e.target.value;
              }}
              required={true}
            >
              <option aria-required>Select...</option>
              {vendor
                ? vendor.map((vendor) => {
                    return (
                      <option
                        key={vendor.id}
                        value={(form.vendorId = vendor.id)}
                      >
                        {vendor.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </label>
        </p>

        <p>
          <label>
            Quantity:
            <br />
            <input
              type="number"
              name="quantity"
              min={0}
              required
              value={form.quantity}
              onChange={(e) => updateForm("quantity", Number(e.target.value))}
            />
            <small>Please provide Waste Quantity in tonnes!</small>
          </label>
        </p>

        <p>
          <label>
            ReceivedOn: <br />
            <input
              type="date"
              name="receivedOn"
              value={form.receivedOn}
              required
              max={Date.now()}
              onChange={(e) => updateForm("receivedOn", e.target.value)}
            />
          </label>
        </p>

        <Btn text="Save" />
      </form>
    </>
  );
};
