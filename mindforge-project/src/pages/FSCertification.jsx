import React from 'react'; // Import React library
import '../pages/CSS/Certification.css'; // Import CSS file
import html2pdf from 'html2pdf.js'; // Import html2pdf library

// FSCertification component
const FSCertification = () => {
  // Function to handle downloading certificate
  const downloadCertificate = () => {
    const element = document.getElementById('certificate'); // Get certificate element
    const opt = {
      margin: 0,
      filename: 'FullStack_certification.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }; // Options for html2pdf

    html2pdf().set(opt).from(element).save(); // Generate and save PDF from certificate element
  };

  return (
    <div className="certificate-container">
      {/* Certificate title */}
      <h1 className="certificate-title">Full-Stack</h1>
        <p className="certificate-message">Congratulations on completing the React Certification!</p>
{/* Congratulations message */}
      {/* Certificate image container */}
      <div id="certificate" className="certificate">
        <img
          src="\src\assets\images\FSCertification.jpg"
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

export default FSCertification; // Export FSCertification component
