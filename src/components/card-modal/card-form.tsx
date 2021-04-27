import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import {IProps} from '../../interfaces';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

const CardForm: React.FunctionComponent<IProps> = (props) => {
  const {data, onClose} = props;
  const {title} = data;
  const cls = useStyles();

  return (
    <Card className={cls.root}>
      <CardContent>
        <Typography className={cls.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClose}>
          Закрыть
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardForm;
