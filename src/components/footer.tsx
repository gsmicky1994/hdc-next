import Image from "next/image";

export default function Footer() {
    function trackAnalytics(analytics: string) {

    }
    return <>
        <footer className="footer flex-column gap-40">
            <div className="top flex-column gap-60" >
                <div className="footer-grid-container">
                    <div className="flex-column gap-30">
                        <div className="logo-container flex-row gap-10 align-center">
                            <Image src="/images/hdc-logo-transparent-min.webp" alt="HDC Logo" width={40} height={40} />
                            <span className="weight-600">HUGE DIGITAL CLOCK</span>
                        </div>
                        <p className="medium-text">
                            This is a huge digital clock, the biggest! It reproduces the fabulous display of a digital
                            clock. The display is always on. The design is customizable.
                        </p>
                    </div>
                    <div className="flex-column gap-30">
                        <div>
                            <h2 className="body-text">About Us</h2>
                        </div>
                        <div className="flex-column gap-5 footer-link-container medium-text">
                            <div className="pointer">Home</div>
                            <a href='https://kalagato.ai/huge-digital-clock-privacy-policy/' target="_blank"
                                className="pointer remove-text-style">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="flex-column gap-30">
                        <div>
                            <h2 className="body-text">Important Links</h2>
                        </div>
                        <div className="flex-column gap-5 footer-link-container medium-text">
                            <a href='https://huge80sclock.page.link/hdcweb' target="_blank"
                                onClick={() => trackAnalytics('android')} className="pointer remove-text-style">Huge
                                Digital Clock for Android</a>
                            <a href='https://apps.apple.com/in/app/huge-digital-clock/id1515003825'
                                target="_blank" onClick={() => trackAnalytics('ios')} className="pointer remove-text-style">Huge Digital Clock for iOS</a>
                        </div>
                    </div >
                    <div className="flex-column gap-30">
                        <h2 className="body-text">
                            Contact Info
                        </h2>
                        <div className="flex-column medium-text">
                            <span>KalaGato</span>
                            <span>114 Lavender Street, CT Hub 2,</span>
                            <span>#11-83(Lobby 1) Singapore</span>
                            <span>338729</span>
                            <a href="mailto:contactus@kalagato.co" target="_blank" className="remove-text-style">email:
                                contactus@kalagato.co</a>
                            <a href="https://kalagato.ai/" target="_blank" className="remove-text-style pointer">Website:
                                https://kalagato.ai/</a>
                        </div>
                    </div>
                </div >
                <div className="flex-row space-between align-center copyright-social-container">
                    <span>
                        &#169; 2023 Huge Digital Clock - All Rights Reserved.
                    </span>
                    <div className="flex-row gap-10 social-icon-container">
                        <a href="https://www.facebook.com/hugedigitalclock" className="social-icon pointer">
                            <img alt="HDC Facebook link" src="assets/images/fb.svg" />
                        </a>
                    </div>
                    <a href="https://www.instagram.com/hugedigital_clock/" className="social-icon pointer" >
                        <img alt="HDC Instagram link" src="assets/images/instagram.svg" />
                    </a >
                </div >
            </div >
            <div className="bottom">

            </div>
        </footer>

    </>
}