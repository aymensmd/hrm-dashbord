import React, { useState } from 'react';
import { Calendar, Badge, Alert, Button, Modal, TimePicker, Space } from 'antd'; // Import Space
import dayjs from 'dayjs';
import { useTheme } from '@mui/material/styles';

import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../themes';
import { PlusCircleTwoTone } from '@ant-design/icons';


const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timeRange, setTimeRange] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleAddEvent = () => {
    // Add the event with the selected date and time range
    if (timeRange) {
      setEvents([
        ...events,
        {
          date: selectedDate,
          type: 'vacation',
          description: 'New Vacation Event',
          timeRange: timeRange,
        },
      ]);
    }

    // Close the modal and reset time range
    setIsModalVisible(false);
    setTimeRange(null);
  };

  const dateCellRender = (date) => {
    const dayEvents = events.filter((event) => date.isSame(event.date, 'day'));

    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dayEvents.map((event, index) => (
          <li key={index}>
            <Badge status={event.type === 'vacation' ? 'success' : 'error'} text={event.description} />
            <br />
            {event.timeRange && (
              <Typography variant="caption">
                Time: {event.timeRange[0].format('HH:mm')} - {event.timeRange[1].format('HH:mm')}
              </Typography>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Ant Design Calendar" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {events.map((event, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: event.type === 'vacation' ? colors.success[500] : colors.error[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.description}
                  secondary={
                    <>
                      <Typography>{event.date.format('YYYY-MM-DD')}</Typography>
                      {event.timeRange && (
                        <Typography variant="caption">
                          Time: {event.timeRange[0].format('HH:mm')} - {event.timeRange[1].format('HH:mm')}
                        </Typography>
                      )}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <Alert message={`You selected date: ${selectedDate?.format('YYYY-MM-DD')}`} />
          <Calendar value={selectedDate} onSelect={handleDateClick} dateCellRender={dateCellRender} />
        </Box>
      </Box>

      {/* Modal for adding events */}
      <Modal
        title="Add Event"
        visible={isModalVisible}
        onOk={handleAddEvent}
        onCancel={() => setIsModalVisible(false)}
      >
        <Space direction="vertical">
          <TimePicker.RangePicker
            onChange={(value) => setTimeRange(value)}
            format="HH:mm"
            placeholder={['Start Time', 'End Time']}
          />
        </Space>
      </Modal>
    </Box>
  );
};

export default Calender;
