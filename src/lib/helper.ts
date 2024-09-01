import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Helper function to format the deadline
export const handleDateFormatter = (deadline: {
  seconds: number;
  nanos: number;
}): string => {
  const date = new Date(deadline.seconds * 1000); // Convert seconds to milliseconds
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Utility function to strip HTML tags and extract plain text
export const stripHtmlTags = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};



// Text-to-Speech function
export const textToSpeech = (text: string) => {
    const synth = window.speechSynthesis;
  
    if (synth.speaking) {
      synth.cancel(); // Stop speaking if it is currently speaking
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      synth.speak(utterance);
    }
  };
// PDF Download function with HTML rendering and branding
export const downloadAsPdf = (
    title: string,
    type: string,
    lastEdited: {
      seconds: number;
      nanos: number;
    },
    description: string
  ) => {
    const doc = new jsPDF("p", "mm", "a4");
  
    // Add branding to the top-left corner
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("COMPASS", 10, 10);
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(title, 10, 20);
    doc.text(`Type: ${type}`, 10, 30);
    doc.text(`Last Edited: ${handleDateFormatter(lastEdited)}`, 10, 40);
  
    // Create a container element to render HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    tempDiv.style.width = "180mm"; // Set width to fit within the PDF page
    tempDiv.style.fontFamily = "helvetica"; // Optional: ensure consistent font rendering
    tempDiv.style.position = "absolute";
    tempDiv.style.top = "-9999px";
    document.body.appendChild(tempDiv);
  
    html2canvas(tempDiv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      // Calculate image dimensions and position
      const imgWidth = 180; // Fixed width for the image (in mm)
    //   const pageWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale the image height proportionally
  
      let position = 50;
  
      // Add the HTML content image to the PDF
      if (imgHeight + position > doc.internal.pageSize.getHeight()) {
        // If the image is taller than the remaining space, add new pages as needed
        while (position < imgHeight + 50) {
          doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          position += imgHeight;
          if (position < imgHeight + 50) {
            doc.addPage();
          }
        }
      } else {
        // Add the image to the current page
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      }
  
      // Remove the temporary element
      document.body.removeChild(tempDiv);
  
      // Save the PDF with the title as the filename
      doc.save(`${title}-${handleDateFormatter(lastEdited)}.pdf`);
    });
  };