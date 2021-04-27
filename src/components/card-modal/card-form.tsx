import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import {IProps} from '../../interfaces';
import TextBlock from './text-block';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px'
  }
});

const CardForm: React.FunctionComponent<IProps> = (props) => {
  const {data, onClose} = props;
  console.log('data: ', data);
  const {id, userId, title, createdAt, updatedAt, body} = data;
  const cls = useStyles();

  return (
    <Card className={cls.root}>
      <CardContent>
        <TextBlock label="id" value={id} />
        <TextBlock label="user id" value={userId} />
        <TextBlock label="title" value={title} />
        <TextBlock label="created at" value={createdAt?.toString()} />
        <TextBlock label="updated at" value={updatedAt?.toString()} />
        <TextBlock label="body" value={body} />
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
