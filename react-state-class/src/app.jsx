import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Counter from './assets/Counter'
import LikeButton from './assets/LikeButton'
export function App() {
   return(
     <>
    <h1>States in react</h1>
    <LikeButton/>
    </>
   );
}
