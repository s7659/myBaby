import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import MyDialogUsers from './MyDialogUsers';
import { useEffect, useState } from 'react';

const User = ({ item, deleted }) => {
  const [showEdit, setShowEdit] = useState(false);//דיאלוג עריכת משתמש
  return (
     <Card sx={{ margin: "10px" ,height:470,width:200, textAlign: 'center' }}>
        <CardMedia
          // sx={{ height:}}
          title={item.name}
        />
        <CardContent>
        <img src="./ילדה עם דלי.png"></img>
          <Typography sx={{background:'green' }}>
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br />
            {item.username}
            <br />
            {item.email}

            <br />
            {item.phone}
            <br />
            {item.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleted('users', item._id)}><Grid style={{ color: '#ff5252' }} item xs={8}>
            <DeleteRoundedIcon style={{ alignItems: "flex-start", xs: "left" }} />
          </Grid></Button>
          <Button size="small" onClick={() => setShowEdit(true)} ><EditIcon style={{ color: '#ff5252', alignItems: "flex-start", xs: "center" }} /></Button>
          {showEdit ? <MyDialogUsers type1={'update'} item={item} name2={item.name} username2={item.username} email2={item.email} phone2={item.phone} address2={item.address} setShow={setShowEdit} /> : <></>}
        </CardActions> {/* */}
      </Card>
    
  )
}
export default User