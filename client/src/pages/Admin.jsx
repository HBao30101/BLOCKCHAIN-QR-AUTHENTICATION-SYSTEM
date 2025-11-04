
import { useState } from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";
import api from "../api";

const Card = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  background: #fff;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 5px;
  border: none;
  border-radius: 10px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

const QRContainer = styled.div`
  margin-top: 20px;
  display: inline-block;
  text-align: center;
`;

export default function Admin() {
  const [productId, setProductId] = useState("");
  const [hash, setHash] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [message, setMessage] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleAdd = async () => {
    if (!productId || !hash || !createdBy) {
      setMessage("Product ID, Hash và CreatedBy không được để trống");
      return;
    }

    try {
      const payload = { productId, hash, createdBy };
      const res = await api.post("/register", payload);
      setMessage(res.data.message || "Add product success");
      setQrCode(`${productId}|${hash}`);
      setProductId("");
      setHash("");
      setCreatedBy("");
    } catch (err) {
      console.error("Add product error:", err.response || err);
      setMessage("Error adding product");
    }
  };

  return (
    <Card>
      <h2>Admin - Add Product</h2>
      <Input placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <Input placeholder="Hash" value={hash} onChange={(e) => setHash(e.target.value)} />
      <Input placeholder="Created By" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} />
      <div>
        <Button onClick={handleAdd}>Add Product</Button>
      </div>

      {message && <p style={{ fontWeight: "bold", color: "#333", marginTop: "10px" }}>{message}</p>}

      {qrCode && (
        <QRContainer>
          <QRCode value={qrCode} size={200} />
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>{qrCode}</p>
        </QRContainer>
      )}
    </Card>
  );
}
