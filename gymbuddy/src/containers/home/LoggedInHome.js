import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { UserStore } from '../../Store/UserStore/userStore';

export default function LIHome() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const userStore = UserStore;
      const [upload,setUpload] = React.useState();
      console.log(upload);
      const onSubmit = (data) =>{
          const formData = new FormData();
          formData.append('file', data.file[0]);
          setUpload(prev => {return {description:data.description,file:data.file[0]}})
          console.log(data.file)
        axios.post('https://localhost:7010/api/Home/Post',upload,{
                headers:{
                  'Content-Type': 'multipart/form-data'
                }
            })
      }
      return (
    <div>
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('description')} type="text" placeholder="Description"/>
            </div>
            <div>
                <input {...register('file')} type="file" name='file'/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

