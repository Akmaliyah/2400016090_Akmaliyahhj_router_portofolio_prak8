import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-400">

      <main className="flex-grow py-20 px-6 w-full">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-15">
            Hubungi Saya
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
             <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-200">
              <a href="mailto:akmalhidayatuljannah@gmail.com" className="hover:underline">
                akmalhidayatuljannah@gmail.com
               </a>

            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.517 4.55a1 1 0 01-.272 1.027l-2.012 2.012a11.042 11.042 0 005.516 5.516l2.012-2.012a1 1 0 011.027-.272l4.55 1.517a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Whatsapp</h3>
            <p className="text-gray-200">
              <a href="https://wa.me/6285741137259" className="hover:underline">+62 857 4113 7259</a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 22s8-7.582 8-12A8 8 0 104 10c0 4.418 8 12 8 12z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Lokasi</h3>
            <p className="text-gray-200">Wirosaban, Yogyakarta, Indonesia</p>
          </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
