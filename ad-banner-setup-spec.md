# Ad Banner Setup Page — Structure & IA

---

## Page Structure

Single column. Full width. Scrollable. Content starts below the top navigation bar and sits inside the standard page container.

---

## Page Header

Label `Ad Banner Setup` — page title, top of left column. Below it a supporting line: `Manage and schedule your ad banners across the app.`

---

## Section 1 — Matchday Banner

Section label: `Matchday Banner`
Supporting text below label: `Appears underneath every 2 match cards on the Matchday screen.`

---

### 1.1 Banner Upload

One upload zone. Dashed border rectangle. Rounded corners. Center aligned content inside:

- Upload icon on top
- Primary text: `Upload banner creative`
- Secondary text: `Recommended size: 1080 × 300px. PNG or JPG.`
- Below: `[ Browse file ]` button — outline style, not filled

Below the upload zone, once a creative is uploaded:

- Thumbnail preview of uploaded banner — full width of the upload zone, proportional height
- File name shown below thumbnail — left aligned, truncated if long
- File size shown beside file name — muted gray
- `[ Replace ]` text link — left aligned
- `[ Remove ]` text link — soft red, right aligned on same row as Replace

---

### 1.2 Scheduling — Day Control

Section label: `Schedule`
Supporting text: `Choose when this banner runs.`

Two options presented as a toggle selector. One option active at a time:

- `Single Day` — run banner on one specific date
- `Multiple Days` — run banner across a date range

---

#### If Single Day is selected:

One date picker field:

- Label: `Run on`
- Input: date picker, shows selected date e.g. `14 June 2026`
- Below input: supporting note — `Banner will appear all day on this date.`

---

#### If Multiple Days is selected:

Two date picker fields side by side. Gap 16px between them:

- First field label: `From` — date picker, start date
- Second field label: `To` — date picker, end date
- Below both fields: supporting note — `Banner will appear every day within this range.`

---

### 1.3 Status Control

Section label: `Status`

Three options as a segmented toggle. One active at a time:

- `Active` — banner is live and running
- `Paused` — banner is uploaded and scheduled but not showing
- `Scheduled` — banner is set to go live on a future date automatically

Current status shown as a small colored indicator dot beside the label:
- Active: green dot
- Paused: amber dot
- Scheduled: blue dot

---

### 1.4 Matchday Banner Summary Row

A summary block shown below all controls. Read-only. Updates automatically as fields are filled.

Displays:
- `Creative:` file name of uploaded banner or `Not uploaded` if empty
- `Schedule:` date or date range, or `Not set` if empty
- `Status:` current status value

---

## Section 2 — Leaderboard Banner

Section label: `Leaderboard Banners`
Supporting text: `Place multiple banners at specific positions within the leaderboard rankings.`

---

### 2.1 Banner Positions Overview

Four fixed positions available. Each position is an independent expandable panel. All four panels are listed vertically with a gap between each. Each panel can be expanded or collapsed independently.

Panel list in order:

- `Top` — appears above rank #1
- `After 10` — appears below rank #10
- `After 15` — appears below rank #15
- `After 20` — appears below rank #20

---

### 2.2 Each Position Panel — Expanded State

Each panel has the same internal structure. When collapsed, shows only the position label, current status dot, and an expand chevron. When expanded, reveals all controls below.

---

#### Panel Header (always visible, collapsed and expanded)

- Left: position label e.g. `Top` or `After 10` — semi-bold
- Center: status indicator dot — green, amber, or blue depending on current status
- Right: expand/collapse chevron icon

---

#### Panel Body (visible only when expanded)

**Banner Upload**

One upload zone per position. Same structure as Matchday banner upload zone:

- Upload icon
- Primary text: `Upload banner creative`
- Secondary text: `Recommended size: 1080 × 300px. PNG or JPG.`
- `[ Browse file ]` button — outline style

Once uploaded:
- Thumbnail preview full width of upload zone
- File name and file size below thumbnail
- `[ Replace ]` and `[ Remove ]` links

---

**Scheduling — Day Control**

Same toggle selector as Matchday banner:

- `Single Day` or `Multiple Days`

Single Day:
- `Run on` date picker field
- Supporting note: `Banner will appear all day on this date.`

Multiple Days:
- `From` and `To` date pickers side by side
- Supporting note: `Banner will appear every day within this range.`

---

**Status Control**

Same three-option segmented toggle as Matchday banner:
- `Active` / `Paused` / `Scheduled`
- Status dot beside label updates accordingly

---

**Position Summary Row**

Read-only summary block at the bottom of each expanded panel:
- `Creative:` file name or `Not uploaded`
- `Schedule:` date or date range or `Not set`
- `Status:` current status value

---

### 2.3 All Positions At A Glance

Below all four expandable panels, a compact read-only summary table showing the state of all four positions together:

```
Position   │ Creative        │ Schedule          │ Status
───────────────────────────────────────────────────────────
Top        │ banner-v1.png   │ 12–20 June 2026   │ Active
After 10   │ banner-v2.png   │ 14 June 2026      │ Scheduled
After 15   │ Not uploaded    │ Not set           │ Paused
After 20   │ banner-v1.png   │ 12–20 June 2026   │ Active
```

This table gives the brand a fast overview without expanding each panel individually.

---

## Save Controls

At the bottom of the page. Applies to all banner settings on the page. Two buttons side by side:

- `[ Save Changes ]` — outline button, left
- `[ Publish Live ]` — filled primary button, right

Below the buttons: status line showing last published time e.g. `Last published: 29 April 2026 at 10:42 AM` — small, muted gray.

---