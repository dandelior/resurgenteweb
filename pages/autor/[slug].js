import Head from 'next/head'
import Header from '../../parts/header'
import HeadMeta from '../../parts/head-meta'
import Footer from '../../parts/footer';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function Autor(props) {

    const { 
        articulos  = [] 
    } = props

    const nombreAutor = articulos[0].nombre
    const articulosAutor = articulos[0].articulo

    // console.log(articulos);

    return (
        <>
            <Head>
                <title>{nombreAutor} — Fe y Cultura</title>
                <HeadMeta/>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                <link href="/css/app.css" rel="stylesheet"></link>
            </Head>

            <Header />

            <section className="grid-articles grid-on-category">
                <div className="grid-articles-wrapper pd-lr">

                    <header className="section-header more-padding">
                        <h6 className="section-title center">
                            Escrito por {nombreAutor}
                        </h6>
                    </header>

                    <div className="articles-grid">

                        {articulosAutor.map(
                            ({ _id, titulo, fecha, imagenDestacada, nombreTag, slugTag, slug }) =>
                                slug && (
                                    <div className="item" key={slug.current}>
                                        <Link href="/[slug]" as={`/${slug.current}`}>
                                            <a>
                                                <div className="img" style={{ backgroundImage: 'url('+urlFor(imagenDestacada).url()+')' }}></div>
                                            </a>
                                        </Link>
                                        <div className="data">
                                            <h6 className="date-tags">
                                                <Link href="/tag/[slugTag]" as={`/tag/${slugTag.current}`}>
                                                    <a title="titulo" className="tag tag-id slug">#{nombreTag}</a>
                                                </Link>
                                            </h6>
                                            <Link href="/[slug]" as={`/${slug.current}`} key={slug.current}>
                                                <a>
                                                    <h3 className="article-title">
                                                        {titulo}
                                                    </h3>
                                                </a>
                                            </Link>
                                            <h6 className="author">
                                                {moment(fecha).locale('es').format('LL')}
                                            </h6>
                                        </div>
                                    </div>
                                )
                        )}

                    </div>

                </div>
                {/* pagination */}
            </section>

            <Footer />
        </>
    )
}

const theQuery = `
    *[_type == "autor" && slug.current == $slug] {
        nombre,
        "articulo": *[_type == "articulo" && references(^._id)] | order(_updatedAt desc){
            titulo,
            fecha,
            imagenDestacada,
            "nombreTag": tag->nombre, 
            "slugTag": tag->slug,
            slug
        }
    }
`

Autor.getInitialProps = async ({ query: { slug } }) => ({
    articulos: await client.fetch(theQuery, {slug})
})

export default Autor;