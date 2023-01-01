import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { useState } from 'react';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState([]);

    // click to add event
    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        // if title not null => add event
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    // click to delete event
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event ${selected.event.title}?`)) {
            selected.event.remove();
        }
    }
    return (
        <Box m='20px'>
            <Header title='CALENDAR' subtitle='Full Calendar Page' />
            <Box display='flex' justifyContent='space-between'>
                {/* calendar sidebar => hien thi danh sach event */}
                <Box flex='1 1 20%' backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {/* hiển thị list các event */}
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px' }}
                            >
                                <ListItemText
                                    // mỗi event gồm title và datetime
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* calendar */}
                {/* reference: https://preview.keenthemes.com/start-html-free/documentation/general/fullcalendar/basic.html 
                    doc: https://fullcalendar.io/docs/initialize-es6*/}
                <Box flex='1 1 100%' ml='15px'>
                    <FullCalendar
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        // thanh công cụ 
                        // trái: lùi, tiến, ngày hiện tại
                        // giữa: tên ngày tháng
                        // phải: thống kê theo tháng/ tuần/ ngày/ danh sách
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                            // timeGridWeek,timeGridDay,listMonth
                        }}
                        // khởi tạo mặc định là theo tháng
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={event => setCurrentEvents(event)}
                        initialEvents={[
                            { id: '1234', title: 'All-day long', date: '2023-01-01' },
                            { id: '1233', title: 'All-night long', date: '2023-01-05' },
                            { id: '1232', title: 'All-month long', date: '2023-01-10' },
                            { id: '1231', title: 'All-week long', date: '2023-01-28' },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )

}

export default Calendar;
