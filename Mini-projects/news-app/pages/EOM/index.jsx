// Styling
import style from "./EOM.module.css"

export default function EOM({ data }) {
    console.log(data) // Outputs in client and server
    return <div className={style.container}>
        <h1>Employee Of The Month</h1>
        <h2>{data.name}</h2>
        <h3>{data.position}</h3>
        <img src={data.image} alt="" />
        <h5>{data.description}</h5>
    </div>
}

// Server Side Rendering
export const getServerSideProps = async (pageContext) => {
    const res = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
    const data = await res.json()
    // console.log(data) // Outputs in server only
    return {
        props: {
            data
        }
    }
}