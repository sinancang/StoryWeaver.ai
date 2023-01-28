import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// import p5 from 'p5';
// import '../public/p5js/sketch.js';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className="text-xl">
          <p>
            Image Sample&nbsp; */}
            {/* <code className={styles.code}>src/pages/index.js</code> */}
          {/* </p> */}
          {/* <div> */}
            {/* <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/davidholcer.png"
                alt="DH Logo"
                className={styles.vercelLogo}
                width={50}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className={styles.center}>

          <div className={styles.circles}>
            <Image
              src="/circles.png"
              alt="13"
              width={534}
              height={371}
              priority
            />
          </div>
        </div>


        <div className="bg-[#005CE7] py-2 px-4 rounded-md text-black focus:outline-none focus:shadow-outline-blue colorbg-midnight">
          {/* <!-- Basic HTML Form --> */}
          <form action="/api/processUserInfo" method="post">
            <label for="first">What is your name?</label>
            <input className="bg-white" type="text" id="name" name="name" />

            <label for="first">How do you feel today</label>
            <input className="bg-white" type="text" id="feeling" name="feeling" />

            <label for="first">What are your pronouns?</label>
            <input className="bg-white" type="text" id="pronouns" name="pronouns" />

            <label for="first">How would you describe yourself?</label>
            <input className="bg-white" type="text" id="describe" name="describe" />
  
            <button type="submit">Submit</button>
          </form>
        </div>


        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

        </div> */}


      </main>
    </>
  )
}
