// src/pages/Programs.jsx
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const programData = [
  {
    title: 'Master Program (2 Years)',
    semesters: [
      {
        name: 'Semester I',
        courses: [
          ['Fundamentals of Communication', 'Core', 3],
          ['Print Journalism', 'Core', 3],
          ['Electronic Media', 'Core', 3],
          ['Introduction to Photography', 'Core', 3],
          ['Language Skills', 'UC', 2],
          ['Women in Development', 'UC', 2],
        ],
        total: 16,
      },
      {
        name: 'Semester II',
        courses: [
          ['Theories of Communication I', 'Core', 3],
          ['Creative Writing', 'Core', 3],
          ['Advertising', 'Core', 3],
          ['Television Production', 'Core', 3],
          ['Graphics For Media', 'Core', 3],
          ['Skills For Research', 'UC', 2],
        ],
        total: 17,
      },
      {
        name: 'Semester III',
        courses: [
          ['Research Methodology', 'Core', 3],
          ['Theories of Communication II', 'Core', 3],
          ['Online Journalism', 'Core', 3],
          ['Development Support Communication', 'Core', 3],
          ['Documentary Production / Feature and Column writing', 'Elective', 3],
          ['Radio Broadcasting / Photo Journalism', 'Elective', 3],
        ],
        total: 18,
      },
      {
        name: 'Semester IV',
        courses: [
          ['Media Regulation, Policies, Ethics, & Laws', 'Core', 3],
          ['Political Communication', 'Core', 3],
          ['Sahafati Zuban', 'Core', 3],
          ['Anchoring and Reporting / Advance Journalism', 'Elective', 3],
          ['Cinema & Society / Magazine Journalism', 'Elective', 3],
          ['Research Work', 'Elective', 6],
        ],
        total: 15,
      },
    ],
    grandTotal: 66,
  },
  {
    title: 'M.Phil (2 Years)',
    semesters: [
      {
        name: 'Semester I',
        courses: [
          ['Approaches to Mass Communication Studies-1', 3],
          ['Research Methodology', 3],
          ['Optional Course*', 3],
          ['Optional Course*', 3],
        ],
      },
      {
        name: 'Semester II',
        courses: [
          ['Approaches to Mass Communication Studies-2', 3],
          ['Seminar in Communication & Media Studies', 3],
          ['Media Research Analysis', 3],
          ['Optional Course*', 3],
        ],
      },
      {
        name: 'Semester III',
        courses: [['Thesis-1', 3]],
      },
      {
        name: 'Semester IV',
        courses: [['Thesis-2', 3]],
      },
    ],
    optionalCourses: [
      'Mass Media Culture and Society',
      'International Communication',
      'Advance Development Communication',
      'Theories of Influence on Media Content',
      'Media And Politics',
      'News in the Networked Media Age',
      'Social Media Research Analysis',
    ],
  },
];

const Programs = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f5faf7' }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderLeft: '6px solid #2e7d32' }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 5, textAlign: 'center', letterSpacing: 1 }}
        >
          Programs Offered
        </Typography>

        {programData.map((program, index) => (
          <Accordion key={index} defaultExpanded={index === 0} sx={{ mb: 2, backgroundColor: '#ffffff' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">{program.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {program.semesters.map((semester, semIdx) => (
                <Box key={semIdx} sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" fontWeight="bold" color="#2e7d32" gutterBottom>
                    {semester.name}
                  </Typography>
                  <Grid container spacing={2}>
                    {semester.courses.map(([title, status, credits], idx) => (
                      <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Paper elevation={1} sx={{ p: 2, borderRadius: 3, backgroundColor: '#f8fff7' }}>
                          <Typography fontWeight="bold" gutterBottom>{title}</Typography>
                          {status && <Typography variant="body2" color="textSecondary">Status: {status}</Typography>}
                          <Typography variant="body2" color="textSecondary">Credit Hours: {credits}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                  {semester.total && (
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                      Total Credit Hours: <b>{semester.total}</b>
                    </Typography>
                  )}
                  <Divider sx={{ mt: 3, mb: 3 }} />
                </Box>
              ))}
              {program.grandTotal && (
                <Typography variant="h6" color="primary">
                  All Semesters Total: {program.grandTotal} Cr. Hrs.
                </Typography>
              )}
              {program.optionalCourses && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold" color="#2e7d32">
                    List of Optional Courses:
                  </Typography>
                  <ul>
                    {program.optionalCourses.map((course, i) => (
                      <li key={i}>
                        <Typography variant="body2">{course}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default Programs;