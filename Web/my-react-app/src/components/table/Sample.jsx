
import { useState, useEffect } from "react";

const Sample = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLength, setPageLength] = useState(5);

    // Fetch API data
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Some issue with API");
            }

            const result = await response.json();
            setUsers(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter users based on search
    const filteredUser = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(
        filteredUser.length / pageLength
    );

    // Calculate starting index
    const startIndex = (currentPage - 1) * pageLength;

    // Get current page data
    const currentUsers = filteredUser.slice(
        startIndex,
        startIndex + pageLength
    );

    // Change items per page
    const setPagination = (e) => {
        setPageLength(Number(e.target.value));
        setCurrentPage(1);
    };

    // Change page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="mx-auto max-w-7xl">

                {/* Main Card */}
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">

                    {/* Header */}
                    <div className="border-b border-gray-200 px-6 py-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    User Management
                                </h1>

                                <p className="mt-1 text-sm text-gray-500">
                                    View and manage registered users
                                </p>
                            </div>

                            <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                                Total Users: {filteredUser.length}
                            </div>

                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 md:flex-row md:items-center md:justify-between">

                        {/* Items per page */}
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="pageLength"
                                className="text-sm font-medium text-gray-600"
                            >
                                Items per page
                            </label>

                            <select
                                id="pageLength"
                                value={pageLength}
                                onChange={setPagination}
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-80">

                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                                    />
                                </svg>
                            </span>

                            <input
                                type="search"
                                value={search}
                                name="search"
                                placeholder="Search by username..."
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />

                        </div>

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">

                        <table className="w-full text-left text-sm text-gray-600">

                            <thead className="bg-gray-800 text-xs uppercase text-white">

                                <tr>
                                    <th className="px-6 py-4 font-semibold">
                                        Name
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Email
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        City
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Phone
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Company
                                    </th>
                                </tr>

                            </thead>

                            <tbody className="divide-y divide-gray-200">

                                {currentUsers.length > 0 ? (

                                    currentUsers.map((user) => (

                                        <tr
                                            key={user.id}
                                            className="transition hover:bg-blue-50"
                                        >

                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                                {user.name}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.email}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.address.city}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.phone}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">

                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                    {user.company.name}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="px-6 py-12 text-center"
                                        >
                                            <div className="flex flex-col items-center">

                                                <svg
                                                    className="mb-3 h-10 w-10 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9.5 9.5h.01M14.5 9.5h.01M8 14s1.5 2 4 2 4-2 4-2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>

                                                <p className="font-medium text-gray-600">
                                                    No users found
                                                </p>

                                                <p className="mt-1 text-sm text-gray-400">
                                                    Try changing your search.
                                                </p>

                                            </div>
                                        </td>
                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* Footer / Pagination */}
                    <div className="flex flex-col gap-4 border-t border-gray-200 bg-gray-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

                        {/* Showing information */}
                        <div className="text-sm text-gray-500">

                            Showing{" "}
                            <span className="font-semibold text-gray-700">
                                {filteredUser.length === 0
                                    ? 0
                                    : startIndex + 1}
                            </span>

                            {" - "}

                            <span className="font-semibold text-gray-700">
                                {Math.min(
                                    startIndex + pageLength,
                                    filteredUser.length
                                )}
                            </span>

                            {" of "}

                            <span className="font-semibold text-gray-700">
                                {filteredUser.length}
                            </span>

                            {" users"}

                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-1">

                            {/* Previous */}
                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Previous
                            </button>

                            {/* Page Numbers */}
                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            ).map((page) => (

                                <button
                                    key={page}
                                    onClick={() =>
                                        handlePageChange(page)
                                    }
                                    className={`min-w-[40px] rounded-lg px-3 py-2 text-sm font-medium transition ${
                                        currentPage === page
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "border border-gray-300 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                                >
                                    {page}
                                </button>

                            ))}

                            {/* Next */}
                            <button
                                disabled={
                                    currentPage === totalPages ||
                                    totalPages === 0
                                }
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Next
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Sample;
