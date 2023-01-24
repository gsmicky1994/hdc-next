import styles from '@/styles/Feature.module.scss'
import { Button } from '@mui/material'
import Image from 'next/image'
import featureBg from "../../../public/images/features-bg.png"
import Head from 'next/head'
export default function Features() {
    return <>
        <Head>
            <title>Feature</title>
        </Head>
        <div className={styles.feature}>
            <div className='bg-image-container'>
                <Image className='bg-image' src="/images/features-bg.png" fill quality={100} alt="features background image" />
            </div>
            <div className='feature-first-container flex-column gap-20 justify-center align-center text-align-center'>
                <h1 className='color-white heading-style-two weight-600'>A better way to <br /> <span className='color-primary'>keep track on time</span></h1>
                <p className='color-white-08 heading-style-six'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore aliquyam.</p>
            </div>
            <div className='feature-second-container gap-10 flex-column align-center justify-center responsive-padding-inline padding-block-2'>
                <h2 className='color-gray heading-style-six'>HUGE DIGITAL CLOCK</h2>
                <h3 className='color-white heading-style-two weight-600'>Features <span className='color-primary'>.</span></h3>
                <div className='features-container flex-column gap-60'>
                    <div className='feature-item-row flex-row gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/display-for-night.png" width={1000} height={1000} alt="Always ON Display for night image" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>01</div>
                            <h4 className='heading-style-four weight-600'>Always ON <br /> Display for night</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                    <div className='feature-item-row flex-row-reverse gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/customize-your-theme.png" width={1000} height={1000} alt="Customize Your Theme" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>02</div>
                            <h4 className='heading-style-four weight-600'>Customize <br /> Your Theme</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                    <div className='feature-item-row flex-row gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/customizable-all-color-combinations.png" width={1000} height={1000} alt="Customizable All color combinations" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>03</div>
                            <h4 className='heading-style-four weight-600'>Customizable All <br /> color combinations</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                    <div className='feature-item-row flex-row-reverse gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/reliable-android-alarm-system.png" width={1000} height={1000} alt="Reliable Android Alarm system" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>04</div>
                            <h4 className='heading-style-four weight-600'>Reliable Android <br /> Alarm system</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                    <div className='feature-item-row flex-row gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/night-mode.png" width={1000} height={1000} alt="Night mode is easy on eyes" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>05</div>
                            <h4 className='heading-style-four weight-600'>Night mode is <br /> easy on eyes</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                    <div className='feature-item-row flex-row-reverse gap-40 justify-center'>
                        <div className='feature-image-container half-width'>
                            <Image className='feature-image' src="/images/see-clearly.png" width={1000} height={1000} alt="See clearly Without glasses" />
                        </div>
                        <div className='feature-content flex-column justify-center gap-10 half-width'>
                            <div className='feature-number color-white-02 heading-style-two weight-600'>06</div>
                            <h4 className='heading-style-four weight-600'>See clearly <br /> Without glasses</h4>
                            <p className='small-body-text color-white-06'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='feature-third-container gap-10 flex-column align-center justify-center responsive-margin-inline margin-block-2'>
                <div className='feature-third-image-container flex-row gap-30 '>
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
        </div>
    </>
}