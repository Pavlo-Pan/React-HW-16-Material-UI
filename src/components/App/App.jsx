import { useState } from 'react';
import { Container } from '@mui/material';

import Header from '../Header/Header';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import InfoDialog from '../InfoDialog/InfoDialog';

import '../../styles/style.css'

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" >
        <WelcomeSection onOpenDialog={handleOpenDialog} />
        <InfoDialog
          open={openDialog}
          onClose={handleCloseDialog}
        />
      </Container>
    </>
  )
}

export default App
