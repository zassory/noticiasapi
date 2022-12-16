import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Noticia } from "./Noticia";
import { useNoticias } from "../hooks/useNoticias";

export const ListadoNoticias = () => {

  const { noticias } = useNoticias();

  console.log(noticias);

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>
        <Grid>

            {noticias.map(noticia => (<Noticia
                key={noticia.url}
                noticia={noticia}
            />))}
        </Grid>
    </>
  )
}
