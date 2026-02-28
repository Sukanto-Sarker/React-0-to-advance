import { useState, useEffect } from "react";

export default function ApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        setData(result.slice(0, 5));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-blue-600 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-medium">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        📡 API Data
      </h1>

      <div className="space-y-4">
        {data.map(item => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}