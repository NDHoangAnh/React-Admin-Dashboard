import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title={'FAQ'} subtitle='Frequently Asked Questions' />

            {/* doc: https://mui.com/material-ui/api/accordion/ */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Who am I?
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Just a student at HUST who is learning about Reactjs-Nodejs-Docker
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Why is this project?
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        This project is for learning Material UI and some necessary libraries (fullcalendar, yup, formik, react-pro-sidebar, nivo,...)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Test Default
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Test Passed
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;
