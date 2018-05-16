/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-disable max-len */

module.exports = {
  settings: {},
  passes: [{
    passName: 'defaultPass',
    recordTrace: true,
    pauseAfterLoadMs: 5250,
    networkQuietThresholdMs: 5250,
    cpuQuietThresholdMs: 5250,
    useThrottling: true,
    gatherers: [
      'url',
      'scripts',
      'css-usage',
      'viewport',
      'viewport-dimensions',
      'theme-color',
      'manifest',
      'runtime-exceptions',
      'chrome-console-messages',
      'image-usage',
      'accessibility',
      'dobetterweb/all-event-listeners',
      'dobetterweb/anchors-with-no-rel-noopener',
      'dobetterweb/appcache',
      'dobetterweb/domstats',
      'dobetterweb/js-libraries',
      'dobetterweb/optimized-images',
      'dobetterweb/password-inputs-with-prevented-paste',
      'dobetterweb/response-compression',
      'dobetterweb/tags-blocking-first-paint',
      'dobetterweb/websql',
      'seo/meta-description',
      'seo/font-size',
      'seo/crawlable-links',
      'seo/meta-robots',
      'seo/hreflang',
      'seo/embedded-content',
      'seo/canonical',
      'seo/robots-txt',
      'fonts',
    ],
  },
  {
    passName: 'offlinePass',
    useThrottling: false,
    // Just wait for onload
    networkQuietThresholdMs: 0,
    gatherers: [
      'service-worker',
      'offline',
      'start-url',
    ],
  },
  {
    passName: 'redirectPass',
    useThrottling: false,
    // Just wait for onload
    networkQuietThresholdMs: 0,
    // Speed up the redirect pass by blocking stylesheets, fonts, and images
    blockedUrlPatterns: ['*.css', '*.jpg', '*.jpeg', '*.png', '*.gif', '*.svg', '*.ttf', '*.woff', '*.woff2'],
    gatherers: [
      'http-redirect',
      'html-without-javascript',
    ],
  }],
  audits: [
    'is-on-https',
    'redirects-http',
    'service-worker',
    'works-offline',
    'viewport',
    'without-javascript',
    'first-meaningful-paint',
    'load-fast-enough-for-pwa',
    'speed-index-metric',
    'screenshot-thumbnails',
    'estimated-input-latency',
    'errors-in-console',
    'time-to-first-byte',
    'first-interactive',
    'consistently-interactive',
    'user-timings',
    'critical-request-chains',
    'redirects',
    'webapp-install-banner',
    'splash-screen',
    'themed-omnibox',
    'manifest-short-name-length',
    'content-width',
    'image-aspect-ratio',
    'deprecations',
    'mainthread-work-breakdown',
    'bootup-time',
    'uses-rel-preload',
    'font-display',
    'network-requests',
    'manual/pwa-cross-browser',
    'manual/pwa-page-transitions',
    'manual/pwa-each-page-has-url',
    'accessibility/accesskeys',
    'accessibility/aria-allowed-attr',
    'accessibility/aria-required-attr',
    'accessibility/aria-required-children',
    'accessibility/aria-required-parent',
    'accessibility/aria-roles',
    'accessibility/aria-valid-attr-value',
    'accessibility/aria-valid-attr',
    'accessibility/audio-caption',
    'accessibility/button-name',
    'accessibility/bypass',
    'accessibility/color-contrast',
    'accessibility/definition-list',
    'accessibility/dlitem',
    'accessibility/document-title',
    'accessibility/duplicate-id',
    'accessibility/frame-title',
    'accessibility/html-has-lang',
    'accessibility/html-lang-valid',
    'accessibility/image-alt',
    'accessibility/input-image-alt',
    'accessibility/label',
    'accessibility/layout-table',
    'accessibility/link-name',
    'accessibility/list',
    'accessibility/listitem',
    'accessibility/meta-refresh',
    'accessibility/meta-viewport',
    'accessibility/object-alt',
    'accessibility/tabindex',
    'accessibility/td-headers-attr',
    'accessibility/th-has-data-cells',
    'accessibility/valid-lang',
    'accessibility/video-caption',
    'accessibility/video-description',
    'accessibility/manual/custom-controls-labels',
    'accessibility/manual/custom-controls-roles',
    'accessibility/manual/focus-traps',
    'accessibility/manual/focusable-controls',
    'accessibility/manual/heading-levels',
    'accessibility/manual/logical-tab-order',
    'accessibility/manual/managed-focus',
    'accessibility/manual/offscreen-content-hidden',
    'accessibility/manual/use-landmarks',
    'accessibility/manual/visual-order-follows-dom',
    'byte-efficiency/uses-long-cache-ttl',
    'byte-efficiency/total-byte-weight',
    'byte-efficiency/offscreen-images',
    'byte-efficiency/unminified-css',
    'byte-efficiency/unminified-javascript',
    'byte-efficiency/unused-css-rules',
    'byte-efficiency/uses-webp-images',
    'byte-efficiency/uses-optimized-images',
    'byte-efficiency/uses-request-compression',
    'byte-efficiency/uses-responsive-images',
    'dobetterweb/appcache-manifest',
    'dobetterweb/dom-size',
    'dobetterweb/external-anchors-use-rel-noopener',
    'dobetterweb/geolocation-on-start',
    'dobetterweb/link-blocking-first-paint',
    'dobetterweb/no-document-write',
    'dobetterweb/no-mutation-events',
    'dobetterweb/no-vulnerable-libraries',
    'dobetterweb/no-websql',
    'dobetterweb/notification-on-start',
    'dobetterweb/password-inputs-can-be-pasted-into',
    'dobetterweb/script-blocking-first-paint',
    'dobetterweb/uses-http2',
    'dobetterweb/uses-passive-event-listeners',
    'seo/meta-description',
    'seo/http-status-code',
    'seo/font-size',
    'seo/link-text',
    'seo/is-crawlable',
    'seo/hreflang',
    'seo/plugins',
    'seo/canonical',
    'seo/manual/mobile-friendly',
    'seo/manual/structured-data',
  ],

  groups: {
    'perf-metric': {
      title: 'Metrics',
      description: 'These metrics encapsulate your web app\'s performance across a number of dimensions.',
    },
    'perf-hint': {
      title: 'Opportunities',
      description: 'These are opportunities to speed up your application by optimizing the following resources.',
    },
    'perf-info': {
      title: 'Diagnostics',
      description: 'More information about the performance of your application.',
    },
    'a11y-color-contrast': {
      title: 'Color Contrast Is Satisfactory',
      description: 'These are opportunities to improve the legibility of your content.',
    },
    'a11y-describe-contents': {
      title: 'Elements Describe Contents Well',
      description: 'These are opportunities to make your content easier to understand for a user of assistive technology, like a screen reader.',
    },
    'a11y-well-structured': {
      title: 'Elements Are Well Structured',
      description: 'These are opportunities to make sure your HTML is appropriately structured.',
    },
    'a11y-aria': {
      title: 'ARIA Attributes Follow Best Practices',
      description: 'These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.',
    },
    'a11y-correct-attributes': {
      title: 'Elements Use Attributes Correctly',
      description: 'These are opportunities to improve the configuration of your HTML elements.',
    },
    'a11y-element-names': {
      title: 'Elements Have Discernible Names',
      description: 'These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.',
    },
    'a11y-language': {
      title: 'Page Specifies Valid Language',
      description: 'These are opportunities to improve the interpretation of your content by users in different locales.',
    },
    'a11y-meta': {
      title: 'Meta Tags Used Properly',
      description: 'These are opportunities to improve the user experience of your site.',
    },
    'manual-a11y-checks': {
      title: 'Additional items to manually check',
      description: 'These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).',
    },
    'manual-pwa-checks': {
      title: 'Additional items to manually check',
      description: 'These checks are required by the baseline ' +
          '[PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are ' +
          'not automatically checked by Lighthouse. They do not affect your score but it\'s important that you verify them manually.',
    },
    'seo-mobile': {
      title: 'Mobile Friendly',
      description: 'Make sure your pages are mobile friendly so users don’t have to pinch or zoom ' +
          'in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).',
    },
    'seo-content': {
      title: 'Content Best Practices',
      description: 'Format your HTML in a way that enables crawlers to better understand your app’s content.',
    },
    'seo-crawl': {
      title: 'Crawling and Indexing',
      description: 'To appear in search results, crawlers need access to your app.',
    },
    'manual-seo-checks': {
      title: 'Additional items to manually check',
      description: 'Run these additional validators on your site to check additional SEO best practices.',
    },
  },
  categories: {
    'performance': {
      name: 'Performance',
      description: 'These encapsulate your web app\'s current performance and opportunities to improve it.',
      audits: [
        {id: 'first-meaningful-paint', weight: 5, group: 'perf-metric'},
        {id: 'first-interactive', weight: 5, group: 'perf-metric'},
        {id: 'consistently-interactive', weight: 5, group: 'perf-metric'},
        {id: 'speed-index-metric', weight: 1, group: 'perf-metric'},
        {id: 'estimated-input-latency', weight: 1, group: 'perf-metric'},
        {id: 'link-blocking-first-paint', weight: 0, group: 'perf-hint'},
        {id: 'script-blocking-first-paint', weight: 0, group: 'perf-hint'},
        {id: 'uses-responsive-images', weight: 0, group: 'perf-hint'},
        {id: 'offscreen-images', weight: 0, group: 'perf-hint'},
        {id: 'unminified-css', weight: 0, group: 'perf-hint'},
        {id: 'unminified-javascript', weight: 0, group: 'perf-hint'},
        {id: 'unused-css-rules', weight: 0, group: 'perf-hint'},
        {id: 'uses-optimized-images', weight: 0, group: 'perf-hint'},
        {id: 'uses-webp-images', weight: 0, group: 'perf-hint'},
        {id: 'uses-request-compression', weight: 0, group: 'perf-hint'},
        {id: 'time-to-first-byte', weight: 0, group: 'perf-hint'},
        {id: 'redirects', weight: 0, group: 'perf-hint'},
        {id: 'uses-rel-preload', weight: 0, group: 'perf-hint'},
        {id: 'total-byte-weight', weight: 0, group: 'perf-info'},
        {id: 'uses-long-cache-ttl', weight: 0, group: 'perf-info'},
        {id: 'dom-size', weight: 0, group: 'perf-info'},
        {id: 'critical-request-chains', weight: 0, group: 'perf-info'},
        {id: 'network-requests', weight: 0},
        {id: 'user-timings', weight: 0, group: 'perf-info'},
        {id: 'bootup-time', weight: 0, group: 'perf-info'},
        {id: 'screenshot-thumbnails', weight: 0},
        {id: 'mainthread-work-breakdown', weight: 0, group: 'perf-info'},
        {id: 'font-display', weight: 0, group: 'perf-info'},
      ],
    },
    'pwa': {
      name: 'Progressive Web App',
      weight: 1,
      description: 'These checks validate the aspects of a Progressive Web App, as specified by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist).',
      audits: [
        {id: 'service-worker', weight: 1},
        {id: 'works-offline', weight: 1},
        {id: 'without-javascript', weight: 1},
        {id: 'is-on-https', weight: 1},
        {id: 'redirects-http', weight: 1},
        {id: 'load-fast-enough-for-pwa', weight: 1},
        {id: 'webapp-install-banner', weight: 1},
        {id: 'splash-screen', weight: 1},
        {id: 'themed-omnibox', weight: 1},
        {id: 'viewport', weight: 1},
        {id: 'content-width', weight: 1},
        {id: 'pwa-cross-browser', weight: 0, group: 'manual-pwa-checks'},
        {id: 'pwa-page-transitions', weight: 0, group: 'manual-pwa-checks'},
        {id: 'pwa-each-page-has-url', weight: 0, group: 'manual-pwa-checks'},
      ],
    },
    'accessibility': {
      name: 'Accessibility',
      description: 'These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.',
      audits: [
        {id: 'accesskeys', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'aria-allowed-attr', weight: 3, group: 'a11y-aria'},
        {id: 'aria-required-attr', weight: 2, group: 'a11y-aria'},
        {id: 'aria-required-children', weight: 5, group: 'a11y-aria'},
        {id: 'aria-required-parent', weight: 2, group: 'a11y-aria'},
        {id: 'aria-roles', weight: 3, group: 'a11y-aria'},
        {id: 'aria-valid-attr-value', weight: 2, group: 'a11y-aria'},
        {id: 'aria-valid-attr', weight: 5, group: 'a11y-aria'},
        {id: 'audio-caption', weight: 4, group: 'a11y-correct-attributes'},
        {id: 'button-name', weight: 10, group: 'a11y-element-names'},
        {id: 'bypass', weight: 10, group: 'a11y-describe-contents'},
        {id: 'color-contrast', weight: 6, group: 'a11y-color-contrast'},
        {id: 'definition-list', weight: 1, group: 'a11y-well-structured'},
        {id: 'dlitem', weight: 1, group: 'a11y-well-structured'},
        {id: 'document-title', weight: 2, group: 'a11y-describe-contents'},
        {id: 'duplicate-id', weight: 5, group: 'a11y-well-structured'},
        {id: 'frame-title', weight: 5, group: 'a11y-describe-contents'},
        {id: 'html-has-lang', weight: 4, group: 'a11y-language'},
        {id: 'html-lang-valid', weight: 1, group: 'a11y-language'},
        {id: 'image-alt', weight: 8, group: 'a11y-correct-attributes'},
        {id: 'input-image-alt', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'label', weight: 10, group: 'a11y-describe-contents'},
        {id: 'layout-table', weight: 1, group: 'a11y-describe-contents'},
        {id: 'link-name', weight: 9, group: 'a11y-element-names'},
        {id: 'list', weight: 5, group: 'a11y-well-structured'},
        {id: 'listitem', weight: 4, group: 'a11y-well-structured'},
        {id: 'meta-refresh', weight: 1, group: 'a11y-meta'},
        {id: 'meta-viewport', weight: 3, group: 'a11y-meta'},
        {id: 'object-alt', weight: 4, group: 'a11y-describe-contents'},
        {id: 'tabindex', weight: 4, group: 'a11y-correct-attributes'},
        {id: 'td-headers-attr', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'th-has-data-cells', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'valid-lang', weight: 1, group: 'a11y-language'},
        {id: 'video-caption', weight: 4, group: 'a11y-describe-contents'},
        {id: 'video-description', weight: 3, group: 'a11y-describe-contents'},
        {id: 'logical-tab-order', weight: 0, group: 'manual-a11y-checks'},
        {id: 'focusable-controls', weight: 0, group: 'manual-a11y-checks'},
        {id: 'managed-focus', weight: 0, group: 'manual-a11y-checks'},
        {id: 'focus-traps', weight: 0, group: 'manual-a11y-checks'},
        {id: 'custom-controls-labels', weight: 0, group: 'manual-a11y-checks'},
        {id: 'custom-controls-roles', weight: 0, group: 'manual-a11y-checks'},
        {id: 'visual-order-follows-dom', weight: 0, group: 'manual-a11y-checks'},
        {id: 'offscreen-content-hidden', weight: 0, group: 'manual-a11y-checks'},
        {id: 'heading-levels', weight: 0, group: 'manual-a11y-checks'},
        {id: 'use-landmarks', weight: 0, group: 'manual-a11y-checks'},
      ],
    },
    'best-practices': {
      name: 'Best Practices',
      description: 'We\'ve compiled some recommendations for modernizing your web app and avoiding performance pitfalls.',
      audits: [
        {id: 'appcache-manifest', weight: 1},
        {id: 'no-websql', weight: 1},
        {id: 'is-on-https', weight: 1},
        {id: 'uses-http2', weight: 1},
        {id: 'uses-passive-event-listeners', weight: 1},
        {id: 'no-mutation-events', weight: 1},
        {id: 'no-document-write', weight: 1},
        {id: 'external-anchors-use-rel-noopener', weight: 1},
        {id: 'geolocation-on-start', weight: 1},
        {id: 'no-vulnerable-libraries', weight: 1},
        {id: 'notification-on-start', weight: 1},
        {id: 'deprecations', weight: 1},
        {id: 'manifest-short-name-length', weight: 1},
        {id: 'password-inputs-can-be-pasted-into', weight: 1},
        {id: 'errors-in-console', weight: 1},
        {id: 'image-aspect-ratio', weight: 1},
      ],
    },
    'seo': {
      name: 'SEO',
      description: 'These checks ensure that your page is optimized for search engine results ranking. ' +
          'There are additional factors Lighthouse does not check that may affect your search ranking. ' +
          '[Learn more](https://support.google.com/webmasters/answer/35769).',
      audits: [
        {id: 'viewport', weight: 1, group: 'seo-mobile'},
        {id: 'document-title', weight: 1, group: 'seo-content'},
        {id: 'meta-description', weight: 1, group: 'seo-content'},
        {id: 'http-status-code', weight: 1, group: 'seo-crawl'},
        {id: 'link-text', weight: 1, group: 'seo-content'},
        {id: 'is-crawlable', weight: 1, group: 'seo-crawl'},
        {id: 'hreflang', weight: 1, group: 'seo-content'},
        {id: 'canonical', weight: 1, group: 'seo-content'},
        {id: 'font-size', weight: 1, group: 'seo-mobile'},
        {id: 'plugins', weight: 1, group: 'seo-content'},
        {id: 'mobile-friendly', weight: 0, group: 'manual-seo-checks'},
        {id: 'structured-data', weight: 0, group: 'manual-seo-checks'},
      ],
    },
  },
};