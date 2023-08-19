import React from 'react';

const Resumedoc = () => {
  const openPdfInNewTab = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/sample.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 w-[50%] rounded-lg"
        onClick={openPdfInNewTab}
      >
        Open Resume
      </button>
    </div>
  );
};

export default Resumedoc;
