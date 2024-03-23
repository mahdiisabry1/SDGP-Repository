import React from 'react'; // Import React
import '../pages/CSS/Certification.css'; // Import CSS file for styling
import html2pdf from 'html2pdf.js'; // Import html2pdf library for PDF generation

// ReactCertification component
const ReactCertification = () => {
  // Function to download the certificate as PDF
  const downloadCertificate = () => {
    const element = document.getElementById('certificate'); // Get certificate element by ID
    const opt = {
      margin: 0,
      filename: 'react_certification.pdf', // PDF file name
      image: { type: 'jpeg', quality: 0.98 }, // Image type and quality
      html2canvas: { scale: 2 }, // Scale for HTML to canvas conversion
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // PDF unit, format, and orientation
    };

    html2pdf().set(opt).from(element).save(); // Generate and save PDF from certificate element
  };

  return (
    <div className="certificate-container" style={{ // Certificate container with inline style for background image
      backgroundImage: 'url("https://i.pinimg.com/564x/7d/a1/4b/7da14beee80696ded786f82e0648b11d.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed" // Fix the background image to the viewport
    }}>
      <h1 className="certificate-title">React Certification</h1>
        <p className="certificate-message">Congratulations on completing the React Certification!</p>
{/* Congratulations message */}
      <div id="certificate" className="certificate"> {/* Certificate image container */}
        <img
          src="\src\assets\images\Reactjscertifiaction.jpg" // Image source
          alt="Certificate" // Image alt text
          className="certificate-image" // Image class name
        />
      </div>
      <button onClick={downloadCertificate} className="download-button"> {/* Download certificate button */}
        Download Certificate
      </button>
    </div>
  );
};

export default ReactCertification; // Export ReactCertification component
