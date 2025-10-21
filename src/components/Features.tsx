import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaBook, FaUsers, FaMapMarkerAlt, FaHandshake } from "react-icons/fa";

/**
 * Features Component (Enhanced MVP) with emojis and animations
 * Highlights the core value of HobbyHub with a modern, engaging layout.
 */
const Features: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const features = [
    {
      icon: <FaBook className="text-3xl text-blue-500" />,
      title: "Discover Local Groups",
      desc: "Find communities near you — books, biking, coding, crafts, and more.",
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Create Groups",
      desc: "Start your own club in minutes. Choose a theme and grow your circle.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
      title: "Location-Based",
      desc: "Get group suggestions based on your hobbies and location.",
    },
    {
      icon: <FaHandshake className="text-3xl text-purple-500" />,
      title: "Inclusive & Welcoming",
      desc: "Everyone’s invited — beginners or pros, HobbyHub is for all.",
    },
  ];

  return (
    <section
      className="p-8 text-center rounded-xl  from-indigo-100 to-purple-100 dark:bg-gray-800 dark:text-gray-100"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Overlay for Gradient Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-10 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700"
        style={{ zIndex: -1 }}
      ></div>

      <span className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-300">
        🌟 a shortcut to your dream
      </span>

      <h2 className="text-3xl md:text-4xl font-bold my-2 relative overflow-hidden">
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

      <p className="italic max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
        Turn your interests into real connections. Join or create local hobby groups and bring your
        passions to life.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`p-6 rounded-xl shadow-lg dark:shadow-none bg-white dark:bg-gray-700 transform transition duration-500 ease-in-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
