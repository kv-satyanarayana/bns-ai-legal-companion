# BNS AI Legal Companion

> **"Making Indian Law Understandable, Accessible, and Actionable for Everyone."**

An AI-powered Indian legal intelligence and research platform designed for both ordinary citizens and legal professionals navigating India's historic criminal justice reform: the transition from the Indian Penal Code (IPC 1860) to the **Bharatiya Nyaya Sanhita (BNS 2023)**, **Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)**, **Bharatiya Sakshya Adhiniyam (BSA 2023)**, and the **Information Technology Act, 2000**.

---

## ⚖️ Core Dual-Depth Personas

1. **Everyday Citizens (Mode A — Citizen Assistant):**
   - Natural-language grievance triage (no legal terminology needed).
   - Instant statutory classification (Cyber Crime, Financial/UPI Fraud, Online Harassment, Tenancy, Theft).
   - Actionable **Evidence Preservation Checklists** with compliance guidelines under BSA Section 63.
   - Procedural next steps and direct contact channels (National Cyber Helpline `1930`, `cybercrime.gov.in`, `CEIR` portal).

2. **Advocates, Researchers & Law Students (Mode B — Legal Research Workspace):**
   - **IPC ↔ BNS Concordance Engine** (crosswalk mapping old IPC sections to new BNS provisions).
   - Procedural standards under BNSS (FIR/Zero FIR, arrest safeguards, asset attachment).
   - Electronic evidence admissibility standards under BSA Sections 61 & 63.
   - Verifiable judicial ratios (*ratio decidendi*) and Supreme Court / High Court precedent summaries.
   - Dedicated **BNS Statutory Explorer** with chapter filters and deep-dive inspector.

---

## 🛠️ Technology Stack

### Current Implementation (Phase 1 — Mock & Foundation Phase)
- **Frontend:** React 18, Vite, React Router v6, Lucide Icons, Vanilla CSS Design System (Inter & Outfit typography).
- **Backend:** Node.js, Express.js (ES Modules), CORS, dotenv.
- **AI / Data Layer:** Pluggable `AiProvider` architecture with deterministic `MockAiProvider` and labeled local mock legal datasets (`bns.mock.json`, `bnss.mock.json`, `bsa.mock.json`, `it-act.mock.json`, `cases.mock.json`).
- **AI Status:** *Currently MOCK ONLY. No heavy AI model or external API keys required to develop, run, and test.*

### Future Phase Architecture (Indian Legal Llama + RAG)
- **Inference Engine:** `GSMS-B/Indian-Legal-Llama-3.2-3B` via local Ollama.
- **Vector Retrieval:** ChromaDB vector store with section-aware chunking preserving Section #, Title, Ingredients, Punishment, and Metadata.
- **Orchestration:** LangChain / Hybrid Dense-Sparse Legal Retriever with citation guardrails.

---

## 📁 Repository Structure

```
bns-ai-legal-companion/
├── client/                     # React + Vite Frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── DisclaimerBanner.jsx
│   │   │   ├── LawCard.jsx
│   │   │   ├── CaseCard.jsx
│   │   │   ├── EvidenceChecklist.jsx
│   │   │   ├── StepTimeline.jsx
│   │   │   ├── SourceBadge.jsx
│   │   │   └── SectionDetailModal.jsx
│   │   ├── pages/              # Application Pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── CitizenAssistantPage.jsx
│   │   │   ├── LegalResearchPage.jsx
│   │   │   ├── BnsExplorerPage.jsx
│   │   │   └── AboutPage.jsx
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   ├── services/
│   │   │   └── api.js          # Centralized API client
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css           # Legal-tech design system
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Express.js REST API Backend
│   ├── config/
│   │   └── default.js          # Port, CORS, and data paths
│   ├── controllers/
│   │   ├── healthController.js
│   │   └── legalController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── healthRoutes.js
│   │   └── legalRoutes.js
│   ├── services/
│   │   ├── ai/
│   │   │   ├── aiProvider.js       # Abstract AI interface
│   │   │   └── mockAiProvider.js   # Deterministic mock provider
│   │   ├── aiService.js            # Active provider delegator
│   │   └── legalDataService.js     # Statutory & case search
│   ├── package.json
│   └── server.js
│
├── data/                       # Local Mock Legal Corpus
│   ├── bns/bns.mock.json       # Bharatiya Nyaya Sanhita provisions
│   ├── bnss/bnss.mock.json     # Bharatiya Nagarik Suraksha Sanhita
│   ├── bsa/bsa.mock.json       # Bharatiya Sakshya Adhiniyam
│   ├── it-act/it-act.mock.json # Information Technology Act
│   └── cases/cases.mock.json   # Supreme Court & High Court cases
│
├── docs/                       # Architectural specifications
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### 1. Run the Express Backend Server
```bash
cd server
npm install
npm start
```
*The server will start on `http://localhost:5000`.*
*Health Check: `http://localhost:5000/api/health`*

### 2. Run the React Frontend Client
In a separate terminal:
```bash
cd client
npm install
npm run dev
```
*The client will start on `http://localhost:5173` with automated API proxying.*

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & active AI provider status |
| `POST` | `/api/legal/analyze` | Natural-language legal problem analysis & triage |
| `GET` | `/api/legal/search?q=...&act=...` | Multi-statute and case law search (`ALL`, `BNS`, `BNSS`, `BSA`, `IT-ACT`, `CASES`) |
| `GET` | `/api/legal/sections` | Fetch all BNS sections |
| `GET` | `/api/legal/sections/:section` | Fetch detailed statutory breakdown for a BNS section |
| `GET` | `/api/legal/cases` | Fetch landmark judicial case precedents |

### Example Request (`POST /api/legal/analyze`)
```json
{
  "query": "Someone hacked my Instagram account and is threatening me."
}
```

### Example Response Structure
```json
{
  "success": true,
  "data": {
    "problemAnalysis": {
      "category": "Cyber Crime",
      "subcategory": "Account Compromise & Online Threats",
      "issues": [
        "Unauthorized account intrusion & identity compromise",
        "Digital intimidation / blackmail via electronic messaging"
      ],
      "summary": "..."
    },
    "relevantLaws": [
      {
        "act": "BNS (2023)",
        "section": "351",
        "title": "Criminal Intimidation",
        "relevance": "...",
        "punishment": "...",
        "classification": "Bailable / Non-Cognizable",
        "source": "MOCK — Bharatiya Nyaya Sanhita, 2023"
      }
    ],
    "evidence": [
      {
        "id": "ev-1",
        "title": "Timestamped DM & Threat Screenshots",
        "description": "..."
      }
    ],
    "nextSteps": [
      {
        "stepNumber": 1,
        "title": "Report Incident on National Cyber Crime Portal",
        "contactInfo": "Helpline: 1930 | Portal: https://cybercrime.gov.in"
      }
    ],
    "similarCases": [],
    "sources": [],
    "disclaimer": "DISCLAIMER: This analysis is for educational and informational purposes only..."
  }
}
```

---

## 🧪 Test Scenarios Supported in Phase 1

1. **Cybercrime & Account Takeover:**
   *Query:* `"Someone hacked my Instagram account and is threatening me."`
   *Result:* Classifies under Cyber Crime, maps BNS § 351, IT Act § 66 & 66C, BSA § 61/63, generates digital DM evidence checklist.

2. **UPI / Financial Scam:**
   *Query:* `"I was scammed through UPI."`
   *Result:* Classifies under Financial / Cyber Fraud, maps BNS § 318(4) (Cheating), IT Act § 66D, BNSS § 107 (Bank freeze), prompts 1930 Golden Hour reporting.

3. **Online Stalking & Harassment:**
   *Query:* `"Someone is repeatedly threatening and stalking me online."`
   *Result:* Classifies under Personal Safety, maps BNS § 78 (Stalking) and BNS § 351, guides on chat export and Women Cyber Cell reporting (1091).

4. **Tenancy / Security Deposit Dispute:**
   *Query:* `"My landlord is refusing to return my deposit."`
   *Result:* Evaluates breach of trust (BNS § 316) vs civil contract, outlines legal notice procedure and Rent Tribunal avenues.

5. **Theft & Stolen Mobile:**
   *Query:* `"Someone stole my phone."`
   *Result:* Maps BNS § 303 (Theft), BNSS § 173 (Zero FIR), directs victim to CEIR portal for IMEI blocking across telecom networks.

6. **General / Unrelated Query:**
   *Query:* `"Show me general legal guidance."`
   *Result:* Graceful generic legal synthesis with evidence timeline and statutory disclaimer.

---

## ⚠️ Legal Awareness & Safety Disclaimer

**IMPORTANT NOTICE:** The BNS AI Legal Companion is an educational information triage tool. In this first development phase, all responses, classifications, and section mappings are generated from deterministic test/mock datasets. 

This platform does **NOT** provide formal legal advice, does not establish an advocate-client relationship, and cannot replace consultation with a licensed legal practitioner or law enforcement officer. In emergencies, citizens should immediately dial **112** or **1930** (Cyber Fraud).
