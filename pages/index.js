import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ type, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text fontSize="sm" color="gray.500" fontWeight="medium" >{type}</Text>
        <Text fontSize="3xl" fontWeight="bold" >{title1}<br />{title2}</Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" >{desc1}<br />{desc2}</Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
)



export default function Home() {
  return (
    <div>
      <Banner 
        type="Rentals..."
        title1="Rent a Home"
        title2="Everyone"
        desc1="Explore Apartments, Houses, Villas"
        desc2="and more"
        buttonText="Explore Rentals"
        linkName="/search?type=rentals"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner 
        type="Buy a Homes..."
        title1="Buy a Home"
        title2="Dream Home"
        desc1="Explore Apartments, Houses, Villas"
        desc2="and more"
        buttonText='Explore Buying'
        linkName="/search?type=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  )
}
