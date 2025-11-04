// // import { useState } from "react";
// // import QRScanner from "../components/QRScanner";
// // import { Card } from "../components/Card";
// // import api from "../api";

// // export default function User() {
// //   const [scanResult, setScanResult] = useState(null);
// //   const [verifiedBy, setVerifiedBy] = useState("");
// //   const [verification, setVerification] = useState(null);

// //   const handleScan = (scannedData) => {
// //     if (!scanResult) { // chỉ set lần đầu
// //       setScanResult(scannedData);
// //       setVerification(null); // reset trạng thái verify
// //     }
// //   };

// //   const handleVerify = async () => {
// //     if (!scanResult) {
// //       setVerification({ success: false, message: "No QR scanned" });
// //       return;
// //     }

// //     const [productId, hash] = scanResult.split("|");
// //     if (!productId || !hash) {
// //       setVerification({ success: false, message: "Invalid QR format" });
// //       return;
// //     }

// //     if (!verifiedBy) {
// //       setVerification({ success: false, message: "Enter your name to verify" });
// //       return;
// //     }

// //     try {
// //       const payload = { productId, hash, verifiedBy };
// //       console.log("Sending verify request:", payload);
// //       const res = await api.post("/verify", payload);
// //       console.log("Verify response:", res.data);
// //       setVerification(res.data); // { success: true/false, message: ... }
// //     } catch (err) {
// //       console.error("Verify error:", err.response || err);
// //       setVerification({ success: false, message: "Verification failed" });
// //     }
// //   };

// //   const handleReset = () => {
// //     setScanResult(null);
// //     setVerifiedBy("");
// //     setVerification(null);
// //   };

// //   return (
// //     <Card>
// //       <h2>User - Scan QR</h2>
// //       {!scanResult && <QRScanner onScan={handleScan} />}

// //       {scanResult && (
// //         <div style={{ marginTop: "10px" }}>
// //           <p>Scanned: {scanResult}</p>
// //           <input
// //             placeholder="Your name"
// //             value={verifiedBy}
// //             onChange={(e) => setVerifiedBy(e.target.value)}
// //           />
// //           <button onClick={handleVerify}>Verify</button>
// //           <button onClick={handleReset} style={{ marginLeft: "10px" }}>Scan Again</button>
// //         </div>
// //       )}

// //       {verification && (
// //         <p
// //           style={{
// //             color: verification.success ? "green" : "red",
// //             fontWeight: "bold",
// //             marginTop: "10px",
// //           }}
// //         >
// //           {verification.message}
// //         </p>
// //       )}
// //     </Card>
// //   );
// // }

// import { useState, useRef } from "react";
// import QRScanner from "../components/QRScanner";
// import { Card } from "../components/Card";
// import api from "../api";

// export default function User() {
//   const [scanResult, setScanResult] = useState(null);
//   const [verifiedBy, setVerifiedBy] = useState("");
//   const [message, setMessage] = useState("");
//   const scannedRef = useRef(false); // flag để chỉ scan 1 lần

//   const handleScan = (scannedData) => {
//     if (!scannedRef.current) {
//       scannedRef.current = true; // đánh dấu đã scan
//       setScanResult(scannedData.trim());
//       setMessage("");
//     }
//   };

//   const handleVerify = async () => {
//     if (!scanResult) return setMessage("Chưa scan QR ❌");
//     if (!verifiedBy.trim()) return setMessage("Nhập tên để verify ❌");

//     const [productId, hash] = scanResult.split("|").map((s) => s.trim());
//     if (!productId || !hash) return setMessage("QR format không hợp lệ ❌");

//     try {
//       const payload = { productId, hash, verifiedBy };
//       console.log("Sending verify request:", payload);
//       const res = await api.post("/verify", payload);
//       console.log("Backend response:", res.data);

//       setMessage(res.data.result ? "Sản phẩm thật ✅" : "Sản phẩm giả ❌");
//     } catch {
//       setMessage("Verify thất bại ❌");
//     }
//   };

//   const handleReset = () => {
//     setScanResult(null);
//     setVerifiedBy("");
//     setMessage("");
//     scannedRef.current = false; // reset flag để scan lại
//   };

//   return (
//     <Card>
//       <h2>User - Scan QR</h2>

//       {!scanResult && <QRScanner onScan={handleScan} />}

//       {scanResult && (
//         <div style={{ marginTop: "10px" }}>
//           <p>Scanned: {scanResult}</p>
//           <input
//             placeholder="Tên bạn"
//             value={verifiedBy}
//             onChange={(e) => setVerifiedBy(e.target.value)}
//           />
//           <button onClick={handleVerify}>Verify</button>
//           <button onClick={handleReset} style={{ marginLeft: "10px" }}>
//             Scan lại
//           </button>
//         </div>
//       )}

//       {message && (
//         <p
//           style={{
//             color: message.includes("thật") ? "green" : "red",
//             fontWeight: "bold",
//             marginTop: "10px",
//           }}
//         >
//           {message}
//         </p>
//       )}
//     </Card>
//   );
// }

import { useState, useRef } from "react";
import QRScanner from "../components/QRScanner";
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
  background-color: #2196f3;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #1976d2;
  }
`;

export default function User() {
  const [scanResult, setScanResult] = useState(null);
  const [verifiedBy, setVerifiedBy] = useState("");
  const [message, setMessage] = useState("");
  const scannedRef = useRef(false);

  const handleScan = (scannedData) => {
    if (!scannedRef.current) {
      scannedRef.current = true;
      setScanResult(scannedData.trim());
      setMessage("");
    }
  };

  const handleVerify = async () => {
    if (!scanResult) return setMessage("Chưa scan QR ❌");
    if (!verifiedBy.trim()) return setMessage("Nhập tên để verify ❌");

    const [productId, hash] = scanResult.split("|").map((s) => s.trim());
    if (!productId || !hash) return setMessage("QR format không hợp lệ ❌");

    try {
      const payload = { productId, hash, verifiedBy };
      console.log("Sending verify request:", payload);
      const res = await api.post("/verify", payload);
      console.log("Backend response:", res.data);

      setMessage(res.data.result ? "Sản phẩm thật ✅" : "Sản phẩm giả ❌");
    } catch {
      setMessage("Verify thất bại ❌");
    }
  };

  const handleReset = () => {
    setScanResult(null);
    setVerifiedBy("");
    setMessage("");
    scannedRef.current = false;
  };

  return (
    <Card>
      <h2>User - Scan QR</h2>

      {!scanResult && <QRScanner onScan={handleScan} />}

      {scanResult && (
        <div style={{ marginTop: "10px" }}>
          <p>Scanned: {scanResult}</p>
          <Input
            placeholder="Tên bạn"
            value={verifiedBy}
            onChange={(e) => setVerifiedBy(e.target.value)}
          />
          <div>
            <Button onClick={handleVerify}>Verify</Button>
            <Button onClick={handleReset} style={{ backgroundColor: "#f44336" }}>
              Scan lại
            </Button>
          </div>
        </div>
      )}

      {message && (
        <p
          style={{
            color: message.includes("thật") ? "green" : "red",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {message}
        </p>
      )}
    </Card>
  );
}
