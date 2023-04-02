import styles from '@/styles/components/Loader.module.scss'

// TODO: Update the loader code to make it the class like AssetsLoader
// that can do the functionality of loading our static assets + doing the preloader thing
// Adopt your javascript version from siddsham to this next.js setup

export default function Loader() {
    return <div id={styles.loader}></div>
}