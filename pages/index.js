import Head from 'next/head'
import Header from '../parts/header'
import HeadMeta from '../parts/head-meta'
import Footer from '../parts/footer';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Index = (props) => {

    const { articulos = [] } = props

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

                {articulos.map(
                    ({ titulo = '', slug = '', _updatedAt = '', fecha = '', imagenDestacada, nombreTag, nombreAutor }) =>
                        slug && (

                            <div className="last-article-wrapper pd-lr">
                                <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                    <a className="img">
                                        <div className="img-inner" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                    </a>
                                </Link>
                                <div className="data">
                                    <h6 className="section-title">Último Artículo</h6>
                                    <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                        <a>
                                            <h1 className="featured-title">
                                                {titulo}
                                            </h1>
                                        </a>
                                    </Link>
                                    <h6 className="featured-details">
                                        <span className="hashtags">
                                                <a href="#" title="titulo" className="tag tag-id slug">#{nombreTag}</a>
                                        </span>
                                        <span className="date-author">
                                                Por <a href="#">{nombreAutor}</a>
                                        </span>
                                    </h6>
                                </div>
                            </div>

                        )
                )[0]}

            </section>

            {/* Recientes */}
            <section className="grid-articles">
                <div className="grid-articles-wrapper pd-lr">
                    <header className="section-header">
                        <h6 className="section-title">Recientes</h6>
                    </header>
                    <div className="articles-grid">

                    {articulos.slice(1, 4).map(
                        ({ titulo = '', slug = '', _updatedAt = '', fecha = '', imagenDestacada, nombreTag, nombreAutor }) =>
                            slug && (

                                <div className="item post-class">
                                    <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                        <a>
                                            <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                        </a>
                                    </Link>
                                    <div className="data">
                                        <h6 className="date-tags">
                                        <a href="#" title="name" className="tag tag-id slug">#{nombreTag}</a>
                                        </h6>
                                        <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                            <a>
                                                <h3 className="article-title">
                                                    {titulo}
                                                </h3>
                                            </a>
                                        </Link>
                                        <h6 className="author">
                                            por <a href="#">{nombreAutor}</a>
                                        </h6>
                                    </div>
                                </div>

                            )
                    )}

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

Index.getInitialProps = async () => ({
    articulos: await client.fetch(groq`
      *[_type == "articulo"] | order(_createdAt desc) {titulo, slug, fecha, imagenDestacada, "nombreTag": tag->nombre, "nombreAutor": autor->nombre }[0...4]
    `)
  })

export default Index;