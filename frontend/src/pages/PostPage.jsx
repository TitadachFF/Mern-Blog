import React from "react";

const PostPage = () => {
  return (
    <div className="post-page">
      <h1>
        {""}
        ไม่มีศัตรูถาวร Netflix ซื้อไลเซนส์รายการ Disney ชุดใหญ่ มี Grey’s
        Anatomy ด้วย
      </h1>
      <time>13 December 2023 - 11:26</time>
      <a href="" className="author">@Titadach</a>
      <div className="image">
        <img
          src="https://www.blognone.com/sites/default/files/externals/b6e92e34a7660b17840c7a959c673eb7.jpg"
          alt=""
        />
      </div>
      <p className="content">
        ถึงแม้เป็นคู่แข่งกันโดยตรงในวงการสตรีมมิ่ง
        แต่เมื่อรายการไม่ได้ซ้อนทับกัน ดีลธุรกิจก็เกิดขึ้นได้เสมอ ล่าสุด Netflix
        เซ็นสัญญากับ Disney ซื้อไลเซนส์รายการในเครือ Disney รวม 14 รายการไปฉายบน
        Netflix ตามกรอบเวลา 18 เดือน
      </p>
    </div>
  );
};

export default PostPage;
