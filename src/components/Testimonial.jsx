import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="rounded-xl dark:bg-gray-100 dark:text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl lg:pl-6 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">Turn Hobbies Into Lifelong Connections.</h2>
              <p className="dark:text-gray-600">
                Whether you're looking to meet new people, learn something new, or simply share your
                passion, HobbyHub makes it easy to connect and build real communities.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      "I moved to a new city and didn’t know anyone. Through HobbyHub, I joined a
                      local book club and instantly found my tribe. Now we meet every weekend, and
                      it's the highlight of my week!"
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/99xBqWTn/86814638.webp"
                        alt=""
                        className="w-12 h-12 object-cover bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Ayesha R.</p>
                        <p className="text-sm dark:text-gray-600">Book Lover, Dhaka</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      "I used HobbyHub to start a beginner hiking group. Within a month, we had over
                      20 members! It’s easy to organize events and keep everyone in the loop. Just
                      wish there was an offline map integration."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/1YKVnCrH/images.jpg"
                        alt=""
                        className="w-12 object-cover h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">James P.</p>
                        <p className="text-sm dark:text-gray-600">Amateur Hiker, Colorado</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      "Thanks to HobbyHub, I discovered a cozy painting circle in my neighborhood.
                      The platform made it super simple to join and connect. I’ve made friends and
                      grown as an artist!"
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/pjF0zxhV/art.jpg"
                        alt=""
                        className="w-12 object-cover h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Lina K.</p>
                        <p className="text-sm dark:text-gray-600">Art Enthusiast, Berlin</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      "I’ve always wanted to jam with other musicians, but didn’t know where to
                      start. HobbyHub helped me connect with local guitarists and drummers. Now we
                      meet up every Friday night to play together — it’s been life-changing!"
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/Tq2wT60N/mm.webp"
                        alt=""
                        className="w-12 object-cover h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Tariq M.</p>
                        <p className="text-sm dark:text-gray-600">Music Enthusiast, Lahore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
