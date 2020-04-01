import Head from 'next/head'
import HeadMeta from '../parts/head-meta'

const Index = () => {

    return (
        <>
            <Head>
                <title>Resurgente — Fe y Cultura</title>
                <HeadMeta/>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                <link href="/css/app.css" rel="stylesheet"></link>
            </Head>

            <div className="coming-soon">
                <p>Coming Soon</p>
            </div>

        </>
    )
}

export default Index;