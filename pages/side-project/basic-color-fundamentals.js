import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
import RelatedCTA from '../../components/RelatedCTA'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import styles from '../../styles/Report.module.css'

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function ProjectIndex() {
  const { t } = useTranslation('sideProject')
  return( <div className={styles.backgroundColor}>
  <Container>
    <Head>
      <title>Side Project | {t('title_05')} | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/side-project/colors/' />
      <meta property='og:url' content='https://juliomontas.com/side-project/colors/' />
      <meta property='og:image' content='https://juliomontas.com/img/side-project/colors/slide_03.png' />
      <meta name='twitter:image' content='https://juliomontas.com/img/side-project/colors/slide_03.png' />
      <meta property='og:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Julio Montás' />
      <meta name='twitter:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Julio Montás' />
      <meta name="description" content="Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory" key="description"/>
      <meta property='og:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
      <meta name='twitter:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
      <link rel="canonical" href="https://juliomontas.com/side-project/colors/" />
      <link rel="alternate" href="https://juliomontas.com/side-project/colors/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/side-project/colors/" hreflang="es-us" />
    </Head>
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
    <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
        <div className={styles.mainCenterCont}>
          <div className={styles.gridContainer}>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>{t('title_05')}</h1>
                        <p>{t('content_05')}</p>
                    </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h3>Overview</h3>
                    <p>{t('conceptContent_05')}</p>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.changeColors}>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h3>User Flow</h3>
                  <svg width="293" height="278" viewBox="0 0 293 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M279.823 0H182.042C174.873 0 169.062 5.81126 169.062 12.9798V40.6701C169.062 47.8386 174.873 53.6499 182.042 53.6499H279.823C286.992 53.6499 292.803 47.8386 292.803 40.6701V12.9798C292.803 5.81126 286.992 0 279.823 0Z" fill="#EEF2F6"/>
<path d="M222.203 31.5327H221.131V23.0015H222.203V31.5327ZM224.916 25.1929L224.945 25.8784C225.347 25.3433 225.861 25.0757 226.486 25.0757C227.607 25.0757 228.176 25.8237 228.191 27.3198V31.5327H227.16V27.3667C227.16 26.8706 227.076 26.519 226.908 26.312C226.744 26.1011 226.496 25.9956 226.164 25.9956C225.906 25.9956 225.674 26.0815 225.467 26.2534C225.263 26.4253 225.099 26.6499 224.974 26.9272V31.5327H223.937V25.1929H224.916ZM231.109 23.6577V25.1929H232.064V26.0308H231.109V29.9624C231.109 30.2124 231.15 30.4019 231.232 30.5308C231.314 30.6597 231.455 30.7241 231.654 30.7241C231.791 30.7241 231.929 30.7007 232.07 30.6538L232.058 31.5327C231.824 31.6108 231.584 31.6499 231.338 31.6499C230.928 31.6499 230.615 31.5034 230.4 31.2104C230.185 30.9175 230.078 30.5034 230.078 29.9683V26.0308H229.111V25.1929H230.078V23.6577H231.109ZM235.92 26.1655C235.775 26.1382 235.619 26.1245 235.451 26.1245C234.92 26.1245 234.549 26.4155 234.338 26.9976V31.5327H233.301V25.1929H234.308L234.326 25.8374C234.603 25.3296 234.996 25.0757 235.504 25.0757C235.668 25.0757 235.804 25.103 235.914 25.1577L235.92 26.1655ZM236.623 28.0698C236.623 27.1479 236.846 26.4194 237.291 25.8843C237.74 25.3452 238.332 25.0757 239.066 25.0757C239.801 25.0757 240.39 25.3374 240.836 25.8608C241.285 26.3843 241.515 27.0972 241.527 27.9995V28.6675C241.527 29.5854 241.304 30.312 240.859 30.8472C240.414 31.3823 239.82 31.6499 239.078 31.6499C238.344 31.6499 237.754 31.3901 237.308 30.8706C236.867 30.3511 236.638 29.6479 236.623 28.7612V28.0698ZM237.66 28.6675C237.66 29.3198 237.787 29.8335 238.041 30.2085C238.299 30.5796 238.644 30.7651 239.078 30.7651C239.992 30.7651 240.463 30.105 240.49 28.7847V28.0698C240.49 27.4214 240.361 26.9097 240.103 26.5347C239.846 26.1558 239.5 25.9663 239.066 25.9663C238.64 25.9663 238.299 26.1558 238.041 26.5347C237.787 26.9097 237.66 27.4194 237.66 28.064V28.6675Z" fill="#333333"/>
<path d="M279.823 223.994H182.042C174.873 223.994 169.062 229.805 169.062 236.973V264.664C169.062 271.832 174.873 277.644 182.042 277.644H279.823C286.992 277.644 292.803 271.832 292.803 264.664V236.973C292.803 229.805 286.992 223.994 279.823 223.994Z" fill="#F8E71C"/>
<path d="M223.703 253.368C223.648 254.435 223.347 255.25 222.801 255.815C222.258 256.381 221.49 256.663 220.497 256.663C219.499 256.663 218.706 256.285 218.118 255.528C217.53 254.767 217.236 253.737 217.236 252.438V250.634C217.236 249.34 217.537 248.316 218.138 247.564C218.745 246.812 219.569 246.437 220.613 246.437C221.575 246.437 222.318 246.726 222.842 247.305C223.37 247.879 223.657 248.701 223.703 249.772H222.438C222.384 248.961 222.213 248.382 221.926 248.036C221.638 247.69 221.201 247.517 220.613 247.517C219.934 247.517 219.412 247.783 219.048 248.316C218.683 248.845 218.501 249.622 218.501 250.647V252.473C218.501 253.48 218.669 254.252 219.007 254.79C219.348 255.328 219.845 255.597 220.497 255.597C221.149 255.597 221.618 255.435 221.905 255.111C222.192 254.788 222.37 254.207 222.438 253.368H223.703ZM224.981 252.486C224.981 251.411 225.241 250.561 225.761 249.937C226.285 249.308 226.975 248.993 227.832 248.993C228.689 248.993 229.377 249.299 229.896 249.909C230.42 250.52 230.689 251.352 230.703 252.404V253.184C230.703 254.255 230.443 255.102 229.924 255.727C229.404 256.351 228.711 256.663 227.846 256.663C226.989 256.663 226.301 256.36 225.781 255.754C225.266 255.148 224.999 254.327 224.981 253.293V252.486ZM226.191 253.184C226.191 253.945 226.339 254.544 226.636 254.981C226.936 255.414 227.34 255.631 227.846 255.631C228.912 255.631 229.461 254.861 229.493 253.32V252.486C229.493 251.73 229.343 251.133 229.042 250.695C228.741 250.253 228.338 250.032 227.832 250.032C227.335 250.032 226.936 250.253 226.636 250.695C226.339 251.133 226.191 251.728 226.191 252.479V253.184ZM233.567 256.526H232.357V246.026H233.567V256.526ZM235.221 252.486C235.221 251.411 235.481 250.561 236.001 249.937C236.525 249.308 237.215 248.993 238.072 248.993C238.929 248.993 239.617 249.299 240.137 249.909C240.661 250.52 240.929 251.352 240.943 252.404V253.184C240.943 254.255 240.683 255.102 240.164 255.727C239.644 256.351 238.952 256.663 238.086 256.663C237.229 256.663 236.541 256.36 236.021 255.754C235.506 255.148 235.24 254.327 235.221 253.293V252.486ZM236.431 253.184C236.431 253.945 236.58 254.544 236.876 254.981C237.177 255.414 237.58 255.631 238.086 255.631C239.152 255.631 239.701 254.861 239.733 253.32V252.486C239.733 251.73 239.583 251.133 239.282 250.695C238.981 250.253 238.578 250.032 238.072 250.032C237.575 250.032 237.177 250.253 236.876 250.695C236.58 251.133 236.431 251.728 236.431 252.479V253.184ZM245.557 250.265C245.389 250.233 245.207 250.217 245.011 250.217C244.391 250.217 243.958 250.556 243.712 251.235V256.526H242.502V249.13H243.678L243.698 249.882C244.022 249.289 244.48 248.993 245.072 248.993C245.263 248.993 245.423 249.025 245.551 249.089L245.557 250.265Z" fill="#333333"/>
<path d="M110.761 104.264H12.9798C5.81126 104.264 0 110.075 0 117.243V144.934C0 152.102 5.81126 157.914 12.9798 157.914H110.761C117.93 157.914 123.741 152.102 123.741 144.934V117.243C123.741 110.075 117.93 104.264 110.761 104.264Z" fill="#EEF2F6"/>
<path d="M49.9944 133.64C49.9944 133.214 49.8792 132.888 49.6487 132.662C49.4183 132.435 49.0022 132.214 48.4007 132C47.7991 131.785 47.3382 131.56 47.0179 131.326C46.7015 131.087 46.4632 130.818 46.303 130.517C46.1468 130.212 46.0686 129.865 46.0686 129.474C46.0686 128.798 46.2933 128.242 46.7425 127.804C47.1956 127.367 47.7874 127.148 48.5179 127.148C49.0179 127.148 49.4632 127.261 49.8538 127.488C50.2444 127.71 50.5452 128.021 50.7561 128.419C50.9671 128.818 51.0726 129.255 51.0726 129.732H49.9944C49.9944 129.205 49.8675 128.796 49.6136 128.507C49.3597 128.218 48.9944 128.074 48.5179 128.074C48.0843 128.074 47.7483 128.195 47.5101 128.437C47.2718 128.679 47.1526 129.019 47.1526 129.457C47.1526 129.816 47.2815 130.117 47.5394 130.359C47.7972 130.601 48.1956 130.818 48.7347 131.009C49.5745 131.287 50.1741 131.628 50.5335 132.035C50.8968 132.441 51.0784 132.972 51.0784 133.628C51.0784 134.32 50.8538 134.875 50.4046 135.292C49.9554 135.707 49.344 135.914 48.5706 135.914C48.0745 135.914 47.6155 135.806 47.1936 135.591C46.7757 135.373 46.4456 135.068 46.2034 134.677C45.9651 134.283 45.846 133.832 45.846 133.324H46.9241C46.9241 133.851 47.0706 134.261 47.3636 134.554C47.6604 134.847 48.0628 134.994 48.5706 134.994C49.0433 134.994 49.3987 134.873 49.637 134.63C49.8753 134.388 49.9944 134.058 49.9944 133.64ZM54.6116 135.914C53.8226 135.914 53.2171 135.679 52.7952 135.21C52.3733 134.738 52.1585 134.046 52.1507 133.136V132.369C52.1507 131.423 52.3558 130.683 52.7659 130.148C53.18 129.609 53.7561 129.339 54.4944 129.339C55.2366 129.339 55.7913 129.576 56.1585 130.048C56.5257 130.521 56.7132 131.257 56.721 132.257V132.937H53.1819V133.083C53.1819 133.763 53.3089 134.257 53.5628 134.566C53.8206 134.875 54.1897 135.029 54.6702 135.029C54.9749 135.029 55.2425 134.972 55.4729 134.859C55.7073 134.742 55.9261 134.558 56.1292 134.308L56.6683 134.964C56.219 135.597 55.5335 135.914 54.6116 135.914ZM54.4944 130.23C54.0647 130.23 53.7464 130.378 53.5394 130.675C53.3323 130.968 53.2151 131.425 53.1878 132.046H55.6839V131.906C55.6565 131.304 55.5472 130.875 55.3558 130.617C55.1683 130.359 54.8811 130.23 54.4944 130.23ZM59.3284 127.921V129.457H60.2835V130.294H59.3284V134.226C59.3284 134.476 59.3694 134.666 59.4515 134.794C59.5335 134.923 59.6741 134.988 59.8733 134.988C60.0101 134.988 60.1487 134.964 60.2894 134.917L60.2776 135.796C60.0433 135.875 59.803 135.914 59.5569 135.914C59.1468 135.914 58.8343 135.767 58.6194 135.474C58.4046 135.181 58.2972 134.767 58.2972 134.232V130.294H57.3304V129.457H58.2972V127.921H59.3284ZM62.8792 127.921V129.457H63.8343V130.294H62.8792V134.226C62.8792 134.476 62.9202 134.666 63.0022 134.794C63.0843 134.923 63.2249 134.988 63.4241 134.988C63.5608 134.988 63.6995 134.964 63.8401 134.917L63.8284 135.796C63.594 135.875 63.3538 135.914 63.1077 135.914C62.6976 135.914 62.3851 135.767 62.1702 135.474C61.9554 135.181 61.8479 134.767 61.8479 134.232V130.294H60.8811V129.457H61.8479V127.921H62.8792ZM66.1897 135.796H65.1526V129.457H66.1897V135.796ZM66.2718 127.775C66.2718 127.951 66.2229 128.097 66.1253 128.214C66.0276 128.332 65.8792 128.39 65.68 128.39C65.4847 128.39 65.3382 128.332 65.2405 128.214C65.1429 128.097 65.094 127.951 65.094 127.775C65.094 127.599 65.1429 127.451 65.2405 127.33C65.3382 127.208 65.4847 127.148 65.68 127.148C65.8753 127.148 66.0218 127.21 66.1194 127.335C66.221 127.457 66.2718 127.603 66.2718 127.775ZM68.803 129.457L68.8323 130.142C69.2347 129.607 69.7483 129.339 70.3733 129.339C71.4944 129.339 72.0628 130.087 72.0784 131.583V135.796H71.0472V131.63C71.0472 131.134 70.9632 130.783 70.7952 130.576C70.6311 130.365 70.3831 130.259 70.0511 130.259C69.7933 130.259 69.5608 130.345 69.3538 130.517C69.1507 130.689 68.9866 130.914 68.8616 131.191V135.796H67.8245V129.457H68.803ZM73.4319 132.339C73.4319 131.351 73.6116 130.605 73.971 130.101C74.3304 129.593 74.8558 129.339 75.5472 129.339C76.1917 129.339 76.6819 129.615 77.0179 130.166L77.0706 129.457H78.0081V135.855C78.0081 136.64 77.8069 137.242 77.4046 137.66C77.0022 138.082 76.4417 138.292 75.7229 138.292C75.4104 138.292 75.0589 138.214 74.6683 138.058C74.2815 137.906 73.9905 137.716 73.7952 137.49L74.2171 136.775C74.6468 137.197 75.1214 137.408 75.6409 137.408C76.5042 137.408 76.9476 136.937 76.971 135.996V135.169C76.6351 135.666 76.1585 135.914 75.5413 135.914C74.8851 135.914 74.3733 135.667 74.0061 135.175C73.639 134.679 73.4476 133.968 73.4319 133.042V132.339ZM74.469 132.931C74.469 133.642 74.5726 134.166 74.7796 134.501C74.9905 134.833 75.3343 135 75.8108 135C76.3265 135 76.7132 134.736 76.971 134.208V131.039C76.7015 130.519 76.3186 130.259 75.8226 130.259C75.346 130.259 75.0022 130.427 74.7913 130.763C74.5804 131.095 74.4729 131.607 74.469 132.298V132.931Z" fill="#333333"/>
<path d="M161.935 131.634C161.935 129.962 160.6 128.606 158.954 128.606C157.307 128.606 155.973 129.962 155.973 131.634C155.973 133.307 157.307 134.663 158.954 134.663C160.6 134.663 161.935 133.307 161.935 131.634Z" fill="#EEF2F6"/>
<path d="M165.132 131.496L154.846 137.529L154.846 125.463L165.132 131.496Z" fill="#EEF2F6"/>
<path d="M158.799 131.357L143.055 131.357" stroke="#EEF2F6" stroke-linecap="square"/>
<path d="M140.464 131.358C140.464 133.031 141.798 134.387 143.445 134.387C145.092 134.387 146.426 133.031 146.426 131.358C146.426 129.686 145.092 128.33 143.445 128.33C141.798 128.33 140.464 129.686 140.464 131.358Z" fill="#EEF2F6"/>
<path d="M136 131.496L146.286 125.463L146.286 137.53L136 131.496Z" fill="#EEF2F6"/>
<path d="M230.355 215.731C232.028 215.731 233.384 214.396 233.384 212.749C233.384 211.103 232.028 209.768 230.355 209.768C228.683 209.768 227.327 211.103 227.327 212.749C227.327 214.396 228.683 215.731 230.355 215.731Z" fill="#F8E71C"/>
<path d="M230.494 218.928L224.46 208.641L236.527 208.641L230.494 218.928Z" fill="#F8E71C"/>
<path d="M230.633 212.594L230.633 196.85" stroke="#F8E71C" stroke-linecap="square"/>
<path d="M230.632 194.259C228.959 194.259 227.603 195.593 227.603 197.24C227.603 198.886 228.959 200.221 230.632 200.221C232.304 200.221 233.66 198.886 233.66 197.24C233.66 195.593 232.304 194.259 230.632 194.259Z" fill="#F8E71C"/>
<path d="M230.493 189.795L236.526 200.081L224.46 200.081L230.493 189.795Z" fill="#F8E71C"/>
<path d="M230.355 69.0011C232.028 69.0011 233.384 67.6664 233.384 66.0198C233.384 64.3733 232.028 63.0386 230.355 63.0386C228.683 63.0386 227.327 64.3733 227.327 66.0198C227.327 67.6664 228.683 69.0011 230.355 69.0011Z" fill="#EEF2F6"/>
<path d="M230.494 72.1982L224.46 61.9119L236.527 61.9119L230.494 72.1982Z" fill="#EEF2F6"/>
<path d="M230.633 65.8643L230.633 50.1201" stroke="#EEF2F6" stroke-linecap="square"/>
<path d="M230.632 47.5287C228.959 47.5287 227.603 48.8634 227.603 50.5099C227.603 52.1564 228.959 53.4912 230.632 53.4912C232.304 53.4912 233.66 52.1565 233.66 50.5099C233.66 48.8634 232.304 47.5287 230.632 47.5287Z" fill="#EEF2F6"/>
<path d="M231.198 87.7979L284.397 130.863H178L231.198 87.7979Z" fill="#EEF2F6"/>
<path d="M231.198 173.929L178 130.863H284.397L231.198 173.929Z" fill="#EEF2F6"/>
<path d="M179 130.3H283V131.3H179V130.3Z" fill="#EEF2F6"/>
<path d="M220.275 127.265L222.502 134.226L224.728 127.265H226.111V135.796H225.039V132.474L225.138 129.146L222.906 135.796H222.086L219.865 129.169L219.965 132.474V135.796H218.892V127.265H220.275ZM230.084 135.914C229.295 135.914 228.689 135.679 228.267 135.21C227.846 134.738 227.631 134.046 227.623 133.136V132.369C227.623 131.423 227.828 130.683 228.238 130.148C228.652 129.609 229.228 129.339 229.967 129.339C230.709 129.339 231.263 129.576 231.631 130.048C231.998 130.521 232.185 131.257 232.193 132.257V132.937H228.654V133.083C228.654 133.763 228.781 134.257 229.035 134.566C229.293 134.875 229.662 135.029 230.142 135.029C230.447 135.029 230.715 134.972 230.945 134.859C231.179 134.742 231.398 134.558 231.601 134.308L232.14 134.964C231.691 135.597 231.006 135.914 230.084 135.914ZM229.967 130.23C229.537 130.23 229.219 130.378 229.012 130.675C228.804 130.968 228.687 131.425 228.66 132.046H231.156V131.906C231.129 131.304 231.019 130.875 230.828 130.617C230.64 130.359 230.353 130.23 229.967 130.23ZM234.42 129.457L234.449 130.142C234.851 129.607 235.365 129.339 235.99 129.339C237.111 129.339 237.679 130.087 237.695 131.583V135.796H236.664V131.63C236.664 131.134 236.58 130.783 236.412 130.576C236.248 130.365 236 130.259 235.668 130.259C235.41 130.259 235.178 130.345 234.971 130.517C234.767 130.689 234.603 130.914 234.478 131.191V135.796H233.441V129.457H234.42ZM242.488 135.24C242.144 135.689 241.642 135.914 240.982 135.914C240.408 135.914 239.974 135.716 239.681 135.322C239.388 134.923 239.24 134.345 239.236 133.587V129.457H240.267V133.511C240.267 134.5 240.564 134.994 241.158 134.994C241.787 134.994 242.221 134.712 242.459 134.15V129.457H243.496V135.796H242.512L242.488 135.24Z" fill="#333333"/></svg>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.sketchIphone}>
                <h3>Wireframes</h3>
                  <section>
                    <Image
                      src="/img/side-project/colors/color_Intro.png"
                      alt="Intro"
                      width={434}
                      height={867}
                      quality={50}
                      layout="responsive"
                      loading="lazy"
                    />
                    <p>Intro</p>
                  </section>
                  <section>
                    <Image
                      src="/img/side-project/colors/color_Menu.png"
                      alt="Mockup design of the green color"
                      width={434}
                      height={867}
                      quality={50}
                      layout="responsive"
                      loading="lazy"
                    />
                    <p>Menu</p>
                  </section>
                  <section>
                    <Image
                      src="/img/side-project/colors/color_Settings.png"
                      alt="Mockup design of the green color"
                      width={434}
                      height={867}
                      quality={50}
                      layout="responsive"
                      loading="lazy"
                    />
                    <p>Settings</p>
                  </section>
                  <section>
                    <Image
                      src="/img/side-project/colors/color_Dashboard.png"
                      alt="Mockup design of the green color"
                      width={434}
                      height={867}
                      quality={50}
                      layout="responsive"
                      loading="lazy"
                    />
                    <p>Color: Dashboard</p>
                  </section>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                   <h3>Concept UI Design</h3>
                    <Swiper
                    speed={400}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            width: 310
                        },
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            width: 950
                        }
                    }}
                    >
                    <SwiperSlide>

                    <Image
                    src="/img/side-project/colors/slide_03.png"
                    alt="Choose a color to learn"
                    width={1080}
                    height={1080}
                    quality={20}
                    layout="responsive"
                    loading="eager"
                    />
                    </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/colors/slide_04.png"
                            alt="Mockup design of the green color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/colors/slide_05.png"
                            alt="Mockup design of the blue color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h3>&#128736; Features List</h3>
                  <div>
                    <ul className={styles.secTextList}>
                      <li>Voice over</li>
                      <li>Progressive web apps (PWAs)</li>
                    </ul>
                  </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h3>URL</h3>
                  <ul>
                    <RelatedCTA
                      url="https://juliomontas.github.io/COLORS/"
                      title="Prototype Demo"
                      content=""
                    />
                  </ul>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h3>More Projects</h3>
                    <ul>
                    <RelatedCTA
                      url="/side-project/hellocode-the-home-for-programming-languages"
                      title={t('title_01')}
                      content={t('content_01')}
                    />
                    <RelatedCTA
                      url="/side-project/surveillance-culture"
                      title={t('title_02')}
                      content={t('content_02')}
                    />
                    <RelatedCTA
                      url="/side-project/width-take-over-the-screen"
                      title={t('title_03')}
                      content={t('content_03')}
                    />
                </ul>
                </div>
                </motion.div>

                <CaseStudiesWrap
                  title="Case Studies"
                />

          </div>
        </div>
      </div>
    </motion.div>
    </motion.div>
  </Container>
  </div>
  )
}

export default ProjectIndex
