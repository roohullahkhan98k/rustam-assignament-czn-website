// src/pages/Faculty.jsx
import React, { useState } from 'react';
import {
  Box, Typography, Card, Avatar, Grid, Paper, Fade
} from '@mui/material';

import dummyImage from '/dummy.png';
import ali from '/hod.png';
import shazia from '/shazia.png';
import saadia from '/saadia.png';
import ayesha from '/ayesha.png';
import ushba from '/ushba.png';
import shahla from '/shahla.png';
import sarah from '/sarah.png';
import yousaf from '/yousaf.png';

const facultyMembers = [
  { name: "Dr. Muhammad Ali", designation: "Assistant Professor / Incharge", img: ali },
  { name: "Dr. Shazia Hashmat", designation: "Assistant Professor", img: shazia },
  { name: "Dr. Saadia Ishtiaq", designation: "Assistant Professor", img: saadia },
  { name: "Dr. Ayesha Qamar", designation: "Assistant Professor", img: ayesha },
  { name: "Ms. Ushba Ismail", designation: "Assistant Professor (Study Leave)", img: ushba },
  { name: "Ms. Shahla Adnan", designation: "Assistant Professor (Study Leave)", img: shahla },
  { name: "Ms. Sarah Akhtar Hashmi", designation: "Lecturer", img: sarah },
  { name: "Mr. Muhammad Yousaf", designation: "Lecturer", img: yousaf },
  { name: "Ms. Saba Munir", designation: "Lecturer", img: null },
  { name: "Ms Ambreen Raza", designation: "Department Coordinator", img: null },
];

const Faculty = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleTouch = (index) => {
    setActiveCard(index);
    setTimeout(() => setActiveCard(null), 500); // reset after 0.5s
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f5faf7' }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          borderLeft: '6px solid #2e7d32',
          backgroundColor: '#ffffff',
        
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#2e7d32',
            mb: 5,
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Our Esteemed Faculty
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {facultyMembers.map((member, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: { xs: '100%', sm: '48%', md: '30%' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Fade in timeout={600 + index * 100}>
                <Card
                  elevation={activeCard === index ? 8 : 3}
                  onTouchStart={() => handleTouch(index)}
                  sx={{
                    width: 280,
                    height: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    border: '1px solid #d0e7d8',
                    boxShadow:
                      activeCard === index
                        ? '0 10px 24px rgba(0, 128, 0, 0.2)'
                        : '0 6px 14px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: activeCard === index ? 'scale(1.04)' : 'scale(1)',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: '0 12px 24px rgba(0, 128, 0, 0.15)',
                    },
                  }}
                >
                  <Avatar
                    src={member.img || dummyImage}
                    sx={{
                      width: 100,
                      height: 100,
                      mb: 2,
                      border: '3px solid #2e7d32',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1b5e20',
                      mb: 1,
                      fontSize: '1.05rem',
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      px: 2,
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {member.designation}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Faculty;
