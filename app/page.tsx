import authorInfo from "@/data";
import Link from "next/link";
import Image from "next/image";
import { Location } from "./Icons";

const HomePage = () => {
  return (
    <>
      <h2 className="py-3 text-2xl font-bold text-center bg-purple-300">
        {authorInfo.headline}
      </h2>
      <div className="relative flex flex-col gap-10 px-6 py-10 bg-pink-100 lg:flex-row">
        <div className="flex flex-col items-center gap-5 sm:flex-row lg:flex-col sm:gap-10">
          <Image
            src="/red_dot.jpg"
            alt="shiku"
            width={288}
            height={288}
            className="p-1 rounded-full outline outline-4 outline-purple-300 w-72 h-72"
          />
          <div className="flex flex-col w-full gap-3">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                {authorInfo.name}
              </h1>
              <p className="mt-4 text-base text-gray-700">{authorInfo.bio}</p>
              <p className="mt-4 text-base text-gray-700 flex gap-2">
                <Location />
                New Delhi, India
              </p>
            </div>
            <hr className="h-[2px] bg-gray-400" />
            <SocialSection />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="mb-4 text-2xl font-bold">My Work</h1>
          <div className="flex flex-col gap-5">
            {authorInfo.projects.map((project) => (
              <ProjectCard
              key={project.title}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                previewLink={project.previewLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const SocialSection = () => {
  return (
    <div className="flex flex-col gap-2">
      {authorInfo.socialMedia.map((socialLink) => {
        return (
          <Link
            key={socialLink.username}
            href={socialLink.url(socialLink.username)}
            className="flex items-center gap-3 px-4 py-2 hover:underline hover:text-pink-600 hover:bg-purple-200 rounded-lg"
          >
            <socialLink.jsx />

            <span className="text-sm">{socialLink.username}</span>
          </Link>
        );
      })}
    </div>
  );
};
const ProjectCard = ({
  title,
  description,
  previewLink,
  repoLink,
}: {
  title: string;
  description: string;
  previewLink?: string;
  repoLink: string;
}) => {
  return (
    <div className="w-full px-6 rounded-lg bg-purple-50 00 py-7 drop-shadow outline outline-purple-200 outline-2">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="flex gap-5 mt-3">
        {previewLink && (
          <Link target="_blank"  href={previewLink}>
            <button className="px-4 py-2 text-sm bg-pink-300 rounded-md drop-shadow">
              Preview
            </button>
          </Link>
        )}
        <Link target="_blank" href={repoLink}>
          <button className="px-4 py-2 text-sm bg-white rounded-md drop-shadow">
            Source Code
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
