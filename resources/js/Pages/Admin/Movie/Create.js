
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Checkbox from '@/Components/Checkbox';
import ValidationErrors from '@/Components/ValidationErrors';
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import { useForm, Head } from '@inertiajs/inertia-react'
import React from 'react'
import Button from '@/Components/Button';

const Create = ({auth}) => {

    const { setData, post, processing, errors } = useForm({
        name : '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'file' ? event.target.files[0] : event.target.value
        ) 
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.dashboard.movie.store'))
    }

    return (
        <>
            <Autentikasi auth={auth}> 
                    <Head>
                        <title>Admin - Create Movie</title>
                    </Head>
                   
                    <h1 className='text-xl'>Insert movie baru</h1>
                    <hr className='mb-4 mt-4' />

                   <ValidationErrors errors={errors} />
                   <form onSubmit={submit}>
                        <Label forInput="name" value="Nama Filem" />
                        <Input 
                            type="text"
                            name="name"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Masukkan nama film"
                            isError={errors.name}
                        />

                        <Label forInput="category" value="Kategori" className="mt-4" />
                        <Input 
                            type="text"
                            name="category"
                            variant="primary-outline"
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
                            placeholder="Masukkan url video"
                            isError={errors.name}
                        />

                        <Label forInput="rating" value="Rating" className="mt-4" />
                        <Input 
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Masukkan Rating"
                            isError={errors.name}
                        />

                        <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
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
                            />
                        </div>

                        <Button type="submit" className="mt-4 btn-primary" processing={processing}>
                            Save
                        </Button>

                   </form>
            </Autentikasi>
        </>
    )
}

export default Create;
