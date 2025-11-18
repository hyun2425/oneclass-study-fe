import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Certify() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [hasImage, setHasImage] = useState(false);

  const handleBack = () => {
    // 이전 페이지로 돌아가기 (그룹 상세 페이지)
    navigate(-1);
  };

  const handleImageClick = () => {
    // 프로토타입: 이미지 선택 시뮬레이션
    setHasImage(true);
  };

  const handleRemoveImage = () => {
    setHasImage(false);
  };

  const handleSubmit = () => {
    // 프로토타입: 인증 완료 후 그룹 상세로 이동
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-bgLight text-gray-900">
      <header className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={handleBack}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition"
        >
          <span className="text-xl">←</span>
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">인증하기</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            오늘의 독서 인증을 올려주세요
          </p>
        </div>
      </header>

      <main className="px-6 py-6 space-y-6">
        {/* 사진 업로드 영역 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            인증 사진
          </label>
          {!hasImage ? (
            <button
              onClick={handleImageClick}
              className="w-full h-64 bg-white rounded-3xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 active:scale-98 transition hover:border-primary"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                📷
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-medium">사진 추가하기</p>
                <p className="text-xs text-gray-500 mt-1">
                  독서 중인 모습이나 책을 찍어주세요
                </p>
              </div>
            </button>
          ) : (
            <div className="relative w-full h-64 bg-gray-100 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-6xl">
                📸
              </div>
              <button
                onClick={handleRemoveImage}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm font-bold hover:bg-black/70 transition"
              >
                ×
              </button>
            </div>
          )}
        </section>

        {/* 텍스트 입력 영역 */}
        <section>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            인증 메시지
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="오늘 읽은 책이나 공부한 내용을 자유롭게 적어주세요..."
            rows={6}
            className="w-full bg-white rounded-3xl px-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
          />
          <p className="text-xs text-gray-500 mt-2 px-1">
            {text.length}/500자
          </p>
        </section>

        {/* 인증 안내 */}
        <section className="bg-blue-50 rounded-3xl p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                인증 팁
              </p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• 독서 중인 모습이나 책 표지를 찍어주세요</li>
                <li>• 오늘 읽은 내용이나 느낀 점을 자유롭게 적어주세요</li>
                <li>• 매일 인증하면 순위가 올라갑니다!</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
        <button
          onClick={handleSubmit}
          disabled={!hasImage || !text.trim()}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition ${
            hasImage && text.trim()
              ? "bg-primary text-white shadow-md active:scale-95"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          인증 완료
        </button>
      </div>
    </div>
  );
}

