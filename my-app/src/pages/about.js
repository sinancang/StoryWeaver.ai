import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <header className="bg-black bg-opacity-75 w-full flex justify-between items-center p-4">
                    <div>
                        <a href="/">
                            <img src="storyweaver.png" alt="Logo" className="px-5 w-48" />
                        </a>
                    </div>
                    <nav className="text-right">
                        <a href="/" className="text-white hover:text-gray-600 mr-4">Demo</a>
                        <a href="/about" className="text-white hover:text-gray-600 mr-4">About</a>
                    </nav>
                </header>

                <title>About Us</title>
                <meta name="description" content="Soniar" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>
            <main className={styles.main}>
                <div className={styles.center}>
                    <div className={styles.circles}>
                        {/* <Image className="rounded-md"
                            src="/circles.png"
                            alt="13"
                            width={534}
                            height={371}
                            priority */}
                        {/* /> */}



                    </div>
                </div>
               
                <footer className="bg-transparent text-center py-4" >
                    <div className="container">
                        <p className="text-xs">Copyright © 2023 StoryWeaver</p>
                    </div>
                </footer >
            </main>
        </>
    )
}
