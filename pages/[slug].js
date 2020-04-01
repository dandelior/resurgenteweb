import Head from 'next/head'
import Header from '../parts/header'
import HeadMeta from '../parts/head-meta'
import Footer from '../parts/footer';
import client from '../client'
import Link from 'next/link'
// import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import moment from 'moment'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function Article(props) {

    // render() {
        const { articulo } = props
        const { pagina } = props

        if (articulo.slug) {
            return (
                <>
                    <Head>
                        <title>{articulo.titulo} — Resurgente</title>
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
                                <Link href="/tag/[articulo.slugTag]" as={`/tag/${articulo.slugTag.current}`}>
                                    <a className="tag tag-id slug">#{articulo.nombreTag}</a>
                                </Link>
                            </h6>
                            <h1 className="article-title">
                                {articulo.titulo}
                            </h1>
                            <h6 className="date-author">
                                {moment(articulo.fecha).locale('es').format('LL')}<br />
                                <span>Por <Link href="/autor/[articulo.slugAutor]" as={`/autor/${articulo.slugAutor.current}`}><a>{articulo.nombreAutor}</a></Link>
                                </span>
                            </h6>
                        </header>
                        
                        <div className="img pd-lr">
                            <div className="img-inner" style={{ backgroundImage: 'url(' + urlFor(articulo.imagenDestacada).url() + ')' }}></div>
                        </div>
    
                        <div className="article-body pd-lr">
    
                            <BlockContent blocks={articulo.contenido} {...client.config()} />
    
                        </div>
    
                    </article>
    
                    <Footer />
    
                </>
            )
        } else if (pagina.slug) {
            return (
                <>
                    <Head>
                        <title>{pagina.titulo} — Resurgente</title>
                        <HeadMeta/>
                        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                        <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                        <link href="/css/app.css" rel="stylesheet"></link>
                    </Head>
    
                    <Header />
    
                    {/* La Página */}
                    <section className="page">
                        <section className="page-header">
                            <div className="page-header-inner pd-lr">
                                <h1>
                                    {pagina.titulo}
                                </h1>
                            </div>
                        </section>

                        <section className="page-body">
                            <div className="page-body-inner pd-lr">
                                <BlockContent blocks={pagina.contenido} {...client.config()} />
                            </div>
                        </section>
                    </section>
    
                    <Footer />
    
                </>
            )
        } else {
            return (
                <>
                    <Head>
                        <title>404 — Resurgente</title>
                        <HeadMeta/>
                        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                        <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                        <link href="/css/app.css" rel="stylesheet"></link>
                    </Head>

                    <p>404</p>

                    <Footer />
                </>
            )
        }

}

const articuloQuery = `
    *[_type == "articulo" && slug.current == $slug][0]{
        titulo, 
        fecha, 
        contenido, 
        imagenDestacada, 
        "nombreTag": tag->nombre, 
        "slugTag": tag->slug, 
        "nombreAutor": autor->nombre, 
        "slugAutor": autor->slug, 
        slug
    }
`

const paginaQuery = `
    *[_type == "pagina" && slug.current == $slug][0]{
        titulo, 
        contenido, 
        slug
    }
`

Article.getInitialProps = async ({ query: { slug } }) => ({
    articulo: await client.fetch(articuloQuery, {
        slug
    }),
    pagina: await client.fetch(paginaQuery, {
        slug
    })
})

export default Article;