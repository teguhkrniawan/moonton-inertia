
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import React from 'react'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/inertia-react';
import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovideCard';

const Dashboard = () => {

    const flickityOpt = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    }

    return <Autentikasi>
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
                        [1, 2, 3, 4].map(i => (
                            <FeaturedMovie
                                name="Teguh Ketemu CatWoman"
                                category="Komedi, Laga, Halusinasi"
                                slug="Teguh-Ketemu-CatWoman"
                                thumbnail="/images/featured-1.png"
                                rating={i + 1.0}
                                key={i} />
                        ))
                    }
                </Flickity>
            </div>

            {/* Browse Of Movies */}
            <div>
                <div class="font-semibold text-[22px] text-black mb-4 mt-[50px]">Browse</div>
                <Flickity className='gap-[30px]' options={flickityOpt}>
                    {
                        [1, 2, 3, 4].map(i => (
                            <MovieCard
                                key={i}
                                name="Golden Cat"
                                slug="Golden-Cat"
                                thumbnail="/images/browse-4.png"
                                category="Animation"
                            />
                        ))
                    }
                </Flickity>
            </div>
        </>
    </Autentikasi>
}

export default Dashboard