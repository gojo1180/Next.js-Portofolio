import Image from "next/image";
import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText"
import BlurText from "./components/BlurText/BlurText";
import Particles from "./components/Particles/Particles";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import { div } from "framer-motion/client";




export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#F8F9FA] pb-20">
      {/* Partikel Background */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <Particles
          particleColors={['#495057', '#495057']}
          particleCount={700}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md fixed top-0 right-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-[#495057]">MyPortfolio</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="text-gray-300 hover:text-[#495057]">About</a>
            <a href="#dokumentasi" className="text-gray-300 hover:text-[#495057]">Projects</a>
            <a href="#Skills" className="text-gray-300 hover:text-[#495057]">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-[#495057]">Contact</a>
          </div>
        </div>
      </nav>
      {/* Section: About */}
      <div id="about" className="container mx-auto min-h-screen px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center h-full">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="flex flex-col gap-4 max-w-xl">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={2.2}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >

                <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                  <h1 className="text-2xl font-bold text-[#343A40]">I'm ready For</h1>
                  <RotatingText
                    texts={['Frontend Developer', 'Backend Developer', 'Quality Assurance', 'Web Design']}
                    mainClassName="px-3 bg-[#495057] text-[#f8f9fa] overflow-hidden py-2 justify-center rounded-lg inline-flex font-bold"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>

              <div className="flex flex-col items-center md:items-start r md:text-left">
                <SplitText
                  text="Hello, I'm Venu Wicaksono"
                  className="text-4xl md:text-4xl font-semibold text-[#343A40]"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />

                <SplitText
                  text="Full Stack Developer"
                  className="text-3xl md:text-4xl font-semibold text-[#495057] mt-2"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </div>

              <BlurText
                text="Mahasiswa Teknik Informatika dari Politeknik Negeri Jakarta, Memiliki pengalaman dalam mengerjakan berbagai proyek akademik menggunakan Java, Python, serta framework FastAPI. Menguasai pengembangan web baik di sisi frontend maupun backend, serta terbiasa bekerja dengan database. Cepat beradaptasi, mampu bekerja secara individu maupun tim, dan memiliki semangat tinggi untuk terus belajar dan mengembangkan keterampilan di dunia teknologi."
                delay={75}
                animateBy="words"
                direction="top"
                className="text-lg md:text-xl text-[#495057] text-justify"
              />
            </div>
          </div>

          {/* Kanan - Lanyard */}
          <div className="col-span-12 md:col-span-5 flex justify-center items-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      {/* Section: Dokumentasi */}
      <div className="container mx-auto min-h-screen px-4 py-10">
        <div id="dokumentasi" className="flex items-center justify-center mb-10">
          <ScrollFloat
            animationDuration={1.2}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="center center"
            stagger={0.05}
            textClassName="font-bold text-4xl text-[#343A40]"
          >
            Dokumentasi Proyek
          </ScrollFloat>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={2.2}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQHvvywS0jZDCw/feedshare-shrink_2048_1536/B56ZfuC4ooGUA0-/0/1752045424221?e=1755129600&v=beta&t=TVc5zOJTq8d7jO3dMZU0Bx3w8UCpF15xYFjegtjkBs0"
                alt="Projek"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#343A40]">Website Sistem Pendukung Keputusan Pemilihan Makanan</h2>
                <p className="text-[#6c757d] text-justify text-sm mt-2">
                  • Aplikasi ini memberikan rekomendasi makanan yang dipersonalisasi berdasarkan preferensi pengguna dan tujuan kebugaran mereka.
                  Proyek ini mengimplementasikan metode SMART (Simple Multi-Attribute Rating Technique) dalam perhitungannya.
                  Backend menggunakan FastAPI dan frontend dibangun dengan Vue.js.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQFcKjJyL1k2lQ/feedshare-shrink_800/B56ZfwEfxRH8Ag-/0/1752079479626?e=1755129600&v=beta&t=wwbW9FmHflFYCbMaUClQYL-bI5XvWVJBBoudNg5Pwso"
                alt="Projek"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#343A40]">Euphoria Online Tiket</h2>
                <p className="text-[#6c757d] text-justify text-sm mt-2">
                  • sebuah platform modern untuk pemesanan tiket konser secara online. Proyek ini kami kembangkan berdua dengan teknologi FastAPI sebagai backend dan Vue.js sebagai frontend, serta Railway untuk hosting database Cloud SQL-nya!
                  Aplikasi ini memungkinkan pengguna untuk melihat daftar event, memesan tiket, dan mengelola riwayat pembelian secara online dan real-time melalui interface yang cepat dan intuitif.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQFUzSwC4VLC3g/feedshare-shrink_800/B56ZfwtNh_GoAg-/0/1752090075975?e=1755129600&v=beta&t=RwPXkcOzH454rQsD-aXqzq68R8B33JJ2F1lSB1E0wdE"
                alt="Projek"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#343A40]">Manajemen organisasi mahasiswa GroupMind</h2>
                <p className="text-[#6c757d] text-justify text-sm mt-2">
                  •Proyek ini Merancang prototipe sistem manajemen organisasi mahasiswa bernama GroupMind yang bertujuan mempermudah proses pendaftaran anggota,
                  manajemen tugas, dan komunikasi dalam organisasi kampus. Proyek ini dikembangkan secara tim menggunakan metodologi Scrum Agile dan berfokus pada pendekatan desain berbasis pengguna (user-centered design).</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQFydZJl9y8wig/feedshare-shrink_1280/B56ZfwyQKiHUA0-/0/1752091397103?e=1755129600&v=beta&t=9rYTCGcvZn_dRA7dGzL1ZMhQqXvPYvFrvAU4Upn7-zQ"
                alt="Projek"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#343A40]">WarpZone – UI/UX </h2>
                <p className="text-[#6c757d] text-justify text-sm mt-2">
                  • Proyek desain UI/UX untuk WarpZone, sebuah platform top-up game digital yang kami rancang untuk memberikan pengalaman pembelian in-game yang cepat, aman, dan menguntungkan untuk para gamer di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
      <div className="container mx-auto min-h-screen px-4 py-10">
        <div id="Skills" className="flex items-center justify-center mb-10">
          <ScrollFloat
            animationDuration={1.2}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="center center"
            stagger={0.05}
            textClassName="font-bold text-4xl text-[#343A40]"
          >
            Skills
          </ScrollFloat>
        </div>
      </div>

    </div>

  );
}
