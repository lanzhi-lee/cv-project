import React from 'react'
import './index.scss'

const Exp = () => {

    const expDada = [
        {
            title: '港台小米网19暑期返校季活动',
            content: [
                '项目是实习期间参与的，是小米网港台地区暑期返校季的活动项目，在项目中担任前端之一',
                '技术栈包含React、Hooks、Sass等',
                '项目初期共有三人参与，使用Git进行协作及版本控制，后期转由我一人进行维护',
            ]
        },
        {
            title: 'TodoList',
            content: [
                'todolist是在学习react技术栈时的demo项目',
                '程序功能包括新增/删除待办项目、二次编辑项目、全部清除项目、数据缓存等',
                '技术栈包含React、Redux、Hooks、Typescript等',
            ]
        }, {
            title: '河南大学(软件学院)考试助手',
            content: [
                '该小程序是学院智慧考务建设的一个项目',
                '程序为广大师生提供考场座次查询、考试提前提醒、考生列表查询、现场签到等服务',
                '技术栈包含ES6等',
            ]
        }
    ]

    return (
        <section className="exp">
            <div className="exp__list">
                {
                    expDada.map((item, index) => (
                        <div key={`list-item-${index}`} className="exp__list-item">
                            <h3 className="exp__list-item-title">{item.title}</h3>
                            <ul className="exp__list-item-content">
                                {item.content.map((content, index) => (
                                    <li key={`content-item-${index}`}>{content}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Exp