import { FormControl , InputLabel, Select, MenuItem, Button, Box } from "@mui/material";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

export const Formulario = () => {
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
                label="Categoría"
            >
                {CATEGORIAS.map( categoria => (
                    <MenuItem
                        key={categoria.value}
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}

            </Select>

            <Box sx={{marginTop: 2}}>
                <Button
                    fullWidth
                    variant='contained'
                    color="primary"
                >
                    Buscar Noticias
                </Button>
            </Box>

            
        </FormControl>
    </form>
  )
}
