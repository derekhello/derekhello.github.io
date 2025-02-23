import ProjectCard from "./components/ProjectCard";
import AutoScrolling from "./components/AutoScrolling";
import "./App.css";
import { programmings, volunteers, studyingLogs } from "./data";
import MeA from "./assets/img/MeA.jpg";
import MeB from "./assets/img/MeB.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {

  return (
    <div className="max-w-7xl mx-auto px-2 py-4">
      <div className="flex w-full pt-[10px]">
        <div className="px-[10px] w-full">
          <div className="flex items-center">
            <h1 className="text-6xl font-bold">
              Hi! I am{" "}
              <span className="--text-shadow-black">HelloWorld-er</span> !
            </h1>
          </div>
          <section className="py-[10px] mt-[10px]">
            <div>
              <h2 className="text-4xl font-bold mb-6 py-[20px] flex items-center">
                <span className="w-1 h-8 bg-gradient-to-t from-blue-600 to-blue-400 mr-4"></span>About Me
              </h2>

                <div className="border-2 border-[#E6E6E9] rounded p-4">
                I am a self-taught programmer. I am a student in Hong Kong currently. The website is totally built by myself.
                </div>
            </div>
          </section>
        </div>
      </div>
      <section className="py-[10px] mt-[10px] w-full flex justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1} // 每次完整显示 1 张图片
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 自动播放，3秒间隔
          pagination={{ clickable: true }} // 指示器可点击
          modules={[Autoplay, Pagination]} // 引入模块
          className="w-[1200px] h-[620px]" // Swiper 固定大小
        >
          <SwiperSlide className="flex justify-center items-center w-[1200px] h-[620px]">
            <img src={MeA} className="w-full h-full object-cover rounded" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-[1200px] h-[620px]">
            <img src={MeB} className="w-full h-full object-cover rounded" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="CodingProject" className="py-[10px] px-[10px] mt-[10px]">
        <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px] flex items-center">
          <span className="w-1 h-8 bg-gradient-to-t from-blue-600 to-blue-400 mr-4"></span> Coding Project
        </h2>
        <AutoScrolling
          content={programmings.concat(programmings).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>

      <section id="VolunteerProgram"  className="py-[10px] px-[10px] mt-[10px]">
      <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px] flex items-center">
          <span className="w-1 h-8 bg-gradient-to-t from-blue-600 to-blue-400 mr-4"></span>Volunteer Program
        </h2>
        <AutoScrolling
          content={volunteers.concat(volunteers).concat(volunteers).concat(volunteers).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>

      <section id="StudyingLog" className="py-[10px] px-[10px] mt-[10px]">
      <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px] flex items-center">
          <span className="w-1 h-8 bg-gradient-to-t from-blue-600 to-blue-400 mr-4"></span>Studying Log
        </h2>
        <AutoScrolling
          content={studyingLogs.concat(studyingLogs).concat(studyingLogs).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>
    </div>
  );
}

export default App;
