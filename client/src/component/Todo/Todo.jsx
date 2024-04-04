import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import MyDialogTodos from './MyDialogTodos';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const Todo = (props) => {
  const putComplete = props.putComplete
  const [showEdit, setShowEdit] = useState(false);
  const item = props.item
  const[statuseCheck,setStatuseCheck]=useState(item.completed);

  const changeStatuseCheck=()=>{
    setStatuseCheck(!statuseCheck)
    putComplete('todos', item._id)
  }
  return (
    <>
      <Card sx={{ margin: "10px" ,height:440,width:200, textAlign: 'center'}}>
        <CardMedia
          // sx={{ height: 140 }}
          title={item.title}
        />
        <CardContent>
          <img src="./פרחים.png"></img>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            :מי יכול לזכות בתפקיד <br />
            {item.tags.map((s) => <>{s + " "}</>)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => props.deleted('todos', item._id)}><Grid style={{ color: '#ff5252' }} item xs={8}>
            <DeleteRoundedIcon style={{alignItems: "flex-start", xs: "left" }}/>
          </Grid></Button>
          <Button size="small" onClick={() => setShowEdit(true)} ><EditIcon style={{ color: '#ff5252' ,alignItems: "flex-start", xs: "center" }}/></Button>
          {showEdit ? <MyDialogTodos type1={'update'} item={item} what={item.title} who={item.tags} setShow={setShowEdit} /> : <></>}

          <Checkbox
          style={{alignItems: "flex-start", xs: "right" }}
            checked={statuseCheck} 
            onChange={() => changeStatuseCheck()}
            sx={{
              color: '#ff5252',
              '&.Mui-checked': {
                color: '#ff5252',
              },
            }}
          />
        </CardActions>
      </Card>
    </>
  )
}
export default Todo