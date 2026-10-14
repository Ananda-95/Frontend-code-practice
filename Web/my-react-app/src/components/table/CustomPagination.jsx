
import React, { useState } from "react";

const users = [
  { id: 1, name: "Ananda", email: "ananda@gmail.com", role: "Developer" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com", role: "Developer" },
  { id: 3, name: "Priya", email: "priya@gmail.com", role: "Tester" },
  { id: 4, name: "Kiran", email: "kiran@gmail.com", role: "Developer" },
  { id: 5, name: "Sneha", email: "sneha@gmail.com", role: "Designer" },
  { id: 6, name: "Arun", email: "arun@gmail.com", role: "Developer" },
  { id: 7, name: "Divya", email: "divya@gmail.com", role: "Tester" },
  { id: 8, name: "Manoj", email: "manoj@gmail.com", role: "Developer" },
  { id: 9, name: "Pooja", email: "pooja@gmail.com", role: "Designer" },
  { id: 10, name: "Vijay", email: "vijay@gmail.com", role: "Developer" },
  { id: 11, name: "Ravi", email: "ravi@gmail.com", role: "Tester" },
  { id: 12, name: "Swathi", email: "swathi@gmail.com", role: "Developer" },
  { id: 13, name: "Ajay", email: "ajay@gmail.com", role: "Developer" },
  { id: 14, name: "Meena", email: "meena@gmail.com", role: "Designer" },
  { id: 15, name: "Suresh", email: "suresh@gmail.com", role: "Developer" },
  { id: 16, name: "Deepa", email: "deepa@gmail.com", role: "Tester" },
  { id: 17, name: "Naveen", email: "naveen@gmail.com", role: "Developer" },
  { id: 18, name: "Asha", email: "asha@gmail.com", role: "Designer" },
  { id: 19, name: "Ramesh", email: "ramesh@gmail.com", role: "Developer" },
  { id: 20, name: "Kavya", email: "kavya@gmail.com", role: "Tester" },
];

export default function CustomPagination() {
  // -----------------------------
  // State
  // -----------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength, setPageLength] = useState(5);

  // -----------------------------
  // Pagination Calculations
  // -----------------------------
  const totalPages = Math.ceil(users.length / pageLength);

  const startIndex = (currentPage - 1) * pageLength;

  const currentUsers = users.slice(
    startIndex,
    startIndex + pageLength
  );

  // -----------------------------
  // Event Handlers
  // -----------------------------
  const handlePageLength = (e) => {
    setPageLength(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <div className="w-full space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">
          User List
        </h3>

        {/* Page Size */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="pageLength"
            className="text-sm font-medium text-gray-600"
          >
            Page Size:
          </label>

          <select
            id="pageLength"
            name="pageLength"
            value={pageLength}
            onChange={handlePageLength}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">

        <table className="w-full min-w-[700px] text-left text-sm text-gray-600">

          {/* Table Header */}
          <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-700">
            <tr>
              <th className="px-6 py-4 font-semibold">
                User ID
              </th>

              <th className="px-6 py-4 font-semibold">
                Name
              </th>

              <th className="px-6 py-4 font-semibold">
                Email
              </th>

              <th className="px-6 py-4 font-semibold">
                Role
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.id}
                </td>

                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-4">

          {/* Previous Button */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePagination(currentPage - 1)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              currentPage === 1
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePagination(page)}
                className={`h-9 w-9 rounded-lg text-sm font-medium ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

          </div>

          {/* Next Button */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePagination(currentPage + 1)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Next
          </button>

        </div>
      </div>

      {/* Page Information */}
      <div className="text-center text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </div>

    </div>
  );
}
