import NextLink from 'next/link'
import { Container, Button, Box, Heading, Image, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin } from 'react-icons/io5'



const Page = () => {
    return (
        <Layout>
            <Container maxW="70ch">
                <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a Frontend Developer based in Porto, Portugal!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Tiago Paiva
                        </Heading>
                        <p>Frontend Developer with hearth and coffee</p>
                        <Link href="https://www.linkedin.com/in/tiagofnpaiva/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                tiagofnpaiva
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/paiva.jpg" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Hello there! My name is Tiago Paiva borned in Porto, Portugal, in 1990 and I am a
                        Frontend Developer. I always was passionate about everything tech related, from
                        computers to the most tiny things as microchips but since my midteens what started
                        has an hobby, coding, has become one of my life goals.
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I have a few projects that focus on different aspects on my front-end learning journey.
                        From simple layouts to small quiz games, using external libraries and working with frameworks.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            1990
                        </BioYear>
                        Born in Porto, Portugal.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2008
                        </BioYear>
                        Master in Electrical and Computers Engineering at Faculdade de Engenharia Universidade do Porto (incomplete)
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        Front-end Development, EDIT. - Disruptive Digital Education
                    </BioSection>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Games, Music, WorkOut, Electronics, Computers, Machine Learning, Automation and everything Tech-related!
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page