import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Features = () => {
  return (
    <section className="rounded-xl p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-4 mx-auto my-6 space-y-1 text-center">
        <span className="text-xs font-semibold tracking-wider uppercase dark:text-default-600">
          a shortcut to your dream
        </span>
        <h2 className="pb-3 text-3xl font-bold md:text-4xl">
          <Typewriter
            words={["Discover hobbies.", "Meet people.", "Build communities."]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </h2>
        <p className="italic">
          HobbyHub is a vibrant platform where shared interests turn into real connections. Whether
          you're looking to join a book club, start a painting circle, or organize weekend hikes,
          HobbyHub helps you discover or create local hobby-based groups that match your passions.
          It’s more than just a community — it’s where hobbies come to life.
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col px-6 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Discover Local Groups
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Easily find hobby-based communities near you — whether you're into books, biking,
            coding, crafts, or anything in between.
          </p>
          <a
            className="inline-flex btn rounded-2xl shadow-xl bg-gray-500 text-white items-center space-x-2 text-sm dark:text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Create Group
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed  dark:text-gray-600">
            Start your own club or circle in just minutes. Set a theme, choose meeting times, and
            build a community.
          </p>
          <a
            className="inline-flex btn rounded-2xl shadow-xl bg-gray-500 text-white items-center space-x-2 text-sm dark:text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-6 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Location-Based
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Get personalized recommendations based on your interests and where you live.
          </p>
          <a
            className="inline-flex btn rounded-2xl shadow-xl bg-gray-500 text-white items-center space-x-2 text-sm dark:text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-6 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Inclusive & Welcoming
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Designed for beginners and experts alike — everyone has a place at HobbyHub.
          </p>
          <a
            className="inline-flex btn rounded-2xl shadow-xl bg-gray-500 text-white items-center space-x-2 text-sm dark:text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
