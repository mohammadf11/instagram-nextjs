import React, { Profiler, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestion, setSuggestion] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      phone: faker.phone.number(),
      company: faker.company.bsNoun(),
      email: faker.internet.email(),
      id: i,
    }));
    setSuggestion(suggestion);
  }, []);
  return (
    <div
      className="flex space-x-2 p-6 pl-2 bg-white mt-8 
                    border border-gray-200 rounded-sm
                    overflow-x-scroll scrollbar-thin scrollbar-thumb-black "
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
