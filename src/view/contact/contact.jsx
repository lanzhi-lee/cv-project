import React from 'react'
import './index.scss'

const Contact = () => {
    return (
        <section className="contact">
            <span>Contact</span>
            <div className="contact__content">
                <p></p>
                <p></p>
                <p></p>
                <p>带上我吧，逐梦的路上有你有我</p>
            </div>
            <ul className="contact__medialist">
                <li className="contact__medialist-item">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-contact"></use>
                    </svg>
                </li>

                <li className="contact__medialist-item">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-github"></use>
                    </svg>
                </li>

                {/* <li className="contact__medialist-item">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-weibo"></use>
                    </svg>
                </li> */}

                <li className="contact__medialist-item">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-weixin"></use>
                    </svg>
                </li>
            </ul>
        </section>
    )
}

export default Contact