import { Navbar } from "../../components/Navbar"
import style from "./Home.module.css"

const Home = () => {
    return <div>
        <Navbar />
        <div className={style.container}>
            <h1>News App</h1>
            <h3>Your one Stop shop for latest News</h3>
        </div>
    </div>
}

export default Home