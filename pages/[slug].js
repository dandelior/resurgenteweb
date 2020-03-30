import Head from 'next/head'
import Header from '../parts/header'
import HeadMeta from '../parts/head-meta'
import Footer from '../parts/footer';
import client from '../client'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            slug,
            titulo, 
            fecha, 
            contenido, 
            imagenDestacada, 
            nombreTag, 
            nombreAutor
        } = this.props

        return (
            <>
                <Head>
                    <title>{titulo} — Fe y Cultura</title>
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
                            <a href="#" title="nombre" className="tag tag-id slug">#{nombreTag}</a>
                        </h6>
                        <h1 className="article-title">
                            {titulo}
                        </h1>
                        <h6 className="date-author">
                            <span>por <a href="#">{nombreAutor}</a>
                            </span>
                        </h6>
                    </header>
                    
                    <div className="img pd-lr">
                        <div className="img-inner" style={{ backgroundImage: 'url(' + urlFor(imagenDestacada).url() + ')' }}></div>
                    </div>

                    <div className="article-body pd-lr">

                        {/* Contenido */}
                        <BlockContent blocks={contenido} {...client.config()} />

                    </div>

                    
                </article>

                <Footer />

            </>
        )
    }
}

const query = groq`*[_type == "articulo" && slug.current == $slug][0]{
    titulo, 
    fecha, 
    contenido, 
    imagenDestacada, 
    "nombreTag": tag->nombre, 
    "nombreAutor": autor->nombre, 
    slug
  }`

Article.getInitialProps = async function (context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, {
        slug
    })
}

export default Article;