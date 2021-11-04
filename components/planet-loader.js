import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PlanetSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const PlanetContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="planet"
    m="auto"
    mt={['-30px', '-70px', '-110px']}
    mb={['-50px', '-110px', '-165px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
    display="flex"
    justifyContent="center"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <PlanetContainer>
      <PlanetSpinner />
    </PlanetContainer>
  )
}

export default Loader
