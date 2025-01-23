import { useState } from "react";
import heic2any from "heic2any";

const FileUploadWithPreview = () => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const fileType = file.type || ""; // Fallback if MIME type is empty
    const fileName = file.name.toLowerCase(); // Use file name to check the extension
    console.log("File: ", file);
    console.log("File name:", fileName);
    console.log("File type:", fileType);

    if (fileType === "image/heic" || fileName.endsWith(".heic")) {
      try {
        console.log("Received a HEIC file...");
        const convertedBlob = await heic2any({
          blob: file,
          toType: "image/jpeg",
        });
        console.log("Converted to JPEG");
        const previewUrl = URL.createObjectURL(convertedBlob);
        setPreview(previewUrl);
        console.log("Preview added");
      } catch (err) {
        setError("Failed to convert HEIC image. Please try again.");
        console.error(err);
      }
    } else {
      console.log("Non-HEIC file detected");
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <div>
      <h2>File Upload with Preview</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUploadWithPreview;
