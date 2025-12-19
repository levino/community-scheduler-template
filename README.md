# Community Scheduler Template

> **GitHub as your admin interface. AI as your developer. Zero backend code.**
>
> A production-ready template that eliminates the need for custom admin panels, CRUD interfaces, and backend development.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 💡 The Core Idea

**Traditional approach:**
1. Build frontend ✅
2. Build backend API ⏰💰
3. Build admin interface ⏰💰💰
4. Maintain all of it forever ⏰💰💰💰

**This template:**
1. Build frontend ✅
2. Use GitHub as admin interface ✅ (free!)
3. Use Claude Code for changes ✅ (AI-powered!)
4. Deploy anywhere static ✅ (pennies!)

**You just saved weeks of development time and thousands in costs.**

---

## 🎯 Why This Changes Everything

### No Admin Panel Required

Instead of building complex CRUD interfaces with authentication, role management, and endless forms:

- **Users edit data directly** via GitHub (text files, not code)
- **Pull Requests are your review system** - approve changes with one click
- **AI assists with changes** - Claude Code can make edits based on plain English requests
- **Git history is your audit log** - see who changed what, when, and why

### Self-Service for Everyone

Users can:
- Add themselves to the schedule
- Swap duty assignments
- Update their contact information
- Request schedule changes

Admins just:
- Review pull requests (5 seconds)
- Merge or request changes
- That's it. Really.

### Real-World Example

**Traditional workflow:**
1. User emails admin: "Can you swap my duty from April 15 to April 22?"
2. Admin logs into backend
3. Admin navigates through 5 screens
4. Admin updates database
5. Admin confirms via email
**Time: 10-15 minutes**

**With this template:**
1. User opens GitHub Issue: "@claude-code please swap my duty from April 15 to April 22"
2. Claude Code creates Pull Request
3. Admin clicks "Merge"
4. Site auto-deploys
**Time: 30 seconds**

---

## ⚖️ Trade-offs

### The Trade-off: Data Visibility

- **Data is in a GitHub repository** - anyone with repo access can see it
- For many use cases (community schedules, volunteer rosters), this is **perfectly fine**
- Your organization likely already shares this info via email/spreadsheets anyway

### Solutions if You Need Privacy

**For semi-private data** (e.g., school internal schedules):
- Make GitHub repo **private** (free for organizations)
- Grant access only to authorized users (teachers, staff, etc.)
- Data is hidden from public but accessible to your team

**For truly private data** (rare for schedules):
- Add a simple authentication layer (Cloudflare Access, BasicAuth, etc.)
- Still no backend needed! Auth happens at CDN/edge level
- Users still edit via GitHub, visitors need credentials to view

---

## 📅 What This Template Provides

Originally built for a Waldorf school's forest service program, this template handles:

- **Recurring volunteer schedules** across multiple weekday groups
- **Automatic past/upcoming separation** (build-time calculation)
- **Statistics dashboard** showing who's done what
- **Mobile-friendly** design with one-tap calling
- **Type-safe data** with Zod schema validation

**Perfect for:**
- School parent volunteer programs
- Community garden maintenance
- Neighborhood watch rotations
- Library volunteer coordination
- Church group schedules
- Any recurring group-based scheduling

---

## 🚀 Quick Start

### 1. Use This Template

Click "Use this template" on GitHub, then:

```bash
git clone https://github.com/YOUR-USERNAME/your-scheduler.git
cd your-scheduler
npm install
```

### 2. Customize Your Data

Edit `src/content/parent.yaml`:
```yaml
- id: john-doe
  firstName: John
  lastName: Doe
  phone: "+1234567890"
  weekday: monday
```

Edit `src/content/service.yaml`:
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["john-doe", "jane-smith"]
```

### 3. Deploy

Push to GitHub. Connect to:
- **GitHub Pages** (free, automatic)
- **Cloudflare Pages** (free, fast)
- **Netlify** (free tier generous)
- **Vercel** (free tier generous)

All have first-class GitHub integration. Push = deploy. Done.

---

## 🤖 AI-Powered Workflows

### Setup Claude Code (Optional but Recommended)

1. Install [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions)
2. Users can now request changes via GitHub Issues

### Example Requests

**Adding volunteers:**
```
@claude-code please add:
Name: Maria Garcia
Phone: +1555001234
Group: Wednesday
```

**Swapping duties:**
```
@claude-code swap services:
- Move John from 2025-04-15 to 2025-04-22
- Move Sarah from 2025-04-22 to 2025-04-15
```

**Bulk scheduling:**
```
@claude-code schedule Monday services for next quarter
with alternating pairs: Anna/Thomas, Julia/Michael
```

Claude Code creates a PR. You review and merge. Site deploys automatically.

---

## 💰 Cost Comparison

### Traditional Approach

**Development:**
- Frontend: 2 weeks
- Backend API: 2 weeks
- Admin interface: 3 weeks
- Authentication/permissions: 1 week
- Testing/deployment: 1 week
**Total: 9 weeks @ $100/hr = $36,000**

**Hosting:**
- Backend server: $20/month
- Database: $15/month
- SSL certificates, monitoring, etc: $10/month
**Total: $45/month = $540/year**

### This Template

**Development:**
- Customize frontend: 2 days
- Deploy: 30 minutes
**Total: 2.5 days @ $100/hr = $2,000**

**Hosting:**
- Static hosting: **$0-5/month**
- No database needed
- No backend server needed
**Total: ~$0-60/year**

**You save $34,000+ in first year alone.**

---

## 📋 How It Works

### Data Storage

All data lives in simple YAML files:

**Volunteers** (`src/content/parent.yaml`):
```yaml
- id: john-doe
  firstName: John
  lastName: Doe
  phone: "+1234567890"
  weekday: monday
```

**Schedule** (`src/content/service.yaml`):
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["john-doe", "jane-smith"]
```

### Type Safety

Zod schemas validate data at build time:

```typescript
const elternSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  weekday: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']),
})
```

Bad data = build fails. No runtime errors.

### Static Generation

Astro generates static HTML at build time:
- **Blazing fast** - pre-rendered pages
- **Secure** - no server to hack
- **Cheap** - just file serving
- **Scalable** - CDN handles any traffic

---

## 🛠️ Technology Stack

- **[Astro 5.16+](https://astro.build)** - Static site generator
- **TypeScript 5.6** - Type safety
- **Content Collections** - Type-safe data loading
- **Tailwind CSS + DaisyUI** - Styling
- **Lefthook + Biome** - Auto-formatting
- **date-fns + Ramda** - Utilities

No framework lock-in. Standard web technologies. Easy to maintain.

---

## 🎓 Educational Value

This template demonstrates:

**Modern Architecture:**
- Static site generation
- Git-based CMS
- Edge deployment
- Type-safe data pipelines

**AI-Human Collaboration:**
- GitHub as interface layer
- AI-assisted data changes
- Pull request workflows
- Automated deployments

**Business Value:**
- Radical cost reduction
- Faster time-to-market
- Lower maintenance burden
- Better user experience

Perfect for:
- Learning modern web development
- Teaching software architecture
- Understanding JAMstack
- Demonstrating AI-assisted workflows

---

## 🤝 Contributing

This template was built with AI assistance (Claude Code) and continues to evolve.

**Ways to contribute:**
- Report issues
- Suggest features
- Share your implementation
- Improve documentation

Fork, modify, share. That's the spirit!

---

## 📄 License

MIT License - use it for anything!

---

## 💡 Inspiration & Background

This template was born from a real frustration: coordinating parent volunteers for a Waldorf school's weekly forest program.

**We didn't want to:**
- Build yet another admin panel
- Pay $50/month for a SaaS scheduling tool
- Maintain a backend server
- Deal with user management

**We wanted:**
- Transparent scheduling everyone could see
- Easy updates without technical barriers
- Historical tracking built-in (Git!)
- Mobile access for quick lookups

**Solution:**
GitHub + AI + Static Site = No backend needed!

The result handles real workloads, costs almost nothing, and took days (not months) to build.

---

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/levino/community-scheduler-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/levino/community-scheduler-template/discussions)
- **AI Help**: Open an issue with `@claude-code`

---

**Built with ❤️ and AI assistance**

Powered by [Claude Code](https://claude.com/claude-code) and [Astro](https://astro.build)

*Proof that you don't always need a backend.*
