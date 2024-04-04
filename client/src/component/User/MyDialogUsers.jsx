import UseHttp from '../../hooks/useHttp'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const MyDialogUsers = (props) => {

  const { post, put } = UseHttp();
  let { type1, item, name2,username2, email2,phone2, address2, setShow } = props
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState(props.name2);
  const username = React.useRef(username2.toString());
  const email = React.useRef(email2.toString());
  const phone = React.useRef(phone2.toString());
  const address=React.useRef(address2.toString());

  const handleClose = () => {
    if (type1 == 'add') {
      item = { name: name, username: username.current,email:email.current,phone:phone.current,address:address.current }
      post('users', item);
    }
    else if (type1 == 'update') {
      item = { name: name, username: username.current,email:email.current,phone:phone.current,address:address.current, _id: item._id }
      put('users', item)
    }
    setOpen(false);
    setShow(false)
  }
  let name1
  { type1 != 'add' ? name1 = name : name1 ="שם"}
  let username1
  { type1 != 'add' ? username1 = username.current : username1 = "ססמא" }
  let email1
  { type1 != 'add' ? email1 = email.current : email1 = "מייל" }
  let phone1
  { type1 != 'add' ? phone1 = phone.current : phone1 = "טלפון" }
  let address1
  { type1 != 'add' ? address1 = address.current : address1 = "כתובת" }

  return (
    <>
      <Dialog open={open} onClose={()=>{setOpen(false); setShow(false)}}>
        <DialogTitle> :פרטי המשתמש</DialogTitle>
        <DialogContent>
         <TextField
            Focus="left"
            margin="dense"
            id="name"
            label={name1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label={username1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => username.current = e.target.value}
          />
            <TextField
            autoFocus
            margin="dense"
            label={email1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => email.current = e.target.value}
          />
            <TextField
            autoFocus
            margin="dense"
            label={phone1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => phone.current = e.target.value}
          />
            <TextField
            autoFocus
            margin="dense"
            label={address1}
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => address.current = e.target.value}
        />
        </DialogContent>

        <DialogActions>

          {name != "" ? <Button onClick={handleClose}>לשמור</Button> : <></>}
        </DialogActions>
      </Dialog>
      
    </>)
}
export default MyDialogUsers