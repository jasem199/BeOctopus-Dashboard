# Leaderboard Page — Structure & IA

---

## Page Structure

Single column. Full width. Scrollable. Content starts below the top navigation bar and sits inside the standard page container.

---

## Page Header

Label `Leaderboard` — page title, top of page. Below it a supporting line: `View rankings, export data, and pick winners.`

Three tab options below the page header, horizontally aligned:

- `Daily` — default active tab
- `Weekly`
- `All Time`

Switching tabs reloads the leaderboard table with data for the selected time period. All other page elements remain the same across tabs.

---

## Section 1 — Leaderboard Table

### Table Header Row

Above the table, a single horizontal bar with two sides:

**Left side:**
- Total count label — e.g. `24,830 participants` — updates based on active tab

**Right side:**
- Search input field — placeholder text: `Search by name` — filters table rows in real time as brand types
- `[ Export CSV ]` button — outline style — opens export popup on click

---

### Table Columns

Full-width table. Columns in order left to right:

- **Rank** — rank number. Fixed width, narrow column. For ranks 1, 2, 3: badge treatment. All others: plain number.
- **Display Name** — user's display name. Left aligned. Widest column.

- **Predictions** — total number of predictions submitted by this user. Fixed width, center aligned.
- **Points** — total accumulated points. Fixed width. Semi-bold. Right aligned.
- **Submitted** — timestamp of when the user submitted their predictions. Fixed width. Muted. e.g. `3h ago` or `12 Jun, 09:41`

---

### Table Rows

Each row represents one ranked user. Rows are listed in ascending rank order — rank 1 at the top.

Each row is a horizontal container. Columns align to the header above.

Row interaction: clicking any row does nothing — rows are read-only. No profile or detail view.

Alternating row background: every second row has a very subtle background tint to aid readability across a wide table.

---

### Pagination

Below the table. Centered horizontally.

Left side of pagination bar:
- Label: `Showing [start] – [end] of [total]` — e.g. `Showing 1 – 50 of 24,830`

Center of pagination bar:
- Previous page arrow button — disabled on first page
- Page number pills — shows current page number and immediate neighbors e.g. `1  2  3  ...  496`
- Next page arrow button — disabled on last page

Right side of pagination bar:
- Rows per page selector — dropdown with options: `25` `50` `100` — default: `50`

---

### Export CSV — Popup

Triggered by the `[ Export CSV ]` button in the table header. Opens as a centered modal overlay.

**Popup Header:**
- Title: `Export Leaderboard`
- Close icon — top right corner

**Popup Body:**

Section label: `Select export range`
Supporting text: `Choose which ranks to include in the export.`

Two input fields side by side:

- First field label: `From rank` — number input, e.g. `1`
- Second field label: `To rank` — number input, e.g. `100`

Below the inputs: a note — `Only ranks within this range will be included in the CSV file.`

Below the note: a read-only preview line that updates as brand types. Format: `This will export [count] users.` — e.g. `This will export 100 users.`

Section label below: `Select time period`

Three options as a segmented toggle — one active at a time:

- `Daily`
- `Weekly`
- `All Time`

Default active: whichever tab was active on the main page when Export was clicked.

Section label below: `Columns included`

A checklist of all available columns. All checked by default. Brand can uncheck to exclude:

- `[ ✓ ]` Rank
- `[ ✓ ]` Display Name
- `[ ✓ ]` Country
- `[ ✓ ]` Predictions
- `[ ✓ ]` Points
- `[ ✓ ]` Submitted

**Popup Footer:**

Two buttons side by side:

- `[ Cancel ]` — outline style, left — closes popup, no action
- `[ Download CSV ]` — filled primary button, right — triggers CSV file download and closes popup

---

## Section 2 — Lottery / Spin Wheel

A visually distinct section below the leaderboard table and pagination. Separated from the table section by a full-width divider.

Section label: `Lottery Draw`
Supporting text: `Define a rank range and spin to randomly select a winner from that pool.`

---

### 2.1 Range Selector

A horizontal control bar. All elements on one row:

- Label: `Pick winner from rank` — left aligned, inline with the inputs
- First input: `From rank` — number input field, e.g. `1`
- Label between inputs: `to`
- Second input: `To rank` — number input field, e.g. `100`
- Supporting note below the row: `The wheel will randomly select one participant from within this rank range.`

Below the range inputs, a read-only line that updates dynamically as brand types: `Pool size: [count] participants` — e.g. `Pool size: 100 participants`

---

### 2.2 Spin Wheel

Centered below the range selector. The spin wheel is the primary visual element of this section.

The wheel is a circular graphic divided into equal segments. Number of segments shown: fixed at a display count regardless of pool size — the wheel is symbolic, not literal. It spins to represent randomness rather than showing all participants on the wheel.

Segments are labeled with generic participant indicators — not actual names — to avoid loading thousands of names onto the wheel. Actual winner is determined by the algorithm, not visually by the wheel stopping.

**Wheel states:**

**Idle state:**
- Wheel is static, not spinning
- A pointer/arrow indicator sits at the top of the wheel pointing downward
- `[ Spin ]` button centered below the wheel — filled primary button, full width of the wheel diameter
- Below the button: small note — `Results are randomly selected from the defined rank range.`

**Spinning state:**
- `[ Spin ]` button becomes disabled and grayed out immediately on click
- Wheel begins rotating — accelerates then decelerates with a natural easing motion
- Spinning duration: approximately 4–6 seconds before stopping
- During spin: button label changes to `Selecting...` — non-interactive

**Result state:**
- Wheel stops on a segment
- A result card appears directly below the wheel, sliding up into view
- Result card contains:
  - Label: `Winner` — small, muted gray, top of card
  - Rank number — e.g. `#47`
  - Display name — large, prominent
  - Country — flag emoji + country name
  - Points — total points
  - Email address — shown for contact purposes
- Two action buttons below the result card, side by side:
  - `[ Re-spin ]` — outline style, left — resets wheel to idle state and allows another spin within the same range
  - `[ Export Winner ]` — filled primary button, right — downloads a single-row CSV with the winner's full details

**Re-spin behavior:**
- Clicking Re-spin clears the result card
- Wheel resets to idle state
- Range inputs remain filled with the last used values
- Brand can adjust range before spinning again

---

### 2.3 Spin History

Below the spin wheel and result card. A log of all spins performed in the current session.

Section label: `Spin History`
Supporting text: `A record of all winners drawn in this session.`

Displayed as a vertical list. Each history entry shows:

- Spin number — e.g. `Draw #1`, `Draw #2`
- Winner display name
- Rank
- Points
- Range used — e.g. `From rank 1 to 100`
- Timestamp of when the spin was performed — e.g. `Today at 14:32`
- `[ Export ]` text link — far right — exports that single winner as CSV

If no spins have been performed yet: placeholder text centered — `No draws yet. Set a range and spin to select a winner.`

History resets when the page is refreshed. It is session-only and not persisted.

---

## Save Controls

There are no save controls on this page. The leaderboard table is read-only and auto-updates. The lottery section is session-based. No publishing action is required.
