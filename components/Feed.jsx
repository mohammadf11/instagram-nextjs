import React from 'react'
import Posts from './Posts';
import Stories from './Stories';

function Feed() {
  return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                         xl:grid-col-3 xl:max-x-6xl mx-auto'>
            {/* stories and posts */}
            <section className='col-span-2'>
                <Stories/>
                <Posts/>
            </section>

            <section >
              {/* mini Profile */}


              {/* suggestion */}

            </section>

        </main>
  )
}

export default Feed