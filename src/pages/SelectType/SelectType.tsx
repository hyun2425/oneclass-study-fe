import { useNavigate } from "react-router-dom";

const userTypes = [
  {
    label: "원생",
    description: "내 공부/독서 인증하고 성장 기록하기",
    accent: "from-primary to-primary/80",
  },
  {
    label: "학부모",
    description: "우리 아이 학습 현황 확인하고 응원하기",
    accent: "from-secondary to-secondary/80",
  },
  {
    label: "일반",
    description: "성인 스터디·독서 모임 참여하기",
    accent: "from-gray-700 to-gray-900",
  },
];

export default function SelectType() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bgLight flex flex-col items-center px-6 py-12 text-center">
      <div className="w-full max-w-md space-y-2 mb-10">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          Start
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          어떤 사용자이신가요?
        </h1>
        <p className="text-gray-600 text-base">
          선택하신 유형에 맞춰 홈 화면을 디자인해 드릴게요.
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {userTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => navigate("/home")}
            className="relative w-full rounded-3xl bg-white p-[1px] shadow-lg transition active:scale-95"
          >
            <div
              className={`rounded-[26px] bg-gradient-to-r ${type.accent} p-0.5`}
            >
              <div className="rounded-[22px] bg-white px-6 py-5 text-left">
                {/* <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  TYPE
                </p> */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {type.label}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {type.description}
                    </p>
                  </div>
                  {/* <span className="text-gray-400 text-xl">→</span> */}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

