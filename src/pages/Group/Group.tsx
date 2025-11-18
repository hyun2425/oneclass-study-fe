import { useNavigate } from "react-router-dom";

// 프로토타입용 더미 데이터
const myGroups = [
  {
    id: 1,
    name: "독서 인증 챌린지",
    description: "매일 30분 독서 인증하기",
    members: 12,
    progress: 72,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "영어 스터디 그룹",
    description: "주 3회 영어 문제집 풀기",
    members: 8,
    progress: 85,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "수학 마스터즈",
    description: "수학 문제 풀이 및 토론",
    members: 15,
    progress: 60,
    color: "from-green-500 to-green-600",
  },
];

const tabs = [
  { key: "home", label: "홈", sub: "" },
  { key: "group", label: "그룹", sub: "" },
  { key: "more", label: "더보기", sub: "" },
];

export default function Group() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-bgLight text-gray-900">
      <div className="pb-28">
        <header className="px-6 pt-12 pb-8">
          <h1 className="text-3xl font-bold">내 그룹</h1>
          <p className="text-gray-600 mt-2">
            참여하고 있는 그룹을 확인하고 관리하세요.
          </p>
        </header>

        <main className="px-6 space-y-4">
          {myGroups.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <p className="text-gray-500 text-center">
                참여 중인 그룹이 없습니다.
                <br />
                그룹을 만들어 시작해보세요!
              </p>
            </div>
          ) : (
            myGroups.map((group) => (
              <article
                key={group.id}
                onClick={() => navigate(`/group/${group.id}`)}
                className="rounded-3xl bg-white p-6 shadow-md border border-gray-100 cursor-pointer active:scale-98 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {group.name}
                    </h3>
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {group.name.charAt(0)}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400">👥</span>
                      <span className="text-sm text-gray-600">
                        {group.members}명
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400">📊</span>
                      <span className="text-sm text-gray-600">
                        참여율 {group.progress}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-2 rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                    style={{ width: `${group.progress}%` }}
                  />
                </div>
              </article>
            ))
          )}
        </main>
      </div>

      {/* 플러스 버튼 (오른쪽 하단) */}
      <button
        onClick={() => navigate("/create-group")}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold hover:scale-110 active:scale-95 transition-transform z-10"
      >
        +
      </button>

      {/* 하단 탭바 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-3 max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const isActive = index === 1; // 그룹 탭이 활성화
            return (
              <button
                key={tab.key}
                onClick={() => {
                  if (tab.key === "home") navigate("/home");
                  else if (tab.key === "group") navigate("/group");
                  else if (tab.key === "more") navigate("/more");
                }}
                className={`flex flex-col items-center py-3 text-sm transition ${
                  isActive ? "text-primary font-semibold" : "text-gray-400"
                }`}
              >
                <span
                  className={`mb-1 h-10 w-10 rounded-2xl ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "bg-gray-100 text-gray-400"
                  } flex items-center justify-center text-base font-bold`}
                >
                  {index + 1}
                </span>
                <span>{tab.label}</span>
                <p className="text-[11px] text-gray-400 mt-0.5">{tab.sub}</p>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

