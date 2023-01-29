import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner'
import axios from 'axios';
import Image from 'next/image'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Iframe from 'react-iframe'


// import P5Wrapper from 'react-p5-wrapper';
// import sketch from '../sketch/sketch.cjs';

const inter = Inter({ subsets: ['latin'] })

export function ToastInfoArt() {
    const notify = () => toast.info('Feel free to interact with the art by clicking ' +
        'with your mouse pressing the spacebar. More info in the about page.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    return (
        <div>
            {/* <BsFillInfoCircleFill className="flex " onClick={notify} /> */}
            <Image className="rounded-md" src="/info.png"
                width={15}
                height={15}
                priority
                onClick={notify}
            />
            <ToastContainer className="text-sm" />
        </div>
    );
}
export function ToastInfoNarration() {
    const notify = () => toast.info('You set the stage! Enter some information about ' +
        'your story to get a personalized narration experience', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    return (
        <div>
            <Image className="rounded-md" src="/info.png"
            width={15}
            height={15}
            priority 
            onClick={notify}
            />
            <ToastContainer className="text-sm"/>
        </div>
    );
}

export default function Home() {

    const submitButton = "px-4 rounded-sm";
    const buttonField ="bg-white w-4/12 h-5 rounded-sm text-base px-2";
    // var optionsBubble = "";
    // var bubbleDiv = "";
    // var bubbleSpacer ="px-0 py-0 max-h-0";

    const defaultFormInfo = {
        'name': 'Angela',
        'feeling': 'Silly',
        'pronouns': 'she/her',
        'action': 'Take a walk',
    }
    const [optionChosen, setOptionChosen] = useState(-1)
    const [options, setOptions] = useState({})
    const [requireOptions, setRequireOptions] = useState(true)
    const [requireInput, setRequireInput] = useState(true);
    const [prompt, setPrompt] = useState(null);
    const [promptHistory, setPromptHistory] = useState(null);
    const [formInfo, setFormInfo] = useState(defaultFormInfo);
    const [buttonSettings,setButtonSettings]=useState("");
    const [bubbleSpacer, setBubbleSpacer] = useState("max-h-0");
    const [bubbleDiv, setBubbleDiv] = useState("");

    useEffect(() => {
        console.log(optionChosen)
    }, [optionChosen]);


    const fetchInitialPrompt = async () => {
        setRequireInput(false);
        formInfo['section'] = 'introduction';
        formInfo['promptHistory'] = '';
        const response_API = await axios.post('/api/cohere', formInfo);
        setPrompt(JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g," "));
        setPromptHistory(prompt)
        fetchOptions()
    }

    const updateBubbles = async () => {
        // setButtonSettings("bg-white rounded-md hover:bg-gray-200 max-w-md py-2 px-5");
        
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
        setButtonSettings("bg-white rounded-md hover:bg-gray-200 max-w-md py-2 px-5")
        setBubbleSpacer("flex flex-col md:place-content-center container min-w-full items-center")
        setBubbleDiv("my-2")
    }

    const handleSubmit = (e) => {
        const {name, value} = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
        fetchInitialPrompt()
        updateBubbles()
    }

    const handleAction = (e) => {
        const {name, value} = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
        fetchPrompt()
    }

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

            <title>StoryWeaver</title>
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
                  priority
                /> */}
                <>
                    <Iframe url="http://davidholcer.com/assets/works/movingPoints/index.html"
                            width="1000px"
                            height="500px"
                            id=""
                            className="rounded-md px-2 py-8"
                            display="block"
                            position="relative" />
                    <ToastInfoArt />
                </>
              {/* <P5Wrapper sketch={sketch} ></P5Wrapper>; */}

              </div>
            </div>

          <div className="bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 py-9 px-4 rounded-md text-black focus:outline-none focus:shadow-outline-blue colorbg-midnight leading-8 h-100 w-100">
                <ToastInfoNarration />
                {
                    requireInput ? (
                    <form method="post">
                        <label className={submitButton}>What is your name?</label>
                        <input className={buttonField} type="text" placeholder="Angela" id="name" name="name"/><br/>

                        <label className={submitButton}>How do you feel today</label>
                        <input className={buttonField} type="text" placeholder="Silly" id="feeling" name="feeling"/><br/>

                        <label className={submitButton}>What are your pronouns?</label>
                        <select name="pronouns" className='bg-white rounded-sm text-base px-2' defaultValue="she/her">
                            <option name="he/him">he/him</option>
                            <option name="she/her" selected>she/her</option>
                            <option name="they/them">they/them</option>
                            <option name="zee/zir">zee/zir</option>
                        </select><br/>

                        <label className={submitButton}>What do you want your character to do?</label>
                        <input className={buttonField} type="text" placeholder="Take a walk" id="describe" name="action"/><br/><br/>
                  <div class="container min-w-full flex flex-col items-center">
                        <button
                            className="bg-green-600 hover:animate-bounce hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
                            role="button" onClick={handleSubmit}>Submit
                        </button>
                        </div>
                    </form>
                    ) : (
                        prompt ? (
                            <>
                                <p>{prompt}</p>
                                <br/>
                            </>
                        ) : (
                            <MutatingDots height="120" width="120" color="#EB4A75" />
                        )
                    )
                }
                {
                    !requireInput && prompt && requireOptions ? (
                        <MutatingDots height="120" width="120" color="#EB4A75" />
                        ) : (

                        <div className={bubbleSpacer}>
                            <button className={buttonSettings} onClick={() => setOptionChosen(1)}>{options[1]}</button>
                            <div className={bubbleDiv}></div>
                            <button className={buttonSettings} onClick={() => setOptionChosen(2)}>{options[2]}</button>
                            <div className={bubbleDiv}></div>
                            <button className={buttonSettings} onClick={() => setOptionChosen(3)}>{options[3]}</button>
                            <div className={bubbleDiv}></div>
                            <button className={buttonSettings} onClick={() => setOptionChosen(4)}>{options[4]}</button>
                        </div>
                    )
                }
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
