import { useRef, useEffect } from "react";
import jsQR from "jsqr";

export default function QRScanner({ onScan }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        await video.play();
        requestAnimationFrame(tick);
      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    function tick() {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          onScan(code.data);
        }
      }
      requestAnimationFrame(tick);
    }

    startCamera();

    return () => {
      if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [onScan]);

  return (
    <div style={{ textAlign: "center" }}>
      <video ref={videoRef} style={{ width: "300px" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
