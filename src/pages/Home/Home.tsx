import { useNavigate } from "react-router-dom";

const quickActions = [
  {
    title: "오늘의 목표",
    description: "독서 30분 · 영어 문제집 2단원",
    badge: "진행 중",
    color: "from-primary to-primary/80",
  },
  {
    title: "이번 주 그룹",
    description: "독서 인증 챌린지 · 참여율 72%",
    badge: "D-2",
    color: "from-secondary to-secondary/80",
  },
  {
    title: "마이 기록",
    description: "지난주 연속 인증 5회",
    badge: "UP",
    color: "from-gray-800 to-gray-900",
  },
];

const tabs = [
  { key: "home", label: "홈", sub: "" },
  { key: "group", label: "그룹", sub: "" },
  { key: "more", label: "더보기", sub: "" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-bgLight text-gray-900">
      <div className="pb-28">
        <header className="px-6 pt-12 pb-8">
          <p className="text-sm text-gray-500 mb-1">오늘도 성장 중</p>
          <h1 className="text-3xl font-bold">원생 대시보드</h1>
          <p className="text-gray-600 mt-2">
            학습 인증, 그룹 활동, 개인정보 설정을 한눈에 확인하세요.
          </p>
        </header>

        <main className="px-6 space-y-6">
          <section className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Progress
                </p>
                <h2 className="text-2xl font-bold mt-1">이번 주 인증</h2>
              </div>
              <span className="text-3xl font-bold text-primary">3/5</span>
            </div>
            <div className="h-3 rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              목표까지 2회 남았어요. 꾸준히 인증해보세요!
            </p>
          </section>

          <section className="space-y-4">
            {quickActions.map((action) => (
              <article
                key={action.title}
                className="rounded-3xl bg-white p-5 shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{action.title}</h3>
                  <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                    {action.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{action.description}</p>
                <div
                  className={`mt-4 h-1.5 rounded-full bg-gradient-to-r ${action.color}`}
                />
              </article>
            ))}
          </section>
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-3 max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const isActive = index === 0;
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

