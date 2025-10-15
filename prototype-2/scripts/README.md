# Development Scripts

This folder contains optimized build management scripts for the prototype-2 development environment.

## 📁 Structure

```
scripts/
├── README.md                 # This file
├── cache-manager.js          # Cache management utilities
├── clean-dev.js             # Simple clean and start script
└── dev/                     # Advanced development management
    ├── dev-clean.sh         # Bash-based dev server manager
    └── dev-manager.mjs      # Node.js-based dev server manager
```

## 🚀 Quick Start

### Recommended Daily Development
```bash
# Enhanced development with race condition prevention
npm run dev:enhanced

# Alternative: Use the Node.js version
npm run dev:mjs
```

### Emergency Commands
```bash
# Stop all dev servers
npm run dev:kill

# Reset everything (kill + clean caches)
npm run dev:reset

# Check system health
npm run dev:info
```

## 📋 Available Scripts

### Development Scripts
| Command | Description |
|---------|-------------|
| `npm run dev:enhanced` | **Recommended** - Full cleanup and start stable dev server |
| `npm run dev:stable` | Start dev server with Turbopack disabled for stability |
| `npm run dev:kill` | Stop all Next.js dev servers |
| `npm run dev:reset` | Kill servers and clean all caches |
| `npm run dev:info` | Show project and system information |
| `npm run dev:mjs` | Use Node.js version of dev manager |
| `npm run dev:clean` | Simple clean and start (original script) |

### Cache Management Scripts
| Command | Description |
|---------|-------------|
| `npm run clean` | Clean all cache and build directories |
| `npm run clean:cache` | Clean only cache directories |
| `npm run clean:build` | Clean only build directories |
| `npm run cache:check` | Check cache size and warn if too large |
| `npm run cache:size` | Show detailed cache sizes |
| `npm run cache:css` | Find generated CSS files after build |

## 🛠️ Features

### Enhanced Dev Server Management
- **Single Instance Enforcement** - Prevents multiple dev server conflicts
- **Process Cleanup** - Automatically terminates conflicting processes
- **Port Management** - Handles ports 3000-3005 automatically
- **Turbopack Support** - Smart detection and handling
- **Lock File System** - PID-based locking prevents race conditions

### Cache Management
- **Comprehensive Cleaning** - Removes all build artifacts and caches
- **Size Monitoring** - Tracks cache sizes and warns when too large
- **CSS Analysis** - Finds and lists generated CSS files
- **Build Directory Management** - Cleans .next, build, out directories

### System Health Checks
- **Node.js Version** - Validates Node.js version compatibility
- **Disk Space** - Warns about low disk space
- **File Watchers** - Checks inotify limits
- **Package Dependencies** - Validates Next.js installation

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
npm run dev:kill  # Stop all dev servers
npm run dev:enhanced  # Start fresh
```

#### Turbopack Issues
```bash
npm run dev:stable  # Run without Turbopack
```

#### Cache Problems
```bash
npm run dev:reset  # Full cleanup
# OR
npm run clean  # Cache-only cleanup
```

#### Multiple Dev Servers
```bash
npm run dev:info  # Check what's running
npm run dev:kill  # Stop everything
```

### System Requirements
- **Node.js**: 18+ (20 LTS recommended)
- **npm**: Latest version
- **Disk Space**: 1GB+ available
- **File Watchers**: 524,288+ (Linux)

## 📊 Usage Examples

### Daily Development Workflow
```bash
# Start your day
npm run dev:enhanced

# If you encounter issues
npm run dev:stable

# End of day cleanup
npm run dev:kill
```

### Debugging Build Issues
```bash
# Check system health
npm run dev:info

# Check cache sizes
npm run cache:size

# Full reset
npm run dev:reset
```

### Working with Multiple Projects
```bash
# Project A
cd /path/to/project-a
npm run dev:enhanced

# Project B (in another terminal)
cd /path/to/project-b
npm run dev:enhanced  # Will detect conflict and provide helpful message
```

## 🔄 Integration with Existing Workflow

These scripts are designed to work alongside your existing development workflow:

- **Preserves original scripts** - Your existing `npm run dev` still works
- **Non-destructive** - Only adds new capabilities, doesn't replace existing ones
- **Compatible** - Works with Turbopack, TypeScript, and all Next.js features
- **Optional** - Use when you need enhanced management, ignore when you don't

## 🎯 Benefits

1. **Eliminates Race Conditions** - No more conflicts with Turbopack
2. **Faster Development** - Automatic cache management
3. **Better Reliability** - Single instance enforcement
4. **Easy Troubleshooting** - Comprehensive system health checks
5. **Team Consistency** - Standardized development commands

---

*For more detailed information, see the individual script files or run `npm run dev:info` for system diagnostics.*
