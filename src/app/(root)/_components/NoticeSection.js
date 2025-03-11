"use client"

import React, { useEffect } from 'react'
import BulletinBoard from './BulletinBoard'
import { Tweet } from 'react-tweet'
import { InstaPosts, Tweets } from '@/data/NoticeData'

const NoticeSection = () => {
    useEffect(() => {
        window.twttr?.widgets?.load();
    }, []);
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-6 gap-4'>
            <div>
                <BulletinBoard />
            </div>
            <div className=' w-full  h-full border-1 border-border overflow-hidden' style={{ border: "4px solid hsl(207,79%,21%)" }}>
                <nav>
                    <h1
                        className="w-full text-xl text-white bg-[hsl(200,100%,10%)] p-3"
                        style={{ fontFamily: "'Chivo', sans-serif" }}
                    >
                        Twitter
                    </h1>
                </nav>
                <div className='h-[470px] w-full overflow-y-scroll p-2'>
                    {
                        Tweets.map((tweet) => (
                            <div className="flex justify-center items-center w-full light" key={tweet.id}>
                                <Tweet id={tweet.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=' w-full  h-full border-1 border-border overflow-hidden' style={{ border: "4px solid hsl(207,79%,21%)" }}>
                <nav>
                    <h1
                        className="w-full text-xl text-white bg-[hsl(200,100%,10%)] p-3"
                        style={{ fontFamily: "'Chivo', sans-serif" }}
                    >
                        Instagram
                    </h1>
                </nav>
                <div className='h-[470px] w-full overflow-y-scroll p-2'>
                    {
                        InstaPosts.map((post) => (
                            <blockquote
                                className="instagram-media"
                                key={post.id}
                                data-instgrm-permalink={post.link}
                                data-instgrm-version="14"
                                style={{ width: "100%", minHeight: "500px" }}
                            ></blockquote>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NoticeSection