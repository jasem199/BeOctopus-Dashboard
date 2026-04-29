# Branding Page — Structure & IA

---

## Page Structure

Two columns side by side. Left column takes 60% width. Right column takes 40% width. Gap 24px. Both start below the top navigation bar and sit inside the standard page container.

---

## Left Column — Controls

### Page Header

Label `Branding` — page title, top of left column. Below it a supporting line: `Customise how your app looks for your users.`

---

### Section 1 — Logo Upload

Section label: `Logo`

One upload zone. Dashed border rectangle. Rounded corners. Center aligned content inside:

- Upload icon on top
- Primary text: `Upload your logo`
- Secondary text: `PNG or SVG recommended`
- Below: `[ Browse file ]` button — outline style, not filled

Below the upload zone, once a logo is uploaded:

- Thumbnail preview of uploaded logo — left aligned
- File name shown beside it — truncated if long
- File size shown below file name
- `[ Remove ]` text link — soft red, right aligned on same row as thumbnail

---

### Section 2 — Color Scheme

Section label: `Color Scheme`

One single color input row only. No multiple colors.

Row structure:

- Left: label `Primary Accent Color`
- Supporting text below label: `Used for bottom Nav`
- Right: color swatch box `40px × 40px`, rounded, shows current selected color. On click opens native color picker
- Suggest 6-8 color combo suggestion. Each combo has a dark color, and a semantic light color.
- Beside swatch: hex input field showing current value e.g. `#D2FB6A`. Editable. `120px` wide

Below the color row: a reset link — `Reset to default` — small, muted gray, left aligned

---

### Save Controls

At the bottom of the left column. Two buttons side by side.

- `[ Save Changes ]` — outline button, left
- `[ Publish Live ]` — filled primary button, right

Below the buttons: a status line. Shows last published time e.g. `Last published: 29 April 2026 at 10:42 AM` — small, muted gray.

---

## Right Column — Mobile Preview Frame

Fixed sticky column. Does not scroll with left column.

Label at top: `Live Preview` — small, muted gray, centered above the frame.

Empty mobile device frame centered in the column. Portrait orientation. Rounded corners representing phone edges. Screen area inside is white. No content inside the screen — intentionally empty, updates in real time as brand makes changes on the left.

Below the frame: small note centered — `Preview updates as you make changes` — small, muted gray.
