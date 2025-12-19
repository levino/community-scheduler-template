# Claude Code Instructions for Community Scheduler Template

## Repository Overview

This is an **Astro-based template** for managing community service schedules. It uses YAML files for data storage and leverages Astro Content Collections for type-safe data handling.

## Technology Stack

- **Astro 5.16+** - Static site generator
- **TypeScript 5.6** - Programming language
- **React 19** - UI framework (for interactive components)
- **Tailwind CSS + DaisyUI** - Styling
- **Shipyard Framework** - Documentation components
- **Node.js 22+** - Runtime environment
- **Biome** - Code formatter and linter
- **Lefthook** - Git hooks management
- **Ramda + date-fns** - Functional utilities

## Development Environment Setup

### Install Dependencies
```bash
npm install
```

### Start Local Development
```bash
npm run dev
```

### Create Production Build
```bash
npm run build
```

### Test Build Preview
```bash
npm run preview
```

## Code Conventions

### Language
- **Documentation**: English
- **Code Comments**: English
- **Git Commit Messages**: English (conventional commits)
- **Variable/Function Names**: English (JavaScript/TypeScript standard)

### Code Style
- Use Biome for formatting and linting (runs automatically via Lefthook pre-commit hook)
- Use TypeScript strictly
- Prefer Astro components, React only for interactive parts
- Use Tailwind CSS for styling

### Formatting Check
```bash
npx biome check --write .
```

## Project Structure

```
/
├── src/
│   ├── pages/          # Astro pages (routing)
│   │   └── dienstplan/ # Schedule pages
│   ├── content/        # Content Collections
│   │   ├── config.ts   # Schema definitions
│   │   ├── parent.yaml # Volunteer/parent data
│   │   └── service.yaml # Service schedule data
│   ├── loaders/        # Custom Astro loaders
│   └── components/     # Reusable components
├── static/             # Static assets
├── .github/            # GitHub Actions workflows (optional)
└── astro.config.mjs    # Main configuration
```

## Working with Content

### Data Structure

**Volunteers/Parents** (`src/content/parent.yaml`):
```yaml
- id: unique-identifier
  firstName: John
  lastName: Doe
  phone: "+1234567890"
  weekday: monday  # monday, tuesday, wednesday, thursday, friday
```

**Service Schedule** (`src/content/service.yaml`):
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["parent-id-1", "parent-id-2"]
```

### Content Collections

Content is type-checked using Zod schemas defined in `src/content/config.ts`:

```typescript
const elternSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  weekday: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']),
}).transform((data) => ({
  ...data,
  fullName: `${data.firstName} ${data.lastName}`,
}))
```

## Common Tasks for Claude Code

### Adding New Volunteers

1. Edit `src/content/parent.yaml`
2. Add new entry with unique ID
3. Specify weekday group
4. Ensure phone number format is consistent

### Updating Schedule

1. Edit `src/content/service.yaml`
2. Add new service with date and parent IDs
3. Ensure parent IDs exist in `parent.yaml`
4. Use YYYY-MM-DD date format

### Swapping Duties

1. Find the service entry by date in `service.yaml`
2. Update the `parents` array with new IDs
3. Verify both parent IDs exist

### Creating New Pages

1. Create `.astro` file in `src/pages/`
2. Use layouts from `@levino/shipyard-base`
3. Load content with `getCollection()` or `getEntries()`

## Git Workflow

### Branch Conventions
- `main` - Production branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation changes

### Commit Message Format (Conventional Commits)
```
<type>: <description>

[Optional body]

[Optional footer with Closes #123]
```

Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation change
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code refactoring
- **test**: Adding or fixing tests
- **chore**: Maintenance tasks

### Example Commit Messages
```
feat: add volunteer statistics dashboard

Implements a new statistics page showing completed and upcoming
services per volunteer, sorted alphabetically.

Closes #42
```

```
fix: correct date formatting in schedule view
```

## Quality Assurance

### Type Checking
```bash
npm run typecheck
```

### Pre-commit Hooks
- Lefthook automatically runs Biome formatting before each commit
- Configured in `lefthook.yml`
- Ensures consistent code style across all commits

## Deployment

### GitHub Pages
1. Push to GitHub
2. Enable Pages in Settings → Pages
3. Set source to "GitHub Actions"
4. Automatic deployment on every push to `main`

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **Vercel**: Framework Astro, auto-detected
- **Cloudflare Pages**: Build command `npm run build`, output directory `dist`

## Troubleshooting

### Common Issues

**Build Errors**:
- Ensure Node.js 22+ is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Clear Astro cache: `rm -rf .astro`

**Type Errors in YAML Data**:
- Check schema in `src/content/config.ts`
- Ensure all required fields are present
- Verify date format is YYYY-MM-DD
- Ensure referenced IDs exist

**Astro Dev Server Won't Start**:
- Port 4321 might be in use
- Try `PORT=3000 npm run dev` to use different port
- Clear cache: `rm -rf .astro`

## Important Links

- [Astro Documentation](https://docs.astro.build/)
- [Shipyard Framework](https://shipyard.levinkeller.de/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev/)

## AI-Assisted Development Tips

### When Working with Claude Code

**Good Prompts:**
- "Add a new volunteer named John Smith to the Tuesday group with phone +1234567890"
- "Schedule services for the next month on Mondays with Anna and Thomas"
- "Swap duties: change service on 2025-08-15 from John/Jane to Mike/Sarah"
- "Create a new page showing service history for a specific volunteer"

**Data Validation:**
- Always check that parent IDs in `service.yaml` exist in `parent.yaml`
- Maintain date format consistency (YYYY-MM-DD)
- Keep phone number formats consistent
- Ensure weekday values match schema enum

**Testing Changes:**
- Run `npm run dev` to test locally
- Check all affected pages render correctly
- Verify no TypeScript errors with `npm run typecheck`
- Ensure biome formatting passes (automatic via git hooks)

## Security Notes

- **Never** commit secrets or API keys
- Use `.env.local` for sensitive data (already in `.gitignore`)
- Regular dependency updates: `npm audit` and `npm update`
- Review pull requests for security implications

## Performance Optimization

- Optimize images before uploading (prefer WebP format)
- Use lazy loading for large components
- Leverage Astro's static generation
- Static assets in `static/` for CDN caching
- Keep YAML files reasonably sized (under 1000 entries per file)

## Accessibility

- Use semantic HTML
- Add alt texts to all images
- Ensure keyboard navigation works
- Test with screen readers
- Maintain WCAG 2.1 AA contrast ratios

## Support & Contributing

For issues or questions:
1. Create an issue in the GitHub repository
2. Describe the problem in detail
3. Include relevant logs and screenshots
4. For AI assistance: tag with `@claude-code`

---

**Template maintained with AI assistance**

Last updated: December 2025
