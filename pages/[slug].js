import Head from 'next/head'
import Header from '../parts/header'
import HeadMeta from '../parts/head-meta'
import Footer from '../parts/footer';

class Index extends React.Component {
    // constructor(props) {
    // }

    render() {
        return (
            <>
                <Head>
                    <title>Post — Fe y Cultura</title>
                    <HeadMeta/>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                    <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                    <link href="/css/app.css" rel="stylesheet"></link>
                </Head>

                <Header />

                {/* El Post */}
                <article className="the-article">

                    <header className="article-header">
                        <h6 className="hashtags">
                            <a href="#" title="nombre" className="tag tag-id slug">#tag</a>
                        </h6>
                        <h1 className="article-title">
                            Título del Post
                        </h1>
                        <h6 className="date-author">
                            <span>por 
                                <a href="#">nombre del autor</a>
                            </span>
                        </h6>
                    </header>
                    
                    <div className="img pd-lr">
                        <div className="img-inner" style={{ backgroundImage: 'url()' }}></div>
                    </div>

                    <div className="article-body pd-lr">

                        Contenido

                    </div>

                    
                </article>

                <Footer />

            </>
        )
    }
}

export default Index;