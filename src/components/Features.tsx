import React from "react";
import { Typewriter } from "react-simple-typewriter";

/**
 * Features Component (MVP) with emojis
 * Highlights the core value of HobbyHub with a clean, minimal layout.
 */
const Features: React.FC = () => {
  const features = [
    {
      title: "📚 Discover Local Groups",
      desc: "Find communities near you — books, biking, coding, crafts, and more.",
    },
    {
      title: "🛠️ Create Groups",
      desc: "Start your own club in minutes. Choose a theme and grow your circle.",
    },
    {
      title: "📍 Location-Based",
      desc: "Get group suggestions based on your hobbies and location.",
    },
    {
      title: "🤝 Inclusive & Welcoming",
      desc: "Everyone’s invited — beginners or pros, HobbyHub is for all.",
    },
  ];

  return (
    <section className="p-8 text-center rounded-xl dark:bg-gray-100 dark:text-gray-800">
      <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
        🌟 a shortcut to your dream
      </span>

      <h2 className="text-3xl md:text-4xl font-bold my-2">
        <Typewriter
          words={["🎨 Discover hobbies.", "🧑‍🤝‍🧑 Meet people.", "🏡 Build communities."]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={3000}
        />
      </h2>

      <p className="italic max-w-2xl mx-auto mb-8">
        Turn your interests into real connections. Join or create local hobby groups and bring your
        passions to life.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="p-5 rounded-xl shadow-sm dark:border-gray-300">
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
