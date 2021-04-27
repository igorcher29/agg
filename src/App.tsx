import React from 'react';
import Container from '@material-ui/core/Container';
import AppRoutes from './components/app-routes/app-routes';

export const App = () => (
  <Container maxWidth="xl">
    <AppRoutes />
  </Container>
);

export default App;
