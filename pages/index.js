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
                    <title>Resurgente — Fe y Cultura</title>
                    <HeadMeta/>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                    <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                    <link href="/css/app.css" rel="stylesheet"></link>
                </Head>

                <Header />

                {/* Last Article */}
                <section className="last-article">

                    <div className="last-article-wrapper pd-lr">
                        <a href="#" className="img">
                                <div className="img-inner" style={{ backgroundImage: 'url()' }}></div>
                        </a>
                        <div className="data">
                            <h6 className="section-title">Último Artículo</h6>
                            <a href="#">
                                <h1 className="featured-title">
                                    Titulo
                                </h1>
                            </a>
                            <h6 className="featured-details">
                                <span className="hashtags">
                                        <a href="#" title="titulo" className="tag tag-id slug">#tag</a>
                                </span>
                                <span className="date-author">
                                        <a href="#">autor</a>
                                </span>
                            </h6>
                        </div>
                    </div>

                </section>

                {/* Recientes */}
                <section className="grid-articles">
                    <div className="grid-articles-wrapper pd-lr">
                        <header className="section-header">
                            <h6 className="section-title">Recientes</h6>
                        </header>
                        <div className="articles-grid">

                            <div className="item post-class">
                                <a href="#">
                                    <div className="img" style={{ backgroundImage: 'url()' }}></div>
                                </a>
                                <div className="data">
                                    <h6 className="date-tags">
                                        <a href="#" title="name" className="tag tag-id slug">#tag</a>
                                    </h6>
                                    <a href="#">
                                        <h3 className="article-title">
                                            Titulo
                                        </h3>
                                    </a>
                                    <h6 className="author">
                                        por 
                                        <a href="#">Nombre author</a>
                                    </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Artículo Destacado */}
                <a href="#">
                    <section className="featured-article" style={{ backgroundImage: 'url()' }}>
                        <div className="wrapper-featured-article pd-lr">
                            <h6 className="date-tags">
                                15 de Marzo, 2019 — 
                                #tag
                            </h6>
                            <h3 className="article-title">
                                Titulo
                            </h3>
                            <h6 className="author">
                                por 
                                nombre autor
                            </h6>
                        </div>
                    </section>
                </a>

                {/* Grid Categoría */}
                <section className="grid-articles">
                    <div className="grid-articles-wrapper pd-lr">
                        <header className="section-header">
                            <h6 className="section-title">#FE</h6>
                            <a href="/tag/fe">Ver Todos</a>
                        </header>
                        <div className="articles-grid">

                            <div className="item post-class">
                                <a href="#">
                                    <div className="img" style={{ backgroundImage: 'url()' }}></div>
                                </a>
                                <div className="data">
                                    <h6 className="date-tags">
                                        <a href="#" title="nombre" className="tag tag-id slug">#tag</a>
                                    </h6>
                                    <a href="#">
                                        <h3 className="article-title">
                                            Titulo
                                        </h3>
                                    </a>
                                    <h6 className="author">
                                        por 
                                        <a href="#">nombre autor</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Grid Categoría */}
                <section className="grid-articles">
                    <div className="grid-articles-wrapper pd-lr">
                        <header className="section-header">
                            <h6 className="section-title">#VIDA</h6>
                            <a href="/tag/fe">Ver Todos</a>
                        </header>
                        <div className="articles-grid">

                            <div className="item post-class">
                                <a href="#">
                                    <div className="img" style={{ backgroundImage: 'url()' }}></div>
                                </a>
                                <div className="data">
                                    <h6 className="date-tags">
                                        <a href="#" title="nombre" className="tag tag-id slug">#tag</a>
                                    </h6>
                                    <a href="#">
                                        <h3 className="article-title">
                                            Titulo
                                        </h3>
                                    </a>
                                    <h6 className="author">
                                        por 
                                        <a href="#">nombre autor</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Grid Categoría */}
                <section className="grid-articles">
                    <div className="grid-articles-wrapper pd-lr">
                        <header className="section-header">
                            <h6 className="section-title">#CULTURA</h6>
                            <a href="/tag/fe">Ver Todos</a>
                        </header>
                        <div className="articles-grid">

                            <div className="item post-class">
                                <a href="#">
                                    <div className="img" style={{ backgroundImage: 'url()' }}></div>
                                </a>
                                <div className="data">
                                    <h6 className="date-tags">
                                        <a href="#" title="nombre" className="tag tag-id slug">#tag</a>
                                    </h6>
                                    <a href="#">
                                        <h3 className="article-title">
                                            Titulo
                                        </h3>
                                    </a>
                                    <h6 className="author">
                                        por 
                                        <a href="#">nombre autor</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />

            </>
        )
    }
}

export default Index;