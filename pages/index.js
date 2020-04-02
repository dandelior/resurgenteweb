import Head from 'next/head'
import HeadMeta from '../parts/head-meta'

const Index = () => {

    return (
        <>
            <Head>
                <title>Resurgente — Fe y Cultura</title>
                <HeadMeta/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
            </Head>

            <div className="coming-soon">
                <div className="content">
                    <img className="icon" src="/img/icon.png" />
                    <h3>Resurgente.com volverá pronto</h3>
                    <p>
                        Por el momento, Resurgente.com se encuentra inactivo, estamos migrando el contenido a un entorno que nos permita mantener el proyecto con vida. Sentimos los inconvenientes.
                    </p>
                </div>
            </div>

            <style jsx>{`
                html, body {
                    overflow: hidden;
                }
                @font-face {
                    font-family: 'Tiempos Headline Bold';
                    src: url("./../fonts/TiemposHeadline-Semibold.eot");
                    src: url("./../fonts/TiemposHeadline-Semibold.eot?#iefix") format("embedded-opentype"), url("./../fonts/TiemposHeadline-Semibold.woff2") format("woff2"), url("./../fonts/TiemposHeadline-Semibold.woff") format("woff"), url("./../fonts/TiemposHeadline-Semibold.ttf") format("truetype"), url("./../fonts/TiemposHeadline-Semibold.svg#TiemposHeadline-Semibold") format("svg");
                    font-weight: 600;
                    font-style: normal;
                }         
                .coming-soon {
                    position: relative;
                    width: 50%;
                    height: 100vh;
                    text-align: center;
                    margin: auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }
                .content {
                    border: solid 1px #e0e0e0;
                    padding: 14% 12%;
                    box-sizing: border-box;
                }
                .icon {
                    margin-bottom: 8px;
                    width: 100px;
                }
                h3 {
                    width: 100%;
                    font-family: 'Tiempos Headline Bold', serif;
                    font-size: 1.6em;
                    margin-top: 0;
                    margin-bottom: 22px;
                    color: #454444;
                }
                p {
                    font-size: 0.95em;
                    line-height: 130%;
                    font-family: 'Inconsolata', monospace;
                }
            `}</style>

        </>
    )
}

export default Index;