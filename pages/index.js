import Head from 'next/head'
import Header from '../parts/header'
import HeadMeta from '../parts/head-meta'
import Footer from '../parts/footer';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'
import HeadScripts from '../parts/head-scripts';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Index = (props) => {

    const { articulos = [] } = props
    const { lastfeatured = [] } = props
    const { articulosFe = [] } = props
    const { articulosVida = [] } = props
    const { articulosCultura = [] } = props

    return (
        <>
            <Head>
                <title>Resurgente — Fe y Cultura</title>
                <HeadMeta/>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                <link href="/css/app.css" rel="stylesheet"></link>
                <HeadScripts />
            </Head>

            <Header />

            {/* Last Article */}
            <section className="last-article">

                {articulos.map(
                    ({ titulo = '', slug = '', _updatedAt = '', fecha, imagenDestacada, nombreTag, slugTag, nombreAutor, slugAutor }) =>
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
                                                <Link href="/tag/[slugTag]" as={`/tag/${slugTag.current}`}>
                                                    <a title="titulo" className="tag tag-id slug">#{nombreTag}</a>
                                                </Link>
                                        </span>
                                        <span className="date-author">
                                            {moment(fecha).locale('es').format('LL')} — Por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}><a>{nombreAutor}</a></Link> 
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
                        ({ titulo = '', slug = '', _updatedAt = '', fecha, imagenDestacada, nombreTag, slugTag, nombreAutor, slugAutor }) =>
                            slug && (

                                <div className="item post-class" key={slug.current}>
                                    <Link href="[slug]" as={`${slug.current}`}>
                                        <a>
                                            <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                        </a>
                                    </Link>
                                    <div className="data">
                                        <h6 className="date-tags">
                                            {moment(fecha).locale('es').format('LL')}&nbsp;—&nbsp;
                                        <Link href="/tag/[slugTag]" as={`/tag/${slugTag.current}`}>
                                            <a className="tag tag-id slug">#{nombreTag}</a>
                                        </Link>
                                        </h6>
                                        <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                            <a>
                                                <h3 className="article-title">

                                                    {titulo}
                                                    
                                                </h3>
                                            </a>
                                        </Link>
                                        <h6 className="author">
                                            por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}><a>{nombreAutor}</a></Link> 
                                        </h6>
                                    </div>
                                </div>

                            )
                    )}

                    </div>
                </div>
            </section>

            {/* Artículo Destacado */}
            {lastfeatured.map(
                ({ titulo = '', slug = '', _updatedAt = '', esDestacado, fecha, imagenDestacada, nombreTag, nombreAutor }) =>
                    {
                        // if (esDestacado) {
                            return (                            
                                <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                    <a>
                                        <section className="featured-article" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}>
                                            <div className="wrapper-featured-article pd-lr">
                                                <h6 className="date-tags">
                                                    {moment(fecha).locale('es').format('LL')}
                                                </h6>
                                                <h3 className="article-title">
                                                    {titulo}
                                                </h3>
                                                <h6 className="author">
                                                    por {nombreAutor}
                                                </h6>
                                            </div>
                                        </section>
                                    </a>
                                </Link>
                            )
                        // }
                    }
            )[0]}

            {/* Grid Categoría */}
            <section className="grid-articles">
                <div className="grid-articles-wrapper pd-lr">
                    <header className="section-header">
                        <h6 className="section-title">#FE</h6>
                        <a href="/tag/fe">Ver Todos</a>
                    </header>
                    <div className="articles-grid">

                        {articulosFe.map(
                            ({ titulo = '', slug = '', _updatedAt = '', fecha, imagenDestacada, nombreTag, nombreAutor, slugAutor }) =>
                                slug && (

                                    <div className="item post-class" key={slug.current}>
                                        <Link href="[slug]" as={`${slug.current}`}>
                                            <a>
                                                <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                            </a>
                                        </Link>
                                        <div className="data">
                                            <h6 className="date-tags">
                                                {moment(fecha).locale('es').format('LL')}
                                            </h6>
                                            <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                                <a>
                                                    <h3 className="article-title">
                                                        {titulo}
                                                    </h3>
                                                </a>
                                            </Link>
                                            <h6 className="author">
                                                Por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}><a>{nombreAutor}</a></Link> 
                                            </h6>
                                        </div>
                                    </div>

                                )
                        )}

                    </div>
                </div>
            </section>

            {/* Grid Categoría */}
            <section className="grid-articles">
                <div className="grid-articles-wrapper pd-lr">
                    <header className="section-header">
                        <h6 className="section-title">#VIDA</h6>
                        <a href="/tag/vida">Ver Todos</a>
                    </header>
                    <div className="articles-grid">

                        {articulosVida.map(
                            ({ titulo = '', slug = '', _updatedAt = '', fecha, imagenDestacada, nombreTag, nombreAutor, slugAutor }) =>
                                slug && (

                                    <div className="item post-class" key={slug.current}>
                                        <Link href="[slug]" as={`${slug.current}`}>
                                            <a>
                                                <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                            </a>
                                        </Link>
                                        <div className="data">
                                            <h6 className="date-tags">
                                                {moment(fecha).locale('es').format('LL')}
                                            </h6>
                                            <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                                <a>
                                                    <h3 className="article-title">
                                                        {titulo}
                                                    </h3>
                                                </a>
                                            </Link>
                                            <h6 className="author">
                                                Por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}><a>{nombreAutor}</a></Link> 
                                            </h6>
                                        </div>
                                    </div>

                                )
                        )}

                    </div>
                </div>
            </section>

            {/* Grid Categoría */}
            <section className="grid-articles">
                <div className="grid-articles-wrapper pd-lr">
                    <header className="section-header">
                        <h6 className="section-title">#CULTURA</h6>
                        <a href="/tag/cultura">Ver Todos</a>
                    </header>
                    <div className="articles-grid">

                        {articulosCultura.map(
                            ({ titulo = '', slug = '', _updatedAt = '', fecha, imagenDestacada, nombreTag, nombreAutor, slugAutor }) =>
                                slug && (

                                    <div className="item post-class" key={slug.current}>
                                        <Link href="[slug]" as={`${slug.current}`}>
                                            <a>
                                                <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                            </a>
                                        </Link>
                                        <div className="data">
                                            <h6 className="date-tags">
                                                {moment(fecha).locale('es').format('LL')}
                                            </h6>
                                            <Link href="[slug]" as={`${slug.current}`} key={slug.current}>
                                                <a>
                                                    <h3 className="article-title">
                                                        {titulo}
                                                    </h3>
                                                </a>
                                            </Link>
                                            <h6 className="author">
                                                Por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}><a>{nombreAutor}</a></Link> 
                                            </h6>
                                        </div>
                                    </div>

                                )
                        )}

                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

Index.getInitialProps = async () => ({
    articulos: await client.fetch(groq`
        *[_type == "articulo"] | order(_createdAt desc) {
            titulo, slug, fecha, imagenDestacada, esDestacado, "nombreTag": tag->nombre, "slugTag": tag->slug, "nombreAutor": autor->nombre, "slugAutor": autor->slug
        }[0...4]
    `),
    articulosFe: await client.fetch(groq`
        *[_type == "articulo" && tag->nombre == "Fe"] | order(_createdAt desc) {
            titulo, slug, fecha, imagenDestacada, esDestacado, "nombreTag": tag->nombre, "nombreAutor": autor->nombre, "slugAutor": autor->slug
        }[0...3]
    `),
    articulosVida: await client.fetch(groq`
        *[_type == "articulo" && tag->nombre == "Vida"] | order(_createdAt desc) {
            titulo, slug, fecha, imagenDestacada, esDestacado, "nombreTag": tag->nombre, "nombreAutor": autor->nombre, "slugAutor": autor->slug
        }[0...3]
    `),
    articulosCultura: await client.fetch(groq`
        *[_type == "articulo" && tag->nombre == "Cultura"] | order(_createdAt desc) {
            titulo, slug, fecha, imagenDestacada, esDestacado, "nombreTag": tag->nombre, "nombreAutor": autor->nombre, "slugAutor": autor->slug
        }[0...3]
    `),
    lastfeatured: await client.fetch(groq`
        *[_type == "articulo" && esDestacado == true] | order(_createdAt desc) {
            titulo, slug, fecha, imagenDestacada, esDestacado, "nombreTag": tag->nombre, "nombreAutor": autor->nombre
        }[0...1]
    `)
})

export default Index;