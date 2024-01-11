export default async function getUser(userid: string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json()
}