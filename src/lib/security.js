/**
 * Security & Sanitization Utilities for Academic Digital Binder
 * Defends against XSS, Prototype Pollution, Malicious URLs, and Unsanitized Inputs.
 */

// Safe URL scheme regex
const SAFE_URL_PATTERN = /^(https?:\/\/|\/|#|mailto:|tel:)/i;
const DANGEROUS_PROTOCOLS = /^(javascript|data|vbscript):/i;

/**
 * Sanitizes an untrusted URL to prevent XSS via javascript: or data: URIs
 * @param {string} url 
 * @param {string} fallback 
 * @returns {string}
 */
export function sanitizeUrl(url, fallback = '#') {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (DANGEROUS_PROTOCOLS.test(trimmed)) {
    console.warn('[Security] Blocked dangerous URL protocol:', trimmed);
    return fallback;
  }
  if (SAFE_URL_PATTERN.test(trimmed)) {
    return trimmed;
  }
  return fallback;
}

/**
 * Strips script tags, evil event handlers (onclick, onerror, onload, etc.),
 * and dangerous protocols from HTML strings before rendering.
 * @param {string} html 
 * @returns {string}
 */
export function sanitizeHtml(html) {
  if (!html || typeof html !== 'string') return '';

  let sanitized = html
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove inline event handlers (e.g., onerror=, onclick=, onload=)
    .replace(/\s+on[a-z]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '')
    // Remove javascript: hrefs
    .replace(/href\s*=\s*(?:'javascript:[^']*'|"javascript:[^"]*"|javascript:[^\s>]+)/gi, 'href="#"')
    // Remove data:text/html hrefs
    .replace(/href\s*=\s*(?:'data:text\/html[^']*'|"data:text\/html[^"]*"|data:text\/html[^\s>]+)/gi, 'href="#"')
    // Remove iframe injections unless internal
    .replace(/<iframe\b(?![^>]*src=["']\/(?:materials|images)\/)[^>]*>.*?<\/iframe>/gi, '');

  return sanitized;
}

/**
 * Defensive JSON parse that rejects prototype pollution keys
 * @param {string} text 
 * @param {*} fallback 
 * @returns {*}
 */
export function safeJsonParse(text, fallback = null) {
  if (!text || typeof text !== 'string') return fallback;
  try {
    const parsed = JSON.parse(text, (key, value) => {
      // Prevent prototype pollution
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return undefined;
      }
      return value;
    });
    return parsed;
  } catch (err) {
    console.error('[Security] Safe JSON Parse failed:', err);
    return fallback;
  }
}

/**
 * Validates text inputs for max length and sanitizes special characters
 * @param {string} input 
 * @param {number} maxLength 
 * @returns {string}
 */
export function sanitizeTextInput(input, maxLength = 250) {
  if (!input || typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '');
}
