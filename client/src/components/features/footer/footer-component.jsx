import React from "react";
import './footer.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Footer = () => {
  return (
    <>

      <div className="footer">

        {/* <div id="button"></div> */}
        {/* <ArrowCircleUpIcon/> */}
        <ArrowCircleUpIcon style={{ fontSize: '300%' }} />

        <div id="container">

          <div className="Icons-container">
            <p>Shimon Samay</p>
            <a href="https://www.linkedin.com/in/shimon-samay-363a27217/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a href="https://github.com/ShimonSamay"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a href="shimonsamay7@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          </div>

          <div className="Icons-container">
            <p>Yakov Shiber</p>
            <a href="https://www.linkedin.com/in/yaakov-shiber-31a466226/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a href="https://github.com/JacobShiber"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a href="Yaakovshiber@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          </div>

          <div className="Icons-container">
            <p>Keren Hailu</p>
            <a href="keren4509@gmail.com"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a href="https://github.com/kerenhailu"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a href="keren4509@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          </div>

          <div className="Icons-container">
            <p>Shay Belayneh</p>
            <a href="shay600195@gmail.com"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a href="https://github.com/ShayBelayneh"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a href="shay600195@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>

          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;

