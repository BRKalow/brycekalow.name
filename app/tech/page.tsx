import Image from "next/image";
import { PageWithHeading } from "../../components/page-with-heading";

import s from "./tech.module.css";

const techListData = [
  {
    title: "Next.js",
    image: "next.png",
    description:
      "An extremely flexible web framework powered by React. I use it both personally and professionally.",
    url: "https://nextjs.org",
  },
  {
    title: "Fathom Analytics",
    image: "fathom.png",
    description:
      "A privacy-focused analytics alternative. I'm using it for this site!",
    url: "https://usefathom.com/ref/27Z2TI",
  },
  {
    title: "Notion",
    image: "notion.png",
    description:
      "My personal knowledge management system. I use Notion to take notes, write posts, and organize any type of information I don't want to keep in my brain.",
    url: "https://notion.so",
  },
];

function TechList() {
  return (
    <ul className={s["tech-list"]}>
      {techListData.map((item) => (
        <li className={s["tech-list-item"]} key={item.title}>
          <a href={item.url} rel="noreferrer noopener" target="_blank">
            <div className={s["tech-image"]}>
              <Image
                src={`/img/tech/${item.image}`}
                width="48"
                height="48"
                alt={item.title}
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function TechPage() {
  return (
    <PageWithHeading
      title="Tech"
      subtitle="Take a look at the tools and software I use to build."
    >
      <TechList />
    </PageWithHeading>
  );
}

export const metadata = {
  title: "Tech",
};
