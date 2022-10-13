import Layout from '@/components/common/Layout'
import React from 'react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillSecurityScan } from 'react-icons/ai'
import { IAuthFields } from './auth.interface'
import styles from './Auth.module.scss';
import stylesButtom from '../place/BookTrip/BookTrip.module.scss'

const Auth: FC = () => {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IAuthFields>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthFields> = (data) => {

    }

    return (
        <Layout>
            <h1 className={styles.h1}>Auth/register </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.wrapper}>
                    <input
                        {...register('email', { required: 'Email is invalid!' })}
                        type="text"
                        placeholder="E-mail"
                        className={styles.input}
                    />
                    {errors.email && <div className={styles.error}>{`${errors.email}`}</div>}
                </div>
                <div className={styles.wrapper}>
                    <input
                        {...register('password', { required: 'Password is invalid!' })}
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                    />
                    {errors.password && <div className={styles.error}>{`${errors.password}`}</div>}
                </div>
                <button className={stylesButtom.button}>
                    <span className={stylesButtom.text}>Auth</span>
                    <span className={stylesButtom.icon}><AiFillSecurityScan size={19} /></span>
                </button>
            </form>
        </Layout>
    )
}

export default Auth