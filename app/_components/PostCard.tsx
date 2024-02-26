import { formatDate, frontMatter } from "@/lib/utils";
import Link from "next/link";

const PostCard = async ({ file, content }: { file: string, content: Promise<string> }) => {


  let splitted = file!.split('.')
  // Uncomment the code belwo one to see the hot promise and suspending in action

  // the below code is done on purpose to the suspending effect
  // await new Promise((res , rej) => {
  //   setTimeout(()=> {
  //       res('Hello world')
  //   } , 1000)
  // })

  let result = await content
  let frontmatter = frontMatter(result)





  return (
    <>
      <Link
        href={`posts/${splitted[0]}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>{frontmatter.title}</h2>

        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{frontmatter.description}</p>

        <span className="mt-0 text-xs text-gray-300">{formatDate(frontmatter.date)}</span>
      </Link>
    </>
  );
};

export default PostCard;



