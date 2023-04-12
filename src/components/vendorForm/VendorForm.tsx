import React, { SyntheticEvent, useState } from "react";
import "./VendorForm.css";
import { apiUrl } from "../../config/api";
import { Btn } from "../common/Btn";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

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
      const res = await fetch(`${apiUrl}/vendor`, {
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
      <h2>
        Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do servisu pod
        ID: {id}.{" "}
      </h2>
    );
  }

  return (
    <Container fluid>
      <Form>
        <Form.Group className="mb-3 mt-10 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    // <form action="" className="add-form" onSubmit={saveVendor}>
    //   <h1>Create new Vendor</h1>
    //   <p>
    //     <label>
    //       Name: <br />
    //       <input
    //         type="text"
    //         name="name"
    //         required
    //         maxLength={60}
    //         value={form.name}
    //         onChange={(e) => updateForm("name", e.target.value)}
    //       />
    //     </label>
    //   </p>
    //
    //   <Btn text="Save" />
    // </form>
  );
};
