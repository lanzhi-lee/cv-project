import React, { useState } from 'react'
import './index.scss'

const Contact = () => {
    const [wechatShow, setWechatShow] = useState(false)

    return (
        <section className="contact">
            {/* <span>Contact</span> */}
            <div className="contact__content">
                <p>虚怀若谷，学习亦是历练</p>
                <p>专业则是为之奋斗一生的热爱</p>
                <p>带上我吧，逐梦的路上有你有我</p>
            </div>

            <ul className="contact__medialist">
                <li className="contact__medialist-item contact__medialist-item-mail">
                    <a href="mailto:baibai_lee@163.com">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-contact"></use>
                        </svg>
                    </a>
                </li>

                <li className="contact__medialist-item">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://github.com/baibai-lee" target="_blank">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-github"></use>
                        </svg>
                    </a>
                </li>

                <li className="contact__medialist-item contact__medialist-item-wechat"
                    onMouseOver={() => setWechatShow(true)}
                    onMouseLeave={() => setWechatShow(false)}
                >
                    <a href="#contact">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-weixin"></use>
                        </svg>
                    </a>
                    <span style={{ opacity: `${wechatShow ? '1' : '0'}` }}>
                        <img src="https://baibai-mine.oss-cn-shanghai.aliyuncs.com/wechat.png" alt="wechat"/>
                    </span>
                </li>
            </ul>
        </section>
    )
}

export default Contact