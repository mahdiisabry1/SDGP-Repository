import React from 'react';
import '../pages/CSS/Certification.css'; // Importing custom CSS styles
import html2pdf from 'html2pdf.js'; // Importing html2pdf library for generating PDFs

const AngularCertification = () => {
  // Function to handle the download certificate button click event
  const downloadCertificate = () => {
    // Getting the certificate element by its id
    const element = document.getElementById('certificate');
    // Options for generating PDF
    const opt = {
      margin: 0,
      filename: 'Angular_certification.pdf', // Name of the generated PDF file
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
       <h1 className="text-3xl font-bold ">Angular Certification</h1>
       {/* Congratulations message */}
       <p className="mb-6 font-bold increased-font-size">Congratulations! </p>
      {/* Certificate container */}
      <div id="certificate" className="certificate">
        {/* Certificate image */}
        <img
          src="\src\assets\images\AngularCertifiacation.jpg"
          alt="Certificate"
          className="certificate-image"
        />
      </div>
      {/* Download button */}
      <button onClick={downloadCertificate} className="download-button">
       Download Certificate
      </button>

    </div>
  );
};

export default AngularCertification;
