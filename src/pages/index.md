---
title: Community Scheduler Template - Live Demo
description: See the template in action and learn how to use it for your organization
layout: '@levino/shipyard-base/layouts/Splash.astro'
---

# Community Scheduler Template
## Live Demo

> **GitHub as your admin interface. AI as your developer. Zero backend code.**

This is a **live demonstration** of the Community Scheduler Template - a production-ready solution for managing volunteer schedules without building backends or admin panels.

---

## 🎯 What You're Looking At

This demo shows a real-world scheduling system originally built for a Waldorf school's forest service program. Instead of building a custom backend and admin interface (weeks of work, thousands in costs), we use:

- **GitHub** as the admin interface
- **Claude Code** to make changes via plain English
- **Static site generation** for blazing-fast, secure delivery
- **YAML files** instead of databases

**Result:** 34k€+ saved in first year, zero maintenance burden.

---

## 🚀 Try It Out

### Explore the Demo

- [**Weekly Schedules**](/dienstplan/monday) - See how services are organized by weekday
- [**Statistics Dashboard**](/dienstplan/auswertung) - View completion metrics for all volunteers
- [**Contact Directory**](/docs/ansprechpartnerinnen) - Mobile-friendly contact list with one-tap calling

### How It Works

1. **Data lives in YAML files** - simple text, not databases
2. **Edit via GitHub** - users can request changes via Issues
3. **Claude Code assists** - AI makes edits based on plain English requests
4. **Pull Requests = Review** - admins approve with one click
5. **Auto-deploys** - changes go live in seconds

**Example:** "Hey @claude-code, please swap John's duty from April 15 to April 22"
→ Claude creates PR → Admin merges → Done in 30 seconds

---

## 💡 Why This Changes Everything

### Traditional Approach
- Build frontend (2 weeks)
- Build backend API (2 weeks)
- Build admin interface (3 weeks)
- Add authentication (1 week)
- **Total: 9 weeks @ 100€/h = 36,000€**
- **Hosting: 540€/year** (server + database + SSL)

### This Template
- Customize frontend (2 days)
- Deploy (30 minutes)
- **Total: 2.5 days @ 100€/h = 2,000€**
- **Hosting: ~0-60€/year** (static files only)

**You save 34,000€+ in the first year alone.**

---

## 📦 Get Started

### 1. Fork the Template

```bash
# Click "Use this template" on GitHub, then:
git clone https://github.com/YOUR-USERNAME/your-scheduler.git
cd your-scheduler
npm install
```

### 2. Customize Your Data

Edit `src/content/parent.yaml` and `src/content/service.yaml` with your volunteers and schedules.

### 3. Deploy

Push to GitHub and connect to:
- GitHub Pages (free)
- Cloudflare Pages (free)
- Netlify (free tier)
- Vercel (free tier)

### 4. Set Up AI Assistance (Optional)

Install [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions) and your users can request changes via plain English!

---

## 🌟 Key Features

- ✅ **No backend needed** - GitHub is your CMS
- ✅ **AI-powered updates** - Claude Code assists with changes
- ✅ **Self-service for users** - they edit data directly
- ✅ **Type-safe** - Zod validation catches errors at build time
- ✅ **Mobile-friendly** - works perfectly on phones
- ✅ **Blazing fast** - pre-rendered static pages
- ✅ **Zero maintenance** - no servers to manage
- ✅ **Git history** - built-in audit log

---

## 📚 Learn More

### Documentation
- [**GitHub Repository**](https://github.com/levino/community-scheduler-template) - Source code, README, and setup instructions
- [**README (English)**](https://github.com/levino/community-scheduler-template/blob/main/README.md) - Comprehensive guide
- [**README (Deutsch)**](https://github.com/levino/community-scheduler-template/blob/main/README_DE.md) - Deutsche Dokumentation

### Technical Details
- Built with [Astro 5.16+](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- Uses [Content Collections](https://docs.astro.build/en/guides/content-collections/) for type-safe data
- Auto-formatted with [Biome](https://biomejs.dev)
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com)

---

## 👨‍💻 About

This template was created by [Levin Keller](https://levinkeller.de) with assistance from [Claude Code](https://claude.com/claude-code).

**Born from frustration:** Coordinating parent volunteers shouldn't require building yet another admin panel. This template proves you don't always need a backend.

### Contact & Support

- **Website:** [levinkeller.de](https://levinkeller.de)
- **GitHub:** [@levino](https://github.com/levino)
- **Issues:** [Report bugs or request features](https://github.com/levino/community-scheduler-template/issues)
- **Discussions:** [Ask questions or share ideas](https://github.com/levino/community-scheduler-template/discussions)

---

## 📄 License

MIT License - free to use for any purpose!

---

## 🚀 Ready to Build Your Own?

Click "Use this template" on [GitHub](https://github.com/levino/community-scheduler-template) and start managing schedules without the backend hassle.

**Questions?** Open an issue with `@claude-code` and get AI-powered assistance!

---

*Proof that you don't always need a backend.*
