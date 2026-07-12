# Airport Lost & Found Featured Project Design

## Goal

Feature the public Airport Lost & Found repository as one of the portfolio's six strongest projects without adding unsupported claims or expanding the page.

## Portfolio change

Replace **Breast Cancer Prediction — ANN** with **Airport Lost & Found — AI Operations Platform**. The ANN card is the most redundant because Brain Tumor Detection already represents healthcare machine learning, while the airport platform demonstrates broader full-stack, cloud, retrieval, security, and operational engineering.

## Card content

- **Title:** Airport Lost & Found — AI Operations Platform
- **Tag:** Generative AI · Graph RAG
- **Description:** An Azure-native full-stack MVP for bilingual passenger and staff intake, AI image/OCR enrichment, hybrid item matching, claim verification, and custody tracking with human approval gates.
- **Proof statement:** Connects retrieval, operational workflows, security controls, and human review into an end-to-end airport recovery platform.
- **Stack:** FastAPI, React, Graph RAG, Azure AI Search, PostgreSQL
- **Language indicator:** Python
- **Repository:** https://github.com/MohamedMagdy2208/airport-lost-found-system
- **Accent:** Violet, preserving the existing alternating card palette.

## Accuracy constraints

- Describe the system as an **MVP**, matching its README.
- Do not claim a live deployment, production usage, accuracy, latency, cost savings, or business impact without evidence.
- Do not modify the Airport repository README; it already documents architecture, features, security, local setup, and testing in depth.

## Testing

Add a regression assertion that the Featured Projects markup contains the Airport project and no longer contains the Breast Cancer ANN project. Run the existing test suite, production build, and desktop/mobile browser verification before publishing.

## Publishing

Commit the portfolio change on `agent/add-airport-project-card`, open a pull request to `main`, verify the Netlify preview, merge, and confirm the production domain serves the updated project card.
