import React from 'react'
import './index.scss'

const Skill = () => {
    return (
        <section className="skill">

            <ul className="skill__list">
                <li className="skill__list-item"><span className="skill__list-item-html">HTML</span></li>
                <li className="skill__list-item"><span className="skill__list-item-css">CSS</span></li>
                <li className="skill__list-item"><span className="skill__list-item-js">Js</span></li>
                <li className="skill__list-item"><span className="skill__list-item-mp">小程序</span></li>
                <li className="skill__list-item"><span className="skill__list-item-react">React</span></li>
                <li className="skill__list-item"><span className="skill__list-item-mock">Mockjs</span></li>
                <li className="skill__list-item"><span className="skill__list-item-node">Nodejs</span></li>
                <li className="skill__list-item"><span className="skill__list-item-git">Git</span></li>
            </ul>

            <div className="skill__content">
                <p>在校时在实验室学习前端，大四时在北京小米科技实习，有比较系统的前端基础知识</p>
                <p>能够使用React搭建应用，对框架背后的MVVM模式有所了解</p>
                <p>实际参与开发过多个项目（React，小程序，Vue等），能够很好地配合团队</p>
                <p>自我驱动力强，有不断求知、探索的精神</p>
                <p>有过社团（年级）管理经验，能带领并帮助团队成长</p>
            </div>
        </section >
    )
}

export default Skill