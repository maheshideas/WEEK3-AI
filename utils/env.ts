// Environment configuration utility for Playwright tests

interface EnvConfig {
  baseURL: string;
  username: string;
  password: string;
}

const envs: Record<string, EnvConfig> = {
  development: {
    baseURL: 'https://dev.example.com',
    username: 'devuser',
    password: 'devpass',
  },
  staging: {
    baseURL: 'https://staging.example.com',
    username: 'stageuser',
    password: 'stagepass',
  },
  production: {
    baseURL: 'https://prod.example.com',
    username: 'produser',
    password: 'prodpass',
  },
};

// Priority: NODE_ENV > process.env.PROJECT > default to 'development'
const envKey = process.env.NODE_ENV || process.env.PROJECT || 'development';

const config = envs[envKey] || envs['development'];

export default config; 