import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaletteIcon from '@mui/icons-material/Palette';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {connect} from 'react-redux'
import {setMaxPrice , setMinPrice} from '../../../Redux/Action/Action'






const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}


const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        color: 'black',
        fontSize: 12,
        background: 'unset',
        padding: 0,


        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};







const drawerWidth = 450;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

 function FilterBar(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    function FilterPrice(val){
        props.setMinPrice(val[0]);
        props.setMaxPrice(val[1]);
    }

    return (
        <Box  sx={{ display: 'flex' ,direction : 'ltr' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '6px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{fontFamily: 'vazir' }}  variant="h6" noWrap component="div">
                        فیلتر کنیم ؟
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['', 'پر فروش ترین ها', 'رنگ', 'موجود'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {index == 0 ? <MonetizationOnIcon /> : null}

                                {index == 0 ?

                                    <div className="">
                                        <Accordion className=" left-10 ">
                                            <AccordionSummary className="shadow-none"
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="left-10 relative text-center shadow-none">قیمت</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
           <Box sx={{ width: '300px'  , color : 'black' , margin : 'auto' , display : 'flex' , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'center'}}>

                                                        <Box sx={{ m: 10 }} />
                                                        <Typography gutterBottom>بازه قیمتی را انتخاب کنید</Typography>
                                                        <PrettoSlider
                                                            valueLabelDisplay="auto"
                                                            components={{ Thumb: AirbnbThumbComponent }}
                                                            onChange={(e, value) => FilterPrice(value)}
                                                            defaultValue={[10000, 10000000]}
                                                            min={10000}
                                                            max={10000000}
                                                        />
                                                    </Box>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>












                                    </div>
                                    : null}





                                {index == 1 ? <LoyaltyIcon  className="relative top-5" /> : null}
                                {index == 1 ?

                                    <FormGroup className="relative left-16   flex">
                                        <RadioGroup
                                            aria-label="sale"
                                            defaultValue="خیر"
                                            name="radio-buttons-group"

                                        >
                                            <span className="text-base text-center">پرفروش ترین ها</span>
                                            <div  className="flex">
                                        <FormControlLabel  control={<Radio  id="sale" />} value="female" label="بله" />
                                        <FormControlLabel control={<Radio id="sale" />} value="fmale" label="خیر" />
                                        <FormControlLabel control={<Radio id="sale" />} value="none" label="نظری ندارم" />
                                            </div>
                                        </RadioGroup>
                                    </FormGroup>
                                    : null}



                                {index == 2 ? <PaletteIcon /> : null}
                                {index == 2 ?

                                    <div>
                                        <Accordion className="left-32">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="left-10 relative">رنگ</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="flex flex-col">
                                                  <FormControlLabel control={<Checkbox    />} label="آبی"/>
                                                  <FormControlLabel control={<Checkbox  color="secondary"  />} label="بنفش"/>
                                                  <FormControlLabel control={<Checkbox   color="success" />} label="سبز"/>




                                                </div>
                                            </AccordionDetails>
                                        </Accordion>












                                    </div>
                                    : null}






                            </ListItemIcon>

                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

            </Box>
        </Box>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        setMinPrice : (minPrice) => dispatch(setMinPrice(minPrice)),
        setMaxPrice : (maxPrice) => dispatch(setMaxPrice(maxPrice)),
    }
}

export default connect(null,mapDispatchToProps)(FilterBar)