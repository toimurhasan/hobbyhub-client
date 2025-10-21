import React from "react";

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
          image: "https://i.ibb.co/1YKVnCrH/images.jpg", 
        },
      },
      {
        id: 2,
        content:
          "I used HobbyHub to start a beginner hiking group. Within a month, we had over 20 members! It’s easy to organize events and keep everyone in the loop. Just wish there was an offline map integration.",
        user: {
          name: "James P.",
          location: "Amateur Hiker, Colorado",
          image: "https://i.ibb.co/99xBqWTn/86814638.webp", 
        },
      },
      {
        id: 3,
        content:
          "Thanks to HobbyHub, I discovered a cozy painting circle in my neighborhood. The platform made it super simple to join and connect. I’ve made friends and grown as an artist!",
        user: {
          name: "Lina K.",
          location: "Art Enthusiast, Berlin",
          image: "https://i.ibb.co/Tq2wT60N/mm.webp", 
        },
      },
      {
        id: 4,
        content:
          "I’ve always wanted to jam with other musicians, but didn’t know where to start. HobbyHub helped me connect with local guitarists and drummers. Now we meet up every Friday night to play together — it’s been life-changing!",
        user: {
          name: "Tariq M.",
          location: "Music Enthusiast, Lahore",
          image: "https://i.ibb.co/pjF0zxhV/art.jpg", 
        },
      },
    ],
  },
};

const Testimonial: React.FC = () => {
  const { title, description, testimonials } = testimonialsData.Testimonial;

  return (
    <div>
      <section className="rounded-xl dark:bg-gray-100 dark:text-gray-800">
        <div className="container sm:px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl lg:pl-6 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="dark:text-gray-600">{description}</p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>{testimonial.content}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src={testimonial.user.image}
                          alt={`${testimonial.user.name}`}
                          className="w-12 h-12 object-cover bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">{testimonial.user.name}</p>
                          <p className="text-sm dark:text-gray-600">{testimonial.user.location}</p>
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
