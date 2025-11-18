import { useNavigate } from "react-router-dom";

export default function CreateGroup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bgLight text-gray-900">
      <header className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/group")}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition"
        >
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-2xl font-bold">그룹 만들기</h1>
      </header>

      <main className="px-6 py-6 space-y-6">
        {/* 그룹 이름 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            그룹 이름
          </label>
          <input
            type="text"
            placeholder="예: 독서 인증 챌린지"
            className="w-full bg-white rounded-2xl px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </section>

        {/* 그룹 설명 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            그룹 설명
          </label>
          <textarea
            placeholder="그룹에 대한 간단한 설명을 입력해주세요."
            rows={4}
            className="w-full bg-white rounded-2xl px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </section>

        {/* 그룹 목표 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            그룹 목표
          </label>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  인증 주기
                </span>
                <select className="text-sm bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>매일</option>
                  <option>주 3회</option>
                  <option>주 5회</option>
                  <option>주 1회</option>
                </select>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  목표 시간
                </span>
                <input
                  type="number"
                  placeholder="30"
                  className="w-20 text-sm bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-right"
                />
                <span className="text-sm text-gray-500 ml-2">분</span>
              </div>
            </div>
          </div>
        </section>

        {/* 그룹 색상 선택 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            그룹 색상
          </label>
          <div className="flex gap-3">
            {[
              "from-blue-500 to-blue-600",
              "from-purple-500 to-purple-600",
              "from-green-500 to-green-600",
              "from-pink-500 to-pink-600",
              "from-orange-500 to-orange-600",
              "from-indigo-500 to-indigo-600",
            ].map((color, index) => (
              <button
                key={index}
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} border-2 border-transparent hover:scale-110 active:scale-95 transition`}
              />
            ))}
          </div>
        </section>

        {/* 공개 설정 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            공개 설정
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-200 cursor-pointer">
              <input
                type="radio"
                name="privacy"
                value="public"
                defaultChecked
                className="w-5 h-5 text-primary focus:ring-primary"
              />
              <div>
                <span className="font-medium text-gray-900">공개 그룹</span>
                <p className="text-xs text-gray-500">
                  누구나 검색하고 참여할 수 있습니다
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-200 cursor-pointer">
              <input
                type="radio"
                name="privacy"
                value="private"
                className="w-5 h-5 text-primary focus:ring-primary"
              />
              <div>
                <span className="font-medium text-gray-900">비공개 그룹</span>
                <p className="text-xs text-gray-500">
                  초대받은 사람만 참여할 수 있습니다
                </p>
              </div>
            </label>
          </div>
        </section>
      </main>

      {/* 생성 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
        <button
          onClick={() => navigate("/group")}
          className="w-full bg-primary text-white text-lg py-4 rounded-2xl font-semibold shadow-md active:scale-95 transition"
        >
          그룹 만들기
        </button>
      </div>
    </div>
  );
}

