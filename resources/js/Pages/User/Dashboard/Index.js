
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import React from 'react'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/inertia-react';
import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovideCard';

const Dashboard = ({ auth, featured_movie, movies }) => {

    const flickityOpt = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    }

    return <Autentikasi auth={auth}>
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            {/* Featured Movies */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOpt}>
                    {
                        featured_movie.map((item, index)=> (
                            <FeaturedMovie
                                name={item.name}
                                category={item.category}
                                slug={item.slug}
                                thumbnail={item.thumbnail}
                                rating={item.rating}
                                key={item.id} />
                        ))
                    }
                </Flickity>
            </div>

            {/* Browse Of Movies */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-[50px]">Browse</div>
                <Flickity className='gap-[30px]' options={flickityOpt}>
                    {
                        movies.map((item, index) => (
                            <MovieCard
                                key={item.id}
                                name={item.name}
                                slug={item.slug}
                                thumbnail={item.thumbnail}
                                category={item.category}
                            />
                        ))
                    }
                </Flickity>
            </div>
        </>
    </Autentikasi>
}

export default Dashboard