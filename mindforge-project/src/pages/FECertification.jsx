import React from 'react'; // Import React library
import '../pages/CSS/Certification.css'; // Import CSS file
import html2pdf from 'html2pdf.js'; // Import html2pdf library

// FECertification component
const FECertification = () => {
  // Function to handle downloading certificate
  const downloadCertificate = () => {
    const element = document.getElementById('certificate'); // Get certificate element
    const opt = {
      margin: 0,
      filename: 'Front-End_certification.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }; // Options for html2pdf

    html2pdf().set(opt).from(element).save(); // Generate and save PDF from certificate element
  };

  return (
    <div className="certificate-container">
      {/* Certificate title */}
      <h1 className="text-3xl font-bold ">Front-End Certification</h1>
      {/* Congratulations message */}
      <p className="mb-6 font-bold increased-font-size">Congratulations! </p>
      {/* Certificate image container */}
      <div id="certificate" className="certificate">
        <img
          src="\src\assets\images\FECertification.jpg"
          alt="Certificate"
          className="certificate-image"
        /> {/* Certificate image */}
      </div>
      {/* Download button */}
      <button onClick={downloadCertificate} className="download-button">
         Download Certificate
      </button>

    </div>
  );
};

export default FECertification; // Export FECertification component
