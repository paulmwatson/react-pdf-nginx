import React, { useState } from "react";
import { Document, Page, Outline } from "react-pdf";
import { pdfjs } from "react-pdf";
const { PDFDataRangeTransport } = pdfjs;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        onClick={() => {
          setPageNumber(pageNumber -1);
        }}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber +1);
        }}
      >
        Next Page
      </button>
      <Document
        file="somefile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          disableAutoFetch: true,
          disableStream: true,
          httpHeaders: {
            "Accept-Encoding": "identity",
          },
        }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default App;
