import Image from 'next/image';
import { Box, Avatar, Spacer, Flex, Text } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from 'react-icons/go';
import millify from "millify";

import { baseUrl, fetchApi } from 'Utils/fetchApis';
import { ImageScrollBar } from 'components';


const PropertyDetails = ({ propertyInfo: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, amenities, photos} }) => {
    return (
        <Box maxWidth="1080px" margin="auto" p="4">
            {photos && <ImageScrollBar data={photos} />}
            <Box w="full" p="6">
                <Flex flexWrap="wrap" width="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                    <Box>
                        <Image src={coverPhoto?coverPhoto.url:defaultImage} width={400} height={200} alt="house" />
                    </Box>
                    <Box w="full">
                        <Flex justifyContent="space-between" paddingTop="2" alignItems="center">
                            <Box padding="3" color="green.400">{ isVerified && <GoVerified />}</Box>
                            <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{ rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Box>
                    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title}
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}
  
export default PropertyDetails
  
export async function getServerSideProps({ params: {id} }) {
  
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props:{
            propertyInfo: data
        }
    }
}