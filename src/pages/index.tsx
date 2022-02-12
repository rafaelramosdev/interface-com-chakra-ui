import Head from 'next/head';

import { GetStaticProps } from "next";

import { Box, Text } from "@chakra-ui/react";

import { api } from "../services/api";

import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider } from "../components/Divider";
import { ContinentSlide } from "../components/ContinentSlide";

export default function Home({ continents }) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
  
      <Box>
        <Banner />

        <Box
          as="main"
          w="100%"
          maxW="1440px"
          m="0 auto"
          pt="114px"
          pb="40px"
          flex="1"
        >
          <TravelTypes />

          <Divider />

          <Text
            fontWeight="500"
            fontSize="36px"
            lineHeight="54px"
            textAlign="center"
            color="gray.700"
          >
            Vamos nessa? <br/> Então escolha seu continente
          </Text>
          
          <ContinentSlide data={continents} />
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents')

  const continents = response.data.map(r => {
    return {
      id: r.id,
      slug: r.slug,
      title: r.title,
      description: r.description,
      cover: r.cover
    }
  })

  return {
    props: {
      continents
    }
  }
} 