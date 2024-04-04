import axios from "axios"
import { upDateTodos } from "../store/TodoSlice";
import { useDispatch, useSelector } from "react-redux"
import { upDatePosts } from "../store/PostsSlice";
import { upDateUsers } from "../store/UsersSlice";
import { upDatePhotos } from "../store/PhotosSlice";

function UseHttp() {

    const dispatch = useDispatch();

    const get = async (path) => {
        try {

            const res = await axios.get(`http://localhost:7701/api/${path}`);
            if (res.data)
                switch (path) {
                    case 'todos':
                        {
                            dispatch(upDateTodos({ data: res.data }))
                        }
                    case 'users':
                        {
                            dispatch(upDateUsers({ data: res.data }))
                        }
                    case 'photos':
                        {
                            dispatch(upDatePhotos({ data: res.data }))
                        }
                    case 'posts':
                        {
                            dispatch(upDatePosts({ data: res.data }))
                        }
                }
        }

        catch (error) {
            console.log(error);
        }
    }

    const post = async (path, item) => {
        try {
            const response = await axios.post(`http://localhost:7701/api/${path}`, item)
            get(path)
        }
        catch (error) {
            console.log(error);
        }
    }

    const put = async (path, item) => {
        try {
            const response = await axios.put(`http://localhost:7701/api/${path}/${item._id}`, item)
            get(path)
        }
        catch (error) {
            console.log(error);
        }
    }

    const putComplete = async (path, _id) => {
        try {
            const response = await axios.put(`http://localhost:7701/api/${path}/Complete/${_id}`)
            get(path)
        }
        catch (error) {
            console.log(error);
        }
    }

    const deleted = async (path, _id) => {
        try {
            const response = await axios.delete(`http://localhost:7701/api/${path}/${_id}`)
            get(path)
        }
        catch (error) {
            console.log(error);
        }
    }
    return { get, post, put, deleted, putComplete }

}
export default UseHttp