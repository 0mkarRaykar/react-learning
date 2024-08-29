import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="data:image/jpeg;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Anime Banner
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
