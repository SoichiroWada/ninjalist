import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><Image src="/logo.png" width={128} height={77} alt="ninjalogo" /></Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}
 
export default Navbar