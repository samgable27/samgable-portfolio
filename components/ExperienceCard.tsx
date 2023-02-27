import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZmQS6CY2IBsAX85R9kj&_nc_ht=scontent-iad3-2.xx&oh=00_AfCFmBn-xNkc2l75ajhgXq0wHBrCpZuMuLaIp_BSAXkLYQ&oe=641FC191"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Freelance Web Developer</h4>
        <p className="font-bold text-2xl mt-1">Sam Gable</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-sm"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            className="h-10 w-8 rounded-sm"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            className="h-10 w-20 rounded-sm"
            src="https://api.workinggears.com/storage/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg"
            alt=""
          />

          <img
            className="h-10 w-10 rounded-md"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://e7.pngegg.com/pngimages/669/447/png-clipart-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-thumbnail.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
