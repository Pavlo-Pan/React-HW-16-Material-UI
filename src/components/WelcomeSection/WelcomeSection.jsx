import { Typography, Button } from '@mui/material';

function WelcomeSection({ onOpenDialog }) {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Добро пожаловать в приложение!
            </Typography>
            <Typography variant="body1">
                Это пример приложения, созданного с использованием React и Material UI.
                
            </Typography>
            <Button variant="contained" color="primary" onClick={onOpenDialog}>
                Открыть диалог
            </Button>
        </>
    );
}

export default WelcomeSection;