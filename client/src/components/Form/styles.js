import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 1,
    },
  },
  paper: {
    padding: 2,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
});
