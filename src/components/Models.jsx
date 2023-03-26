import { GoTools } from 'react-icons/go'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { LoginSchema } from '../Validation/login-schema'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { userHendle } from '../utils'


export default function Models({ isActive = false, onClose }) {
    const [authantication, setAuthantication] = useState(false);
    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    //console.log(user);

    const checkAuth = ( username, password ) => {
        //console.log(username + password);
        const developerInfo = {
            username: 'developer@mail.com',
            password: '12345'
        }

        if (username === developerInfo.username && password === developerInfo.password) {
            let data = {
                role:'developer',
                username,
                password

            }
            setTimeout(() => {
                userHendle(data)

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



    if (user) {
        //console.log(location.state?.return_url )
        return <Navigate to={'/layout'} replace={true} />
    }

    const handleSubmit = async (values, actions) => {
        //console.log(values.username , values.password)
        checkAuth(values.username, values.password);

    }

    if (isActive == true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-full  backdrop-blur-sm'>
                <div className='h-full w-full flex items-center justify-center'>
                    <div className='relative flex flex-col items-center bg-[#507BB7] rounded-3xl bg-opacity-20 justify-center gap-y-16 min-w-[300px] min-h-[400px] w-auto h-auto border-2 '>
                        <div onClick={onClose}><AiOutlineCloseCircle className='absolute top-4 right-4 text-white transition-all cursor-pointer hover:scale-75' size={34}></AiOutlineCloseCircle></div>
                        <GoTools className='text-white animate-spin-slow' size={80}></GoTools>
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
                                        <Input type="text" name="username" className='p-2 rounded-md w-48  transition-all h-10 outline-none hover:text-sm ' label='Kullanıcı adı' />
                                        <Input type="password" name="password" className='p-2 rounded-md w-48  h-10 transition-all outline-none hover:text-sm ' label='Şifre' />
                                        <Button type='submit' disabled={!isValid || !dirty || isSubmitting}>Giriş Yap</Button>
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
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}
