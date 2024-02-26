import { allBlogs } from "@/lib/utils"

const Blogs = async () => {
    const lenght = await allBlogs()

    return (
        <div>
           We have {lenght.length} blog{`lenght > 1` ? 's': ''} by far
        </div>
    )
}
export default Blogs