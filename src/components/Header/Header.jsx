import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Приложение с Material UI
                </Typography>
                <Button color="inherit">Войти</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;