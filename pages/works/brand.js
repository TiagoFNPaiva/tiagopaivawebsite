import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Brand For Daddy">
            <Container maxW="70ch">
                <Title>
                    Brand For Daddy <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A "Brand" Landing Page where a fictional company shares its new product and/or new promotions. In this particular case a new app is shared with the audience.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://brandfordaddy.herokuapp.com/" target="_blank">
                            Brand Landing Page<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Challenges</Meta>
                        <span>Creating a engaging responsive design with vanilla HTML, CSS & JavaScript. </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML5, CSS3, SASS, JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/TiagoFNPaiva/brandlandingpage" target="_blank">
                            github.com/TiagoFNPaiva/brandlandingpage<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/brand_eyecatch.png" alt="Brand" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/brand_03.png" alt="Brand" />
                    <WorkImage src="/images/works/brand_04.png" alt="Brand" />
                </SimpleGrid>
                <WorkImage src="/images/works/brand_02.png" alt="Brand" />
                <WorkImage src="/images/works/brand_01.png" alt="Brand" />
            </Container>
        </Layout>
    )
}

export default Work
