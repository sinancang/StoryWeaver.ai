import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import { MutatingDots } from 'react-loader-spinner'
import axios from 'axios';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const submitButton = "px-4";
    const buttonField ="bg-white w-4/12 h-5";

    const defaultFormInfo = {
        'name': 'Angela',
        'feeling': 'Silly',
        'pronouns': 'she/her',
        'action': 'Take a walk',
    }
    const [options, setOptions] = useState({})
    const [requireOptions, setRequireOptions] = useState(true)
    const [requireInput, setRequireInput] = useState(true);
    const [prompt, setPrompt] = useState(null);
    const [promptHistory, setPromptHistory] = useState(null);
    const [formInfo, setFormInfo] = useState(defaultFormInfo);

    const fetchInitialPrompt = async () => {
        setRequireInput(false);
        formInfo['section'] = 'introduction';
        formInfo['promptHistory'] = '';
        const response_API = await axios.post('/api/cohere', formInfo);
        setPrompt(JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g," "));
        setPromptHistory(prompt)
        fetchOptions()
    }


    const fetchOptions = async () => {
        formInfo['section'] = 'option_intro';
        formInfo['history'] = promptHistory;
        const response_API = await axios.post('/api/cohere', formInfo);
        const optionsRaw = JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g," ")
        console.log(optionsRaw)

        const index = /\d\./
        console.log(optionsRaw.split(index))
        setOptions(optionsRaw.split(index))
        setRequireOptions(false)
    }

    const handleSubmit = (e) => {
        const {name, value} = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
        fetchInitialPrompt()
    }

    return (
        <>

          <Head>
            <header className="bg-black bg-opacity-75 w-full flex justify-between items-center p-4">
              <div>
                <a href="/">
                  <img src="storyweaver.png" alt="Logo" className="px-5 w-3/12" />
                </a>
              </div>
              <nav className="text-right">
                <a href="/" className="text-white hover:text-gray-600 mr-4">Demo</a>
                <a href="/about" className="text-white hover:text-gray-600 mr-4">About</a>
              </nav>
            </header>


            <title>StoryWeaver</title>
            <meta name="description" content="Soniar" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />

          </Head>
          <main className={styles.main}>
            <div className={styles.center}>
              <div className={styles.circles}>
                <Image className="rounded-md"
                  src="/circles.png"
                  alt="13"
                  width={534}
                  height={371}
                  priority
                />
              </div>
            </div>
            <div className="bg-[#005CE7] py-2 px-4 rounded-md text-black focus:outline-none focus:shadow-outline-blue colorbg-midnight leading-8 h-100 w-100">
                {
                    requireInput ? (
                    <form method="post">
                        <label className={submitButton}>What is your name?</label>
                        <input className={buttonField} type="text" placeholder="Angela" id="name" name="name"/><br/>

                        <label className={submitButton}>How do you feel today</label>
                        <input className={buttonField} type="text" placeholder="Silly" id="feeling" name="feeling"/><br/>

                        <label className={submitButton}>What are your pronouns?</label>
                        <select name="pronouns" defaultValue="she/her">
                            <option name="he/him">he/him</option>
                            <option name="she/her" selected>she/her</option>
                            <option name="they/them">they/them</option>
                            <option name="zee/zir">zee/zir</option>
                        </select><br/>

                        <label className={submitButton}>What do you want your character to do?</label>
                        <input className={buttonField} type="text" placeholder="Take a walk" id="describe" name="action"/><br/><br/>
                        <button
                            className="bg-green-600 hover:animate-bounce hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
                            role="button" onClick={handleSubmit}>Submit
                        </button>
                    </form>
                    ) : (
                        prompt ? (
                            <>
                                <p>{prompt}</p>
                                <br/>
                            </>
                        ) : (
                            <MutatingDots color="#EB4A75" />
                        )
                    )
                }
                {
                    !requireInput && prompt && requireOptions ? (
                        <MutatingDots color="#EB4A75" />
                        ) : (
                        <div className="flex flex-col md:place-content-center">
                            <button className="bg-white rounded-md">{options[1]}</button> <br/>
                            <button className="bg-white rounded-md">{options[2]}</button> <br/>
                            <button className="bg-white rounded-md">{options[3]}</button> <br/>
                            <button className="bg-white rounded-md">{options[4]}</button>
                        </div>
                    )
                }
            </div>
            <footer className="bg-transparent text-center py-4" >
              <div className="container">
                <p className="text-s">Copyright © 2023 StoryWeaver</p>
              </div>
            </footer >
          </main>
        </>
      )
}
