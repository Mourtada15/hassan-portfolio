# Hassan Mourtada Portfolio

Personal portfolio for `hassanmourtada.com`, built with React and Vite.

## Development

```bash
npm install
npm run dev
```

## Analytics

The portfolio includes an optional, free analytics layer built around:

- Google Analytics 4
- Microsoft Clarity

Analytics is guarded behind `VITE_ENABLE_ANALYTICS`. If analytics is disabled, the site still renders and behaves normally.

### Required environment variables

Create `.env.local` and configure:

```bash
VITE_ENABLE_ANALYTICS=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
```

Optional:

```bash
VITE_ANALYTICS_DEBUG=true
VITE_PORTFOLIO_VERSION=2026-03
```

`VITE_ANALYTICS_DEBUG` is intended for local development. Leave it `false` for production builds so GA4 events are not marked as debug traffic.

You can start from [.env.example](/mnt/c/Users/user/Documents/hassan-portfolio/.env.example).

### How to get the IDs

- GA4 Measurement ID: Google Analytics > Admin > Data Streams > select your web stream > copy the `G-...` Measurement ID.
- Clarity Project ID: Microsoft Clarity > open the project for this site > Settings or Setup > copy the project ID shown in the install snippet.

### What is tracked

- `page_view` with `page_path`, `page_title`, `source_category`, landing page data, UTM values, and repeat-visit context
- `section_view` for the actual portfolio sections: `hero`, `skills`, `about`, `projects`, `personal_projects`, `footer`
- `nav_click`, `mobile_menu_open`, `mobile_menu_item_click`
- `hero_secondary_cta_click`
- `resume_download`
- `social_click` for GitHub and LinkedIn profile clicks
- `contact_action` for email and phone clicks
- `project_card_view` for project visibility
- `project_click` for clickable client-project previews
- `project_demo_click` for live demos/builds
- `project_repo_click` for personal project repositories
- `scroll_depth_custom` at 25, 50, 75, 90
- `time_engaged` at 30, 60, 120 seconds
- `first_interaction_time` for the first meaningful click on each page load

### Attribution and Clarity tags

The analytics layer stores session-level attribution from:

- `document.referrer`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- landing page and landing-page type

Clarity tags are set for:

- `visitor_source`
- `landing_page`
- `landing_page_type`
- `portfolio_version`
- `primary_interest`
- `project_clicked`
- `cta_clicked`
- `high_intent_session`

### Local testing

1. Copy `.env.example` to `.env.local` and fill in real IDs.
2. Run `npm run dev`.
3. Set `VITE_ANALYTICS_DEBUG=true` if you want local dev console logs and GA DebugView events.
4. Load the site with and without UTM parameters to confirm source classification.
5. Click the resume CTA, navbar links, contact modal links, footer links, project live links, and repo links.
6. Scroll the page past 25, 50, 75, and 90 percent and stay on the page for at least 30, 60, and 120 seconds.
7. Confirm events in GA4 Realtime and confirm session recordings/tags in Clarity.

### Current site-specific notes

- There is no contact form in the current portfolio, so `contact_form_start`, `contact_form_submit`, and `contact_form_error` are not emitted.
- There is no resume preview flow in the current UI, so resume interactions are tracked only as `resume_download`.
- There is no dedicated featured-projects section or project filter UI in the current portfolio, so those event types are not part of the current taxonomy.
