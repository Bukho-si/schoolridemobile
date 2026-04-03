export const theme = {
  colors: {
    // Primary Narrative
    primary: '#0058be',
    primaryContainer: '#2170e4',

    // Backgrounds & Surfaces (Tonal Layering Level 0-2)
    surface: '#f8f9ff', // Base
    surfaceContainerLow: '#eff4ff', // Sections (Level 1)
    surfaceContainerLowest: '#ffffff', // Cards (Level 2)
    
    // Transparent / Glass surfaces
    surfaceContainerHighest: 'rgba(255, 255, 255, 0.8)', // With BackdropBlur
    
    // Text Colors
    onSurface: '#0b1c30',
    onSurfaceVariant: '#424754',
    secondary: '#5c5d70', // Label data meta
    
    // Accents & Statuses
    tertiary: '#006947', // Success / On-Time
    tertiaryFixed: '#6ffbbe', // Pills / Active States
    errorContainer: '#ffdad6', // Delays
    
    // Borders & Shadows
    outlineVariant: 'rgba(11, 28, 48, 0.15)', // Ghost Border
    onSecondaryFixed: '#181a2a', // Ambient light shadow color
  },
  typography: {
    fontFamily: 'Inter_400Regular',
    fontFamilyMedium: 'Inter_500Medium',
    fontFamilySemiBold: 'Inter_600SemiBold',
    fontFamilyBold: 'Inter_700Bold',

    // Editorial Hierarchy
    displayLg: {
      fontSize: 56, // 3.5rem
      letterSpacing: -1.12, // -0.02em
      fontFamily: 'Inter_700Bold',
      color: '#0b1c30',
    },
    headlineSm: {
      fontSize: 24, // 1.5rem
      fontFamily: 'Inter_600SemiBold',
      color: '#0b1c30',
    },
    titleMd: {
      fontSize: 18, // 1.125rem
      fontFamily: 'Inter_600SemiBold',
      color: '#0b1c30', // Inherits onSurface, but redefined for ease
    },
    bodySm: {
      fontSize: 14, // 0.875rem
      fontFamily: 'Inter_400Regular',
      color: '#424754',
    },
    labelMd: {
      fontSize: 12, // 0.75rem
      fontFamily: 'Inter_500Medium',
      color: '#5c5d70',
    },
  },
  spacing: {
    sm: 4, // 0.25rem
    md: 8,
    lg: 16, // 1rem spacing-4 equivalent
    xl: 24,
    xxl: 48, // 3rem (spacing-12) used when screen feels full
  },
  radius: {
    sm: 4, // Activity list gaps theoretically or inner elements
    md: 8,
    lg: 16,
    xl: 24, // 1.5rem for large dashboard containers
    full: 9999, // Buttons
  },
  shadows: {
    // Mimics natural light shadow (32px blur, 8px Y offset, 4% opacity)
    ambient: {
      shadowColor: '#181a2a',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.04,
      shadowRadius: 32,
      elevation: 5, // Android fallback
    },
  },
};
