'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#022c22', // Deep Emerald
            contrastText: '#F5F5F7',
        },
        secondary: {
            main: '#D4AF37', // Champagne Gold
        },
        background: {
            default: '#F5F5F7', // Soft Cream
            paper: '#FFFFFF',
        },
        text: {
            primary: '#171717',
            secondary: '#4A4A4A',
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        h5: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '0.05em',
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0, // Luxury minimalist often uses sharp or very subtle corners
                    padding: '12px 32px',
                    transition: 'all 0.3s ease',
                },
                containedPrimary: {
                    backgroundColor: '#022c22',
                    '&:hover': {
                        backgroundColor: '#033d2e',
                    },
                },
                outlinedSecondary: {
                    borderColor: '#D4AF37',
                    color: '#D4AF37',
                    '&:hover': {
                        borderColor: '#B8962E',
                        backgroundColor: 'rgba(212, 175, 55, 0.04)',
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: 0,
                },
            },
        },
    },
});

export default theme;
