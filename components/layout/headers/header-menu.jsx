import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children"><Link href="/">Home</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/services">Services </Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">Gallery</Link>
                </li>
                <li className="menu-item-has-children"><Link href="blog">Blog </Link>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;