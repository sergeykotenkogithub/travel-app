import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { MdHome, MdOutlineFavorite, MdAccountCircle, MdLogout } from 'react-icons/md'
import styles from './Footer.module.scss'
import { memo } from 'react'


type TypeNavItem = {
  icon: IconType,
  link: string
}

const navItems: TypeNavItem[] = [
  {
    icon: MdHome,
    link: '/'
  },
  {
    icon: MdOutlineFavorite,
    link: '/favorites'
  },
  {
    icon: MdAccountCircle,
    link: '/profile'
  },
  {
    icon: MdLogout,
    link: '/auth'
  },

]

const Footer = () => {
  const { push, pathname } = useRouter()
  const { data } = useSession()

  if (pathname === '/auth') return null

  return (
    <footer className={styles.footer}>
      <nav>
        {data ? navItems.map(item => (
          <button
            className={pathname === item.link ? styles.active : ''}
            onClick={async () => {
              item.link === '/auth' ? await signOut() : await push(item.link)
            }}
            key={item.link}
          >
            <item.icon />
          </button>
        )) :

          (<Link href='/auth'>
            <a className={styles['go-to-login']}>
              Go to login
            </a>
          </Link>)

        }


      </nav>
    </footer>
  )
}
export default memo(Footer)
