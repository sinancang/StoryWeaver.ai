import styles from '@/styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner'
import axios from 'axios';
import Image from 'next/image'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Navbar() {
    return(
        <div className="bg-black bg-opacity-75 w-full flex justify-between items-center p-4">
            <img src="storyweaver.png" alt="Logo" className="px-5 w-48" />
        </div>
    )
}

export function MainImage() {
    return(
        <div className="p-8">
            <>
                <Image className="rounded-md shadow-2xl"
                       src="/circles.png"
                       alt="13"
                       width={534}
                       height={371}
                       priority
                />
            </>
        </div>
    )
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

export function Form({ submittedFormInfo }) {
    const submitButton = "px-4 rounded-sm";
    const buttonField ="bg-white w-4/12 h-5 rounded-sm text-base px-2";

    const defaultFormInfo = {
        'name': 'Angela',
        'feeling': 'Silly',
        'pronouns': 'she/her',
        'action': 'Take a walk',
    }

    const [formInfo, setFormInfo] = useState(defaultFormInfo);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formInfo['section'] = 'introduction';
        submittedFormInfo(formInfo)
    }

    return(
        <form>
            <label className={submitButton}>What is your name?</label>
            <input className={buttonField} type="text" placeholder={defaultFormInfo['name']} id="name" name="name"
                   onChange={handleChange}/><br/>

            <label className={submitButton}>How do you feel today</label>
            <input className={buttonField} type="text" placeholder={defaultFormInfo['feeling']} id="feeling" name="feeling"
                   onChange={handleChange}/><br/>

            <label className={submitButton}>What are your pronouns?</label>
            <select name="pronouns" className='bg-white rounded-sm text-base px-2' defaultValue={defaultFormInfo['pronouns']}
                    onChange={handleChange}>
                <option name="he/him">he/him</option>
                <option name="she/her">she/her</option>
                <option name="they/them">they/them</option>
                <option name="zee/zir">zee/zir</option>
            </select><br/>

            <label className={submitButton}>What do you want your character to do?</label>
            <input className={buttonField}
                   type="text"
                   placeholder={defaultFormInfo['action']}
                   id="describe"
                   name="action"
                   onChange={handleChange}/><br/><br/>
            <div className="container min-w-full flex flex-col items-center">
                <button
                    className="bg-green-600 animate-bounce hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
                    role="button"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export function PromptBox (props) {
    if (props.prompt != "") {
        return(
            <>
                <div className='col-span-2 bg-slate-50 rounded-xl w-6/12 opacity-85 m-auto'>
                    <p className='px-6 py-6 opacity-100 text-center'>{props.prompt}</p><br/>
                </div>
            </>
        )
    } else {
        return(
            <MutatingDots height="120" width="120" color="#EB4A75"/>
        )
    }
}

export function Options({options, actionTaken}){
    const handleAction =  (e) => {
        const {id} = e.target;
        actionTaken(options[id])
    }

    if (options) {
        return(
            <div className="flex justify-center">
                <button id="1" onClick={handleAction}>{options[1]}</button>
                <button id="2" onClick={handleAction}>{options[2]}</button>
                <button id="3" onClick={handleAction}>{options[3]}</button>
                <button id="4" onClick={handleAction}>{options[4]}</button>
            </div>
        )
    } else {
        return(
            <MutatingDots height="120" width="120" color="#EB4A75" className='m-auto'/>
        )
    }
}

export default function Home() {

    const [showForm, setShowForm] = useState(true);
    const [submittedFormInfo, setSubmittedFormInfo] = useState(null)

    const [prompt, setPrompt] = useState("");

    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState(null);
    const [actionTaken, setActionTaken] = useState(null);

    useEffect(() => {
        async function fetchPrompt() {
            if (submittedFormInfo != null) {
                setShowForm(false)
                const response_API = await axios.post('/api/cohere', submittedFormInfo);
                setPrompt(JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g, " "))
                setShowOptions(true)
            }
        }
        fetchPrompt();
    }, [submittedFormInfo]);

    useEffect(() => {
        async function fetchOptions() {
            if (showOptions != false) {
                setShowForm(false)
                const response_API = await axios.post('/api/cohere', submittedFormInfo);
                const optionsRaw = JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g,"\n")
                const index = /\d\./
                setOptions(optionsRaw.split(index))
                console.log(optionsRaw)
            }
        }
        fetchOptions();
    }, [showOptions]);

    const fetchOptions = async () => {
        formInfo['section'] = 'option';
        const response_API = await axios.post('/api/cohere', formInfo);
        const optionsRaw = JSON.stringify(response_API.data.text).replace(/['"]+/g, '').replace(/\\n/g,"\n")

        const index = /\d\./
        setOptions(optionsRaw.split(index))
        setRequireOptions(false)
    }

    return (
        <>
            <main className={styles.main}>
                <Navbar />
                <MainImage />

                <div className="flex justify-evenly flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 py-9 px-4 rounded-md text-black focus:outline-none focus:shadow-outline-blue colorbg-midnight leading-8 h-100 w-100">
                    <ToastInfoNarration />
                    {
                        showForm ? (
                            <Form submittedFormInfo={setSubmittedFormInfo}/>
                        ) : (
                            <PromptBox prompt={prompt}/>
                        )
                    }
                    {
                        showOptions ? (
                            <Options options={options} actionTaken={setActionTaken}/>
                        ) : (<div/>)
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
