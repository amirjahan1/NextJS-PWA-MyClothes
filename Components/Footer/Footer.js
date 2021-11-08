import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import React from "react";

const Footer = () => {
  
    return(


<section className="text-gray-400 flex justify-evenly my-10">


            <Link href="/" >

                <a >
                    <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}
                        title="Join us in FaceBook"
                        arrow>
                    <IconButton>
                 <FacebookIcon className="hover:text-blue-900"/>
                    </IconButton>
                    </Tooltip>
                    </a>

            </Link>


            <Link href="/">
                <a >
  <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}
                        title="Follow us in Instagram"
                        arrow>
                    <IconButton>
               <InstagramIcon className="hover:text-rose-600"/>
                     </IconButton>
</Tooltip>
                </a>
            </Link>

            <Link href="/" >
                <a>
  <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}
                        title="Join us in Twitter"
                        arrow>
                    <IconButton>
                <TwitterIcon  className="hover:text-blue-500"/>
                     </IconButton>
</Tooltip>
                    </a>
            </Link>

            <Link href="/">
                <a >
<Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}
                        title="Join us in Github"
                        arrow>
                    <IconButton>
               <GitHubIcon  className="hover:text-blueGray-800"/>
                     </IconButton>
</Tooltip>
                    </a>
            </Link>

            <Link href="/" >

                <a >
<Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}
                        title="What's your opinion"
                        arrow>
                        <IconButton>
                    <EmailIcon className="hover:text-blue-500"/>
                     </IconButton>
</Tooltip>
                </a>
            </Link>



        </section>
    )
}

export default Footer