import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import {ITextBlock} from '../../interfaces';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    paddingBottom: 10
  },
  label: {
    width: 90,
    fontSize: 14
  },
  text: {
    flex: 1,
    fontSize: 14
  }
});

const TextBlock: React.FunctionComponent<ITextBlock> = (props) => {
  const {label, value} = props;
  const cls = useStyles();

  return (
    <div className={cls.root}>
      <Typography className={cls.label} color="textSecondary">
        {label}
      </Typography>
      <Typography className={cls.text}>{value}</Typography>
    </div>
  );
};

export default TextBlock;
