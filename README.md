# 🧾 BLOCKCHAIN QR AUTHENTICATION SYSTEM

A blockchain-based web platform for verifying the authenticity of products and documents using QR codes.  
The system ensures transparency, immutability, and real-time verification through blockchain integration.

---

## 🚀 Overview
Developed a full-stack system that allows **admins to generate secure QR codes** and **users to scan and verify** authenticity using blockchain validation.

🛠 **Technologies**  
React, Node.js, Express, MongoDB, Blockchain (Ethereum/Hyperledger)

---

## ⚙️ Features
- Generate and manage unique QR codes for products/documents  
- Blockchain-based verification (immutable & tamper-proof)  
- Real-time QR scanning and validation (✅ Verified / ❌ Invalid)  
- Admin & User dashboards  
- Secure API for blockchain transaction communication  
- Product & QR history management  

---

## 🧠 Responsibilities
- Analyzed and designed system architecture and blockchain data flow  
- Implemented blockchain-based verification logic for QR generation & validation  
- Developed admin and user interfaces for managing and verifying QR codes  
- Integrated secure REST APIs for blockchain and MongoDB communication  
- Ensured data integrity and anti-counterfeiting measures  

---

## 📂 Project Structure

client/ → React frontend

server/ → Node.js + Express + MongoDB backend

contracts/ → Smart contract (blockchain layer)

---

## 🧪 Demo
🎥 **[Demo Video Here — Coming Soon]**  
🖼️ *(Insert screenshots or GIFs of your application interface here)*
1/ Admin — Enter Verification Information
<img width="954" height="348" alt="{A60FCEFD-3B0B-4937-8D17-150EFEE70B38}" src="https://github.com/user-attachments/assets/7158d0cc-8ecd-4d88-a536-f9c17fa457bb" />

2/ Admin — Verification Details Displayed
<img width="886" height="416" alt="{09BDC414-FA9B-42B3-86E2-25439C87EC63}" src="https://github.com/user-attachments/assets/0efbef09-c549-478c-b2b5-a1bc6968cea5" />

3/ User — Scan QR for Verification
<img width="952" height="381" alt="{D0D4FBDF-7991-4CD5-A8F3-D1044D91DE58}" src="https://github.com/user-attachments/assets/3bee3952-ea0a-4c79-944f-5ced52cf410d" />

4/User — Display Verification Result (Authentic Product)
<img width="957" height="342" alt="{DDD53C72-5FCE-4867-88E2-1C41EFFAF2EF}" src="https://github.com/user-attachments/assets/b174d32b-bb90-4c6d-8277-6ee4353c6132" />

5/User — Display Verification Result (Fake Product from External QR Generator)

<img width="960" height="398" alt="{1F9D7D22-6C0B-49A3-B270-0E29E413AAA4}" src="https://github.com/user-attachments/assets/53843a4c-b29b-4fa7-9b0f-6c2a95dae21c" />
5.1. Use https://www.qr-code-generator.com/ to create example (fake) QR codes for demo/testing purposes.
    a. Fake QR code generated outside the system
<img width="919" height="395" alt="{0F49CDF5-9213-4160-89BB-3EADF5D1633D}" src="https://github.com/user-attachments/assets/aac2f781-513d-4417-aa1a-9c47fcccd648" />
    b.Result:
<img width="960" height="385" alt="{DF038F0C-0A34-46BA-8380-3B942B7BFBA2}" src="https://github.com/user-attachments/assets/302f3330-4b12-45c4-bdd2-681c2b6e529c" />





---

## 💡 How to Run Locally

```bash
# 1️⃣ Clone repository
https://github.com/HBao30101/BLOCKCHAIN-QR-AUTHENTICATION-SYSTEM.git

# 2️⃣ Install dependencies
cd client && npm install
cd ../server && npm install

# 3️⃣ Start backend
npm start

# 4️⃣ Start frontend
npm run dev

🧩 Example API Responses
✅ Add Product
{
  "success": true,
  "product": {
    "productId": "SP997",
    "hash": "abc997",
    "createdBy": "Admin1",
    "timestamp": "2025-11-04T10:39:39.556Z"
  }
}

🔍 Verify Product
{
  "success": true,
  "result": true
}

👨‍💻 Author

Huỳnh Hoài Bảo — Full-stack Developer
📧 Hoaibao30101.@gmail.com

🌐 Portfolio: [Coming Soon]
📍 Vietnam
