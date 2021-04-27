import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const AppMenu = () => (
  <div>
    <Typography>
      <Link href="/">Главная</Link>
    </Typography>
    <Typography>
      <Link href="/posts/">Посты</Link>
    </Typography>
  </div>
);

export default AppMenu;
