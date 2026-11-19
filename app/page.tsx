import Link from "next/link";

export default function Home() {
  return (
    <main className="p-28 bg-emerald-300 mx-auto mt-28">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <label htmlFor="remember" className="flex items-center mb-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            required
          />
          <p className="ms-2 text-sm font-medium text-heading select-none">
            I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
          </p>
        </label>
        <button
          type="submit"
          className="text-blue-600 border hover: border-red-400 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm mx-auto focus:outline-none bg-amber-600 text-center flex items-center justify-center py-2 px-1.5"
        >
          <Link href="/dashboard">Log in</Link> 
        </button>
        <div>
                <p className="mx-25 mt-10">ສະໝັກ? <Link href="/register" className="text-blue-600 border border-red-400 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm mx-auto focus:outline-none bg-amber-600 text-center flex items-center justify-center py-2 px-1.5">Log up</Link></p>
            </div>
      </form>
    </main>
  );
}
