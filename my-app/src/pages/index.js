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

      </Head>
      <main className={styles.main}>
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
            <select name="pronouns" defaultValue="she/her">
              <option name="he/him">he/him</option>
              <option name="she/her" selected>she/her</option>
              <option name="they/them">they/them</option>
              <option name="zee/zir">zee/zir</option>
            </select><br />

            <label className={submitButton}>What do you want your character to do?</label>
            <input className={buttonField} type="text" id="describe" name="describe" /><br /><br />
            <button class="button-31" role="button">Submit</button>
          </form>
        </div>
      </main>
    </>
  )
}
