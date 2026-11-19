import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="p-6 bg-cyan-300 m-100 mt-10 ">
      <div>
        <h1 className="px-70 ">Create Acconted</h1>
        <h2 className="px-70">Register</h2>
      </div>
      <div>
        <form className="px-70">
          <div className="mt-10">
            <label>Name</label>
            <input type="text" className=" bg-blue-100  bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand  px-3 py-2.5 shadow-xs placeholder:text-body" />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              type="Email"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand  px-3 py-2.5 shadow-xs placeholder:text-body"
            />
          </div>
          <div>
            <label>password</label>
            <br />
            <input
              type="password"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand  px-3 py-2 shadow-xs placeholder:text-body"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-blue-600 hover: border-red-800 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm mx-auto focus:outline-none bg-amber-600 text-center flex items-center justify-center py-2 px-1.5 mt-10"
            >
              <Link href="/">Log up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
