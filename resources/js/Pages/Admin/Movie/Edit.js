import React from 'react'
import { useForm, Head } from '@inertiajs/inertia-react'
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import ValidationErrors from '@/Components/ValidationErrors'
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({auth, movie}) => {
    const { data, setData, post, processing, errors } = useForm({
        ...movie
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'file' ? event.target.files[0] : event.target.value
        ) 
    }

    const submit = (e) => {
        e.preventDefault();

        if(data.thumbnail === movie.thumbnail){
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: 'PUT',
            ...data
        })
    }

    return (
        <>
            <Autentikasi auth={auth}> 
                    <Head>
                        <title>Admin - Update Movie</title>
                    </Head>
                   
                    <h1 className='text-xl'>Update movie {movie.name}</h1>
                    <hr className='mb-4 mt-4' />

                   <ValidationErrors errors={errors} />
                   <form onSubmit={submit}>
                        <Label forInput="name" value="Nama Filem" />
                        <Input 
                            type="text"
                            name="name"
                            variant="primary-outline"
                            defaultValue={movie.name}
                            value={movie.name}
                            handleChange={onHandleChange}
                            placeholder="Masukkan nama film"
                            isError={errors.name}
                        />

                        <Label forInput="category" value="Kategori" className="mt-4" />
                        <Input 
                            type="text"
                            name="category"
                            variant="primary-outline"
                            value={movie.category}
                            handleChange={onHandleChange}
                            placeholder="Masukkan nama kategori"
                            isError={errors.name}
                        />

                        <Label forInput="url" value="URL" className="mt-4" />
                        <Input 
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            value={movie.video_url}
                            placeholder="Masukkan url video"
                            isError={errors.name}
                        />

                        <Label forInput="rating" value="Rating" className="mt-4" />
                        <Input 
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            value={movie.rating}
                            placeholder="Masukkan Rating"
                            isError={errors.name}
                        />

                        <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
                        <img src={`/storage/${movie.thumbnail}`} className="w-40" />
                        <Input 
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Upload Thumbnail"
                            isError={errors.name}
                        />

                        <div className='flex flex-row mt-4 items-center'>
                            <Label forInput="is_featured" value="Featured" className="mt-2 mr-3" />
                            <Checkbox 
                                name="is_featured"
                                handleChange={(e) => setData("is_featured", e.target.checked)}
                                checked={movie.is_featured}
                            />
                        </div>

                        <Button type="submit" className="mt-4 btn-primary" processing={processing}>
                            Update
                        </Button>

                   </form>
            </Autentikasi>
        </>
    )
}

export default Edit
