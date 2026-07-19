+(function() {
+  'use strict';
+  // Language Switcher
+  document.querySelectorAll('.lang-btn').forEach(function(btn) {
+    btn.addEventListener('click', function() {
+      var lang = this.getAttribute('data-lang');
+      document.cookie = 'bambonature_lang=' + lang + ';path=/;max-age=' + (365*24*60*60);
+      document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
+      this.classList.add('active');
+      location.reload();
+    });
+  });
+  // Scroll to Top
+  window.addEventListener('scroll', function() {
+    var btn = document.getElementById('scroll-top');
+    if (btn) {
+      if (window.scrollY > 400) { btn.classList.add('visible'); }
+      else { btn.classList.remove('visible'); }
+    }
+  });
+  document.getElementById('scroll-top').addEventListener('click', function() {
+    window.scrollTo({ top: 0, behavior: 'smooth' });
+  });
+  // Video Play
+  document.querySelectorAll('.video-overlay').forEach(function(overlay) {
+    overlay.addEventListener('click', function() {
+      var video = this.previousElementSibling;
+      if (video && video.tagName === 'VIDEO') {
+        video.play();
+        this.style.display = 'none';
+      }
+    });
+  });
+  // Scroll Animations
+  function checkAnimate() {
+    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
+      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
+        el.classList.add('animate-in');
+      }
+    });
+  }
+  window.addEventListener('scroll', checkAnimate);
+  checkAnimate();
+  // Smooth scroll for anchor links
+  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
+    anchor.addEventListener('click', function(e) {
+      var target = document.querySelector(this.getAttribute('href'));
+      if (target) {
+        e.preventDefault();
+        target.scrollIntoView({ behavior: 'smooth' });
+      }
+    });
+  });
+  // Close mobile menu on link click
+  document.querySelectorAll('#primary-menu a').forEach(function(link) {
+    link.addEventListener('click', function() {
+      document.getElementById('primary-menu').classList.remove('toggled');
+    });
+  });
+})();
