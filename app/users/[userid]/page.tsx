import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"

type Params = {
    params: {
        userid: string,
    }
}

export async function generateMetadata({ params: { userid } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userid)
    const user: User = await userData

    return {
        title: user.name,
        description: `Page of ${user.name}`
    }
}


export default async function UserPage({ params: { userid } }: Params) {
    const userData: Promise<User> = getUser(userid)
    const userPostsData: Promise<Post[]> = getUserPosts(userid)

    //!  Parallel data fetching
    // const [user, userPost] = await Promise.all([userData, userPostsData])

    const user = await userData

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )


}