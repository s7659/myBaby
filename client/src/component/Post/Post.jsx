import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import MyDialogPosts from './MyDialogPosts';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const Post = (props) => {
  
  const [showEdit, setShowEdit] = useState(false);
  const item = props.item
  return (
    <>
      <Card sx={{ margin: "10px" ,height:470,width:200, textAlign: 'center' }}>
        <CardMedia
          // sx={{ height:}}
          title={item.title}
        />
        <CardContent>
          <img src="./מגילה.png"></img>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <br />
           {item.body1}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => props.deleted('posts', item._id)}><Grid style={{ color: '#ff5252' }} item xs={8}>
            <DeleteRoundedIcon style={{alignItems: "flex-start", xs: "left" }}/>
          </Grid></Button>
          <Button size="small" onClick={() => setShowEdit(true)} ><EditIcon style={{ color: '#ff5252' ,alignItems: "flex-start", xs: "center" }}/></Button>
          {showEdit ? <MyDialogPosts type1={'update'} item={item} title1={item.title} what={item.body1} setShow={setShowEdit} /> : <></>} 
        </CardActions>
      </Card>
    </>
  )
}
export default Post