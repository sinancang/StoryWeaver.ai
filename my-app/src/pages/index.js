import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import axios from 'axios';

// import p5 from 'p5';
// import '../public/p5js/sketch.js';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const submitButton = "px-4";
    const buttonField ="bg-white w-4/12 h-5";

    const [requireInput, setRequireInput] = useState(true);
    const [prompt, setPrompt] = useState("");

    const fetchPrompt = async () => {
        const data = {
            'name': 'sinan',
            'feeling': 'moody',
            'pronouns': 'he/him',
            'action': 'dance',
        }
        setRequireInput(false);
        const response_API = await axios.post('/api/cohere', data);
        setPrompt(JSON.stringify(response_API.data.text));
    }
    return (
        <>
          <Head>
            <header className="bg-white bg-opacity-75 w-full flex justify-between items-center p-4">
              <div>
                <a href="/">
                  <img src="davidholcer.png" alt="Logo" className="px-5 w-2/12" />
                </a>
              </div>
              <nav className="text-right">
                <a href="/about" className="text-black hover:text-gray-600 mr-4">About</a>
                {/* Additional links to other pages */}
              </nav>
            </header>

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
                {
                    requireInput ? (
                    <form action="/api/cohere" method="post">
                        <label className={submitButton}>What is your name?</label>
                        <input className={buttonField} type="text" id="name" name="name"/><br/>

                        <label className={submitButton}>How do you feel today</label>
                        <input className={buttonField} type="text" id="feeling" name="feeling"/><br/>

                        <label className={submitButton}>What are your pronouns?</label>
                        <select name="pronouns" defaultValue="she/her">
                            <option name="he/him">he/him</option>
                            <option name="she/her" selected>she/her</option>
                            <option name="they/them">they/them</option>
                            <option name="zee/zir">zee/zir</option>
                        </select><br/>

                        <label className={submitButton}>What do you want your character to do?</label>
                        <input className={buttonField} type="text" id="describe" name="describe"/><br/><br/>
                        <button className="button-31" role="button" onClick={fetchPrompt}>Submit</button>
                    </form>
                    ) : (
                        <p>{prompt}</p>
                    )
                }
            </div>
            < footer className="bg-transparent text-center py-4" >
              <div className="container">
                <p className="text-s">Copyright © 2023 StoryWeaver</p>
              </div>
            </footer >
          </main>
        </>
      )
}
