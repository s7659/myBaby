import { useSelector } from 'react-redux';
import UseHttp from '../../hooks/useHttp'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Post from './Post';
import { Stack } from '@mui/material';
import MyDialogPosts from './MyDialogPosts';

const Posts = () => {
  const { get, put, deleted } = UseHttp();
  const [showAdd, setShowAdd] = useState(false);

  const posts = useSelector((x) => x.PostsSlice.posts)
  useEffect(() => {
    get('posts')
  }, [])

  if (posts.length == 0) {
    return (
      <>
      <body style={{textAlign:'center'}}>
        <h1 style={{fontFamily:'Comic Sans MS'}}>אמא, מה את רוצה לומר</h1>
        <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
          <React.Fragment>
            <Button variant="outlined" onClick={() => setShowAdd(true)}>
              הוסף הודעה
            </Button>
            {showAdd ? <MyDialogPosts type1={'add'} item={undefined} title1={""} what={""} setShow={setShowAdd} /> : <></>}

          </React.Fragment>
        </Stack>
        </body>
      </>
    )
  }

  else {
    return (
      <>
        <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
          <React.Fragment>
            <Button variant="outlined" onClick={() => setShowAdd(true)} >
              הוסף הודעה
            </Button>
            {showAdd ? <MyDialogPosts type1={'add'} item={undefined} title1={""} what={""} setShow={setShowAdd} /> : <></>}
          </React.Fragment>
          {posts.map((item) => {
            return (<Post item={item} put={put} deleted={deleted} key={item._id} setShow={setShowAdd} />)
          })}
        </Stack>
      </>
    )
  }
}
export default Posts