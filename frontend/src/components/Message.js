import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChartComponent from './Chart';
import ChartTable from './ChartTable';
import LineChartComponent from './LineChart';

function Message({ sender, text, chartData }) {
    const [view, setView] = useState('bar');
    const isBot = sender === 'bot';

    const messageStyle = {
        marginBottom: '10px',
        padding: '15px',
        borderRadius: '10px',
        maxWidth: '80%',
        alignSelf: isBot ? 'flex-start' : 'flex-end',
        textAlign: isBot ? 'left' : 'right',
        backgroundColor: isBot ? '#B0C4DE' : '#4682B4',
        color: isBot ? '#fff' : '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.5,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        animation: 'fadeIn 0.3s ease',
    };

    const iconStyle = {
        position: 'absolute',
        top: '10px',
        left: isBot ? '10px' : 'auto',
        right: isBot ? 'auto' : '10px',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
    };

    const triangleStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: isBot ? '#1a237e' : '#3949ab',
        transform: isBot ? 'rotate(45deg)' : 'rotate(-45deg)',
        bottom: '-10px',
        left: isBot ? '10px' : 'auto',
        right: isBot ? 'auto' : '10px',
        zIndex: '-1',
    };

    const iconContent = isBot ? 'B' : 'U';

    const handleViewChange = (event, nextView) => {
        if (nextView !== null) {
            setView(nextView);
        }
    };

    return (
        <Box style={messageStyle}>
            <div style={iconStyle}>{iconContent}</div>
            <span style={{ zIndex: '1', position: 'relative', marginLeft: isBot ? '30px' : '0', marginRight: isBot ? '0' : '30px' }}>{text}</span>
            {chartData && chartData.labels && chartData.labels.length > 0 && (
                <Box marginTop="10px" width="100%" position="relative">
                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleViewChange}
                        aria-label="view toggle"
                        sx={{ marginBottom: '10px' }}
                    >
                        <ToggleButton value="bar" aria-label="bar chart" sx={{ textTransform: 'none' }}>
                            <BarChartIcon />
                        </ToggleButton>
                        <ToggleButton value="table" aria-label="table" sx={{ textTransform: 'none' }}>
                            <TableChartIcon />
                        </ToggleButton>
                        <ToggleButton value="line" aria-label="line chart" sx={{ textTransform: 'none' }}>
                            <ShowChartIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Box>
                        {view === 'bar' && <ChartComponent chartData={chartData} />}
                        {view === 'table' && <ChartTable chartData={chartData} />}
                        {view === 'line' && <LineChartComponent chartData={chartData} />}
                    </Box>
                </Box>
            )}
            <div style={triangleStyle}></div>
        </Box>
    );
}

export default Message;
