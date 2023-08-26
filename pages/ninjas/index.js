import sytles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninjas => (
                <div key={ninjas.id}>
                    <a className={sytles.single}>
                        <h3>{ninjas.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Ninjas;