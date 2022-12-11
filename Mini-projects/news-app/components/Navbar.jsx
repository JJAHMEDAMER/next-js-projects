// Next JS 
import { useRouter } from "next/router"

// Styles
import styles from "./components.module.css"

export const Navbar = () => {
    const router = useRouter();
    return <div className={styles.navbar}>
        <h1 onClick={() => router.push("/Home")}>Home</h1>
        <h1>News</h1>
        <h1 onClick={() => router.push("/EOM")}>EOM</h1>
        <h1 onClick={() => window.location.href = "https://www.twitter.com"}>Twitter</h1>
    </div>
} 