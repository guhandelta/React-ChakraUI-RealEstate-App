import { useContext } from 'react'
import Image from 'next/image'
import { Box, Flex, FLex, Icon } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={scrollPrev}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={scrollPrev}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const ImageScrollBar = () => (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ Overflow: 'hidden' }}>
            {data.map(image => (
                <Box key={image.src} width="910px" itemId={item.id} overflow="hidden" p="1">
                    <Image 
                        placeholder="blur" 
                        blurDataURL={item.url} 
                        src={item.url} 
                        width={1000} 
                        height={500} 
                        alt="Property"
                        // Right size of images on any device, appropriate to teh screen dimensions
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                    />

                </Box>
            ))}
        </ScrollMenu>
)   


export default ImageScrollBar
