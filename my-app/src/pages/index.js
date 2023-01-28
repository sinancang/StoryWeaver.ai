import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// import p5 from 'p5';
// import '../public/p5js/sketch.js';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const submitButton = "px-4";
  const buttonField ="bg-white w-4/12 h-5";
  return (
    <>
      <Head>
        <title>Soniar</title>
        <meta name="description" content="Soniar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cloud.ico" />
        {/* <script src="/p5js/p5.min.js"></script> */}
        {/* <script src="/p5js/sketch.js"></script> */}
        
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


        <div className="bg-[#005CE7] py-2 px-4 rounded-md text-black focus:outline-none focus:shadow-outline-blue colorbg-midnight leading-8">
          {/* <!-- Basic HTML Form --> */}
          <form action="/api/cohere" method="post">
            <label className={submitButton}>What is your name?</label>
            <input className={buttonField} type="text" id="name" name="name" /><br />

            <label className={submitButton}>How do you feel today</label>
            <input className={buttonField} type="text" id="feeling" name="feeling" /><br />

            <label className={submitButton}>What are your pronouns?</label>
            <input className={buttonField} type="text" id="pronouns" name="pronouns" /><br />
            <select name="pronouns">
              <option  name="He/him/his">He/him/his</option>
              <option name="She/her/hers" selected>She/her/hers</option>
              <option name="They/them/their">They/them/their</option>
              <option name="Xee">Xee</option>
            </select>


            <label className={submitButton}>What do you want your character to do?</label>
            <input className={buttonField} type="text" id="describe" name="describe" /><br /><br />


            {/* <button type="submit" className={submitButton}>Submit</button> */}
            <button class="button-31" role="button">Submit</button>
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
