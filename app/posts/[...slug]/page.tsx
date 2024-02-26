import {
  contentAfterFrontMatter,
  formatDate,
  frontMatter,
  getData,
  postContent,
} from "@/lib/utils";
import { marked } from "marked";

// { params: { slug: [ 'second-blog' ] }, searchParams: {} }
type PostParams = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PostParams) {
  const fileContent = await postContent(params.slug[0]);
  if (!fileContent) {
    return {};
  }
  const frontter = frontMatter(fileContent);
  return {
    title: frontter.title,
    description: frontter.description,
  };
}

const PostPage = async ({ params }: PostParams) => {
  const slug = params.slug[0];

  const data =  getData(slug);
  const fileContent = data.toString();
  // the code below causes an error on vercel serverless while resolving the path
  // const fileContent = await postContent(slug)
  const result = frontMatter(fileContent);
  const realContent = contentAfterFrontMatter(fileContent);

  return (
    <>
      <main className="flex  min-h-screen max-w-5xl mx-auto flex-col items-start justify-start gap-14  p-24">
        <div className="flex">
          <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-full sm:max-w-5xl before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:max-w-5xl before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        </div>
        <div className="flex flex-col gap-5 border-b-[2px] border-gray-500 pb-3">
          <h1 className="mr-auto flex justify-start font-heading items-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
            {result.title}
          </h1>
          <p className="text-gray-200 font-subheading text-3xl">
            {result.description}
          </p>
          <p className="text-gray-100 font-subheading text-sm">
            Published by -{" "}
            <span className="font-bold uppercase">{result.author}</span>{" "}
            <span className="inline-block mx-4 w-[5px] bg-white rounded-full h-[5px] -translate-y-1/2" />
            {formatDate(result.date)}
          </p>
        </div>

        <div className="prose mr-0 max-w-full  prose-p:text-black  dark:prose-code:text-white/90 dark:prose-strong:text-white dark:prose-p:text-white  prose-h1:text-black dark:prose-h1:text-white  prose-h2:text-black dark:prose-h2:text-white prose-h3:text-black dark:prose-h3:text-white prose-h4:text-black dark:prose-h4:text-white prose-h5:text-black dark:prose-h5:text-white  prose-h6:text-black dark:prose-h6:text-white prose-th:text-black dark:prose-th:text-white prose-tr:text-black dark:prose-tr:text-white prose-a:text-black dark:prose-a:text-white text-white ">
          <article className="font-inter">
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(realContent) }}
            />
          </article>
        </div>
      </main>
    </>
  );
};

export default PostPage;
