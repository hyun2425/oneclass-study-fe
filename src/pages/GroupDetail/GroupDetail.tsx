import { useNavigate } from "react-router-dom";

// 프로토타입용 더미 데이터
const topRankers = [
  {
    rank: 1,
    name: "김철수",
    count: 7,
    avatar: "👑",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    rank: 2,
    name: "이영희",
    count: 6,
    avatar: "🥈",
    color: "from-gray-300 to-gray-400",
  },
  {
    rank: 3,
    name: "박민수",
    count: 5,
    avatar: "🥉",
    color: "from-orange-400 to-orange-500",
  },
];

const participants = [
  { name: "최지영", count: 4, avatar: "👤", isMe: false },
  { name: "정수진", count: 3, avatar: "👤", isMe: false },
  { name: "나", count: 2, avatar: "👤", isMe: true },
  { name: "홍길동", count: 1, avatar: "👤", isMe: false },
  { name: "김민지", count: 0, avatar: "👤", isMe: false },
];

const certifications = [
  {
    id: 1,
    userName: "김철수",
    userAvatar: "👑",
    date: "2024-01-15",
    time: "오후 8:30",
    image: "📸",
    text: "오늘도 30분 독서 완료! '생각에 관한 생각' 읽는 중입니다.",
    isCertified: true,
  },
  {
    id: 2,
    userName: "이영희",
    userAvatar: "🥈",
    date: "2024-01-15",
    time: "오후 7:15",
    image: "📸",
    text: "역사책 한 권 읽었어요. 정말 재미있네요!",
    isCertified: true,
  },
  {
    id: 3,
    userName: "박민수",
    userAvatar: "🥉",
    date: "2024-01-15",
    time: "오후 6:00",
    image: "📸",
    text: "소설 읽기 완료! 오늘도 인증합니다.",
    isCertified: true,
  },
  {
    id: 4,
    userName: "최지영",
    userAvatar: "👤",
    date: "2024-01-15",
    time: "오후 5:20",
    image: "📸",
    text: "자기계발서 읽는 중입니다. 좋은 내용이 많아요!",
    isCertified: true,
  },
  {
    id: 5,
    userName: "정수진",
    userAvatar: "👤",
    date: "2024-01-14",
    time: "오후 9:00",
    image: "📸",
    text: "어제 인증 못했는데 오늘은 꼭 했어요!",
    isCertified: true,
  },
];

export default function GroupDetail() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-bgLight text-gray-900">
      <div className="pb-28">
        {/* 헤더 */}
        <header className="px-6 pt-12 pb-6 flex items-center gap-4">
          <button
            onClick={() => navigate("/group")}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition"
          >
            <span className="text-xl">←</span>
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">독서 인증 챌린지</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              매일 30분 독서 인증하기
            </p>
          </div>
        </header>

        <main className="px-6 space-y-6">
          {/* 상위 3명 순위 */}
          <section>
            <h2 className="text-lg font-bold mb-4">인증 순위 TOP 3</h2>
            <div className="flex items-end justify-center gap-3">
              {/* 2위 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${topRankers[1].color} flex items-center justify-center text-2xl mb-2 shadow-md`}
                >
                  {topRankers[1].avatar}
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-md w-20 text-center">
                  <p className="text-xs text-gray-500 mb-1">2위</p>
                  <p className="text-sm font-bold text-gray-900">
                    {topRankers[1].name}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-1">
                    {topRankers[1].count}회
                  </p>
                </div>
              </div>

              {/* 1위 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${topRankers[0].color} flex items-center justify-center text-3xl mb-2 shadow-lg border-4 border-yellow-300`}
                >
                  {topRankers[0].avatar}
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-md w-24 text-center border-2 border-yellow-300">
                  <p className="text-xs text-gray-500 mb-1">1위</p>
                  <p className="text-sm font-bold text-gray-900">
                    {topRankers[0].name}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-1">
                    {topRankers[0].count}회
                  </p>
                </div>
              </div>

              {/* 3위 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${topRankers[2].color} flex items-center justify-center text-2xl mb-2 shadow-md`}
                >
                  {topRankers[2].avatar}
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-md w-20 text-center">
                  <p className="text-xs text-gray-500 mb-1">3위</p>
                  <p className="text-sm font-bold text-gray-900">
                    {topRankers[2].name}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-1">
                    {topRankers[2].count}회
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 경쟁하고 있는 사람 리스트 */}
          <section>
            <h2 className="text-lg font-bold mb-4">전체 참여자</h2>
            <div className="bg-white rounded-3xl shadow-md p-4 space-y-2">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-2xl ${
                    participant.isMe ? "bg-primary/10" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                      {participant.avatar}
                    </div>
                    <div>
                      <p
                        className={`font-medium ${
                          participant.isMe ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {participant.name}
                        {participant.isMe && (
                          <span className="text-xs text-primary ml-1">(나)</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500">
                        인증 {participant.count}회
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-400">
                      {index + 4}위
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 인증 피드 */}
          <section>
            <h2 className="text-lg font-bold mb-4">인증 피드</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <article
                  key={cert.id}
                  className="bg-white rounded-3xl shadow-md p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                      {cert.userAvatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {cert.userName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {cert.date} {cert.time}
                      </p>
                    </div>
                    {cert.isCertified && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">
                        ✓ 인증완료
                      </span>
                    )}
                  </div>

                  {/* 이미지 영역 */}
                  <div className="w-full h-48 bg-gray-100 rounded-2xl mb-3 flex items-center justify-center text-4xl">
                    {cert.image}
                  </div>

                  {/* 텍스트 */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {cert.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* 인증하기 버튼 (오른쪽 하단) */}
      <button
        onClick={() => navigate("/certify")}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold hover:scale-110 active:scale-95 transition-transform z-10"
      >
        +
      </button>
    </div>
  );
}

