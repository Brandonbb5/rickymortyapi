import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages?: number | null;
  basePath?: string;
};

export default function Pagination({ currentPage, totalPages, basePath = "" }: PaginationProps) {
  return (
    <div className="mb-6 rounded-md px-5 py-3 flex justify-end items-center w-fit ml-auto">
      <div className="text-sm font-medium mr-6">
        Página <span className="font-semibold text-gray-900">{currentPage}</span>
      </div>
      <div className="flex gap-3">
        {currentPage > 1 && (
          <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Anterior
          </Link>
        )}
        {totalPages && currentPage < totalPages && (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Siguiente
          </Link>
        )}
      </div>
    </div>
  );
}
