import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { LoginSchema } from '../Validation/login-schema'
import Input from './Input'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';
import { userHendle } from '../utils'
import { useState } from 'react'
import { GrUserAdmin } from 'react-icons/gr'
import Icon from './Icon'
import { logout } from '../store/auth'
import store from '../store'


export default function Models() {
    const user = useSelector(state => state.auth.user)

    const [isActive, setisActive] = useState(false)
    const logoutLy = () => store.dispatch(logout())

    const checkAuth = (username, password) => {
        const developerInfo = {
            username: 'developer@mail.com',
            password: '12345'
        }

        if (username === developerInfo.username && password === developerInfo.password) {
            let data = {
                role: 'developer',
                username,
                password

            }
            setTimeout(() => {
                userHendle(data)
                setisActive(false)

            }, 2000);
            notifySuccess();
        } else {
            userHendle(false);
            notifyError();
        }
    }

    const notifyError = () => toast.error('Hatalı Giriş!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifySuccess = () => toast.success('Giriş Başarılı', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });




    const handleSubmit = async (values, actions) => {

        //console.log(values.username , values.password)
        checkAuth(values.username, values.password);

    }



    return (
        <>
            {!user && <div className='cursor-pointer text-gray-900 opacity-80 hover:scale-110 transition-all' onClick={() => { setisActive(true) }}><GrUserAdmin size={24}></GrUserAdmin></div>}
            {user && <button onClick={logoutLy}><RiLogoutCircleRLine></RiLogoutCircleRLine></button>}
            {
                isActive === true && !user && <div className='fixed top-0 left-0 h-screen w-full  backdrop-blur-sm'>
                    <div className='h-full w-full flex items-center justify-center'>
                        <div className='relative flex flex-col items-center bg-[#507BB7] rounded-3xl bg-opacity-20 justify-center gap-y-16 min-w-[300px] min-h-[400px] w-auto h-auto border-2 '>
                            <div onClick={() => { setisActive(false) }}><AiOutlineCloseCircle className='absolute top-4 right-4 text-white transition-all cursor-pointer hover:scale-75' size={34}></AiOutlineCloseCircle></div>
                            <div className='flex items-center justify-center gap-x-3'>
                                <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                                <div className='space-x-1'>
                                    <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                                    <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                                </div>
                            </div>
                            <Formik
                                validationSchema={LoginSchema}
                                initialValues={{
                                    username: '',
                                    password: ''

                                }}

                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, values, isValid, dirty }) => (
                                    <Form>
                                        <div className='flex flex-col items-center justify-center gap-y-3'>
                                            <Input type="text" name="username" className='p-2  focus:outline-brand-color  w-48 text-base  transition-all h-10 outline-none hover:text-sm ' label='Kullanıcı adı' />
                                            <Input type="password" name="password" className='p-2  focus:outline-brand-color w-48  h-10 text-base transition-all outline-none hover:text-sm ' label='Şifre' />
                                            <Button type='submit' disabled={!isValid || !dirty || isSubmitting}>Giriş Yap</Button>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            }

            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"></ToastContainer>
        </>
    )

}
