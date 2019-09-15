import React from 'react'
import './index.scss'

const Self = () => {
    return (
        <section className="self">
            <div className="self__avatar">
                <img className="self__avatar-img"
                    src="https://baibai-mine.oss-cn-shanghai.aliyuncs.com/avatar.jpg"
                    alt="avatar"
                />
                <ul className="self__avatar-keywords">
                    <li className="self__avatar-keyword1">21岁</li>
                    <li className="self__avatar-keyword2">杭州</li>
                    <li className="self__avatar-keyword3">武汉</li>
                    <li className="self__avatar-keyword4">本科</li>
                    <li className="self__avatar-keyword5">应届生</li>
                </ul>

            </div>
            <div className="self__motto">对过去从不遗憾，对当下不断探索，对未来充满希望</div>
            <div className="self__line"></div>
            <div className="self__introduction">
                <p>我是李战，来自河南南阳</p>
                <p>本科就读于河南大学，正在寻找一份前端工程师的工作</p>
                <p>baibai_lee@163.com</p>
            </div>
        </section>
    )
}

export default Self