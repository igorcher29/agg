import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

interface IProps {
  title: string;
  onClose(): void;
}

const CardForm: React.FunctionComponent<IProps> = (props) => {
  const {title, onClose} = props;
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
