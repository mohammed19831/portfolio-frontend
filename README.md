Portfolio Website Requirements Document
1. Introduction
1.1 Purpose & Goals
•	Replace manual CV updates with a dynamic, filterable portfolio website.
•	Allow visitors to filter work experience by Discipline and Industry.
•	Deploy the site as a full‑stack app on Hugging Face Spaces using Docker.
1.2 Glossary
•	Disciplines: Robotics; AI/ML & Computer Vision; Electronics
•	Industries: Healthcare; Surgery; Metrology; Agriculture; AR/VR
•	Entry: A work or education record with metadata tags.
•	NDA‑Gated entry: Content requiring a valid NDA code to access.
2. User Requirements
2.1 Filter User Interface
•	Two multi‑select controls for Disciplines and Industries.
•	Users can select multiple values in each control.
•	Results update dynamically, sorted by best match.
2.2 Filtering Logic
•	Show entries tagged with at least one selected discipline AND at least one selected industry.
•	Sort results by highest number of tag matches; tie‑break by internal priority list and the entry’s date; most recent first.
•	Support: no filters (show all), single‑dimension filters, or combined filters.
2.3 Tagging & Priority
•	Entries store an ordered list of tags, e.g. [Electronics, Robotics].
•	The first tag is the primary tag and indicates main relevance.
•	Sorting logic ranks entries matching primary tags higher.
2.4 Entry Card
•	Displays Title, Date, Tags,Affiliate institutions, thumbnail, and a brief two‑line summary.
•	Public cards are fully visible.
•	NDA‑gated cards are blurred with overlay text “NDA required to view this work experience.”
•	All cards are clickable to view more details or prompt for NDA code.
2.5 Click Behaviour & Detail Pages
•	Public entries: clicking opens a placeholder detail page (prototype).
•	NDA entries:
•	 If unauthenticated – prompt for NDA code.
•	 If authenticated – open detailed project page (future version).
2.6 NDA Access Flow
•	NDA codes are generated externally, hashed and stored securely.
•	Input form validates code server‑side; successful validation establishes a session.
•	Invalid codes display an error; NDA cards remain blurred.
•	Rate‑limit code attempts to prevent brute‑force attacks.
2.7 Responsiveness & Accessibility
•	Mobile‑responsive card grid layout.
•	Keyboard‑accessible filters and dialogs.
•	Meets WCAG‑AA contrast and ARIA labelling standards.
3. Functional Requirements
3.1 API Endpoints
•	GET /entries?disciplines=[…]&industries=[…]&nda_code=optional
•	POST /auth/nda  – body { code: "..." } returns validation and sets session token.
•	GET /entries/{id} – returns entry detail; returns 401 if NDA code invalid or missing for gated content.
3.2 Data Model
Example entry could be represented as:
{
  "id": "unique",
  "title": "Work title",
  "brief": "Short summary",
“project/product/division title”: “…”,
“project media”: “Images”, “video”, “embedded code”, “3D model viewer”.
“thumbnail”: “”, 
“affiliate_institution(s)”: [“Imperial College London”, “Innovate UK”,..],
  "date start": "YYYY-MM",
"date end": "YYYY-MM",
  "disciplines": [...],
  "industries": [...],
“skills/toolset”:[…],
  "priority": [...],
  "nda_required": true/false,
  "links": { "demo": "...", "github": "...", “publications”:”…” }
}

Affiliate institution
{
“id”: “unique",
“name”: “Sony MEA”,
“logo”: [],
“link to website”: [],
“Location”: “Address”,
“Country Flag”: “”
}

3.3 Filtering Logic
•	Backend filters entries based on selected tags.
•	Counts matches and sorts by total matches, then by priority.
3.4 Blur & Overlay
•	Front‑end CSS applies blur effect and overlay to NDA cards when not authenticated.
3.5 Detail Page (Prototype)
•	Public entries show placeholder details.
•	NDA entries only accessible after successful authentication.


3.6 Key UI Requirements
3.6.1 NDA-Code entry Form styling
•	Sample hidden NDA-code-entry  form exists on website www.rantilini.com (click on the name to reveal example input form).
•	Ideal pin entry form should be like the standard OTP entry you seau everywhere. A rectangular box for each number.
•	When clicking there should be a lock/unlock animation on all the  ‘a’ s in Rantilini S. Samaratunga.  Sample .svg animation icons provided. When no NDA is provided then the ‘a’ in Rantilini should display the locked symbol. It should also have a small idle animation to bring users’s attention to it to show that it is clickable.

3.6.2 Thumbnail Art
•	There should be thumbnail art ( you can use ai generated placeholders for now) that summarise the project.

4. Other  Requirements
4.1 Performance
•	≤ 200 ms response for up to 100 entries.
•	Client‑side caching of filter results and session token.
4.2 Security
•	All traffic over HTTPS/TLS.
•	NDA codes stored hashed; never logged in plain text.
•	Brute‑force prevention on NDA code entry.
4.3 Maintainability
•	Modular codebase with clear documentation.
•	Central JSON or database for entry data.
•	README instructions for adding/updating entries.
4.4 UX & Style
•	Clean, modern look aligned with rantilini.com.
•	Smooth animations for filtering and modals.
•	Clear feedback on NDA status and errors.

5. Deployment & Infrastructure
5.1 Dockerfile
•	Base image: python:3.11-slim or node:18-alpine.
•	Copy backend, front-end, and static entry data.
•	Expose port 8080; set CMD for application server.
5.2 Hugging Face Spaces
•	Repository includes Dockerfile, code, and assets.
•	Ensure HF Spaces build uses correct port and start command.
•	Set environment variables for NDA code storage and rate‑limits.
5.3 Monitoring
•	Health check endpoint /health.
•	README includes local build instructions and NDA code management.
•	Basic Site Visitor Analytics.
6. Future Enhancements
•	Full detailed project pages with media and 3D viewable interactive models.
•	Admin interface for CRUD operations on entries.
•	Filter by technology stack.
•	Multiple sorting options (date, relevance).
•	Internationalisation support.
