import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article'

import thumbGame from '../public/images/works/game_eyecatch.png'
import thumbBrand from '../public/images/works/brand_eyecatch.png'
import thumbMinMax from '../public/images/works/minmax_eyecatch.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container maxW="70ch">
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>

                    <Section>
                        <WorkGridItem
                            id="gamebattle"
                            title="Game Battle Royale"
                            thumbnail={thumbGame}
                        >
                            A battle between old Games
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="brand"
                            title="Brand For Daddy"
                            thumbnail={thumbBrand}
                        >
                            Landing Page for a fictional campaign
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="minmax"
                            title="MinMax"
                            thumbnail={thumbMinMax}
                        >
                            Landing Page for a Design / Web Agency
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works