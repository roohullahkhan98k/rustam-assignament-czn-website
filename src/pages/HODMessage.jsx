// src/pages/HODMessage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper
} from '@mui/material';
import hodImage from '/hod.png'; // <-- adjust path as per your file

const HODMessage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderLeft: '6px solid green' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green', mb: 3 }}>
          Head of Department’s Message
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {/* HOD Image */}
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Dr. Muhammad Ali"
              src={hodImage}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
              variant="rounded"
            />
          </Grid>

          {/* HOD Content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Dr. Muhammad Ali
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Assistant Professor / Incharge
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Experience:</strong><br />
              ● Fatima Jinnah Women University, Rawalpindi, Pakistan — Assistant Professor<br />
              ● Riphah International University — Lecturer
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Qualification:</strong><br />
              ● MS in Media & Communication Studies — Islamic International University, Islamabad (2011)<br />
              ● BS Mass Communication — Virtual University of Pakistan (2007)
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Event Management:</strong><br />
              ● Organized 6-day workshop at Sihala Police College on “Police & Media Relations”, 2011<br />
              ● Manager of Takhleeq Photography & Short Film Festival, 2011<br />
              ● Annual function of CreStar Data Services, 2009<br />
              ● Directed and produced stage dramas including *Heer Ranjha* and *Shehzad & Eli* (2008)<br />
              ● Organized university functions and represented in Dawn education expos (2007–08)
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Seminars / Workshops:</strong><br />
              ● Online Journalism by UNESCO (2011)<br />
              ● Public Speaking by U.S. Embassy (2010)<br />
              ● ADROITS Workshop at Islamic University (2009)<br />
              ● Gender & Media Seminar (Rozen, 2008)<br />
              ● Women’s Rights Workshop (ActionAid, 2007)<br />
              ● Consumer Issues Workshop (Network for Consumer Protection, 2006)
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Contact Details:</strong><br />
              ● Phone: 051-9292900 Ext: 151<br />
              ● Email: <a href="mailto:msalirana@gmail.com">msalirana@gmail.com</a>, <a href="mailto:m.ali@fjwu.edu.pk">m.ali@fjwu.edu.pk</a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HODMessage;
