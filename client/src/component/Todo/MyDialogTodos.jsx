import UseHttp from '../../hooks/useHttp'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MyDialogTodos = (props) => {

  const { post, put } = UseHttp();
  let { type1, item, setShow } = props
  const [open, setOpen] = React.useState(true);
  const [what, setWhat] = React.useState(props.what);
  const who = React.useRef(props.who.toString());
  const handleClose = () => {
    let tags = []

    if (who != undefined || who.current != "")
      tags = who.current.split(",");
    else {
      tags[0] = ""
    }

    if (type1 == 'add') {
      item = { title: what, tags: tags }
      post('todos', item);

    }
    else if (type1 == 'update') {
      item = { title: what, tags: tags, _id: item._id }
      put('todos', item)
    }
    setOpen(false);
    props.setShow(false)

  }
  let task
  { type1 != 'add' ? task = what : task = "?מה התפקיד" }
  let whos
  { type1 != 'add' ? whos = who.current : whos = "?מי יכול לעשות" }
  
  return (
    <>
      <Dialog open={open} onClose={()=>{setOpen(false); setShow(false)}}>
        <DialogTitle> תפקיד לכבוד שבת</DialogTitle>
        <DialogContent>
          <DialogContentText >
            'לא לשכוח לומר 'לכבוד שבת קודש
          </DialogContentText>
          <TextField
            Focus="left"
            margin="dense"
            id="name"
            label={task}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setWhat(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label={whos}
            type="[string]"
            fullWidth
            variant="standard"
            onChange={(e) => who.current = e.target.value}
          />
        </DialogContent>

        <DialogActions>

          {what != "" ? <Button onClick={handleClose}>לשמור</Button> : <></>}
        </DialogActions>
      </Dialog>
    </>)
}
export default MyDialogTodos