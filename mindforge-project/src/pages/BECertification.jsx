import React from 'react';
import '../pages/CSS/Certification.css'; // Importing custom CSS styles
import html2pdf from 'html2pdf.js'; // Importing html2pdf library for generating PDFs

// Functional component for Back-End Certification
const BECertification = () => {
  // Function to handle downloading the certificate as PDF
  const downloadCertificate = () => {
    // Getting the certificate element by its id
    const element = document.getElementById('certificate');
    // Options for generating PDF
    const opt = {
      margin: 0,
      filename: 'Back-End_certification.pdf', // Name of the generated PDF file
      image: { type: 'jpeg', quality: 0.98 }, // Image options
      html2canvas: { scale: 2 }, // html2canvas options
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // jsPDF options
    };

    // Generating PDF from the certificate element and saving it
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="certificate-container">
      {/* Title */}
      <h1 className="certificate-title">Back-End Certification</h1>
        <p className="certificate-message">Congratulations on completing the React Certification!</p>
{/* Congratulations message */}
      {/* Certificate image container */}
      <div id="certificate" className="certificate">
        {/* Certificate image */}
        <img
          src="\src\assets\images\BECertification.jpg"
          alt="Certificate"
          className="certificate-image"
        />
      </div>
      {/* Button to download certificate */}
      <button onClick={downloadCertificate} className="download-button">
       Download Certificate
      </button>
    </div>
  );
};

export default BECertification;
