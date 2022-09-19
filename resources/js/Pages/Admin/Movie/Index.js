import React from 'react'
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import Button from '@/Components/Button'
import { Link } from '@inertiajs/inertia-react'
import FlashMessage from '@/Components/FlashMessage'

const Index = ({auth, flashMessage, movies}) => {

    return (
        <>
            <Autentikasi auth={auth}>
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button type='button' className='w-40 mb-8' variant='primary'>Insert Movie Baru</Button>
                </Link> 
                {
                    flashMessage?.message && (
                        <FlashMessage message={flashMessage.message} />
                    )
                }

                <table className='table-fixed w-full text-center'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={`/storage/${item.thumbnail}`} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.rating.toFixed(1)}</td>
                                    <td>
                                        <Button type='button' variant="warning">Edit</Button>
                                        <Button type='button' variant="danger">Hapus</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Autentikasi>
        </> 
    )
}

export default Index
