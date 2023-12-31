import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import localFont from "@next/font/local";
import Image from "next/image";
import { useState } from "react";

const openSansExtraBold = localFont({
  src: "../../../../../public/Causten-Regular.otf",
});

interface Produto {
  quartos: string;
  suites: string;
  banheiros: string;
  areaUtil: string;
  areaTotal: string;
  titulo: string;
  descricao: string;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchInformacoesApi(param: string): Promise<string[]> {
  try {
    const response = await fetch(`http://localhost:3020/produto/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data.produto;

    const information: string[] = [
      produtos.quartos,
      produtos.banheiros,
      produtos.suites,
      produtos.areaUtil,
      produtos.areaTotal,
      produtos.titulo,
      produtos.descricao,
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

function MainCentral({ apiInformations }: ApiInformations) {
  const [apiInformation, setApiInformation] =
    useState<string[]>(apiInformations);

  const updatedInformacoes: {
    [key: string]: { src: string; tipografia: string };
  } = {
    informacoes1: { src: "/informacoes-1.svg", tipografia: apiInformations[0] },
    informacoes2: { src: "/informacoes-2.svg", tipografia: apiInformations[1] },
    informacoes3: { src: "/informacoes-3.svg", tipografia: apiInformations[2] },
    informacoes4: { src: "/informacoes-4.svg", tipografia: apiInformations[3] },
    informacoes5: { src: "/informacoes-5.svg", tipografia: apiInformations[4] },
  };

  return (
    <Grid container>
      <Grid item xs={12} mb={12} ml={2}>
        <Box>
          <Typography
            sx={{ color: "#111820" }}
            mt={8}
            className={openSansExtraBold.className}
            variant="h2"
          >
            {apiInformations[5]}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "#111820" }}
            className={openSansExtraBold.className}
            variant="h6"
          >
            {apiInformations[6]}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          margin: "auto",
          boxSizing: "border-box",
          position: "relative",
          width: "55%",
          height: "115px",
          background: "#242424",
          border: "1px solid #FFFFFF",
          borderRadius: "12px",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {Object.keys(updatedInformacoes).map((key) => (
          <Box key={""}>
            <Image
              src={updatedInformacoes[key].src}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Typography
              className={openSansExtraBold.className}
              sx={{ color: "#FFF" }}
              variant="subtitle1"
            >
              {updatedInformacoes[key].tipografia}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
export default MainCentral;
