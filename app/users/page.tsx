import Image from "next/image";

export default function UsersPage() {
  return (
    <main className="my-50 mx-150 m-10">
      <div className="flex items-center gap-2.5">
        <Image
          className="h-10 w-10 rounded-full"
          src="/imgs.png"
          alt="Jese Leos's profile picture"
          width={40}
          height={40}
        />
        <div className="font-medium text-heading">
          <div>Jese Leos</div>
          <div className="text-sm font-normal text-body">Joined in August 2014</div>
        </div>
      </div>
      <div className="flex items-center gap-2.5 my-10">
        <Image
          className="h-10 w-10 rounded-full"
          src="/imge.jpeg"
          alt="Phou's profile picture"
          width={40}
          height={40}
        />
        <div className="font-medium text-heading">
          <div>Phou</div>
          <div className="text-sm font-normal text-body">Phou in August 2022</div>
        </div>
      </div>
    </main>
  );
}
