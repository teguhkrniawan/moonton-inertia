import React, { useEffect, useState } from 'react';
import Input from './../../Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';


const Login = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('login'));
    };

    return (
        <>
            <Head title='Login' />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            <ValidationErrors errors={errors} />
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        value="Email Address"
                                    />
                                    {/* <input type="email" name="email"
                                            className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                            placeholder="Email Address" /> */}
                                    <Input
                                        placeholder="Type Your Email"
                                        type='email'
                                        name='email'
                                        value={data.email}
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        handleChange={onHandleChange}
                                        value={data.password}
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    type='submit'
                                    variant='primary'
                                    processing={processing}
                                >
                                    <span className='text-bold font-semibold'>
                                        Login
                                    </span>
                                </Button>
                                <Link href={route('prototype.register')}>
                                    <Button type='button' variant='light-outline'>
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </Button>
                                </Link>
                                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                        <span className="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login