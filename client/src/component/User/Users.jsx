import { useSelector } from 'react-redux';
import UseHttp from '../../hooks/useHttp'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import User from './User';
import { Stack } from '@mui/material';
import MyDialogUsers from './MyDialogUsers';

const Users = () => {
  const { get, put, deleted } = UseHttp();
  const [showAdd, setShowAdd] = useState(false);//דיאלוג של הוספת משתמש

  const users = useSelector((x) => x.UsersSlice.users)
  useEffect(() => {
    get('users')
  }, [])


  return (
    users.length ? <>
      <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
        <React.Fragment>
          <Button variant="outlined" onClick={() => setShowAdd(true)} >
            הוסף משתמש
          </Button>
          {showAdd ? <MyDialogUsers type1={'add'} item={undefined} name2={""} username2={""} email2={""} phone2={""} address2={""} setShow={setShowAdd} /> : <></>}
        </React.Fragment>
        {users.map((item) => {
          return (<User item={item} put={put} deleted={deleted} key={item._id} setShow={setShowAdd} />)
        })}
      </Stack>
    </> :
      <>
        <body style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Comic Sans MS' }}>אתה עדין לא נכנסת לאתר שלנו והאתר בלעדך לא אותו דבר</h1>
          <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
            <React.Fragment>
              <Button variant="outlined" onClick={() => setShowAdd(true)}>
                הוסף משתמש
              </Button>
              {showAdd ? <MyDialogUsers type1={'add'} item={undefined} name2={""} username2={""} email2={""} phone2={""} address2={""} setShow={setShowAdd} /> : <></>}

            </React.Fragment>
          </Stack>
        </body>
      </>
  )
}

export default Users