import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfComp = ({ file }) => {
  return (
    <div className="pdf-viewer max-w-full overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfComp;