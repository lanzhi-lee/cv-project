import React from 'react'
import './index.scss'

const Header = props => {
    const { GlobalSwiper, currentSlide } = props

    const handleNavItemClick = targetIndex => {
        GlobalSwiper.slideTo(targetIndex, 1000)
    }

    return (
        <header className="header">
            <section className="header__avatar">
                <img className="header__avatar-img"
                    src="https://baibai-mine.oss-cn-shanghai.aliyuncs.com/tb6501982-tinfied.jpg"
                    alt="avatar" />
                <span className="header__avatar-intro">
                    <span className="header__avatar-intro-name">李战</span>
                    <span className="header__avatar-intro-line"></span>
                    <span>个人简历</span>
                </span>
            </section>
            <nav className="header__nav">
                <a className={`header__nav-item ${currentSlide === 0 ? 'header__nav-item_active' : ''}`} href="#index" onClick={() => handleNavItemClick(0)} >首页</a>
                <a className={`header__nav-item ${currentSlide === 1 ? 'header__nav-item_active' : ''}`} href="#self" onClick={() => handleNavItemClick(1)} >简介</a>
                <a className={`header__nav-item ${currentSlide === 2 ? 'header__nav-item_active' : ''}`} href="#skill" onClick={() => handleNavItemClick(2)} >专业技能</a>
                <a className={`header__nav-item ${currentSlide === 3 ? 'header__nav-item_active' : ''}`} href="#exp" onClick={() => handleNavItemClick(3)} >项目经验</a>
                <a className={`header__nav-item ${currentSlide === 4 ? 'header__nav-item_active' : ''}`} href="#contact" onClick={() => handleNavItemClick(4)} >联系我</a>
                {/* <a className={`header__nav-item ${currentSlide === 2 ? 'header__nav-item_active' : ''}`} href="#edu" onClick={() => handleNavItemClick(2)} >教育经历</a> */}
            </nav>
        </header>
    )
}

export default Header