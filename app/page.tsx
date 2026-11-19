"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    openButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isSidebarOpen) return;

    sidebarRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSidebar();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements =
          sidebarRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
          event.preventDefault();
          sidebarRef.current?.focus();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-white">
      <nav aria-label="Main navigation">
        <button
          ref={openButtonRef}
          type="button"
          className="ms-3 mt-3 inline-flex rounded-lg border border-transparent bg-white p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:hidden"
          aria-controls="logo-sidebar"
          aria-expanded={isSidebarOpen}
          aria-label="Open sidebar"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>

        {isSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/50 sm:hidden"
            tabIndex={-1}
            aria-label="Close sidebar"
            onClick={closeSidebar}
          />
        )}

        <aside
          ref={sidebarRef}
          id="logo-sidebar"
          className={`fixed left-0 top-0 z-40 h-full w-64 transition-transform ${
            isSidebarOpen
              ? "visible translate-x-0"
              : "invisible -translate-x-full sm:visible sm:translate-x-0"
          }`}
          aria-label="Sidebar"
          tabIndex={-1}
        >
          <div className="h-full overflow-y-auto border-r border-gray-200 bg-white px-3 py-4">
            <div className="mb-5 flex items-center justify-between ps-2.5">
            
                <span className="self-center whitespace-nowrap text-lg font-semibold text-gray-900">
                  My Website
                </span>
          
              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 sm:hidden"
                aria-label="Close sidebar"
                onClick={closeSidebar}
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              </button>
            </div>

            <ul className="space-y-2 font-medium">

               <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5 transition duration-75 group-hover:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
                    />
                  </svg>
                  <span className="ms-3">dashboard</span>
                </a>
              </li>

              
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5 transition duration-75 group-hover:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Users</span>
                </a>
              </li>

              
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5 transition duration-75 group-hover:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 10V6a3 3 0 0 1 6 0v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">products</span>
                </a>
              </li>

               <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5 transition duration-75 group-hover:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 0 0-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 0 0-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.827-3.31 2.37-2.37.996.608 2.296.07 2.573-1.065Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span className="ms-3">setting</span>
                </a>
              </li>


              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5 transition duration-75 group-hover:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Sign In</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </nav>

            <main className="p-4 pt-6 sm:ml-64 sm:pt-4">
        <h1 className="mb-4 text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((card) => (
            <div
              key={card}
              className="flex h-24 items-center justify-center rounded-lg bg-gray-100 text-gray-400"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
