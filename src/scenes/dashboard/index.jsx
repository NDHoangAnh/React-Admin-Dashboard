import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <Box m='20px'>
            {/* header */}
            <Box display='flex' justifyContent='space-between' alignItems='center' >
                <Header title='DASHBOARD' subtitle={'Welcome to our dashboard'} />


            </Box>
        </Box>
    )
}

export default Dashboard;