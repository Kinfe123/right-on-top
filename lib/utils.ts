import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { promises as fs } from "fs";
import { readFileSync } from "fs";
import path from "path";

export const BASEDIR = path.join(process.cwd(), "contents");
// this should be changed based on your frontmatter that you would like to use
type FrontMatterType = {
  title: string;
  description: string;
  image?: string;
  date?: Date;
  author: string;
};
export const cn = (...values: ClassValue[]) => {
  return twMerge(clsx(values));
};
// all blogs for the base file dir.
export const allBlogs = async () => {
  const file = await fs.readdir(BASEDIR);

  return file;
};
//  generating the content based on slug - fetching the markup
export const postContent = async (filename: string) => {
  const pathes = path.join(BASEDIR, `${filename}.md`);

  const fileContent = await fs.readFile(pathes, "utf-8");

  return fileContent;
};

// generating the frontmatter
export const frontMatter = (fileContent: string) => {
  const startFrontmatter = fileContent.indexOf("---");
  const endFrontmatter = fileContent.slice(startFrontmatter + 3).indexOf("---");
  const targeted = fileContent.slice(startFrontmatter, endFrontmatter + 3);
  const spliited = targeted.split("\n");
  const result = {};
  spliited.forEach((line) => {
    const [key, value] = line.split(":");
    const trimmedKey = key.trim();
    const trimmedValue = value;

    if (trimmedKey && trimmedValue) {
      // @ts-ignore
      result[trimmedKey] = trimmedValue;
    }
  });
  return result as FrontMatterType;
};

export const mdToHtml = (content: string) => {
  // TODO: to replace marked package
};
// get the sync buffer
export const getData = (slug: string) => {
  const filePath = path.join(BASEDIR, `${slug}.md`);
  const fileContent = readFileSync(filePath);
  return fileContent;
};
// generting the content . except the frontmatter
export const contentAfterFrontMatter = (fileContent: string) => {
  const startFrontmatter = fileContent.indexOf("---");
  const endFrontmatter = fileContent.slice(startFrontmatter + 3).indexOf("---");
  const realContent = fileContent.slice(endFrontmatter + 6); // because pf --- will be skippd twice due to not including the offset
  return realContent;
};

// formating date based on the US standard
export function formatDate(input: undefined | Date): string {
  const date = new Date(input!);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
