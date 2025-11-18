import { useNavigate } from "react-router-dom";

type SettingItem = {
  label: string;
  icon: string;
  hasArrow?: boolean;
  hasToggle?: boolean;
  value?: string;
};

type SettingsSection = {
  title: string;
  items: SettingItem[];
};

const tabs = [
  { key: "home", label: "홈", sub: "" },
  { key: "group", label: "그룹", sub: "" },
  { key: "more", label: "더보기", sub: "" },
];

const settingsSections: SettingsSection[] = [
  {
    title: "계정",
    items: [
      { label: "프로필 수정", icon: "👤", hasArrow: true },
      { label: "비밀번호 변경", icon: "🔒", hasArrow: true },
      { label: "이메일 변경", icon: "📧", hasArrow: true },
    ],
  },
  {
    title: "알림",
    items: [
      { label: "푸시 알림", icon: "🔔", hasToggle: true },
      { label: "이메일 알림", icon: "📬", hasToggle: true },
      { label: "그룹 알림", icon: "👥", hasToggle: true },
    ],
  },
  {
    title: "앱 설정",
    items: [
      { label: "다크 모드", icon: "🌙", hasToggle: true },
      { label: "언어 설정", icon: "🌐", hasArrow: true },
      { label: "폰트 크기", icon: "📝", hasArrow: true },
    ],
  },
  {
    title: "정보",
    items: [
      { label: "이용 약관", icon: "📄", hasArrow: true },
      { label: "개인정보 처리방침", icon: "🔐", hasArrow: true },
      { label: "앱 버전", icon: "ℹ️", value: "1.0.0", hasArrow: false },
    ],
  },
];

export default function More() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-bgLight text-gray-900">
      <div className="pb-28">
        <header className="px-6 pt-12 pb-8">
          <h1 className="text-3xl font-bold">더보기</h1>
          <p className="text-gray-600 mt-2">
            계정 설정과 앱 정보를 관리하세요.
          </p>
        </header>

        {/* 프로필 섹션 */}
        <section className="px-6 mb-6">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                원
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900">원생</h2>
                <p className="text-sm text-gray-500">student@example.com</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                    레벨 5
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">연속 인증 7일</span>
                </div>
              </div>
              <button className="text-primary text-sm font-semibold">
                수정
              </button>
            </div>
          </div>
        </section>

        {/* 설정 섹션 */}
        <main className="px-6 space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-2">
                {section.title}
              </h3>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center justify-between px-5 py-4 ${
                      itemIndex !== section.items.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    } active:bg-gray-50 transition`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-900 font-medium">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.value && (
                        <span className="text-sm text-gray-400">
                          {item.value}
                        </span>
                      )}
                      {item.hasToggle ? (
                        <div className="w-12 h-6 rounded-full bg-primary relative">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                      ) : item.hasArrow ? (
                        <span className="text-gray-400 text-xl">→</span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}

          {/* 로그아웃 버튼 */}
          <section className="pt-4">
            <button className="w-full bg-white rounded-3xl shadow-md px-5 py-4 text-red-500 font-semibold active:bg-gray-50 transition">
              로그아웃
            </button>
          </section>
        </main>
      </div>

      {/* 하단 탭바 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-3 max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const isActive = index === 2; // 더보기 탭이 활성화
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

