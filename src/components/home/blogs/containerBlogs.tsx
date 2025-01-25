import React from "react";
import Image from "next/image";
import DummyImage from "@/assets/sample1.png";
const blogs = [
  {
    id: 1,
    title: "Sekolah XYZ Raih Penghargaan Sekolah Ramah Anak",
    content: "Sekolah XYZ dinobatkan sebagai Sekolah Ramah Anak tingkat nasional berkat inovasinya dalam menciptakan lingkungan belajar yang aman dan nyaman.",
    image: "https://source.unsplash.com/random/300x200/?school,award", // Gambar dari Unsplash
  },
  {
    id: 2,
    title: "Penerapan Kurikulum Merdeka Belajar di Sekolah ABC",
    content: "Sekolah ABC mulai menerapkan Kurikulum Merdeka Belajar yang memberikan fleksibilitas bagi siswa untuk mengeksplorasi minat mereka.",
    image: "https://source.unsplash.com/random/300x200/?students,learning", // Gambar dari Unsplash
  },
  {
    id: 3,
    title: "Lomba Sains Nasional: Siswa Sekolah DEF Raih Medali Emas",
    content: "Siswa Sekolah DEF berhasil meraih medali emas pada ajang Lomba Sains Nasional berkat penemuan inovatifnya di bidang teknologi lingkungan.",
    image: "https://source.unsplash.com/random/300x200/?science,competition", // Gambar dari Unsplash
  },
  {
    id: 4,
    title: "Pentas Seni Sekolah GHI Sukses Dihadiri Ribuan Penonton",
    content: "Pentas seni tahunan Sekolah GHI tahun ini sukses besar dengan menampilkan pertunjukan dari berbagai ekstrakurikuler.",
    image: "https://source.unsplash.com/random/300x200/?art,school", // Gambar dari Unsplash
  },
  {
    id: 5,
    title: "Sekolah JKL Luncurkan Program Digitalisasi Pendidikan",
    content: "Sekolah JKL resmi meluncurkan program digitalisasi pendidikan untuk meningkatkan keterampilan teknologi siswa.",
    image: "https://source.unsplash.com/random/300x200/?technology,education", // Gambar dari Unsplash
  },
  {
    id: 6,
    title: "Bakti Sosial Sekolah MNO untuk Masyarakat Sekitar",
    content: "Siswa dan guru Sekolah MNO mengadakan bakti sosial dengan membagikan bantuan sembako dan layanan kesehatan gratis.",
    image: "https://source.unsplash.com/random/300x200/?community,help", // Gambar dari Unsplash
  },
];

const ContainerBlogs: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-10 mb-5 text-center">Tazakka Berita</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 bg-gray-100">
        {blogs.map((blog) => (
          <div key={blog.id} className="overflow-hidden group">
            <div className="relative w-full h-52 rounded-lg overflow-hidden">
              <Image src={DummyImage} alt={blog.title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContainerBlogs;
