import { useLocation } from "react-router-dom";
import { studyingLogs } from "./data/index";
import studybanner from "./assets/img/studybanner.jpg";

const StudyingLog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  console.log(title)
  const currentLog = studyingLogs.find((item) => item.title === title);
  console.log(currentLog)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 封面图片 */}
      <div className="relative h-[320px] w-full">
        <div className="absolute bottom-4 left-4 z-10">
          {currentLog.technologies.map((tech) => {
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
        <div className="h-full w-full overflow-hidden rounded-xl shadow-md">
          <img
            src={studybanner}
            className="w-full h-full object-cover"
            alt={currentLog.title}
          />
        </div>
      </div>

      {/* 文章内容 */}
      <div className="mt-6">
        <div className="m-6 flex items-center justify-center gap-3">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {currentLog.title}
          </h1>
        </div>
        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl flex-1">
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {currentLog.text}
          </p>
          <div className="col-span-1 border-t border-gray-200 p-2 mt-4">
            <img
              src={currentLog.firstImg}
              className="w-full object-cover rounded"
              alt={currentLog.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyingLog;
