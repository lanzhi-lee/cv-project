import React, { useState } from 'react'
import './index.scss'

const SkillListItem = props => {
    const { selfClassName, iconName, content, infolist } = props

    const [basicStyle, setBasicStyle] = useState({})
    const [infoStyle, setInfoStyle] = useState({})

    const handleMouseEnter = () => {
        setBasicStyle({ opacity: 0 })
        setInfoStyle({ opacity: 1 })
    }

    const handleMouseLeave = () => {
        setBasicStyle({ opacity: 1 })
        setInfoStyle({ opacity: 0 })
    }

    return (
        <span className={`skill__list-items skill__list-${selfClassName}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <span className="skill__list-items-basic" style={basicStyle}>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#icon-${iconName}`}></use>
                </svg>
                <span>{content}</span>
            </span>

            <span className="skill__list-items-info" style={infoStyle}>
                <ul>
                    {
                        infolist.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))
                    }
                </ul>
            </span>
        </span>
    )
}

const Skill = () => {

    const skillListData = [
        { selfClassName: 'basic', iconName: 'HTML', content: 'HTML', infolist: [10, 2, 3] },
        { selfClassName: 'basic', iconName: 'css', content: 'CSS', infolist: [] },
        { selfClassName: 'basic', iconName: 'javascript-original', content: 'JavaScript', infolist: [] },
        { selfClassName: 'framework', iconName: 'React', content: 'React', infolist: [] },
        { selfClassName: 'framework', iconName: 'JS', content: 'Mock.js', infolist: [] },
        { selfClassName: 'backend', iconName: 'Nodejs', content: 'Node.js', infolist: [] },
        { selfClassName: 'tools', iconName: 'git', content: 'Git', infolist: [] },
        { selfClassName: 'tools', iconName: 'webpack', content: 'Webpack', infolist: [] },
    ]

    return (
        <section className="skill">
            <div className="skill__list">
                {
                    skillListData.map((listitem, index) => {
                        const { selfClassName, iconName, content, infolist } = listitem
                        return <SkillListItem key={index} {...{ selfClassName, iconName, content, infolist }} />
                    })
                }

                {/* 
                    基础 html css js 三大件 sass typescript
                    工具库 jquery echarts
                    开发工具 git webpack mock.js
                    前端框架 react vue 
                */}
            </div>
        </section >
    )
}

export default Skill