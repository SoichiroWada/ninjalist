import Link from 'next/link';
import sytles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(res)
    const data = await res.json();
    // console.log("data:", data)

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninjas => (
                <Link href={'/ninjas/' + ninjas.id} key={ninjas.id}>
                    <div className={sytles.single}>
                        <h3>{ninjas.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;