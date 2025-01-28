export interface Site {
  siteName: string
  fullSiteName: string
  siteID: string
  isFavorite: boolean
}

export const siteList = [
  {
    siteName: 'Mi Sitio',
    fullSiteName: 'Mi Sitio',
    siteID: '7E28fa244e-58b6-4ad1-b166-b6726b353269',
    isFavorite: true,
  },
  {
    siteName: '(1908) ARQUITECTURA DE REDES  [23/24]',
    fullSiteName: '(1908) ARQUITECTURA DE REDES  [23/24]',
    siteID: '1908_G_2023_N_N',
    isFavorite: true,
  },
  {
    siteName: '(1917) TFG GRADO EN INGENIERÍA INFORMÁTICA  [23/24]',
    fullSiteName: '(1917) TFG GRADO EN INGENIERÍA INFORMÁTICA  [23/24]',
    siteID: '1917_G_2023_N_N',
    isFavorite: false,
  },
  {
    siteName: '(1928) PRÁCTICAS EXTERNAS  [23/24]',
    fullSiteName: '(1928) PRÁCTICAS EXTERNAS  [23/24]',
    siteID: '1928_G_2023_N_N',
    isFavorite: false,
  },
  {
    siteName: '(3882) SEGURIDAD  [23/24]',
    fullSiteName: '(3882) SEGURIDAD  [23/24]',
    siteID: '3882_G_2023_N_N',
    isFavorite: true,
  },
  {
    siteName: '(4906) SEGURIDAD Y CONFIANZA EN SISTEMAS DISTRIBUIDOS  [23/24]',
    fullSiteName: '(4906) SEGURIDAD Y CONFIANZA EN SISTEMAS DISTRIBUIDOS  [23/24]',
    siteID: '4906_P_2023_N_N',
    isFavorite: false,
  },
  {
    siteName: '(7810) TÉCNICAS DE CIBERATAQUES Y HACKING ÉTICO  [23/24]',
    fullSiteName: '(7810) TÉCNICAS DE CIBERATAQUES Y HACKING ÉTICO  [23/24]',
    siteID: '7810_P_2023_N_N',
    isFavorite: false,
  },
  {
    siteName: '(7840) FACTORES HUMANOS EN LA SEGURIDAD, PRIVACIDAD Y DERECHOS EN INTERNET  [23/24]',
    fullSiteName:
      '(7840) FACTORES HUMANOS EN LA SEGURIDAD, PRIVACIDAD Y DERECHOS EN INTERNET  [23/24]',
    siteID: '7840_P_2023_N_N',
    isFavorite: true,
  },
  {
    siteName: 'EIDUM PROGRAMA DE DOCTORADO EN INFORMÁTICA  [23/24]',
    fullSiteName: 'EIDUM PROGRAMA DE DOCTORADO EN INFORMÁTICA  [23/24]',
    siteID: '868P01_A_2023',
    isFavorite: false,
  },
  {
    siteName: 'GRADO EN INGENIERÍA INFORMÁTICA  [23/24]',
    fullSiteName: 'GRADO EN INGENIERÍA INFORMÁTICA  [23/24]',
    siteID: '221P01_T_2023',
    isFavorite: false,
  },
  {
    siteName: 'MÁSTER UNIVERSITARIO EN CIBERSEGURIDAD / MASTER IN CYBERSECURITY  [23/24]',
    fullSiteName: 'MÁSTER UNIVERSITARIO EN CIBERSEGURIDAD / MASTER IN CYBERSECURITY  [23/24]',
    siteID: '346P01_M_2023',
    isFavorite: false,
  },
  {
    siteName: 'MÁSTER UNIVERSITARIO EN NUEVAS TECNOLOGÍAS EN INFORMÁTICA  [23/24]',
    fullSiteName: 'MÁSTER UNIVERSITARIO EN NUEVAS TECNOLOGÍAS EN INFORMÁTICA  [23/24]',
    siteID: '254P01_M_2023',
    isFavorite: false,
  },
  {
    siteName: 'PCEO GRADO EN MATEMATICAS Y GRADO EN INGENIERIA INFORMATICA [PLAN 2009] [23/24]',
    fullSiteName: 'PCEO GRADO EN MATEMATICAS Y GRADO EN INGENIERIA INFORMATICA [PLAN 2009] [23/24]',
    siteID: '257P01_T_2023',
    isFavorite: false,
  },
  {
    siteName: 'PCEO GRADO EN MATEMATICAS Y GRADO EN INGENIERIA INFORMATICA [PLAN 2020] [23/24]',
    fullSiteName: 'PCEO GRADO EN MATEMATICAS Y GRADO EN INGENIERIA INFORMATICA [PLAN 2020] [23/24]',
    siteID: '270P01_T_2023',
    isFavorite: false,
  },
]

export const getRandomSites = (numSites: number) => {
  const sortedSites = siteList.map((site) => site).sort(() => Math.random() - 0.5)
  return sortedSites.slice(0, numSites)
}
