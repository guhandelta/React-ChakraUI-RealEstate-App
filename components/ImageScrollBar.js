import { useContext } from 'react'
import Image from 'next/image'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                // The scroll functionality can ba called only through/using a callBack fn(), due to the way ImageScrollBAr Package works
                onClick={ () => scrollPrev()}
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
                // The scroll functionality can ba called only through/using a callBack fn(), due to the way ImageScrollBAr Package works
                onClick={ () => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const ImageScrollBar = ({ data }) => (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ Overflow: 'hidden' }}>
            {data.map(image => (
                <Box key={image.id} width="910px" itemId={image.id} overflow="hidden" p="1">
                    <Image 
                        placeholder="blur" 
                        blurDataURL={image.url} 
                        src={image.url} 
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
