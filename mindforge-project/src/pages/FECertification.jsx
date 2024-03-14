import React from 'react';
import '../pages/CSS/Certification.css';
import html2pdf from 'html2pdf.js';

const FECertification = () => {
  const downloadCertificate = () => {
    const element = document.getElementById('certificate');
    const opt = {
      margin: 0,
      filename: 'Front-End_certification.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="certificate-container">
      <h1>Front-End Certification</h1>
      <p>Congratulations! </p>
      <div id="certificate" className="certificate">
        <img
          src="\src\assets\images\FECertification.jpg"
          alt="Certificate"
          className="certificate-image"
        />
      </div>
      <button onClick={downloadCertificate} className="download-button">
         Download Certificate
      </button>

    </div>
  );
};

export default FECertification;
