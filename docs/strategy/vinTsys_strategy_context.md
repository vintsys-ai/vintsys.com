# vinTsys Strategy Context
*Prepared: June 2026 — for website planning session*

---

## Company Overview

**vinTsys** (pronounced "vin-TEE-sis") is an Oslo-based AI startup registered in the Norwegian business registry (Brønnøysundregistrene). The T in vinTsys stands for Truth.

- **Tagline:** Truth-Grounded AI.
- **Mission:** Build AI systems that cite their sources, verify their reasoning, and earn the trust of researchers, educators, and institutions.
- **Location:** Oslo, Norway (EFTA/EEA member — full EU funding eligibility)
- **Founder:** Pubudu Samarakoon — 15+ years in genomics, now deeply technical in LLM architecture and agentic systems
- **Domains:** vintsys.com (corporate) and vintsys.ai (technical portal)

---

## Brand Rules (non-negotiable)

- Always write "vinTsys" — capital T, no space. Never "VinTsys", "Vintsys", or "VINTSYS"
- "Truth-Grounded AI" is hyphenated as a compound modifier
- Never describe ScholarInt as a "chatbot" — it is a pedagogical learning assistant
- Never use "cutting-edge", "revolutionary", "next-generation", or "game-changing"
- Never claim clinical or diagnostic capability
- Never position against OpenAI/Anthropic — position against the problem (unverifiable outputs)
- vintsys.com speaks to decision-makers: authoritative, warm, outcome-focused
- vintsys.ai speaks to engineers/researchers: precise, technical, evidence-led

---

## Products

### 1. ScholarInt (Primary Product — in final development)
AI-powered pedagogical learning assistant for bioinformatics and computational life sciences.

**What it is:** A production RAG system built for structured, workshop-based scientific training. The reference implementation of the Truth-Grounded AI architecture.

**Tech stack (Google Cloud / VPC):**
- Ingestion: Docling (IBM) + GPU acceleration for scientific PDF parsing
- Vector Store: Vertex AI Vector Search (per-domain isolation)
- LLM: Gemini 2.5 Flash (via Vertex AI)
- Reranking: Cross-encoder reranker
- Interface: Chainlit (Python-native)
- Infrastructure: GCP europe-west4, Cloud Run, Cloud SQL, Secret Manager, GCS

**Current build status (as of 2026-06-24):**
- Stages 1–8 complete (GCP infra, ingestion pipeline, validation, RAG backend phases 1–4, Chainlit Phase 1)
- Chainlit Phase 2 (wiring chat UI to RAG backend) is next — ETA ~1 week
- App is being built in a separate Cowork project

**Deployed content:** Accelerated NGS workshop (BioNT consortium) — ingested and validated

**Planned content:**
- Applied Machine Learning for Biological Data (BioNT)
- RNA-Seq, Python, HPC workshops (in preparation)

---

### 2. Norwegian Language Learning Agent (Prototype / Platform Demonstrator)
Multi-turn conversational agent built for a Hackathon. Demonstrates agentic architecture beyond RAG.

**Capabilities:**
- Guides users through language practice scenarios (café, hotel, train station, etc.)
- Dynamically tracks vocabulary mastery
- Learns from user mistakes, focuses on weak areas
- Maintains persistent user profiles across sessions
- MCP integration

**Strategic role:** NOT positioned as a peer product to ScholarInt. Featured as a platform capability demonstration — proof that vinTsys can build persistent-profile, multi-turn agentic systems beyond RAG pipelines.

**Positioning on website:** Under "Our Work" or "Demos" section, explicitly labelled as prototype/demonstrator.

---

### 3. Learning Journal / Blog (Credibility Asset)
Public Sphinx site: **https://pubudusaneth.github.io/learn_llm/**

**Content:**
- Building Blocks of GPT-2 LLM (tokenization, embeddings, attention, transformer blocks, etc.)
- Architecting Autonomous Systems (agent anatomy, MCP, context engineering, trust)

**Strategic role:** Primary trust-building and credibility signal. Demonstrates the founder genuinely understands LLM internals — not marketing, not hype. Especially the "Engineering Trust" article is directly on-brand for Truth-Grounded AI.

**Current weaknesses to fix before linking from vintsys.com:**
- Page title is "Learn LLMs documentation" — change to something like "LLM & Agentic Systems — Pubudu Samarakoon"
- GitHub username URL signals personal project — frame carefully on website
- Link from vintsys.com under "From the founder" or "Technical writing" with framing: *"Pubudu's public learning journal on LLM architecture and agentic systems — written from a genomics researcher's perspective."*

---

### 4. Institutional Consulting (Service)
AI strategy for academic institutions — AI readiness assessments, responsible deployment strategies, GDPR-compliant verifiable AI systems. Mentioned in original landing page copy but not yet a focus of current strategy discussions.

---

## The BioNT Connection (Critical Strategic Context)

**BioNT** (BioNetwork for Training) is an EU-funded project ending **June 2026**.

**Key facts:**
- vinTsys was formally recognised in the BioNT final report to EU reviewers as a spin-off
- Exact quote from the report: *"VINTSYS, an Oslo-based AI start-up was registered in the Norwegian business registry as a spin-off that utilises BioNT learning materials. The founder has begun leveraging materials from the BioNT Applied Machine Learning course to develop an intelligent, self-paced learning assistant based on Retrieval-Augmented Generation. This represents an early example of third-party reuse of BioNT outputs for purposes beyond the original project scope."*
- vinTsys has been identified as the **long-term sustainability plan** for BioNT training resources — unfunded, meaning vinTsys must sustain this through its own business model
- BioNT consortium decided: training materials → GitHub, videos → Lhumos (video platform)
- Pubudu has **direct relationships with BioNT training coordinators** — warm contacts, time-sensitive window

**Important positioning constraint:** vinTsys is NOT the official BioNT platform. It is the intelligent layer on top of open BioNT content. The content is openly available — the moat is the structured learning experience, assessment layer, micro-credential compliance, and hosted infrastructure on top of it.

**Correct language:** "vinTsys was recognised in the BioNT final report to EU reviewers as a spin-off utilising BioNT materials" — accurate, not overclaimed.

---

## Monetisation Strategy

### What NOT to sell
- The content itself (it's openly available on GitHub/Lhumos)

### What TO sell
- The structured, assessable learning experience on top of open content
- The AI assistant that makes it interactive and adaptive
- Micro-credential / progress tracking layer
- Hosted infrastructure so institutions don't have to build it themselves

### Target buyers (with budget — priority order)
1. **Training network coordinators** running post-BioNT workshops (project budgets, warm contacts via BioNT)
2. **Bioinformatics core facilities** at universities (operational budgets, recurring training needs)
3. **PhD programme directors** needing structured assessable training modules
4. **Biotech/CRO companies** onboarding staff needing NGS or ML for biology training (highest willingness to pay)

### What NOT to do
- Target researchers, graduates, undergraduates first — they have no budget
- Lead with EU funding as primary revenue strategy — too slow (12-24 months), pursue in parallel only

### Outreach approach
- Individual conversations with 3-4 BioNT coordinators — NOT mass email
- Ask: "Who in your institution handles training budgets?" not "would you pay for this?"
- Demo ask: "30 minutes to see ScholarInt running on Applied ML for Biology content before the project closes"
- Demo on Applied ML content specifically — it's the course named in the EU report
- Early pricing: €500-1500 for institutional access per semester — low but not free

### EU Funding
- Worth pursuing in parallel as medium-term strategy
- Requires: matched resources, consortium partners, 12-24 month timeline
- The EU report citation is a strong asset for grant applications

---

## Immediate Priorities (Next 2-3 Weeks)

1. **Complete ScholarInt Chainlit Phase 2** — wire chat UI to RAG backend (~1 week, separate project)
2. **Build vintsys.com website** — 2-3 days, minimal viable, single-page focus (this planning session)
3. **Outreach to BioNT coordinators** — book July demos before project disperses

---

## Website Planning — Key Decisions

### What the website must do (single job)
Be credible enough that a BioNT coordinator who clicks the link in an outreach email spends 60 seconds on it and thinks "this is real."

### What to include (MVP)
- Hero: "AI that shows its work." / Truth-Grounded AI positioning
- One-paragraph ScholarInt description
- BioNT reference (factual, not overclaimed)
- "From the founder" link to blog
- Norwegian language agent under "Our Work / Demos" (labelled as prototype)
- "Request early access" CTA (not "try it now" — app not publicly accessible yet)
- Contact: hello@vintsys.com

### Product hierarchy on website
1. ScholarInt — primary product, leads everything
2. Blog — credibility signal, link prominently
3. Norwegian language agent — "what else we can build" demo, not peer product

### What to skip for now
- Full vintsys.ai technical portal
- Multi-page site
- Genomics long-term roadmap (keep internal until validated)

---

## Technical Infrastructure Notes

- **GCP Project:** scholarint-beta, region: europe-west4
- **Local stack (original):** Llama 3.2 · ChromaDB · Docling · Chainlit · Ubuntu 24.04 · NVIDIA L40S (lost access — rebuilt on GCP)
- **Current stack:** Vertex AI Vector Search · Gemini 2.5 Flash · Cloud Run · Chainlit
- **GDPR:** Compliant by design — data stays within GCP VPC
- **Open source:** Built on open-source infrastructure, auditable

---

## Founder Profile (for website/outreach framing)

- 15+ years in genomics
- Self-described "infinite learner"
- Deeply technical in LLM internals (not surface-level AI)
- Affiliated with University of Oslo (UiO)
- Embedded in European bioinformatics training community
- Anti-hype positioning: "not to ride the AI-HASS wave" — this is a differentiator, use it
