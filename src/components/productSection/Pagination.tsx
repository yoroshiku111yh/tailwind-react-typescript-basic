export default function Pagination() {
  return (
    <nav className="pagination">
      <button type="button" className="pagination__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          className="w-4 h-4 stroke-blue-1000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <div className="flex items-center gap-x-1">
        <button
          disabled
          type="button"
          className="pagination__item"
          aria-current="page"
        >
          1
        </button>
        <button type="button" className="pagination__item">
          2
        </button>
        <button type="button" className="pagination__item">
          3
        </button>
        <span className="text-lg font-bold">...</span>
        <button type="button" className="pagination__item">
          8
        </button>
      </div>
      <button type="button" className="pagination__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          className="w-4 h-4 stroke-blue-1000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </nav>
  );
}
