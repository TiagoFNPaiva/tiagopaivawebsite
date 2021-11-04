import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 25px;
    display:inline-flex;
    align-items:center;
    height:30px;
    line-height:20px;
    padding:10px;

    &:hover img {
        transform: rotate(-20deg)
    }
`

const Logo = () => {
    const footPrintImg = `/images/developer${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={25} height={25} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Ubuntu'
                        fontWeight="bold"
                        ml={3}>
                        Tiago Paiva
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo