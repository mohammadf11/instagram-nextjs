import React, { Profiler, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

function Stories() {
  const [suggestion, setSuggestion] = useState([]);
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
  console.log(suggestion);
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 
                    border border-gray-200 rounded-sm
                    overflow-x-scroll scrollbar-thin scrollbar-thumb-black "
    >
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
