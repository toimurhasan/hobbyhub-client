import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsData = {
  Testimonial: {
    title: "Turn Hobbies Into Lifelong Connections.",
    description:
      "Whether you're looking to meet new people, learn something new, or simply share your passion, HobbyHub makes it easy to connect and build real communities.",
    testimonials: [
      {
        id: 1,
        content:
          "I moved to a new city and didn’t know anyone. Through HobbyHub, I joined a local book club and instantly found my tribe. Now we meet every weekend, and it's the highlight of my week!",
        user: {
          name: "Ayesha R.",
          location: "Book Lover, Dhaka",
          image: "https://i.ibb.co/1YKVnCrH/images.jpg", // Replace with actual image URL
        },
      },
      {
        id: 2,
        content:
          "I used HobbyHub to start a beginner hiking group. Within a month, we had over 20 members! It’s easy to organize events and keep everyone in the loop. Just wish there was an offline map integration.",
        user: {
          name: "James P.",
          location: "Amateur Hiker, Colorado",
          image: "https://i.ibb.co/N2972b87/debby-hudson-Gk-Zoz3g-VG8c-unsplash-min.jpg", // Replace with actual image URL
        },
      },
      {
        id: 3,
        content:
          "Thanks to HobbyHub, I discovered a cozy painting circle in my neighborhood. The platform made it super simple to join and connect. I’ve made friends and grown as an artist!",
        user: {
          name: "Lina K.",
          location: "Art Enthusiast, Berlin",
          image: "https://i.ibb.co/Tq2wT60N/mm.webp", // Replace with actual image URL
        },
      },
      {
        id: 4,
        content:
          "I’ve always wanted to jam with other musicians, but didn’t know where to start. HobbyHub helped me connect with local guitarists and drummers. Now we meet up every Friday night to play together — it’s been life-changing!",
        user: {
          name: "Tariq M.",
          location: "Music Enthusiast, Lahore",
          image: "https://i.ibb.co/pjF0zxhV/art.jpg", // Replace with actual image URL
        },
      },
    ],
  },
};

const Testimonial: React.FC = () => {
  const { title, description, testimonials } = testimonialsData.Testimonial;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div>
      <section className="rounded-xl  from-purple-100 to-pink-100 dark:bg-gray-800 dark:text-gray-100">
        <div className="container sm:px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl lg:pl-6 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {title}
              </h2>
              <p className="dark:text-gray-300">{description}</p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`grid content-center gap-4 transform transition duration-500 ease-in-out ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="p-6 rounded-3xl shadow-xl dark:bg-gray-900 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:-translate-y-1 hover:rotate-1">
                      <FaQuoteLeft className="absolute top-4 left-4 text-purple-500 text-3xl opacity-50" />
                      <p>{testimonial.content}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src={testimonial.user.image}
                          alt={`${testimonial.user.name}`}
                          className="w-12 h-12 object-cover bg-center bg-cover rounded-full dark:bg-gray-500 border-2 border-purple-500 shadow-md"
                        />
                        <div>
                          <p className="text-lg font-semibold">{testimonial.user.name}</p>
                          <p className="text-sm dark:text-gray-300">{testimonial.user.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
