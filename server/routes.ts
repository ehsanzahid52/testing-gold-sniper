import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Supported languages for routing
const supportedLanguages = ['en', 'es', 'fr', 'de', 'ar', 'zh'];

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Language-specific route handling for SEO
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = 'https://goldsniper.replit.app';
    const pages = ['', '/signals-app', '/results', '/pricing', '/support', '/performance'];
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add URLs for each language and page
    supportedLanguages.forEach(lang => {
      pages.forEach(page => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/${lang}${page}</loc>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
      });
    });
    
    sitemap += '</urlset>';
    
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt with language-specific sitemaps
  app.get('/robots.txt', (req, res) => {
    const robotsTxt = `User-agent: *
Allow: /

# Language-specific sitemaps
Sitemap: https://goldsniper.replit.app/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
    
    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  const httpServer = createServer(app);

  return httpServer;
}
