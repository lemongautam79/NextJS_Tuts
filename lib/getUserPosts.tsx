export default async function getUserPosts(userid: string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userid}`)
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json()
}