import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import { secureHeapUsed } from "crypto"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Users',
}

const UsersPage = async () => {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData
    console.log("Hello")

    const content = (
        <section>
            <h2>
                <Link href='/'>Home</Link>
            </h2>
            <br />
            {users.map((user) => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content
}
export default UsersPage