import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'


export default function Home() {
  const { t } = useTranslation('common')


  return (
    <div className={styles.container}>
      <h1>{t('h1')}</h1>
    </div>
  )
}


export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}