import React, { useEffect } from 'react'
import './index.scss'

const Edu = () => {
    function init() {
        // Init
        let container = document.querySelector(".edu__container")
        let inner = document.querySelector(".edu__inner");

        // Mouse
        let mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                let e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        let counter = 0;
        let updateRate = 10;
        let isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        let onMouseEnterHandler = function (event) {
            update(event);
        };

        let onMouseLeaveHandler = function () {
            inner.style = "";
        };

        let onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        let update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };

        let updateTransformStyle = function (x, y) {
            // let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            let style = "rotateX(" + x / 2 + "deg) rotateY(" + y / 2 + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTransform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    }
    
    useEffect(() => {
        init()
    }, [])

    return (
        <section className="edu">
            <div className="edu__container">
                <div className="edu__inner">
                    <div className="edu__main-1">
                        <h2>教育经历</h2>
                        <p>于2019.9-2020.6期间就读于 河南大学 软件学院 网络工程专业</p>
                    </div>
                    <div className="edu__main-2">
                        <h3>校内活动</h3>
                        <p>河南大学新媒体运营中心</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Edu