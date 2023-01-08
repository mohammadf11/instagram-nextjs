import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import SuggestionsProfile from "./SuggestionsProfile";

function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                         xl:grid-cols-5 xl:max-x-6xl mx-auto"
    >
      {/* stories and posts */}
      <section className="col-span-4">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        {/* mini Profile */}
        <div className="fixed top-20">
          <MiniProfile />
          <SuggestionsProfile />
        </div>
        {/* suggestion */}
      </section>
    </main>
  );
}

export default Feed;
