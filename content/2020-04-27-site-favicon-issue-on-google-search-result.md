---
title: 'Site Favicon Issue on Google Search Result '
date: 2020-04-27T07:50:23.085Z
cover: /images/google-logo.png
category: Tech Hecks
tags:
  - how to make
  - web
---
Hello! Last day I faced the issue that really simple but annoying. I started developing new e-commerce website. When I search my website on Google Search, I couldn't see my favicon at the beginning of the site title like below:

![](/images/bbc18.png)

 When I check [Google Search Console Help Pages](https://support.google.com/webmasters/answer/9290858?hl=en) it just explain basicly. It says:

1. Add a <link> tag to the header of your home page with the following syntax: `<link rel="shortcut icon" href="/path/to/favicon.ico">`
2. "rel" attr can be any of the following strings:
   * "shortcut icon"
   * "icon"
   * "apple-touch-icon"
   * "apple-touch-icon-precomposed"
   * href
3. The URL of the favicon. Can be a relative path (/smile.ico) or absolute path (https://example.com/smile.ico), but must be in the same domain as the home page.
4. Google will look for and update your favicon whenever it crawls your home page. If you make changes to your favicon and want to inform Google about the changes, you can request indexing of your site's homepage. Updates can take a few days or longer to appear in search results.

I checked my site favicon and it is already done but still can't see on search result. I forgot last item of help page. My website favicon is still not crawled. I found a url that I can check on Stack Overflow.

You should change site name (www.example.com) with yours: <https://www.google.com/s2/favicons?domain=www.example.com>

You will see your site icon succesfully on this url if your site has favicon.

BB!
