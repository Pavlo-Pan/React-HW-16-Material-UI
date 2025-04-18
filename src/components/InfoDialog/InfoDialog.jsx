import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

function InfoDialog({ open, onClose }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <DialogTitle id="dialog-title">
                Информационное сообщение
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">
                    Это диалоговое окно, DialogContentText
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Отмена
                </Button>
                <Button onClick={onClose} color="primary" variant="contained" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default InfoDialog;