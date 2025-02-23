import { useLocation } from "react-router-dom";
import { programmings } from "./data/index";
import codebanner from "./assets/img/codebanner.jpg";

const Programming = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const currentItem = programmings.find((item) => item.title === title);

  const downloadFile = (name) => {
    const link = document.createElement("a");
    link.href = `/code/${name}`; // 通过 public 目录访问文件
    link.download = name; // 设置文件下载后的名字
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[320px] w-full">
        <div className="h-full w-full overflow-hidden rounded-xl shadow-md">
          <img
            src={codebanner}
            className="w-full h-full object-cover"
            alt={currentItem.title}
          />
        </div>
      </div>
      <div className="mt-4 flex-1 grid grid-cols-3 gap-4">
        <div className=" p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl col-span-2 py-4">
          <div className="flex align-middle items-center">
          <h1 className="text-3xl font-bold">{currentItem.title}</h1>
          <div className="ml-4 z-10">
          {currentItem.technologies.map((tech) => {
            return (
              <span
                key={tech}
                className="px-3 py-1.5 bg-sky-400 backdrop-blur-sm text-white text-sm font-medium rounded-lg shadow-lg"
              >
                {tech}
              </span>
            );
          })}
        </div>
          </div>
          
          <div className="mt-4">
            <video
              src={currentItem.video}
              controls
              loop
              preload="auto"
              width="100%" // 设置宽度为 100%，也可以根据需要自定义
              height="auto" // 保持视频的纵横比
            ></video>
          </div>
          {
            currentItem.code && <div className="my-6">
            <button
              onClick={() => downloadFile(currentItem.code)}
              className="flex items-center bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-slate-700 transition ease-in-out duration-300 hover:cursor-pointer"
            >
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M774.5 896h-525c-67 0-121.5-52.2-121.5-116.3V704c0-26.5 21.5-48 48-48s48 21.5 48 48v75.7c0 11 11.7 20.3 25.5 20.3h525c13.8 0 25.5-9.3 25.5-20.3V704c0-26.5 21.5-48 48-48s48 21.5 48 48v75.7c0 64.1-54.5 116.3-121.5 116.3zM512 128c-26.5 0-48 21.5-48 48v432c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M628.3 473.9c-12.3 0-24.6 4.7-33.9 14.1L512 570.3 429.7 488c-18.8-18.8-49.1-18.8-67.9 0s-18.8 49.1 0 67.9l116.3 116.3c18.8 18.8 49.1 18.8 67.9 0l116.3-116.3c18.8-18.8 18.8-49.1 0-67.9-9.5-9.4-21.8-14.1-34-14.1z"
                  fill="#ffffff"
                ></path>
              </svg>
              <span className="mx-2"> <span className="mr-2">Download the Source Code</span> ({ currentItem.code})</span>
            </button>
          </div>
          }
          
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
          <h1 className="text-3xl font-bold">Introduction</h1>
          <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {currentItem.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
