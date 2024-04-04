import UseHttp from '../../hooks/useHttp'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const MyDialogPosts = (props) => {

  const { post, put } = UseHttp();
  let { type1, item, setShow } = props
  const [open, setOpen] = React.useState(true);
  const [title1, setTitle1] = React.useState(props.title1);
  const what = React.useRef(props.what.toString());
  const handleClose = () => {
    if (type1 == 'add') {
      item = { title: title1, body1: what.current }
      post('posts', item);

    }
    else if (type1 == 'update') {
      item = { title: title1, body1: what.current, _id: item._id }
      put('posts', item)
    }
    setOpen(false);
    setShow(false)

  }
  let post1
  { type1 != 'add' ? post1 = title1 : post1 = "?מה נושא ההודעה" }
  let whats
  { type1 != 'add' ? whats = what.current : whats = "?מה ההודעה" }
  
  return (
    <>
      <Dialog open={open} onClose={()=>{setOpen(false); setShow(false)}}>
        <DialogTitle> הודעה מאמא</DialogTitle>
        <DialogContent>
         <TextField
            Focus="left"
            margin="dense"
            id="name"
            label={post1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle1(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label={whats}
            type="[string]"
            fullWidth
            variant="standard"
            onChange={(e) => what.current = e.target.value}
          />
        </DialogContent>

        <DialogActions>

          {title1 != "" ? <Button onClick={handleClose}>לשמור</Button> : <></>}
        </DialogActions>
      </Dialog>
    </>)
}
export default MyDialogPosts