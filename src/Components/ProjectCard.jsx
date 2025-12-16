import { Link, useLocation } from "react-router-dom";

export default function ProjectCard({ project, onClick }) {
  return (
    <article
      className="bg-white rounded-2xl shadow hover:shadow-lg shadow-pink-700
      transition overflow-hidden cursor-pointer"
      onClick={() => onClick(project)}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-50 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        <button className="block w-full text-center bg-gray-900 text-white 
         py-2 rounded-md font-semibold hover:bg-pink-700 transition">
          Lihat
        </button>
      </div>
    </article>
  );
}