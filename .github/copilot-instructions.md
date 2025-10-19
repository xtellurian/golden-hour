# Copilot Instructions - The Golden Hour Co

Astro Docs are available for reference: https://docs.astro.build/llms.txt

## Project Overview
You are working on "The Golden Hour Co" website - a static website for a birth, antenatal, and lactation service based in Fremantle, Western Australia. This is a healthcare service provider specializing in supporting new mothers and families during the precious early period after birth.

## Key info
- **Business Name**: The Golden Hour Co
- **Location**: Fremantle, Western Australia
- **Website URL**: https://thegoldenhourco.net

## Tech Stack
- **Framework**: Astro 5.x (Static Site Generator)
- **Deployment**: Cloudflare Pages with Cloudflare adapter
- **Package Manager**: Yarn 4.x
- **TypeScript**: Enabled with strict typing
- **Styling**: (To be determined - likely CSS/SCSS or Tailwind)

## Business Context
The Golden Hour Co provides:
- Antenatal education and preparation
- Lactation consultation and support
- Postpartum care guidance
- Family wellness services

The "golden hour" refers to the first hour after birth, emphasizing the importance of immediate bonding and care.

## Content Guidelines

### Tone & Voice
- **Warm and nurturing**: Use compassionate, supportive language
- **Professional yet approachable**: Medical expertise with human touch
- **Empowering**: Focus on empowering parents with knowledge and confidence
- **Inclusive**: Welcome all family structures and birthing experiences
- **Local**: Reference Fremantle/Perth area when relevant

### Key Messaging
- Emphasize evidence-based care
- Highlight personalized support approaches
- Focus on the transformative nature of the golden hour period
- Stress continuity of care from pregnancy through postpartum
- Promote informed decision-making for families

### Content Priorities
1. **Services offered** (birth support, lactation, antenatal classes)
2. **About the practitioner(s)** (qualifications, philosophy, experience)
3. **Contact and booking information**
4. **Educational resources** (blog posts, guides, FAQs)
5. **Testimonials** from families served
6. **Local community connections** in Fremantle area

## Development Guidelines

### File Structure
- Use Astro's component-based architecture
- Organize components by function (`components/`, `layouts/`, `pages/`)
- Create reusable components for common elements (hero sections, service cards, testimonials)
- Keep business logic in TypeScript files when needed

### Styling Approach
- Mobile-first responsive design
- Accessible color palette (consider color blindness, contrast ratios)
- Clean, modern aesthetic that feels trustworthy and calming
- Use imagery that represents diverse families and birth experiences
- Ensure fast loading times for mobile users

### SEO Considerations
- Target local SEO keywords: "lactation consultant Perth", "antenatal classes WA", "lactation support Fremantle"
- Implement proper meta tags, structured data
- Use semantic HTML for accessibility
- Optimize images with alt text describing supportive care scenes

### Accessibility Requirements
- WCAG 2.1 AA compliance minimum
- Proper heading hierarchy (h1, h2, h3)
- High contrast ratios for text
- Keyboard navigation support
- Screen reader friendly content
- Alternative text for all meaningful images

### Component Patterns
- **Hero sections**: Welcoming, with clear value proposition
- **Service cards**: Clear descriptions with booking CTAs
- **Testimonial blocks**: Authentic quotes with attribution (first names only for privacy)
- **Contact forms**: Simple, secure, mobile-friendly
- **Educational content**: Easy-to-scan formatting with clear headings

## Technical Specifications

### Build & Deploy
- Use `yarn dev` for development
- Deploy via `yarn deploy` to Cloudflare Pages
- Ensure static generation for optimal performance
- Test responsive breakpoints: mobile (375px), tablet (768px), desktop (1200px+)

### Performance Targets
- Lighthouse scores: 90+ across all metrics
- Core Web Vitals optimization
- Image optimization using Cloudflare's image service
- Minimize JavaScript bundle size

### Content Management
- Content should be easily maintainable
- Consider using Astro's content collections for blog posts/resources
- Implement a simple CMS approach if client needs to update content

## Privacy & Compliance
- Ensure GDPR/privacy compliance for contact forms
- Healthcare information should be general/educational only
- Include appropriate disclaimers about medical advice
- Secure handling of any personal information collected

## Local Context (Fremantle, WA)
- Reference local birthing hospitals when relevant
- Include information about service areas (Fremantle, Perth metro)
- Consider local parenting groups and community connections
- Use Australian English spelling and terminology
- Include local contact details and accessibility information

## Content to Avoid
- Specific medical advice (refer to healthcare providers)
- Guaranteed outcomes or medical claims
- Exclusive or judgmental language about birthing choices
- Complex medical jargon without explanation
- Stock photos that don't represent authentic experiences

## Key Pages to Implement
1. **Home** - Hero, services overview, about preview, contact
2. **Services** - Detailed service descriptions, pricing, booking
3. **About** - Practitioner background, philosophy, qualifications
4. **Resources** - Educational content, FAQs, blog
5. **Contact** - Contact form, location, booking calendar integration
6. **Testimonials** - Client stories and feedback

When developing, prioritize user experience for expecting parents who may be accessing the site on mobile devices while managing other responsibilities. Keep navigation simple and information easily discoverable.