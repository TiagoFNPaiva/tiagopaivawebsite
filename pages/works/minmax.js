import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="MinMax">
            <Container maxW="70ch">
                <Title>
                    MinMax <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    MinMax is  a conceptual landing page for a design / web agency. With horizontal scroll and various glitches effects it stands out from the norm.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://minmaxbeta.herokuapp.com/" target="_blank">
                            MinMax<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Challenges</Meta>
                        <span>Creating a engaging design with vanilla HTML, CSS & JavaScript. Integrate different outside libraries to accomplish the set goals. </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML5, CSS3, SASS, JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/TiagoFNPaiva/minmax" target="_blank">
                            github.com/TiagoFNPaiva/minmax<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/minmax_eyecatch.png" alt="MinMax" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/minmax_01.png" alt="MinMax" />
                    <WorkImage src="/images/works/minmax_02.png" alt="MinMax" />
                </SimpleGrid>
                <WorkImage src="/images/works/minmax_03.png" alt="MinMax" />
            </Container>
        </Layout>
    )
}

export default Work
