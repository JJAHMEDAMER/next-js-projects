import { Navbar } from "../../components/Navbar";
import styles from "./News.module.css"

export default function News({ data, pageNumber }) {
    console.log(data)
    return <div className={styles.container}>
        <Navbar />
        {data.articles.map((item, index) => {
            return (<div key={index} className={styles.news}>
                <h1>{item.title}</h1>
                <h2>Author: {item.author}</h2>
                <h3>Source: {item.source.name}</h3>
                <img src={item.urlToImage} alt="" />
                <p onClick={() => window.location.href = item.url}>Read More...</p>
                <hr></hr>
            </div>)
        }
        )}
    </div>
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.pageNumber;

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
            },
        },
    );
    const data = await res.json()

    return {
        props: {
            pageNumber: parseInt(pageNumber),
            data
        }
    }
}