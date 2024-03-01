import{
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () =>{
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
            <Stack direction={['coloumn', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size="md"
                    textTransform={'uppercase'}
                    textAlign={['center', 'left']}
                    >
                        Subscribe to get updates
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py="2">
                        <Input
                        placeholder="Enter you Email Here..."
                        border={'none'}
                        borderRadius="none"
                        outline={'none'}
                        focousBorderColor="none"
                        />
                        <Button
                        p={'0'}
                        colorScheme={'purple'}
                        varient={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20}/>
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        Videos Gallary
                    </Heading>
                    <Text>All Right received</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://github.com/Prince8412">
                            Github
                        </a>

                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://www.linkedin.com/in/prince84/">
                            LinkedIn
                        </a>

                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://www.instagram.com/princeraj84121/">
                            Instagram
                        </a>

                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};
export default Footer;