// src/pages/VCMessage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  useTheme
} from '@mui/material';

const VCMessage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderLeft: '6px solid green' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green', mb: 3 }}>
          Vice Chancellor’s Message
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {/* VC Image Section */}
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Prof. Dr. Bushra Mirza"
              src="https://fjwu7.wordpress.com/wp-content/uploads/2025/06/download-1.jpg"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
              variant="rounded"
            />
          </Grid>

          {/* VC Text Content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
              Welcome to FJWU
            </Typography>

            <Typography paragraph>
              I have the profound honour of welcoming you to Fatima Jinnah Women University (FJWU), Pakistan’s first female-only university that opened new avenues of education for females of Pakistan. FJWU is a prestigious institution committed to empowering women through education, innovation, and leadership.
            </Typography>

            <Typography paragraph>
              At Fatima Jinnah Women University, we believe that every woman has the right to learn, develop, and flourish in a setting that values diversity, fosters inclusivity, and stimulates intellectual curiosity. Education here serves as both a catalyst for societal progress and a means of achieving personal achievement.
            </Typography>

            <Typography paragraph>
              FJWU also promotes a thriving entrepreneurial culture, encouraging students to transform their innovative ideas into impactful ventures.
            </Typography>

            <Typography paragraph>
              In my capacity as Vice Chancellor, my commitment is to strengthen the solid groundwork established by my forebears and establish FJWU as a centre of excellence. Our distinguished teachers and committed staff are available to mentor and advise you.
            </Typography>

            <Typography paragraph>
              At FJWU, you can develop your self-confidence, accept your uniqueness, and become a change agent. Diversity is our strength; it enriches our campus and promotes discussions and teamwork that deepen understanding.
            </Typography>

            <Typography paragraph>
              Welcome to a community of leaders, innovators, and dreamers. I am thrilled to accompany you on this journey and witness the milestones you will achieve. This is your time, and FJWU is here to support your dreams.
            </Typography>

            {/* Signature */}
            <Box mt={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Prof. Dr. Bushra Mirza
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                Pride of Performance, T.I<br />
                Vice Chancellor<br />
                Fatima Jinnah Women University, The Mall, Rawalpindi
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default VCMessage;
