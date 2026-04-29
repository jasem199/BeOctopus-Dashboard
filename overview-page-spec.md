# Overview Page — Hyper Detailed UI Prompt

---

## Page Layout

Single scrollable page. Light background `#F7F7F7`. No sidebar overlap. Content starts after the fixed top navigation bar. All content lives in a centered container, max width `1280px`, `32px` horizontal padding on all sides. Vertical spacing between all sections is `24px`.

---

## Top Navigation Bar

Fixed. Full width. White background. `64px` height. Bottom border `1px rgba(0,0,0,0.06)`.

**Left side:** Brand logo — `32px` height, auto width, vertically centered.

**Right side:** Two items horizontally aligned with `16px` gap. First item is a small gray text showing current date, e.g. `29 April 2026`, `13px`, regular, `#9A9A9A`. Second item is an avatar circle `36px` diameter, brand accent color background, white initials inside, `14px` semi-bold.

---

## Sidebar Navigation

Fixed. `240px` wide. Full height. White background. Right border `1px rgba(0,0,0,0.06)`. `24px` padding inside.

Sidebar items listed vertically with `4px` gap between each. Each item `44px` height, `12px` border radius, `14px` semi-bold.

- **Active state:** accent color background `#D2FB6A`, dark text `#1A1A1A`, `3px` left border in `#1A1A1A`
- **Inactive state:** transparent background, `#9A9A9A` text

**Sidebar items in order:**
1. Overview
2. Branding
3. Ad Banner Setup
4. Leaderboard
5. Shop Module
6. User Data
7. Clicks

---

## Section 1 — Widgets

Four cards in a single horizontal row. Equal width. Gap between cards `16px`. Cards do not stack on desktop. Each card is a white rounded rectangle, border radius `16px`, padding `24px`, shadow `0 2px 12px rgba(0,0,0,0.06)`.

---

### Widget 1 — Total Signups

**Top row:** icon on the left, trend indicator on the right.

- Icon: person-plus outline icon, `20px`, inside a soft circle container `36px` diameter, background very light green tint `#F0FBF0`, icon color `#2ECC71`
- Trend indicator: small pill shape, `6px` border radius, background `#F0FBF0`. Inside: upward arrow icon `10px` + percentage number e.g. `+12%`, `12px` semi-bold, green `#2ECC71`. Indicates growth since last week

**Below icon row:** main number e.g. `24,830`. Font size `32px`. Semi-bold 700. Color `#1A1A1A`. Top margin `16px`.

**Below number:** label `Total Signups`. `13px`. Regular 400. Color `#9A9A9A`. Top margin `4px`.

**Bottom of card:** thin divider `1px rgba(0,0,0,0.06)` then supporting text: `Since tournament start`. `12px`. Regular. `#9A9A9A`.

---

### Widget 2 — New Signups

Same card structure as Widget 1.

- Icon: spark or star outline icon, `20px`, inside circle container `36px`, background very light yellow tint `#FFFBF0`, icon color `#F39C12`
- Trend indicator: same pill structure. If growth positive: green. If negative: soft red `#E74C3C` with downward arrow

**Main number:** e.g. `1,240`. `32px`. Semi-bold. `#1A1A1A`.

**Label:** `New Signups`. `13px`. Regular. `#9A9A9A`.

**Supporting text:** `In the last 24 hours`. `12px`. Regular. `#9A9A9A`.

---

### Widget 3 — Total Prediction Count

- Icon: target/bullseye outline icon, `20px`, inside circle `36px`, background very light blue tint `#F0F4FF`, icon color `#3498DB`
- Trend indicator: same pill. Percentage reflects change vs previous matchday

**Main number:** e.g. `142,600`. `32px`. Semi-bold. `#1A1A1A`.

**Label:** `Total Predictions`. `13px`. Regular. `#9A9A9A`.

**Supporting text:** `Across all matches`. `12px`. Regular. `#9A9A9A`.

---

### Widget 4 — Total Clicks

- Icon: cursor-click outline icon, `20px`, inside circle `36px`, background very light purple tint `#F5F0FF`, icon color `#9B59B6`
- Trend indicator: same pill structure

**Main number:** e.g. `38,420`. `32px`. Semi-bold. `#1A1A1A`.

**Label:** `Total Clicks`. `13px`. Regular. `#9A9A9A`.

**Supporting text:** `Ad banner interactions`. `12px`. Regular. `#9A9A9A`.

---

## Section 2 — Leaderboard Top 10 + Signup Graph

Two columns side by side. Gap `24px`. Left column takes `40%` width. Right column takes `60%` width. Both columns equal height, white cards, border radius `16px`, shadow `0 2px 12px rgba(0,0,0,0.06)`, padding `24px`.

---

### Left Column — Leaderboard Top 10

**Card header row:**
- Left side: label `Top 10` — `16px` semi-bold `#1A1A1A`
- Right side: three tab pills — `Daily` `Weekly` `All Time`
  - Each pill: `12px` semi-bold, `20px` border radius
  - Active pill: `#D2FB6A` background, `#1A1A1A` text
  - Inactive pill: transparent background, `#9A9A9A` text
  - Gap between pills: `8px`

Below header: `8px` gap then the list begins.

**Each rank row:**
- Horizontal flex container
- Height: `48px`, vertically centered
- Bottom border: `1px rgba(0,0,0,0.04)` — no border on last row
- No hover state

**Row structure left to right:**

- **Rank number:** fixed `32px` width, `14px` semi-bold, `#1A1A1A`
  - Ranks 1–3: number inside pill badge `24px × 24px`, border radius `6px`, background `#D2FB6A`, text `#1A1A1A`, `12px` bold, centered
  - Ranks 4–10: plain number, no badge, `#9A9A9A`
- **Flag emoji:** `18px`, `8px` left margin from rank
- **Display name:** `14px` regular `#1A1A1A`, `8px` left margin from flag, truncated with ellipsis if too long
- **Points:** right aligned, `14px` semi-bold `#1A1A1A`, pushed to far right with flex spacer, followed by `pts` label `12px` regular `#9A9A9A` with `4px` left margin

No export button. No pagination. Exactly 10 rows always.

---

### Right Column — Signup Graph

**Card header row:**
- Left side: label `Signup Growth` — `16px` semi-bold `#1A1A1A`
- Right side: three filter pills — `7 Days` `30 Days` `All Time`
  - Same pill style as leaderboard tabs
  - Default active: `7 Days`

Below header: `8px` gap then the chart begins.

**Chart type:** smooth line chart. Single line. Line color `#D2FB6A`. Line weight `2.5px`. Smooth curve interpolation, not straight segments.

**Area below line:** gradient fill. Top: `#D2FB6A` at 20% opacity. Bottom: fully transparent. Creates a soft glow under the line.

**Data points:** small filled circles on the line, `5px` diameter, `#D2FB6A` fill, white `2px` stroke border. Visible on hover only — hidden by default.

**On hover over any data point:** tooltip appears.
- Background: white
- Border radius: `8px`
- Shadow: `0 2px 8px rgba(0,0,0,0.10)`
- Padding: `8px 12px`
- Inside: date on top `12px` regular `#9A9A9A`, signup count below `14px` semi-bold `#1A1A1A`

**X axis:** date labels, `12px` regular `#9A9A9A`. No gridlines on X axis.

**Y axis:** signup count labels, `12px` regular `#9A9A9A`. Horizontal gridlines at each Y label: `1px` dashed `rgba(0,0,0,0.06)`.

No axis borders. No chart border. Chart fills full remaining card height after header. Minimum chart height `280px`.

**Bottom of chart:** `8px` gap then a single supporting stat line, center aligned. Format: `Highest day: 1,240 signups on 14 June`. `12px` regular `#9A9A9A`. The date and number are semi-bold `#1A1A1A` inline.

---

## Spacing System

| Property | Value |
|---|---|
| Page background | `#F7F7F7` |
| Container max width | `1280px` |
| Container padding | `32px` horizontal |
| Section gap | `24px` vertical |
| Card border radius | `16px` |
| Card padding | `24px` |
| Card shadow | `0 2px 12px rgba(0,0,0,0.06)` |
| Widget row gap | `16px` |
| Two column gap | `24px` |
| Left column width | `40%` |
| Right column width | `60%` |
| Row height leaderboard | `48px` |
| Chart min height | `280px` |
| Font — numbers | `32px` semi-bold |
| Font — labels | `13px` regular |
| Font — supporting | `12px` regular |
| Font — card headers | `16px` semi-bold |
| Font — row names | `14px` regular |
| Font — row values | `14px` semi-bold |
