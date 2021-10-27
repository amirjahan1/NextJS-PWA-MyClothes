import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box';
import { useRouter} from "next/router";
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Navbar = (props) => {

    const { sx, ...other } = props;
    const router = useRouter();

    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
    };






  return(
      <nav >
          <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
              }}
          >
          <ul className="navbar" >
              <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: '95px'
              }}
              >
              <li className={`navbar ${router.pathname == "/" ? "active" : ""}`}>
                  <Link href="/">
                  <a>
                      <HomeIcon/>
                      خانه
                  </a>
                  </Link>
              </li>

                  <li className={`navbar ${router.pathname == "/product" ? "active" : ""}`}>
                      <Link href="/">
                          <a>
                              <LocalMallIcon/>
                              محصولات
                          </a>
                      </Link>
                  </li>

                  <li className={`navbar ${router.pathname == "/service" ? "active" : ""}`}>
                      <Link href="/">
                          <a>
                              <SupervisedUserCircleIcon/>
                             پشتیبانی
                          </a>
                      </Link>
                  </li>

                  <li className={`navbar ${router.pathname == "/about" ? "active" : ""}`}>
                      <Link href="/">
                          <a>
                              <InfoIcon/>
                             درباره ما
                          </a>
                      </Link>
                  </li>
              </Box>
          </ul>

          <ul className="navbar">
              <Box
                  sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center'
                  }}
              >

                  <li>
                      <Link href="/">
                          <a>

                                  <IconButton>

                                      <ButtonGroup variant="contained"  aria-label="outlined primary button group"  >

<Box sx={{
    display :'flex',
    flexDirection : 'row-reverse'
}}>


                                          <Button>
                                              <Link href="/">
                                                  <a>
                                                      <Tooltip title="Register" placement="top">
                                                          <IconButton>
                                                              <PersonAddAlt1Icon/>
                                                          </IconButton>
                                                      </Tooltip>
                                                  </a>
                                              </Link>

                                          </Button>

                                          <Button>
                                              <Link href="/">
                                                  <a>
                                                      <Tooltip title="Login" placement="top">
                                                          <IconButton>
                                                              <LoginIcon/>
                                                          </IconButton>
                                                      </Tooltip>
                                                  </a>
                                              </Link>

                                          </Button>

                                            <Button>
        <Link href="/">
            <a>
                <Tooltip title="Register" placement="top">
                    <IconButton>
                <span className="shoppingCard" style={{
fontSize : '15px' , top :'10px' , position : 'relative'
                }}>0</span>
                <AddShoppingCartIcon/>
                    </IconButton>
                </Tooltip>
            </a>
        </Link>
    </Button>
</Box>
                                      </ButtonGroup>

                                  </IconButton>


                          </a>
                      </Link>
                  </li>


                  <li className="navbar">
                      <Link href="/">
                          <a>
                      <Image
                          src="/Images/Title/TitleIcon.png"
                             alt="Picture of the author"
                             width={70}
                             height={70}
                      />
                          </a>
                  </Link>
                      </li>

              </Box>
          </ul>

          </Box>
      </nav>
  )
}
export default Navbar