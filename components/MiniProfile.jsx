import { useSession, signOut } from "next-auth/react";
import { faker } from "@faker-js/faker";

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between m-14 ml-10">
      <img
      className="rounded-full border p-[2px] w-16 h-16 "
        src={faker.image.avatar()}
        alt=''
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Puzzle</h2>
        <h3 className="text-sm text-gray-400">welcom to installgram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
