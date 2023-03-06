import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useParallel, PassportButton } from '@parallelmarkets/react'
import { useState, useEffect } from 'react'

export default function Home() {

  const { parallel, loginStatus } = useParallel()

  useEffect(() => {
    // user isn't authenticated or library isn't loaded yet
    if (loginStatus?.status === 'connected') {
      parallel.api('/identity', (response) => console.log('Identity Response:', response))
    }

  }, [parallel, loginStatus])


  if (!loginStatus) return null

  return (
    <>
      <Head>
        <title>Parallel Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div >
          <h1>Parallel Markets Demo</h1>

          <h2>Status: {loginStatus.status}</h2>
          {/* Only show the login button if the user hasn't logged in yet */}
          {loginStatus.status !== 'connected' ? (
            <PassportButton />
          ) : (
            <button onClick={parallel.logout}>Log Out</button>
          )}




        </div>


      </main>
    </>
  )
}
