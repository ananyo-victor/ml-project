import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function ImagePage() {
  const [prediction, setPrediction] = useState(null);
  const videoRef = useRef(null);
  const [isWebcamEnabled, setWebcamEnabled] = useState(false);
  const [useBackCamera, setUseBackCamera] = useState(false); // Track which camera to use
  let predictionInterval = null;

  const enableWebcam = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
          video: {
            facingMode: useBackCamera ? { exact: "environment" } : "user", // Switch between cameras
          },
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setWebcamEnabled(true);
          startPrediction();
        }
      } else {
        alert("Webcam is not supported in your browser.");
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
      alert(
        "Unable to access the camera. Please check your permissions or device capabilities."
      );
    }
  };
  useEffect(() => {
    return () => {
      stopWebcam();  // Cleanup the webcam stream and interval on unmount
    };
  }, []);

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null; // Clear the video source
    }
    setWebcamEnabled(false);
    setPrediction(null); // Clear any previous predictions
    clearInterval(predictionInterval); // Stop the prediction loop
  };

  const captureFrame = async () => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (videoRef.current) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const base64Image = canvas.toDataURL("image/jpeg");

        const response = await axios.post("https://ml-project-backend-v8ht.onrender.com/predict", {
          frame: base64Image,
        });

        setPrediction(response.data.prediction);
        console.log("Prediction:", response.data.prediction);
      }
    } catch (error) {
      console.error("Error sending frame to backend:", error);
    }
  };

  const startPrediction = () => {
    predictionInterval = setInterval(() => {
      if (videoRef.current?.srcObject) {
        captureFrame();
      }
    }, 1000);
  };

  const switchCamera = () => {
    stopWebcam(); // Stop the current webcam stream
    setUseBackCamera((prev) => !prev); // Toggle between front and back camera
  };

  

  return (
    <div className="flex flex-col bg-gray-800 w-screen h-screen py-20 px-10 items-center justify-evenly">
      <h1 className="text-3xl font-semibold text-white">Image Detection</h1>

      <div className="flex space-x-3 pt-4">
        <button
          className="px-3 py-2 bg-gray-300 rounded-xl hover:bg-gray-600 hover:text-white hover:font-semibold"
          onClick={enableWebcam}
          disabled={isWebcamEnabled}
        >
          Enable Webcam
        </button>
        <button
          className="px-3 py-2 bg-gray-300 rounded-xl hover:bg-gray-600 hover:text-white hover:font-semibold"
          onClick={stopWebcam}
          disabled={!isWebcamEnabled}
        >
          Stop Webcam
        </button>
        <button
          className="px-3 py-2 bg-gray-300 rounded-xl hover:bg-gray-600 hover:text-white hover:font-semibold"
          onClick={switchCamera}
          disabled={!isWebcamEnabled}
        >
          Switch Camera
        </button>
      </div>

      <div className="">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-[480px] h-[360px] border border-gray-500 rounded-lg"
        />
      </div>

      {prediction && (
        <div className="p-5">
          <h2 className="text-white font-semibold">
            Prediction:{" "}
            <span className="text-yellow-400 font-bold text-lg">
              {prediction}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default ImagePage;
