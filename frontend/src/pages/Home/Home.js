import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import AllEvents from './All_Events'

function Home() {

    return (
        <Box>

            <Heading>
                Events
            </Heading>
            
            <AllEvents />
            
        </Box>
    )
}

export default Home

  
