import { allPosts, postContent } from "@/lib/utils"
import PostCard from "./PostCard"
import { Suspense } from "react"
const FileComp = async () => {
    const file = await allPosts()


    // for testing the streams using suspense 


    // const resolve = await new Promise((resolve , reject)=> {
    //     setTimeout(()=> {
    //        resolve("Hello world")
    //     } , 3000)

    // })
    // console.log('THe file is ' , file)

    return (
        <>
            {file.map((f) => {
                return (               // this might cause an error due to Random assignment of keys
                    <Suspense key={Math.random()} fallback={<LoadingComp />}>
                        <PostCard key={Math.random()} file={f} content={postContent(f.split('.')[0])} />
                    </Suspense>
                )
            })}
        </>
    )
}



export default FileComp

const LoadingComp = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden mx-2 shadow-lg animate-pulse">
                <div className="h-40 bg-gray-300"></div>

            </div>
        </>
    )
}