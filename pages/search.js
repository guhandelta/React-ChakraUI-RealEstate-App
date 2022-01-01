import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

import { SearchFilters } from 'components'

const Search = () => {

    const [ searchFilters, setSearchFilters ] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                p="2"
                borderBottom="1px"
                borderColor="gray.200"
                fontSize="lg"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters(prevFilters => !prevFilters)}
            >
                <Text>Filter Properties</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            { searchFilters && <SearchFilters /> }
        </Box>
    )
}

export default Search
