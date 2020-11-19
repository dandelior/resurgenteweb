import { Component } from 'react';
import Head from 'next/head'
import Header from '../../parts/header'
import HeadMeta from '../../parts/head-meta'
import Footer from '../../parts/footer';
import Link from 'next/link';
// import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

class Tag extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { articulos  = [] } = this.props;

        const nombreTag = articulos[0].nombre
        const articulosTag = articulos[0].articulo
    
        return (
            <>
                <Head>
                    <title>#{nombreTag} — Resurgente</title>
                    <HeadMeta/>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                    <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                    <link href="/css/app.css" rel="stylesheet"></link>
                </Head>
    
                <Header />
    
                <section className="grid-articles grid-on-category">
                    <div className="grid-articles-wrapper pd-lr">
                        <header className="section-header">
                            <h6 className="section-title">#{nombreTag}</h6>
                        </header>
                        <div className="articles-grid">
    
                            {articulosTag.map(
                                ({ _id, titulo, fecha, imagenDestacada, nombreAutor, slugAutor, slug }) =>
                                    slug && (
                                        <div className="item" key={slug.current}>
                                            <Link href="/[slug]" as={`/${slug.current}`}>
                                                <a>
                                                    <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                                </a>
                                            </Link>
                                            <div className="data">
                                                <Link href="/[slug]" as={`/${slug.current}`} key={slug.current}>
                                                    <a>
                                                        <h3 className="article-title">
                                                            {titulo}
                                                        </h3>
                                                    </a>
                                                </Link>
                                                <h6 className="author">
                                                    {moment(fecha).locale('es').format('LL')} — por <Link href="/autor/[slugAutor]" as={`/autor/${slugAutor.current}`}>
                                                        <a>{nombreAutor}</a>
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    )
                            )}
    
                        </div>
    
                    </div>
                    {/* pagination */}
                    {/* <button onClick={this.loadMore}>Cargar mas...</button>   */}
                    <button>Cargar mas...</button>  
                </section>
    
                <Footer />
            </>
        )
    }
}

const loadMoreQuery = `
    *[_type == "tag" && slug.current == "fe"] {
        nombre,
        "articulo": *[_type == "articulo" && references(^._id)] | order(_updatedAt desc){
            titulo,
            fecha,
            imagenDestacada,
            "nombreAutor": autor->nombre, 
            "slugAutor": autor->slug, 
            slug
        }[10...18]
    }
`

const theQuery = `
    *[_type == "tag" && slug.current == $slug] {
        nombre,
        "articulo": *[_type == "articulo" && references(^._id)] | order(_updatedAt desc){
            titulo,
            fecha,
            imagenDestacada,
            "nombreAutor": autor->nombre, 
            "slugAutor": autor->slug, 
            slug
        }[0...9]
    }
`

Tag.getInitialProps = async ({ query: { slug } }) => ({
    articulos: await client.fetch(theQuery, {
        slug
    })
})

export default Tag;