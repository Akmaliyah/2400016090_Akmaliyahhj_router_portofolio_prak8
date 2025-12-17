import { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import proyek1 from'../assets/proyek1.png';
import proyek2 from'../assets/proyek2.png';
import proyek3 from'../assets/proyek3.Jpg';

const projects = [
  {
    id: 1,
    title: 'Desain UI/UX Aplikasi',
    image: proyek1,
    description: 'Implementasi tugas Analisis Konsep Sistem Informasi untuk membuat prototype Platform penyedia berbagai informasi lomba dalam satu Platform ',
    detail: 'Projek ini dilakukan secara berkelompok, saat ini projek masih berlangsung dengan menyesuaikan kebutuhan sistem informasi pada aplikasi. '
  },
  {
    id: 2,
    title: 'Website Portofolio',
    image: proyek2,
    description: 'Website portofolio ini dibuat untuk menmpilkan informasi tentang diri yang berisi profil, hobi, dan proyek secara terstruktur, dengan tampilan yang menarik.',
    detail: 'Projek ini dibuat ketika saya melakukan tugas praktikum teknologi web materi css modern.  Tujuan dari pembuatan website portofolio ini adalah sebagai sarana pembelajaran penerapan halaman web responsive dengan CSS modern.'
  },
  {
    id: 3,
    title: 'Training Of Motivation 2026',
    image: proyek3,
    description: 'Sedang dipersiapkan, kegiatan yang ditujukan untuk anak SMA di sekolah asal untuk mengenalkan Para Alumni yang berada di Perguruan Tinggi maupun kedinasan.',
    detail: 'Acara ini rutin diadakan satu tahun sekali yang diselenggarakan oleh para alumni SMAN 1 Kramat 2025. Acara TOM meliputi kegiatan try out gratis bagi siswa-siswa kelas 12, sharing session, parede kampus dan juga expo campus yang menghadirkan para alumni dengan mewakili tiap universitasnya.'
  }

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section  className="py-20 px-6 bg-pink-300 w-full min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-5">Project Saya</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded-2xl max-w-lg w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover mb-4 rounded-lg"
              />
              <p className="text-gray-700">{selectedProject.detail}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
