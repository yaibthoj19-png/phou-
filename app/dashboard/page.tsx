"use client";

import { useEffect, useRef, useState } from "react";

function ModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleMode = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="rounded-lg border border-gray-200 p-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}

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
    /* 1. ພື້ນຫຼັງຫຼັກທັງໜ້າເວັບ */
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <nav aria-label="Main navigation">
        {/* ປຸ່ມເປີດ Sidebar ຕອນຢູ່ຈໍມືຖື */}
        <button
          ref={openButtonRef}
          type="button"
          className="ms-3 mt-3 inline-flex rounded-lg border border-transparent bg-white dark:bg-gray-900 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:hidden"
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

        {/* 2. ແຖບ Sidebar ດ້ານຊ້າຍ */}
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
          <div className="h-full overflow-y-auto border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-4">
            <div className="mb-5 flex items-center justify-between ps-2.5">
              <span className="self-center whitespace-nowrap text-lg font-semibold text-gray-900 dark:text-white">
                My Website
              </span>
          
              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 sm:hidden"
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

            {/* ລາຍການເມນູໃນ Sidebar */}
            <ul className="space-y-2 font-medium">
               <li>
                <a
                  href="/dashboard"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
                  </svg>
                  <span className="ms-3">dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="/users"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Users</span>
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 6 0v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">products</span>
                </a>
              </li>

               <li>
                <a
                  href="/setting"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 0 0-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 0 0-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.827-3.31 2.37-2.37.996.608 2.296.07 2.573-1.065Z"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  <span className="ms-3">setting</span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="group flex items-center rounded-lg px-2 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </nav>

      {/* 3. ສ່ວນເນື້ອຫາຫຼັກ (Main Content) */}
      <main className="p-4 pt-6 sm:ml-64 sm:pt-4">
        {/* ຫົວຂໍ້ ແລະ ປຸ່ມ ModeToggle ມຸມຂວາ */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <ModeToggle />
        </div>
             
        {/* 🌟 1. ແຜງຄວບຄຸມສະຫຼຸບຕົວເລກ (Stats Summary Cards) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">ຍອດຂາຍລວມ (Total Revenue)</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$24,500.00</h3>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">↑ +12% ຈາກເດືອນກ່ອນ</span>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">ຜູ້ໃຊ້ງານທັງໝົດ (Total Users)</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,240 ຄົນ</h3>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">↑ +5% ອາທິດນີ້</span>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">ສິນຄ້າໃນລະບົບ (Products)</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">86 ລາຍການ</h3>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">ສະຖານະປົກກະຕິ</span>
          </div>
        </div>

        {/* 🌟 2. ຕາຕະລາງສະຫຼຸບຂໍ້ມູນຫຼ້າສຸດ (Data Table) */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            ລາຍການຫຼ້າສຸດໃນລະບົບ (Recent Activities)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th className="px-6 py-3">ຊື່ລາຍການ</th>
                  <th className="px-6 py-3">ປະເພດ</th>
                  <th className="px-6 py-3">ລາຄາ / ຈຳນວນ</th>
                  <th className="px-6 py-3">ສະຖານະ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Order #1092</td>
                  <td className="px-6 py-4">Purchase</td>
                  <td className="px-6 py-4">$20.00</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">ສຳເລັດແລ້ວ</span></td>
                </tr>
                <tr className="border-b dark:border-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Order #1091</td>
                  <td className="px-6 py-4">Purchase</td>
                  <td className="px-6 py-4">$30.00</td>
                  <td className="px-6 py-4"><span className="text-yellow-600 font-medium">ກຳລັງຈັດສົ່ງ</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}