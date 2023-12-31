import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import localFont from "@next/font/local";
import { useState } from "react";

const openSansExtraBold = localFont({
  src: "../../../../../public/Causten-Regular.otf",
});

interface Produto {
  titulo: string;
  descricao: string;
  localizacao: string;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchInformacoesSuperiorApi(
  param: string
): Promise<string[]> {
  try {
    const response = await fetch(`http://localhost:3020/produto/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data.produto;

    const information: string[] = [
      produtos.titulo,
      produtos.descricao,
      produtos.localizacao,
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

function MainSuperior({ apiInformations }: ApiInformations) {
  const [apiInformation, setApiInformation] =
    useState<string[]>(apiInformations);

  return (
    <Grid container>
      <Grid
        item
        mr={2}
        ml={2}
        xs={12}
        sx={{
          borderRadius: "15px",
          backgroundSize: "100%",
          backgroundPosition: "100%",

          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/imagem-empreendimento.svg");',
        }}
      >
        <Box ml={1} mt={4}>
          <Typography
            sx={{ color: "#FFF" }}
            className={openSansExtraBold.className}
            variant="h3"
          >
            {apiInformations[0]}
          </Typography>
        </Box>
        <Box ml={1} mb={2}>
          <Typography
            sx={{ color: "#FFF" }}
            className={openSansExtraBold.className}
            variant="h6"
          >
            Com lazer premium e integrado a uma nova praça memorial de 2.700m²
          </Typography>
        </Box>
        <Box
          mb={2}
          ml={1}
          sx={{
            display: "flex",
            boxSizing: "border-box",
            background: "#FFF",
            borderRadius: "20px",
            alignItems: "center",
            gap: 2,
            width: "290px",
            height: "35px",
          }}
        >
          <Image
            src="/vetor.svg"
            width={30}
            height={30}
            alt="Picture of the author"
          />
          <Typography sx={{ color: "#111820" }} variant="h6">
            Belo Horizonte
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default MainSuperior;
