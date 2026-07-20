import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

async function loadApp(t, reducedMotion = false) {
  global.document = {
    addEventListener() {},
    getElementById() { return null; },
    readyState: "loading",
  };
  global.window = {
    addEventListener() {},
    matchMedia() { return { matches: reducedMotion }; },
  };

  const vite = await createServer({ appType: "custom", server: { middlewareMode: true } });
  t.after(() => vite.close());
  return vite.ssrLoadModule("/src/App.jsx");
}

async function renderApp(t, reducedMotion = false) {
  const { default: App } = await loadApp(t, reducedMotion);
  return renderToStaticMarkup(React.createElement(App));
}

test("page exposes skip navigation and mobile menu state", async (t) => {
  const html = await renderApp(t);

  assert.match(html, /href="#main-content"[^>]*>Skip to main content<\/a>/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /aria-controls="mobile-nav"/);
});

test("page shell does not block content behind an artificial preloader", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.doesNotMatch(html, /id="preloader"/);
});

test("profile photo uses compact responsive sources", async (t) => {
  const html = await renderApp(t);
  const small = await stat(new URL("../public/profile-256.webp", import.meta.url)).catch(() => ({ size: Infinity }));
  const medium = await stat(new URL("../public/profile-512.webp", import.meta.url)).catch(() => ({ size: Infinity }));
  const large = await stat(new URL("../public/profile-1024.webp", import.meta.url)).catch(() => ({ size: Infinity }));

  assert.match(html, /srcSet="\/profile-256\.webp 256w, \/profile-512\.webp 512w, \/profile-1024\.webp 1024w"/);
  assert.ok(small.size < 50_000);
  assert.ok(medium.size < 80_000);
  assert.ok(large.size < 180_000);
});

test("reduced-motion users get a static hero role", async (t) => {
  const html = await renderApp(t, true);

  assert.match(html, /<span class="grad-text font-semibold">Generative AI Engineer<\/span>/);
});

test("reduced motion disables smooth programmatic scrolling", async (t) => {
  const app = await loadApp(t, true);

  assert.equal(typeof app.scrollBehavior, "function");
  assert.equal(app.scrollBehavior(true), "auto");
  assert.equal(app.scrollBehavior(false), "smooth");
});

test("GitHub CTA does not hardcode a repository count", async (t) => {
  const html = await renderApp(t);

  assert.match(html, /View all repositories on GitHub/);
  assert.doesNotMatch(html, /View all \d+ repositories/);
});

test("Featured Projects contains Airport Lost & Found instead of Breast Cancer ANN", async (t) => {
  const html = await renderApp(t);

  assert.match(html, /Airport Lost &amp; Found — AI Operations Platform/);
  assert.match(html, /https:\/\/github\.com\/MohamedMagdy2208\/airport-lost-found-system/);
  assert.doesNotMatch(html, /Breast Cancer Prediction/);
  assert.ok(html.indexOf("Airport Lost &amp; Found — AI Operations Platform") < html.indexOf("Chat With CVs — RAG System"));
});

test("Research section presents academic work without claiming publications", async (t) => {
  const html = await renderApp(t);

  assert.match(html, /id="research"/);
  assert.match(html, /Research &amp; Academic Projects/);
  assert.match(html, /Tomato Leaf Disease Detection/);
  assert.match(html, /Adaptive Belt Monitoring System/);
  assert.match(html, /Industrial Digital Twin Systems/);
  assert.match(html, /Construction Safety AI/);
  assert.match(html, /https:\/\/github\.com\/MohamedMagdy2208\/ABM-Adaptive-Belt-Monitoring/);
  assert.match(html, /Visiting Research Fellow \(Fully Funded Scholarship\)/);
  assert.doesNotMatch(html, /Publications &amp; Research/);
});
