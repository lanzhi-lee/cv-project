import React from 'react'
import './index.scss'

// const sourceArr = ['#index', '#self', '#edu', '#skill', '#exp', '#contact']

const Header = props => {

    const handleNavItemClick = targetIndex => {
        // const sourceHash = window.location.hash
        // const currentIndex = sourceMap.get(sourceHash)
        // console.log('currentIndex', currentIndex)
        // console.log('targetIndex'.targetIndex)
        // const duration = Math.abs(currentIndex - targetIndex) > 2 ? 2000 : 1000
        // console.log(Math.abs(currentIndex - targetIndex))
        // console.log(duration)
        // window.location.hash = sourceArr[targetIndex]
        props.GlobalSwiper.slideTo(targetIndex, 1000)
    }

    return (
        <header className="header">
            <section className="header__avatar">
                <img className="header__avatar-img"
                    src="https://tva3.sinaimg.cn/crop.0.0.720.720.180/005XvQnFjw8exto6zbandj30k00k0q49.jpg"
                    alt="avatar" />
                <span className="header__avatar-intro">
                    <span className="header__avatar-intro-name">李战</span>
                    <span className="header__avatar-intro-line"></span>
                    <span>个人简历</span>
                </span>
            </section>
            <nav className="header__nav">
                <a className="header__nav-item" href="#index" onClick={() => handleNavItemClick(0)} >首页</a>
                <a className="header__nav-item" href="#self" onClick={() => handleNavItemClick(1)} >自我评价</a>
                <a className="header__nav-item" href="#edu" onClick={() => handleNavItemClick(2)} >教育经历</a>
                <a className="header__nav-item" href="#skill" onClick={() => handleNavItemClick(3)} >专业技能</a>
                <a className="header__nav-item" href="#exp" onClick={() => handleNavItemClick(4)} >项目经验</a>
                <a className="header__nav-item" href="#contact" onClick={() => handleNavItemClick(5)} >联系我</a>
            </nav>
        </header>
    )
}

export default Header