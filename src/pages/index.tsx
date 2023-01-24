import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { GiHamburgerMenu, } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import Button from '@mui/material/Button';
import Link from 'next/link'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className='home-first-container gap-30 flex-column align-center justify-center responsive-padding-inline padding-block-4'>

          <h1 className='color-white heading-style-two weight-600'>Huge  <span className='color-primary'>Digital Clock</span></h1>
          <p className='color-white-08 text-align-center para'>
            "Huge Digital Clock" is a customizable digital clock app that displays an extra-large clock, the day of the week, and the calendar date. The clock color and font can be adjusted and it has a built-in night mode and anti burn-in mode. It includes weather info & battery status.
          </p>
          <Button variant="outlined" color='primary' className='download-now-button weight-600'>Download Now</Button>
          <div className='hdc-home-image-container'>
            <Image className='hdc-home-image' src="/images/hdc-home-bg-min.webp" width={500} height={500} alt="HDC Home Background" />
          </div>
        </div>
        <div className='home-second-container gap-10 flex-column align-center justify-center responsive-padding-inline padding-block-4'>
          <h2 className='color-gray heading-style-six'>HUGE DIGITAL CLOCK</h2>
          <h3 className='color-white heading-style-two weight-600'>Features <span className='color-primary'>.</span></h3>
          <div className='grid-container'>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-always-on.svg" width={1000} height={1000} alt="Always ON Display for night" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>Always ON <br /> Display for night</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-customize-theme.svg" width={1000} height={1000} alt="Customize Your Theme" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>Customize <br /> Your Theme</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-customize-color.svg" width={1000} height={1000} alt="Customizable All color combinations" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>Customizable All color <br /> combinations</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-reliable-android.svg" width={1000} height={1000} alt="Reliable Android Alarm system" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>Reliable Android <br /> Alarm system</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-night-mode-easy.svg" width={1000} height={1000} alt="Reliable Android Alarm system" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>Night mode is <br /> easy on eyes</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className='feature flex-column gap-10 justify-center align-center text-align-center'>
              <div className='hdc-home-feature-image-container'>
                <Image className='hdc-home-feature-image' src="/images/home-see-clearly-glasses.svg" width={1000} height={1000} alt="Reliable Android Alarm system" />
              </div>
              <h2 className='heading-style-five color-white weight-600'>See clearly <br /> Without glasses</h2>
              <p className='color-white-06 small-body-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
          </div>
          <div className='flex-row justify-center padding-block-2'>
            <Link href="/features">
              <Button variant="outlined" color='primary' className='see-all-button weight-600'>See All Features</Button>
            </Link>
          </div>
        </div>
        <div className='home-third-container gap-10 flex-column align-center justify-center responsive-margin-inline margin-block-2'>
          <div className='home-third-image-container flex-row gap-30 '>
            <div className='left flex-column gap-30 justify-center'>
              <h2 className='heading-style-four weight-600 '>Huge digital clock is available <br /> on both Android and iOS</h2>
              <div className='app-store-container flex-row gap-10'>
                <Image className='app-store-image' src="/images/get-it-on-apple-cropped.png" width={1000} height={1000} alt="Always ON Display for night image" />
                <Image className='app-store-image' src="/images/get-it-on-gp-cropped.png" width={1000} height={1000} alt="Always ON Display for night image" />
              </div>
              <div>
                <Button className='download-now' variant='contained'>Download Now</Button>
              </div>
            </div>
            <div className='right img-container '>
              <Image className='bottom-image' src="/images/night-mode.png" width={1000} height={1000} alt="Always ON Display for night image" />
            </div>
          </div>
        </div>
        <div className='home-four-container gap-10 flex-column align-center justify-center responsive-padding-inline padding-block-4'>
          <div className='flex-row align-end space-between full-width'>
            <h2 className='heading-style-two weight-600'>What people <br/> say about us <span className='color-primary'>.</span></h2>
            <div className='arrow-circle-container flex-row  align-center gap-20 heading-style-six weight-600'>
              <div className='arrow-circle place-center'> <AiOutlineArrowLeft/> </div>
              <div className='arrow-circle place-center'> <AiOutlineArrowRight/> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
