import { Box, Avatar, Spacer, Flex, Text } from '@chakra-ui/core';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from 'react-icons/go';
import millify from "millify";

import { baseUrl, fetchApi } from 'Utils/fetchApis';
import { ImageScrollBar } from 'components';


const PropertyDetails = ({ propertyInfo: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, amenities, photos} }) => {
    return (
        <Box maxWidth="1080px" margin="auto" p="4">
            {photos && <ImageScrollBar />}
        </Box>
    )
}
  
export default PropertyDetails
  
export async function getServerSideProps({ params: {id} }) {
  
    const data = await fetchApi(`${baseUrl}/properties/detail?externalId=${id}`);

    return {
        props:{
            propertyInfo: data
        }
    }
}