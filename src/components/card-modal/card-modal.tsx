import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from '@material-ui/core/styles';

import CardForm from './card-form';

interface IPropsDialog {
  open: boolean;
}

const useStyles = makeStyles(() => ({
  paper: {
    margin: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    minWidth: 375
  }
}));

const CardModal: React.FunctionComponent<IPropsDialog> = (props) => {
  const cls = useStyles();
  const {open} = props;

  return (
    <Dialog open={open} scroll="body" classes={{paper: cls.paper}}>
      <CardForm title="Карточка" />
    </Dialog>
  );
};

export default CardModal;
