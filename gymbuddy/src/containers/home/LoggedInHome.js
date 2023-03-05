import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { UserStore } from '../../Store/UserStore/userStore';
import './home.css'
import PostComponent from './components/PostComponent';
export default function LIHome() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const [upload,setUpload] = React.useState();
      const [posts,setPosts] = React.useState();
      console.log(posts)
      const onSubmit = (data) =>{
          axios.post('https://localhost:7010/api/Home/Post',{description:data.description,file:data.file[0]},{
                  headers:{
                    'Content-Type': 'multipart/form-data'
                  }
              }).catch(function (error) {
                console.log(error);
              })
      }
      
      React.useEffect(()=>{
        axios.get('https://localhost:7010/api/Home/GetPosts')
          .then((data)=>{
            setPosts(data.data);
          }).catch(function (error) {
            console.log(error);
          })
      },[upload])
      var postElements = getPosts();
      function getPosts(){
        if(posts != null){
         return postElements = posts.map(x=>{
            return <PostComponent data={x} key={x.id}/>
          })
        }else{
          return postElements = null;
        }
      }
      return (
        <div className='home--main'>
          <div className='postForm'>
              <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                  <div className='input--description'>
                      <textarea {...register('description')} placeholder="Description"></textarea>
                  </div>
                  <div className='input--file'>
                      <input {...register('file')} type="file" name='file'/>
                  </div>
                  <button className='form--btn'>Submit</button>
              </form>
          </div>
          {postElements}
        </div>
  )
}

