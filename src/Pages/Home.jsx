import { Link, useLocation } from "react-router-dom";
import fotoprofil from'../assets/foto-profil.jpg'


function Home() {
  const location = useLocation();


  return (
      <section className="bg-pink-200 py-16 px-6 pt-28 min-h-screen w-full">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src={fotoprofil}
          alt="foto-profil" className="w-48 h-48 md:w-64 md:h-64 rounded-full
          object-cover shadow-md" />


          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4">Halo, Saya Akmaliyah Hidayatul Jannah</h2>
            <p className="text-gray-600 leading-relaxed">
              Saya adalah seorang mahasiswa Sistem Informasi semester 3 di Universitas Ahmad dahlan. Dengan pengalaman dalam organisasi dan
              kepanitian yang memberikan saya banyak pengalaman khususnya dalam bertanggung jawab, komunikasi dan kerjasama tim. Ketertarikan
              saya pada bidang teknologi, masyarakat, musik dan mencoba hal-hal baru.
            </p>
          </div>
        </div>
      </section>
     
  );
}


export default Home;

