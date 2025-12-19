# Community Scheduler Template

> **A production-ready scheduling system that eliminates the need for custom admin panels and backend development.**
>
> Built for recurring volunteer schedules with self-service editing, automated reminders, and AI-powered updates.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📅 What This Template Does

Originally built for a Waldorf school's forest service program, this template provides a complete scheduling system with:

### Core Features

✅ **Weekly rotating schedules** across multiple weekday groups (Monday-Friday)
✅ **Self-service for participants** - anyone can:
- Add themselves to the schedule
- Swap duty assignments with others
- Update their contact information
- Request schedule changes

✅ **Automated reminders** - active actions like:
- **SMS notifications** sent day before duties (via Twilio integration)
- Email reminders (easy to add)
- Calendar integrations (via webhooks)

✅ **Statistics dashboard** showing:
- Who has served and when
- Total services per person
- Upcoming commitments

✅ **Mobile-friendly design**:
- One-tap phone calling
- Responsive layout
- Fast loading (static pages)

✅ **Type-safe data** with Zod schema validation
- Catches errors at build time
- No runtime surprises
- Clear data structure

### Perfect For

- 🏫 **Schools**: Parent volunteer programs, recess monitoring, cafeteria duties
- 📚 **Educational Institutions**: Library volunteers, tutor schedules
- 🏥 **Healthcare**: Shift schedules (with some customization), on-call rotations
- 🌱 **Village Communities**: Flower watering, community garden maintenance
- ⛪ **Religious Communities**: Church group schedules, service coordination
- 👁️ **Neighborhoods**: Neighborhood watch, trash bin rotations
- 🎨 **Cultural Associations**: Event support, tech team schedules
- 🏢 **Offices**: Meeting room cleaning, kitchen duties
- 🔄 **Any recurring group-based scheduling**

---

## 💰 The Business Case

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
- SSL certificates, monitoring: $10/month
**Total: $45/month = $540/year**

### This Template

**Development:**
- Customize frontend: 2 days
- Configure deployment: 30 minutes
**Total: 2.5 days @ $100/hr = $2,000**

**Hosting:**
- Static hosting: **$0-5/month** (GitHub Pages/Cloudflare/Netlify free tiers)
- No database needed
- No backend server needed
**Total: ~$0-60/year**

**💡 You save $34,000+ in first year alone.**

Plus: Lower maintenance, better security (no server to hack), infinite scalability (CDN-based).

---

## 🎯 How It Works: GitHub as Your Admin Interface

This template's innovation is using **GitHub itself** as the admin interface, eliminating weeks of CRUD development.

### The Secret: No Admin Panel Needed

Instead of building complex admin interfaces with authentication, role management, and endless forms:

- **Users edit data directly** - simple text files in GitHub (no coding required)
- **Pull Requests = your review system** - approve changes with one click
- **AI assists with changes** - Claude Code makes edits from plain English requests
- **Git history = audit log** - complete record of who changed what and when

### Real-World Workflow

**Traditional approach:**
1. User emails admin: "Can you swap my duty from April 15 to April 22?"
2. Admin logs into backend
3. Admin navigates through 5 screens
4. Admin updates database manually
5. Admin confirms via email
**⏱️ Time: 10-15 minutes per request**

**With this template:**
1. User opens GitHub Issue: "@claude-code please swap my duty from April 15 to April 22"
2. Claude Code creates Pull Request automatically
3. Admin reviews (sees exactly what changes) and clicks "Merge"
4. Site auto-deploys with changes live in seconds
**⏱️ Time: 30 seconds total**

### Self-Service Empowers Everyone

**Users can:**
- Submit changes themselves via GitHub Issues
- See exact changes before they're applied (in the PR)
- No technical knowledge required - just plain English
- Get instant confirmation when merged

**Admins just:**
- Review pull requests (visual diff shows changes)
- Merge or request modifications
- Trust but verify - no manual data entry

### AI-Powered Updates

Once you install [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions), users can request changes like:

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

Claude Code creates a PR showing exactly what will change. You review, merge, done.

---

## ⚖️ Trade-offs

### The Trade-off: Data Visibility

- **Data lives in GitHub repository** - anyone with repo access can see it
- For many use cases (community schedules, volunteer rosters), this is **perfectly fine**
- Your organization likely already shares this info via email/spreadsheets anyway

### Solutions if You Need Privacy

**For semi-private data** (e.g., school internal schedules):
- Make GitHub repo **private** (free for organizations)
- Grant access only to authorized users (teachers, staff, etc.)
- Data is hidden from public but accessible to your team

**For truly private data** (rare for schedules):
- Add simple authentication layer (Cloudflare Access, BasicAuth, etc.)
- Still no backend needed! Auth happens at CDN/edge level
- Users still edit via GitHub, visitors need credentials to view

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
  active: true
```

Edit `src/content/service.yaml`:
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["john-doe", "jane-smith"]
```

### 3. Deploy

Push to GitHub and connect to:
- **GitHub Pages** (free, automatic)
- **Cloudflare Pages/Workers** (free, blazing fast)
- **Netlify** (generous free tier)
- **Vercel** (generous free tier)

All have first-class GitHub integration. Push = deploy. Done.

### 4. Add SMS Reminders (Optional)

The original project includes SMS reminder functionality via Twilio:
- Automated daily reminders to participants
- Sent 18 hours before duty time
- Personalized messages with co-participant names
- Runs via GitHub Actions (scheduled workflow)

See the [original implementation](https://github.com/levino/waeldchendienst-waldorfschule-hannover-maschsee) for reference code.

**Setup:**
1. Create Twilio account (free trial available)
2. Add GitHub Secrets: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`
3. Copy workflow from original project
4. Configure schedule in `.github/workflows/sms-reminder.yml`

**Cost:** ~$0.01 per SMS (Twilio pricing)

---

## 🛠️ Technology Stack

- **[Astro 5.16+](https://astro.build)** - Static site generator with Content Collections
- **TypeScript 5.6** - Type safety throughout
- **Tailwind CSS + DaisyUI** - Modern, responsive styling
- **Zod** - Runtime schema validation
- **Lefthook + Biome** - Auto-formatting and code quality
- **date-fns + Ramda** - Functional utilities

No framework lock-in. Standard web technologies. Easy to maintain.

---

## 📋 How It Works Technically

### Data Storage

All data lives in simple YAML files (not databases):

**Volunteers** (`src/content/parent.yaml`):
```yaml
- id: john-doe
  firstName: John
  lastName: Doe
  phone: "+1234567890"
  weekday: monday
  active: true
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
  active: z.boolean(),
})
```

**Bad data = build fails.** No runtime errors. Ever.

### Static Generation

Astro generates static HTML at build time:
- **Blazing fast** - pre-rendered pages served from CDN
- **Secure** - no server to hack, no database to breach
- **Cheap** - just file serving
- **Scalable** - handles millions of visitors at no extra cost

---

## 🎓 Educational Value

This template demonstrates:

**Modern Architecture:**
- Static site generation (JAMstack)
- Git-based CMS approach
- Edge deployment strategies
- Type-safe data pipelines

**AI-Human Collaboration:**
- GitHub as interface layer
- AI-assisted data management
- Pull request workflows
- Automated deployments

**Business Value:**
- Radical cost reduction without sacrificing features
- Faster time-to-market (days vs months)
- Lower maintenance burden (no servers)
- Better user experience (instant loads)

Perfect for:
- Learning modern web development
- Teaching software architecture
- Understanding JAMstack principles
- Demonstrating AI-assisted workflows

---

## 💡 Inspiration & Background

This template was born from real frustration: coordinating parent volunteers for a Waldorf school's weekly forest program.

**We didn't want to:**
- Build yet another admin panel (weeks of work)
- Pay $50/month for a SaaS scheduling tool
- Maintain a backend server (security updates, backups, monitoring)
- Deal with user authentication and permissions

**We wanted:**
- Transparent scheduling everyone could see
- Easy updates without technical barriers
- Historical tracking built-in
- Mobile access for quick lookups
- Active reminders so people don't forget

**Solution:**
GitHub + AI + Static Site + Twilio = Complete system, no backend!

The result handles real workloads, costs almost nothing, and took days (not months) to build.

---

## 🤝 Contributing

This template was built with AI assistance (Claude Code) and continues to evolve.

**Ways to contribute:**
- Report issues
- Suggest features
- Share your implementation
- Improve documentation
- Add integrations (email, calendar, etc.)

Fork, modify, share. That's the spirit!

---

## 📄 License

MIT License - use it for anything!

---

## 🆘 Support & Professional Services

### Community Support

- **Issues**: [GitHub Issues](https://github.com/levino/community-scheduler-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/levino/community-scheduler-template/discussions)
- **AI Help**: Open an issue with `@claude-code`

### Professional Services

Need help with deployment or customization for your specific use case?

**[Levin Keller](https://levinkeller.de)** offers:
- 🚀 **Deployment Service** - Complete setup and configuration
- 🔧 **Customization & Extensions** - Additional features, custom styling, integrations
- 📱 **SMS/Email Integration** - Automated reminder systems
- 📊 **Custom Dashboards** - Specialized analytics and statistics
- 🎓 **Training** - Teach your team to maintain the system

**Contact:** Visit [levinkeller.de](https://levinkeller.de) for inquiries

---

**Built with ❤️ and AI assistance**

Powered by [Claude Code](https://claude.com/claude-code) and [Astro](https://astro.build)

*Proof that you don't always need a backend.*
