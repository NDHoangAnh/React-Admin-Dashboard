import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutOutlinedIcon from "@mui/icons-material/HomeOutlined"
import { useState } from "react";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}></Link>
        </MenuItem>
    )
}

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    // which items been selected
    const [selected, setSelected] = useState("DashBoard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed} >
                <Menu iconShape="square" >
                    {/* logo & menu icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMIN
                                </Typography>

                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img
                                    src={`../../assets/user.jpg`}
                                    alt='profile-user'
                                    width='100px'
                                    height='100px'
                                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                                />
                            </Box>

                            <Box textAlign='center' >
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight='bold'
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    ND Hoang Anh
                                </Typography>

                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'} >
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>

                        <Item
                            title='Manage Team'
                            icon={<PeopleOutlinedIcon />}
                            to='/team'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Contacts Information'
                            icon={<ContactsOutlinedIcon />}
                            to='/contatcs'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Invoices Balances'
                            to='/invoices'
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>

                        <Item
                            title='Profile Form'
                            icon={<PersonOutlinedIcon />}
                            to='/form'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Calendar'
                            icon={<CalendarTodayOutlinedIcon />}
                            to='/calendar'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='FAQ Page'
                            icon={<HelpOutlinedIcon />}
                            to='/faq'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>

                        <Item
                            title='Bar Chart'
                            icon={<BarChartOutlinedIcon />}
                            to='/bar'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Pie Chart'
                            icon={<PieChartOutlinedIcon />}
                            to='/pie'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Line Chart'
                            icon={<TimelineOutlinedIcon />}
                            to='/line'
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title='Geography Chart'
                            icon={<MapOutOutlinedIcon />}
                            to='/geography'
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default SideBar;
