import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer.js'

import PlanetLoader from '../planet-loader'

const LazyPlanet = dynamic(() => import('../planet'), {
    ssr: false,
    loading: () => <PlanetLoader />
})


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title> Tiago Paiva Website</title>
                <meta name="author" content="Tiago Paiva" />
                <meta name="author" content="Website" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tiagofnpaiva.com" />
                <meta property="og:title" content="Tiago Paiva - Website" />
                <meta property="og:description" content="Frontend Developer with heart and coffee" />
                <meta property="og:image" content="/card.png" />
                <meta property="og:site_name" content="Tiago Paiva's Website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.tiagofnpaiva.com" />
                <meta property="twitter:title" content="Tiago Paiva - Website" />
                <meta property="twitter:description" content="Frontend Developer with heart and coffee" />
                <meta property="twitter:image" content="/card.png" />



            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <LazyPlanet />
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main