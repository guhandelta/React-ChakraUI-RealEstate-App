import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from 'react-icons/go';
import millify from "millify";

import defaultImage from "@/assets/images/house.jpg";

const property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => {
    return (
        <Link href={`/property/${property.externalId}`} passHref>
            <Flex flexWrap="wrap" width="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                <Box>
                    <Image src={ coverPhoto ? coverPhoto.url : defaultImage} width={400} height={200} alt="house" />
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
                    { title.length > 30 ? `${title.substring(0, 30)}...` : title }
                </Text>
            </Flex>
        </Link>
    )
}

export default property
