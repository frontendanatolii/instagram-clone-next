'use client'

import React from 'react'
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import { userState } from "../atom/userAtom";
import { useRecoilState } from "recoil";

export default function Feed() {
  const [currentUser] = useRecoilState(userState)
  return (
    <main className={`grid ${currentUser ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto": "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}  `}>
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}

          <MiniProfile />
          {/* Suggestions */}

          <Suggestions />
        </div>
      </section>
    </main>
  );
}
