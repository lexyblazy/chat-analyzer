# TypeScript Node.js Starter

A modern, production-ready Node.js TypeScript project starter with comprehensive tooling and best practices.

## Features

- ⚡ **TypeScript** - Modern JavaScript with static typing
- 🧪 **Jest** - Comprehensive testing framework
- 📝 **ESLint** - Code linting and formatting
- 🔧 **Nodemon** - Development with hot reload
- 📦 **Modern Build** - TypeScript compilation with source maps
- 🚀 **Production Ready** - Optimized for deployment
- 📊 **Logging** - Structured logging with different levels
- 🔐 **Environment Variables** - Secure configuration management

## Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

## Quick Start

1. **Clone or download this starter**
   ```bash
   git clone <your-repo-url>
   cd typescript-node-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Run in development mode**
   ```bash
   npm run dev
   ```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with ts-node |
| `npm run dev:watch` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm start` | Start the production server |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run clean` | Clean build artifacts |

## Project Structure

```
├── src/
│   ├── index.ts              # Application entry point
│   ├── utils/
│   │   ├── greeter.ts        # Example utility functions
│   │   ├── greeter.test.ts   # Unit tests for greeter
│   │   ├── logger.ts         # Logging utility
│   │   └── logger.test.ts    # Unit tests for logger
│   └── test/
│       └── setup.ts          # Jest test setup
├── dist/                     # Compiled JavaScript (generated)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest test configuration
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── env.example               # Environment variables template
└── README.md                 # This file
```

## Configuration

### TypeScript Configuration

The project uses strict TypeScript settings for better code quality:

- **Target**: ES2022
- **Module**: CommonJS
- **Strict Mode**: Enabled
- **Source Maps**: Enabled for debugging

### ESLint Configuration

ESLint is configured with TypeScript-specific rules:

- TypeScript ESLint plugin
- Recommended configurations
- Custom rules for code quality

### Jest Configuration

Jest is configured for TypeScript testing:

- TypeScript support with ts-jest
- Coverage reporting
- Test file patterns

## Development Workflow

1. **Write code** in the `src/` directory
2. **Run tests** with `npm test`
3. **Check linting** with `npm run lint`
4. **Build for production** with `npm run build`

## Environment Variables

Copy `env.example` to `.env` and configure:

- `NODE_ENV` - Environment (development, production, test)
- `PORT` - Server port (default: 3000)
- `LOG_LEVEL` - Logging level (DEBUG, INFO, WARN, ERROR)

## Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

The compiled JavaScript will be in the `dist/` directory.

## Logging

The project includes a structured logger with different levels:

```typescript
import { logger } from './utils/logger';

logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or issues, please open an issue on GitHub. 