import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bgLight text-center px-6">
      {/* <img
        src="/bear-study.png"
        alt="mascot"
        className="w-40 h-40 mb-6"
      /> */}

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        원클래스 Study
      </h1>
      <p className="text-gray-600 mb-6">
        함께 성장하는 공부/독서 커뮤니티
      </p>

      <div className="text-left mb-10 space-y-2 text-gray-700">
        <p>📘 공부/독서 인증하고 레벨 올리기</p>
        <p>🎯 챌린지 달성하고 선물 받기</p>
        <p>🏆 친구들과 랭킹 경쟁하기</p>
      </div>

      <button
        onClick={() => navigate("/select-type")}
        className="bg-primary text-white text-lg py-3 px-24 rounded-full shadow-md active:scale-95 transition"
      >
        시작하기
      </button>
    </div>
  );
}