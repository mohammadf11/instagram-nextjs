import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useEffect } from "react";

function SuggestionsProfile() {
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
  return (
    <div className=" mt-4 ml-10">
      <div className="flex space-x-40  text-sm mb-10">
        <h4 className="text-sm font-bold text-gray-400">Suggestion for you</h4>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div>
        {suggestion.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between m-5 ml-2"
          >
            <img
              className="rounded-full border p-[2px] w-10 h-10 "
              src={profile.avatar}
              alt=""
            />
            <div className="flex-1 mx-4">
              <h2 className="font-bold">{profile.username}</h2>
              <h3 className="text-sm text-gray-400">{profile.username}</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold ml-18">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsProfile;
