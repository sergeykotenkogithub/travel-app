import Layout from '@/components/common/Layout'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CgProfile } from 'react-icons/cg'
import { IAuthFields } from './auth.interface'

import styles from './Auth.module.scss'
import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import { signUp } from 'next-auth-sanity/client'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Auth: FC = () => {
    const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IAuthFields>({
        mode: 'onChange'
    })

    const isReg = typeForm === 'register'
    const { push } = useRouter()

    const onSubmit: SubmitHandler<IAuthFields> = async data => {
        console.log(data)
        if (isReg) {
            const response = await signUp(data)
            console.log(response)
            // @ts-ignore
            if (response.error) toast.error(response.error)
        } else {
            const response = await signIn('sanity-login', {
                redirect: false,
                ...data
            })
            if (response.error) {
                toast.error("Incorrect login or password entered")
                return
            }
            await push('/')
        }
    }

    return (
        <Layout>
            <h1 className={styles.h1}>Auth/{isReg ? 'Register' : 'login'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.wrapper}>
                    <input
                        {...register('email', { required: 'Email is invalid!' })}
                        type="text"
                        placeholder="E-mail"
                        className={styles.input}
                    />
                    {errors.email && <div className={styles.error}>
                        The field is emptyd</div>}
                </div>
                <div className={styles.wrapper}>
                    <input
                        {...register('password', { required: 'Password is invalid!' })}
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                    />
                    {errors.password && (
                        <div className={styles.error}>
                            The field is empty</div>
                    )}
                </div>
                <button className={stylesButton.button} type="submit">
                    <span className={stylesButton.text}>
                        {isReg ? 'Register' : 'Login'}
                    </span>
                    <span className={stylesButton.icon}>
                        <CgProfile size="18" />
                    </span>
                </button>
            </form>
            <div className={styles.changeType}>
                <button onClick={() => setTypeForm(isReg ? 'login' : 'register')}>
                    I want {isReg ? 'login' : 'register'}
                </button>
            </div>
        </Layout>
    )
}

export default Auth