import Link from 'next/link';

class Footer extends React.Component {

    render() {
        return(
            <>
                <footer className="site-footer">
                    <div className="site-footer-wrapper pd-lr">
                        <Link href="/resurgente">
                            <a>Sobre Nosotros</a>
                        </Link>
                        <p>Resurgente<br />algunos derechos reservados.</p>
                    </div>
                </footer>
            </>
        )
    }

}

export default Footer;