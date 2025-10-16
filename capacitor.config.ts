import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a50a1afd2f364de390f3a5bfbb382c6e',
  appName: 'CleanPro - Professional Cleaning Services',
  webDir: 'dist',
  server: {
    url: 'https://a50a1afd-2f36-4de3-90f3-a5bfbb382c6e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#2DD4BF',
      showSpinner: false
    }
  }
};

export default config;