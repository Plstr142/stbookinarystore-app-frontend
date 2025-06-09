import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[50vh] text-center">
      <div>
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <p className="text-gray-400 mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;