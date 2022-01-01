import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Select, Box, Input, Text, Spinner, Icon, Button } from '@chakra-ui/react'
import { MdCancel } from 'react-icons/md'

import { filterData, getFilterValues } from 'Utils/filterData';

const SearchFilters = () => {

    const router = useRouter();
    
    const [filters, setFilters] = useState(filterData);
    
    const searchProperties = filterValues => {
        const path = router.pathName;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach(item => {
            query[item.name] = item.value;
        })

        router.push({ pathName: path, query })
    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap" >
            {filters.map(filter => (
                <Box key={filter.queryName}>
                    <Select 
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                        {filter?.items?.map(item => (
                            <option key={item.value} value={item.value}>{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters
