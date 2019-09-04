import React, { useEffect } from 'react'
import './index.scss'

const Edu = () => {
    function setExpTouch3D() {
        const expDom = document.querySelector('.edu__main');
        const contentDom = expDom.parentNode;
        expDom.addEventListener('mousemove', throttleGenerator(expMousemoveHandler, 20));
        expDom.addEventListener('mouseout', expMouseoutHandler);

        function throttleGenerator(fn, time) {
            let date = new Date();
            return (...args) => {
                const nowDate = new Date();
                if (nowDate - date > time) {
                    fn(...args);
                    date = nowDate;
                }
            };
        }

        function expMousemoveHandler(e) {
            const pageX = e.pageX;
            const pageY = e.pageY;
            const bannerWidth = expDom.offsetWidth;
            const bannerHeight = expDom.offsetHeight;
            const offsetLeft = expDom.offsetLeft;
            const offsetTop = contentDom.offsetTop;
            const x = pageX - offsetLeft - bannerWidth / 2;
            const y = -(pageY - offsetTop - bannerHeight / 2);
            expDom.style.transform = `rotateY(${x / 50}deg) rotateX(${y / 25}deg)`;
        }

        function expMouseoutHandler() {
            expDom.style.transform = 'rotateY(0deg) rotateX(0deg)';
        }
    }

    useEffect(() => {
        setExpTouch3D();
    }, [])

    return (
        <section className="edu">
            <div className="edu__main">
                <div className="edu__main-1">
                    <h2>教育经历</h2>
                    <p>于2019.9-2020.6期间就读于河南大学软件学院网络工程专业</p>
                </div>
                <div className="edu__main-2">
                    <h2>校内活动</h2>
                    <p>河南大学新媒体运营中心</p>
                </div>
            </div>
        </section>
    )
}

export default Edu