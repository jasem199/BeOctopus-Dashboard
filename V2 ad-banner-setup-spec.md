# Ad Banner Setup Page — Structure & IA

---

## Page Structure

Two columns side by side. Left column takes 60% width. Right column takes 40% width. Gap 24px. Both start below the top navigation bar and sit inside the standard page container. Both columns are independently scrollable.

---

## Page Header

Label `Ad Banner Setup` — page title, top of page. Below it a supporting line: `Manage and schedule your ad banners across the app.`

Two tab options below the page header, horizontally aligned:

- `Matchday Banner` — default active tab
- `Leaderboard Banner`

Switching tabs replaces the entire two-column content below.

---

---

# Tab 1 — Matchday Banner

---

## Left Column — Day Assignment

### Horizontal Date Picker

A horizontally scrollable date strip pinned to the top of the left column. Does not scroll with the content below — stays fixed at the top of the left column at all times.

The strip shows all tournament days as individual date chips in a single horizontal row. Each chip shows:

- Day abbreviation on top e.g. `Fri`
- Date number below e.g. `12`
- Month abbreviation below date e.g. `Jun`

Chip states:

- **Default:** no banner assigned — plain chip, muted text
- **Assigned:** banner has been assigned to this day — chip shows a small colored dot indicator below the date
- **Active/Selected:** currently selected day — chip is highlighted with accent background

On tap/click of a chip: the match list below updates to show only the matches for that selected day. The right column updates to reflect the banner currently assigned to that day.

A `Select Range` option sits at the far right of the date strip, always visible even when scrolling. On click: brand can click a start date chip and an end date chip to select a range. All chips in the range highlight. Assignment made applies to all days in the range.

---

### Match List

Below the date picker. Scrollable. Shows matches for the currently selected day only.

Section label above the list: `Matches on [selected date]` — updates dynamically.

Each match card is compact and minimal:

- Left: Team A name — short, e.g. `Brazil`
- Center: `vs`
- Right: Team B name — e.g. `France`
- Below teams: kickoff time — e.g. `21:00 GST`
- No flags, no scores, no group labels, no extra info

Cards are read-only. No interaction on the cards themselves. They exist only to give the brand context for which matches are happening on the selected day when deciding which banner to assign.

---

### Banner Assignment for Selected Day

Below the match list. This section shows the current banner assignment for the selected day or selected date range.

Section label: `Banner for [selected date or range]`

One dropdown selector:

- Label: `Select banner`
- Options in dropdown: all banners uploaded in the right column Creative Library, shown by file name
- Default: `No banner` — no ad shows on this day
- On selection: thumbnail of selected banner appears inline below the dropdown as a small preview strip

If a date range is selected via `Select Range`:

- Label updates to: `Banner for [start date] — [end date]`
- Same dropdown applies — one banner assigned across the entire range
- Supporting note below: `This will assign the selected banner to all days in this range. Days already assigned will not be overwritten.`

One `[ Assign ]` button — full width, outline style — below the dropdown. Confirms the assignment for the selected day or range.

---

### Day Assignment Overview Table

Below the assignment controls. A compact read-only table showing all tournament days and their current banner assignment at a glance:

```
Date          │ Day       │ Banner Assigned   │ Status
───────────────────────────────────────────────────────
12 June       │ Friday    │ banner-1.png      │ Active
13 June       │ Saturday  │ banner-2.png      │ Active
14 June       │ Sunday    │ banner-3.png      │ Paused
15 June       │ Monday    │ banner-1.png      │ Active
16 June       │ Tuesday   │ banner-3.png      │ Active
17 June       │ Wednesday │ banner-5.png      │ Active
18 June       │ Thursday  │ banner-5.png      │ Active
19 June       │ Friday    │ banner-5.png      │ Active
20 June       │ Saturday  │ banner-5.png      │ Active
21 June       │ Sunday    │ No banner         │ —
```

Each row in the table is clickable. Clicking a row selects that date in the horizontal date picker above and scrolls the left column back to the assignment controls, pre-loaded with that day's current banner.

Status column per row — two options only:

- `Active` — banner is live on this day
- `Paused` — banner is uploaded and assigned but will not show on this day

Status is toggled directly inline in the table row. No separate page needed.

---

## Right Column — Creative Library

Fixed sticky column. Does not scroll when the left column scrolls.

Section label: `Creative Library`
Supporting text: `Upload all banner creatives here. Assign them to days on the left.`

---

### Upload Zone

One upload zone at the top of the right column. Dashed border rectangle. Rounded corners. Center aligned content inside:

- Upload icon on top
- Primary text: `Upload banner creative`
- Secondary text: `Recommended size: 1080 × 300px. PNG or JPG.`
- Below: `[ Browse file ]` button — outline style, not filled

---

### Uploaded Creatives List

Below the upload zone. Vertical list of uploaded creative cards. Each card:

- Full-width thumbnail preview of the banner — proportional height
- File name below thumbnail — left aligned, truncated if long
- File size beside file name — muted gray
- `[ Remove ]` text link — soft red, far right of the file name row

Below each creative card, a small read-only tag line showing which days this creative is currently assigned to. Format: `Assigned to: 12 Jun, 15 Jun, 17–20 Jun` or `Not assigned to any day` if unused.

---

### Right Column Summary

At the bottom of the right column:

- `Total creatives uploaded:` count
- `Days with banner assigned:` count out of total tournament days
- `Days with no banner:` count

---

---

# Tab 2 — Leaderboard Banner

---

## Left Column — Position Assignment

### Position List

No date picker in this tab. The left column shows a vertical list of the four fixed leaderboard positions. Each position is a row.

Section label: `Leaderboard Positions`
Supporting text: `Select a position to assign a banner.`

Position rows in order:

- `Top` — appears above rank #1
- `After 10` — appears below rank #10
- `After 15` — appears below rank #15
- `After 20` — appears below rank #20

Each position row:

- Left: position label — semi-bold
- Center: current assignment status — either banner file name in muted gray or `No banner` in muted gray
- Right: `Active` or `Paused` status dot — green or amber
- Entire row is clickable — clicking selects the position and loads its assignment panel below

---

### Banner Assignment for Selected Position

Below the position list. Updates based on which position row is selected above.

Section label: `Banner for [selected position]` — e.g. `Banner for Top` or `Banner for After 10`

One dropdown selector:

- Label: `Select banner`
- Options: all banners uploaded in the right column Creative Library, shown by file name
- Default: `No banner`
- On selection: thumbnail of selected banner appears inline below the dropdown as a small preview strip

Status toggle below the dropdown — two options only:

- `Active` — banner is live at this position
- `Paused` — banner is assigned but not showing

One `[ Assign ]` button — full width, outline style — confirms the assignment for the selected position.

---

### All Positions Summary Table

Below the assignment controls. Read-only. Shows all four positions at a glance:

```
Position    │ Banner Assigned   │ Status
──────────────────────────────────────────
Top         │ banner-1.png      │ Active
After 10    │ banner-2.png      │ Active
After 15    │ No banner         │ —
After 20    │ banner-1.png      │ Paused
```

Each row clickable — selects that position in the list above.

---

## Right Column — Creative Library

Same structure as Matchday Creative Library. Independent set of creatives — separate from Matchday banners.

Section label: `Creative Library`
Supporting text: `Upload banner creatives for the leaderboard. Assign them to positions on the left.`

Upload zone — same structure as Matchday upload zone.

Uploaded creatives list — same structure as Matchday. Each creative shows which leaderboard positions it is currently assigned to. Format: `Assigned to: Top, After 20` or `Not assigned to any position`.

---

---

## Save Controls

Fixed to the bottom of the page. Full width bar above the page footer. Applies to whichever tab is currently active. Two buttons side by side:

- `[ Save Changes ]` — outline button, left
- `[ Publish Live ]` — filled primary button, right

Below the buttons: status line showing last published time e.g. `Last published: 29 April 2026 at 10:42 AM` — small, muted gray.
