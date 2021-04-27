import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import {useStyles} from './style';

const AppMenu = () => {
  const cls = useStyles();

  return (
    <div className={cls.root}>
      <Typography className={cls.menuItem}>
        <Link href="/">Главная</Link>
      </Typography>
      <Typography>
        <Link href="/posts/">Посты</Link>
      </Typography>
    </div>
  );
};

export default AppMenu;
