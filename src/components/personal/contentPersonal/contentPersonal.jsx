import React from 'react'
import './contentPersonal.css'

const ContentPersonal = () => {
    return (
        <div className="contentPersonal">
            <h1>Chat Box</h1>
            <div class="d-container">
                <div class="card">
                    <div class="face front"><img src="https://static.tin.moi/uploads/news/photo/lu/luv/luvchXz7DR-640x853.jpg" alt="" /></div>
                    <div class="face back"><img src="https://images.tuyensinh247.com/picture/article/2020/0708/tu-vi-12-cung-hoang-dao-ngay-9-7-2020-1.jpg" alt="" /></div>
                </div>
            </div>

            <div className="body">
                <div className="slide">
                    <div className="slides">
                        <input type="radio" id="radio1" />
                        <input type="radio" id="radio2" />
                        <input type="radio" id="radio3" />
                        <input type="radio" id="radio4" />
                        <input type="radio" id="radio5" />

                        <img src="https://nguoinoitieng.tv/images/nnt/101/0/bfof.jpg" alt="" />
                        <img src="https://anhdep123.com/wp-content/uploads/2021/01/anh-gai-xinh-toc-dai-deo-kinh-de-thuong.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/e8/74/c0/e874c0bc52c7312251d4f2ae6a4b5850.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/83/7d/fe/837dfeb7ed9268c1d280b4ef62dffa33.jpg" alt="" />
                        <img src="https://3.pik.vn/20208f08cdd1-d266-4929-9859-b968fa4e44d2.jpg" alt="" />
                    </div>

                    <div className="a">
                        <label htmlFor="radio1" className="b"></label>
                        <label htmlFor="radio2" className="b"></label>
                        <label htmlFor="radio3" className="b"></label>
                        <label htmlFor="radio4" className="b"></label>
                        <label htmlFor="radio5" className="b"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPersonal;
