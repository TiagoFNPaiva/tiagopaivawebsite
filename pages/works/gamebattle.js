import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Game Battle Royale">
            <Container maxW="70ch">
                <Title>
                    Game Battle Royale <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A small quiz like game between old school games where only one can win. Responsive layout and working cross platform
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://gamebattleroyale.herokuapp.com/" target="_blank">
                            Game Battle Royale<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platorm</Meta>
                        <span>Browser game</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Challenges</Meta>
                        <span>Manipulating dom environment, working with objects, arrays and multiple functions</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML5, CSS3, SASS, JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/TiagoFNPaiva/GameBattleRoyale" target="_blank">
                            github.com/TiagoFNPaiva/GameBattleRoyale<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/game_eyecatch.png" alt="Game Battle Royale" />
                <WorkImage src="/images/works/game_01.png" alt="Game Battle Royale" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/game_03.png" alt="Game Battle Royale" />
                    <WorkImage src="/images/works/game_04.png" alt="Game Battle Royale" />
                </SimpleGrid>
                <WorkImage src="/images/works/game_02.png" alt="Game Battle Royale" />
            </Container>
        </Layout>
    )
}

export default Work
