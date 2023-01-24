import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { GiHamburgerMenu, } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Header() {
    const { pathname } = useRouter();
    let showMenu: boolean = false
    function toggleMenu(val: boolean) {
        showMenu = val
    }
    function moveToAndoridIos() {

    }

    return <>
        <header className='header'>
            <nav className="small-body-text nav flex-row space-between align-center">
                <Link href="/" className={`${pathname === '/' ? 'active' : ''} logo-container pointer flex-row gap-10 align-center`} onClick={() => toggleMenu(false)}>
                    <Image src="/images/hdc-logo-transparent-min.webp" alt="HDC Logo" width={40} height={40} />
                    <div className="weight-600">HUGE DIGITAL CLOCK</div>
                </Link>
                <div className="small-body-text nav-right flex-row gap-40 body-text weight-500">
                    <Link href="/features" className={`${pathname === '/features' ? 'active' : ''} link flex-column justify-center pointer`}>
                        Features

                    </Link>
                    <div className="link flex-column justify-center pointer">Products
                    </div>
                    <Link href="/blog" className={`${pathname === '/blog' ? 'active' : ''} link flex-column justify-center pointer`}>
                        <div className="link flex-column justify-center pointer">Blog</div>
                    </Link>
                    <Button color="primary" variant="contained" className="align-self-center"
                        onClick={() => moveToAndoridIos()}>Install Now</Button>
                </div>
                <div className="mobile-nav-right flex-column gap-20" >
                    <div onClick={() => toggleMenu(true)}
                        className="flex-column justify-center align-center full-height heading-style-three">
                        <GiHamburgerMenu />
                    </div>
                    <div onClick={() => toggleMenu(false)}
                        className="flex-column justify-center align-center full-height heading-style-three">
                        <GrClose />
                    </div>
                    <div className="mobile-menu" style={{ display: showMenu ? 'flex' : 'none' }} >
                        <div className="link flex-column justify-center pointer"
                            onClick={() => toggleMenu(false)} > Why HDC</div >
                        <div className="link flex-column justify-center pointer" onClick={() => toggleMenu(false)} >
                            Blog</div >
                    </div >
                </div >
            </nav >
        </header >
    </>
}