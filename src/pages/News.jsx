import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const logos = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
  '/8.png',
  '/9.png',
];

const News = () => {
  const [logoIndex, setLogoIndex] = useState(0);

  const handleNext = () => {
    setLogoIndex((prev) => (prev + 1) % logos.length);
  };

  const handlePrev = () => {
    setLogoIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    p: { xs: 3, md: 6 },
    borderLeft: '6px solid #2e7d32',
    borderRadius: 4,
    mb: 6,
    backgroundColor: '#ffffff',
  };

  const headingStyle = {
    fontWeight: 'bold',
    color: '#2e7d32',
    mb: 4,
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: { xs: '1.8rem', md: '2.2rem' },
  };

  const bodyTextStyle = {
    whiteSpace: 'pre-line',
    lineHeight: 1.9,
    fontSize: '1.05rem',
    color: '#444',
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, backgroundColor: '#f3f6f4' }}>
      <Container maxWidth="lg">

        {/* --- NAQSH BLOG --- */}
        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            NAQSH Digital Film Festival
          </Typography>

          <img
            src="/naqsh.png"
            alt="NAQSH Banner"
            style={{ width: '100%', borderRadius: 12, marginBottom: 30 }}
          />

          {/* Collaborators Section */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: '#2e7d32' }}
            >
              Our Collaborators
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: 180,
              }}
            >
              <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0 }}>
                <ArrowBackIos />
              </IconButton>

              <Box
                component="img"
                src={logos[logoIndex]}
                alt="Partner Logo"
                sx={{
                  width: 160,
                  height: 160,
                  objectFit: 'contain',
                  borderRadius: 2,
                  p: 1,
                  border: '1px solid #ddd',
                  backgroundColor: '#fff',
                }}
              />

              <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0 }}>
                <ArrowForwardIos />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="body1" sx={bodyTextStyle}>
{`
Last date for submission of entries for NAQSH Digital Film Festival 2023 has been extended to 22nd September, 2023.

If you have any issues regarding uploading of films on the portal, kindly share the films (along with film description, film poster and contact number) with us through Google Drive Open Access Link at [email protected]

Naqsh Digital Film Festival (NDFF) is an initiative of Fatima Jinnah Women University, Rawalpindi (FJWU) launched initially in the year 2022...

Festival Director: Muhammad Ali  
Phone: 051-9292900 Ext: 2041  
Mobile: 0334-5042368, 0334-5535295  
More info: https://fjwu.edu.pk/naqsh-digital-film-festival/
`}
          </Typography>
        </Paper>

        {/* --- MEDIA LITERACY SUMMIT --- */}
        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            MEDIA LITERACY SUMMIT 2025
          </Typography>

          <img
            src="/media-summit.png"
            alt="Media Literacy Summit Banner"
            style={{ width: '100%', borderRadius: 12, marginBottom: 30 }}
          />

          <Typography variant="body1" sx={bodyTextStyle}>
{`
Organized by the Department of Communication and Media Studies, Fatima Jinnah Women University (FJWU), in collaboration with Maxum, this landmark event brought together national and international media experts, educators, and strategists to spotlight the urgent need for media literacy in today’s digital era.

Speakers emphasized transparency, youth empowerment, truth in journalism, and ethical safeguards in the digital age.

The summit concluded with a powerful message:  
**Media literacy is not just a skill—it is a civic necessity.**
`}
          </Typography>
        </Paper>

        {/* --- CONVOCATION BLOG --- */}
        <Paper elevation={3} sx={{ ...sectionStyle, mb: 0 }}>
          <Typography variant="h4" sx={headingStyle}>
            CONVOCATION 2025
          </Typography>

          <img
            src="/convo.png"
            alt="Convocation 2025 Banner"
            style={{ width: '100%', borderRadius: 12, marginBottom: 30 }}
          />

          <Typography variant="body1" sx={bodyTextStyle}>
{`
The Convocation for the graduates of 2024 will be held on **27 June 2025**, at **Jinnah Convention Center, Islamabad**.

All students are required to be present at the venue by **8:00 AM**.

All graduates (BS, Masters, M.Phil, and PhD) who wish to attend are requested to register in their respective departments between **10th April 2025** and **25th April 2025**.

**Registration Fee: Rs. 5000/-**
`}
          </Typography>
        </Paper>

      </Container>
    </Box>
  );
};

export default News;
