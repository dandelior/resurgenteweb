import Head from 'next/head'
import Header from '../../parts/header'
import HeadMeta from '../../parts/head-meta'
import Footer from '../../parts/footer';
import Link from 'next/link';
// import { useRouter } from 'next/router'
import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Tag = (props) => {

    // const router = useRouter()
    // const routerSlug = router.query.slug
    // const { articulos = [] } = props
    // console.log(articulos);
    const { titulo = 'Missing title', nombreAutor = 'Missing name' } = props

    return (
        <>
            <Head>
                <title>{titulo} — Resurgente</title>
                <HeadMeta/>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Merriweather:300,300i,700,700i&display=swap" rel="stylesheet"></link>
                <link href="/css/hamburger.min.css" rel="stylesheet"></link>
                <link href="/css/app.css" rel="stylesheet"></link>
            </Head>

            <Header />

            <section className="grid-articles grid-on-category">
                <div className="grid-articles-wrapper pd-lr">
                    <header className="section-header">
                        <h6 className="section-title">#tag</h6>
                    </header>
                    <div className="articles-grid">

                        <div className="item">
                            <a href="#">
                                <div className="img" style={{ backgroundImage: 'url()' }}></div>
                            </a>
                            <div className="data">
                                {/* <h6 className="date-tags">
                                    <a href="#" title="name" className="tag tag-id slug">#tag</a>
                                </h6> */}
                                <a href="#">
                                    <h3 className="article-title">
                                        Titulo
                                    </h3>
                                </a>
                                <h6 className="author">
                                    por
                                    <a href="#">nombre del autor</a>
                                </h6>
                            </div>
                        </div>
                    </div>

                </div>
                {/* pagination */}
            </section>

            <Footer />
        </>
    )
}

// Tag.getInitialProps = async function(context) {
//     // It's important to default the slug so that it doesn't return "undefined"
//     const { slug = "" } = context.query
//     return await client.fetch(`
//       *[_type == "articulo" && slug.current == $slug][0]
//     `, { slug })
// }

Tag.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(`
      *[_type == "articulo" && slug.current == $slug][0]{titulo, "nombreAutor": autor->nombre}
    `, { slug })
}

export default Tag;