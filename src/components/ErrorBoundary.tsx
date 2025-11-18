import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen bg-bgLight flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {error.status === 404 ? '404' : error.status}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            {error.status === 404 
              ? '페이지를 찾을 수 없습니다' 
              : '오류가 발생했습니다'}
          </p>
          <p className="text-sm text-gray-500 mb-8">
            {error.statusText || error.data}
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgLight flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">오류</h1>
        <p className="text-lg text-gray-600 mb-8">
          예상치 못한 오류가 발생했습니다
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

