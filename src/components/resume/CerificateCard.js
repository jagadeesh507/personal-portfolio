import React from 'react';

function CertificateCard({ src, title }) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
        <div className="w-full h-full overflow-hidden rounded-lg relative">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 w-full h-full object-cover object-fit group-hover:scale-110 duration-300 cursor-pointer"
          >
            <img
              className="w-full h-full object-cover"
              src={src}
              alt="Certificate"
            />
          </a>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
