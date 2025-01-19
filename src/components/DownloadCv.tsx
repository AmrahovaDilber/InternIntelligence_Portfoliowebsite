export default function DownloadCv() {
    return (
      <div className="flex justify-center py-3">
        <button className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <a
            href="../DilberAmrahovaCV.pdf"
            download
            className="text-white font-semibold"
          >
            Download CV
          </a>
        </button>
      </div>
    );
  }
  