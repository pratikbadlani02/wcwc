# Women's Center Website - Wireframes
## Visual Layout & Structure Guide

**Purpose:** Visual representation of page layouts and component placement  
**Version:** 1.0  
**Date:** December 2024  

---

## Table of Contents

1. [Desktop Wireframes](#desktop-wireframes)
   - [Home Page](#1-home-page-desktop)
   - [Get Help Page](#2-get-help-page-desktop)
   - [About Us Page](#3-about-us-page-desktop)
   - [Our Work Page](#4-our-work-page-desktop)
   - [Get Involved Page](#5-get-involved-page-desktop)
   - [Donate Page](#6-donate-page-desktop)

2. [Mobile Wireframes](#mobile-wireframes)
   - [Home Page Mobile](#1-home-page-mobile)
   - [Navigation Mobile](#2-mobile-navigation)

3. [Component Library](#component-library)

---

# DESKTOP WIREFRAMES

## 1. HOME PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  [LOGO] The Women's Center                      GET HELP  ABOUT  WORK  INVOLVED │
│  safety • stabilization • transformation                              DONATE  [f][i]│
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         HERO SECTION (white/light gray bg)                      │
│                                                                                 │
│                              The Women's Center                                 │
│                      (Cyan)    (Pink)      (Green)                             │
│                                                                                 │
│               safety • stabilization • transformation                           │
│                                                                                 │
│     "The Women's Center of Wake County uses evidence-based practices           │
│      to provide stability and housing for single women experiencing            │
│                        homelessness."                                           │
│                        (cyan italic text)                                       │
│                                                                                 │
│     ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │
│     │  GET HELP → │  │GET INVOLVED→│  │  DONATE  →  │                        │
│     └─────────────┘  └─────────────┘  └─────────────┘                        │
│                     (pink buttons with hover scale)                             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                    STATISTICS SECTION (white background)                        │
│                                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│   │              │  │              │  │              │  │              │   │
│   │   29,307     │  │    1,663     │  │     85%      │  │     24/7     │   │
│   │   (cyan)     │  │   (green)    │  │   (pink)     │  │   (cyan)     │   │
│   │              │  │              │  │              │  │              │   │
│   │ Meals Served │  │Women Served  │  │Success Rate  │  │Support Avail │   │
│   │              │  │              │  │              │  │              │   │
│   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                     (cards with shadow, hover scale)                            │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   SERVICES SECTION (light gray background)                      │
│                                                                                 │
│                        Our Services                                             │
│                                                                                 │
│        Comprehensive support to help women achieve stability                   │
│                                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│   │     🏠       │  │     👥       │  │     📈       │  │     ❤️       │   │
│   │  (pink bg)   │  │  (pink bg)   │  │  (pink bg)   │  │  (pink bg)   │   │
│   │              │  │              │  │              │  │              │   │
│   │  Emergency   │  │    Case      │  │ Life Skills  │  │Mental Health │   │
│   │   Shelter    │  │ Management   │  │  Training    │  │   Support    │   │
│   │              │  │              │  │              │  │              │   │
│   │ Safe, secure │  │ Personalized │  │ Educational  │  │ Access to    │   │
│   │ housing for  │  │ support plans│  │ programs for │  │ counseling   │   │
│   │ women in...  │  │ to help...   │  │ financial... │  │ and therapy..│   │
│   │              │  │              │  │              │  │              │   │
│   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                  (white cards, shadow, hover lift effect)                       │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  COMMUNITY GALLERY (white background)                           │
│                                                                                 │
│                         Our Community                                           │
│                                                                                 │
│              Making a difference in the lives of women                          │
│                         in Wake County                                          │
│                                                                                 │
│        ┌──────────────────────────────────────────────────────────┐           │
│     ◄  │  ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐  │  ►        │
│        │  │ Image1 │    │ Image2 │    │ Image3 │    │ Image4 │  │           │
│        │  │        │    │        │    │        │    │        │  │           │
│        │  │  4:3   │    │  4:3   │    │  4:3   │    │  4:3   │  │           │
│        │  │ ratio  │    │ ratio  │    │ ratio  │    │ ratio  │  │           │
│        │  │        │    │        │    │        │    │        │  │           │
│        │  └────────┘    └────────┘    └────────┘    └────────┘  │           │
│        └──────────────────────────────────────────────────────────┘           │
│                     (carousel with prev/next buttons)                           │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  FINAL CTA SECTION (pink gradient background)                   │
│                                                                                 │
│                  Ready to Make a Difference?                                    │
│                                                                                 │
│          Your support helps us provide critical services to women in need.     │
│           Whether you volunteer, donate, or spread the word, every             │
│                          action counts.                                         │
│                                                                                 │
│           ┌──────────────┐          ┌──────────────┐                          │
│           │Get Involved→ │          │ Donate Now❤️│                          │
│           └──────────────┘          └──────────────┘                          │
│              (green btn)               (pink btn)                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                    FOOTER (green gradient background)                           │
│                     ~~~~~~~~~~~~~~~~~~~~~~~~                                    │
│                    (wavy border on top)                                         │
│                                                                                 │
│               Sign Up for our eNewsletter                                       │
│                                                                                 │
│       ┌───────────────────────────────┐  ┌──────────┐                         │
│       │  Enter your email...          │  │Subscribe │                         │
│       └───────────────────────────────┘  └──────────┘                         │
│                                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Contact Us  │  │ Quick Links │  │  We Accept  │  │Donation Hrs │         │
│  │             │  │             │  │             │  │             │         │
│  │📍 2200 New  │  │ GET HELP    │  │• Clothing   │  │Mon-Fri      │         │
│  │  Bern Ave   │  │ ABOUT US    │  │• Hygiene    │  │10am-2pm     │         │
│  │             │  │ OUR WORK    │  │• Gift cards │  │             │         │
│  │☎️ 919-829   │  │GET INVOLVED │  │• Food items │  │ [f] [i]     │         │
│  │  -3711      │  │ DONATE NOW  │  │• Paper      │  │ (social)    │         │
│  │             │  │             │  │• Supplies   │  │             │         │
│  │✉️ info@     │  │             │  │             │  │             │         │
│  │  wcwc.org   │  │             │  │             │  │             │         │
│  │             │  │             │  │             │  │             │         │
│  │🕐 8:15 AM-  │  │             │  │             │  │             │         │
│  │  2:00 PM    │  │             │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                                                 │
│  Donations of clothing, hygiene products, gift cards, food, and paper          │
│          products accepted Monday - Friday, 10:00 AM - 2:00 PM                 │
│                                                                                 │
│       © 2025 Women's Center. All Rights Reserved | 501(c)(3): 58-1316004      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. GET HELP PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            HEADER (same as home)                                │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  HERO SECTION (cyan/blue gradient background)                   │
│                                                                                 │
│                        We're Here to Help                                       │
│                                                                                 │
│         If you or someone you know is experiencing homelessness,                │
│          we're here to provide support, resources, and a path forward.          │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   EMERGENCY SERVICES (white background)                         │
│                                                                                 │
│                         Immediate Support                                       │
│                     Multiple ways to reach us for help                          │
│                                                                                 │
│     ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│     │                  │  │                  │  │                  │         │
│     │       ☎️         │  │       🏠         │  │       ✉️         │         │
│     │   (cyan bg)      │  │   (cyan bg)      │  │   (cyan bg)      │         │
│     │                  │  │                  │  │                  │         │
│     │ Crisis Hotline   │  │ Walk-In Services │  │  Email Support   │         │
│     │                  │  │                  │  │                  │         │
│     │ Immediate support│  │ Visit us during  │  │ Send us inquiry  │         │
│     │ available 24/7...│  │ business hours...│  │ and we'll respond│         │
│     │                  │  │                  │  │                  │         │
│     │  919-829-3711    │  │ 8:15 AM - 2:00 PM│  │  info@wcwc.org   │         │
│     │   (cyan bold)    │  │  Monday - Friday │  │   (cyan bold)    │         │
│     │                  │  │                  │  │                  │         │
│     └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│              (cards with border, hover effect)                                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│               ELIGIBILITY SECTION (light gray background)                       │
│                                                                                 │
│                      Eligibility Requirements                                   │
│               Who we serve and how to qualify for our programs                  │
│                                                                                 │
│               ┌────────────────────────────────────────────┐                   │
│               │                                            │                   │
│               │  ⚪ Single women (18+ years)               │                   │
│               │     (green circle, hover fills)            │                   │
│               │                                            │                   │
│               │  ⚪ Experiencing homelessness or at risk   │                   │
│               │                                            │                   │
│               │  ⚪ Wake County resident or willing to     │                   │
│               │     relocate                               │                   │
│               │                                            │                   │
│               │  ⚪ Committed to working toward            │                   │
│               │     independence                           │                   │
│               │                                            │                   │
│               │  ⚪ Able to participate in program         │                   │
│               │     requirements                           │                   │
│               │                                            │                   │
│               │  ┌────────────────────────────────────┐   │                   │
│               │  │ ⚠️ Note: We work with each          │   │                   │
│               │  │ individual on a case-by-case basis. │   │                   │
│               │  │ If you're not sure, please contact  │   │                   │
│               │  │ us to discuss your situation.       │   │                   │
│               │  └────────────────────────────────────┘   │                   │
│               │           (cyan info box)                  │                   │
│               │                                            │                   │
│               └────────────────────────────────────────────┘                   │
│                         (white card with shadow)                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                 ADMISSION PROCESS (white background)                            │
│                                                                                 │
│                        How to Get Started                                       │
│           Our admission process is designed to be simple and supportive         │
│                                                                                 │
│   ┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌────────│
│   │      1       │  ──► │      2       │  ──► │      3       │  ──► │    4   │
│   │   (pink)     │      │   (pink)     │      │   (pink)     │      │ (pink) │
│   │              │      │              │      │              │      │        │
│   │   Initial    │      │  Assessment  │      │  Placement   │      │Ongoing │
│   │   Contact    │      │              │      │              │      │Support │
│   │              │      │              │      │              │      │        │
│   │ Call or visit│      │ Meet with our│      │ If eligible, │      │ Work   │
│   │ us to begin  │      │ case manager │      │ immediate    │      │ with   │
│   │ the intake   │      │ for needs    │      │ placement in │      │dedicated│
│   │ process      │      │ evaluation   │      │ our shelter  │      │case mgr│
│   │              │      │              │      │              │      │        │
│   └──────────────┘      └──────────────┘      └──────────────┘      └────────│
│                     (cards with numbered circles, arrows)                       │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   SERVICES OVERVIEW (gray background)                           │
│                                                                                 │
│                        What We Provide                                          │
│               Comprehensive support services to help you succeed                │
│                                                                                 │
│          ┌────────────────────┐        ┌────────────────────┐                 │
│          │  ❤️ Emergency      │        │  ❤️ Case           │                 │
│          │     Shelter        │        │     Management     │                 │
│          │                    │        │                    │                 │
│          │  Safe, secure...   │        │  Personalized...   │                 │
│          └────────────────────┘        └────────────────────┘                 │
│                                                                                 │
│          ┌────────────────────┐        ┌────────────────────┐                 │
│          │  ❤️ Life Skills    │        │  ❤️ Mental Health  │                 │
│          │     Training       │        │     Support        │                 │
│          │                    │        │                    │                 │
│          │  Educational...    │        │  Access to...      │                 │
│          └────────────────────┘        └────────────────────┘                 │
│                         (cards grid layout)                                     │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  CONTACT CTA (cyan to blue gradient)                            │
│                                                                                 │
│              Ready to Take the First Step?                                      │
│                                                                                 │
│           Our compassionate team is standing by to help you today.              │
│                                                                                 │
│              ┌─────────────┐        ┌─────────────┐                           │
│              │☎️ Call Now   │        │✉️ Email Us  │                           │
│              └─────────────┘        └─────────────┘                           │
│               (white btn)            (pink btn)                                 │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         FOOTER (same as home)                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. ABOUT US PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            HEADER (same as home)                                │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  HERO SECTION (pink/purple gradient background)                 │
│                                                                                 │
│                  About The Women's Center                                       │
│                                                                                 │
│          The Women's Center of Wake County uses evidence-based practices        │
│           to provide stability and housing for single women experiencing        │
│                            homelessness.                                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  MISSION & VISION (white background)                            │
│                                                                                 │
│      ┌──────────────────────────────┐    ┌──────────────────────────────┐     │
│      │                              │    │                              │     │
│      │     🎯  Our Mission          │    │     👁️  Our Vision           │     │
│      │     (cyan icon)              │    │     (green icon)             │     │
│      │                              │    │                              │     │
│      │  The Women's Center of Wake  │    │  A community where all women │     │
│      │  County uses evidence-based  │    │  and their families thrive   │     │
│      │  practices to provide        │    │  in safe and stable homes,   │     │
│      │  stability and housing for   │    │  with access to resources    │     │
│      │  single women experiencing   │    │  and opportunities for       │     │
│      │  homelessness.               │    │  lasting transformation.     │     │
│      │                              │    │                              │     │
│      └──────────────────────────────┘    └──────────────────────────────┘     │
│           (cyan gradient bg)                  (green gradient bg)               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                     CORE VALUES (white background)                              │
│                                                                                 │
│                           Our Core Values                                       │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │    ❤️    │    │    💪    │    │    🎯    │    │    📈    │              │
│   │  (pink)  │    │  (pink)  │    │  (pink)  │    │  (pink)  │              │
│   │          │    │          │    │          │    │          │              │
│   │Compassion│    │Empower   │    │Evidence  │    │Transform │              │
│   │          │    │ment      │    │-Based    │    │ation     │              │
│   │          │    │          │    │          │    │          │              │
│   │We treat  │    │We believe│    │Our       │    │We support│              │
│   │every woman│    │in the    │    │programs  │    │lasting   │              │
│   │with      │    │strength..│    │are...    │    │change... │              │
│   │dignity...│    │          │    │          │    │          │              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                  (white cards, hover lift effect)                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   STATISTICS (light gray background)                            │
│                                                                                 │
│                           Our Impact                                            │
│                Making a measurable difference in our community                  │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │ 29,307   │    │  1,663   │    │   85%    │    │   24/7   │              │
│   │ (cyan)   │    │ (green)  │    │  (pink)  │    │  (cyan)  │              │
│   │Meals     │    │Women     │    │Success   │    │Support   │              │
│   │Served    │    │Served    │    │Rate      │    │Available │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                    TIMELINE (white background)                                  │
│                                                                                 │
│                            Our Journey                                          │
│                  Decades of service to women in Wake County                     │
│                                                                                 │
│                              │  (gradient line)                                 │
│        ┌─────────────────┐  │                                                  │
│        │     1978        │  ●                                                  │
│        │   Foundation    │  │                                                  │
│        │                 │  │                                                  │
│        │ Women's Center  │  │                                                  │
│        │ of Wake County  │  │                                                  │
│        │ was founded...  │  │                                                  │
│        └─────────────────┘  │                                                  │
│                              │                                                  │
│                              │  ┌─────────────────┐                            │
│                              ●  │      1990       │                            │
│                              │  │    Expansion    │                            │
│                              │  │                 │                            │
│                              │  │ Expanded        │                            │
│                              │  │ capacity and... │                            │
│                              │  └─────────────────┘                            │
│                              │                                                  │
│        ┌─────────────────┐  │                                                  │
│        │     2005        │  ●                                                  │
│        │  New Facility   │  │                                                  │
│        │     ...         │  │                                                  │
│        └─────────────────┘  │                                                  │
│                              │                                                  │
│         (timeline continues with 2020 and 2025)                                 │
│                 (alternating left/right cards)                                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                 LEADERSHIP TEAM (pink gradient background)                      │
│                                                                                 │
│                      Our Leadership Team                                        │
│             Dedicated professionals committed to our mission                    │
│                                                                                 │
│      ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                   │
│      │             │    │             │    │             │                   │
│      │     🏆      │    │     🏆      │    │     🏆      │                   │
│      │  (cyan bg)  │    │  (cyan bg)  │    │  (cyan bg)  │                   │
│      │             │    │             │    │             │                   │
│      │ Dr. Emily   │    │  Michelle   │    │   Robert    │                   │
│      │ Richardson  │    │    Chen     │    │  Martinez   │                   │
│      │             │    │             │    │             │                   │
│      │ Executive   │    │  Program    │    │Development  │                   │
│      │ Director    │    │  Director   │    │  Director   │                   │
│      │  (pink)     │    │   (pink)    │    │   (pink)    │                   │
│      │             │    │             │    │             │                   │
│      │ Leading the │    │ Oversees all│    │  Manages    │                   │
│      │ Women's     │    │ shelter     │    │ fundraising │                   │
│      │ Center with │    │ programs... │    │ initiatives.│                   │
│      │ 15+ years...│    │             │    │             │                   │
│      │             │    │             │    │             │                   │
│      └─────────────┘    └─────────────┘    └─────────────┘                   │
│                     (white cards, centered text)                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         FOOTER (same as home)                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. OUR WORK PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            HEADER (same as home)                                │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  HERO SECTION (green/teal gradient background)                  │
│                                                                                 │
│                    Our Programs & Services                                      │
│                                                                                 │
│         Comprehensive, evidence-based programs designed to provide              │
│         stability, support, and lasting transformation for women                │
│                   experiencing homelessness.                                    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   HOUSING PROGRAMS (white background)                           │
│                                                                                 │
│                         Housing Programs                                        │
│                   Multiple pathways to stable housing                           │
│                                                                                 │
│  ┌────────────────────────────────┐    ┌────────────────────────────────┐     │
│  │                                │    │                                │     │
│  │  🏠 Emergency Shelter Program  │    │  👥 Transitional Housing       │     │
│  │     (green circle)             │    │     (green circle)             │     │
│  │                                │    │                                │     │
│  │  Immediate, safe housing for   │    │  Bridge to permanent housing   │     │
│  │  women experiencing            │    │  with intensive case           │     │
│  │  homelessness with 24/7 access │    │  management and life skills... │     │
│  │  to support services.          │    │                                │     │
│  │                                │    │                                │     │
│  │  ✓ Safe, secure accommodations │    │  ✓ Up to 24 months of support  │     │
│  │  ✓ Three meals per day         │    │  ✓ Individual apartment units  │     │
│  │  ✓ Personal storage space      │    │  ✓ Continued case management   │     │
│  │  ✓ Access to facilities        │    │  ✓ Job placement assistance    │     │
│  │  ✓ Crisis intervention         │    │  ✓ Financial literacy training │     │
│  │                                │    │                                │     │
│  └────────────────────────────────┘    └────────────────────────────────┘     │
│                                                                                 │
│  ┌────────────────────────────────┐    ┌────────────────────────────────┐     │
│  │                                │    │                                │     │
│  │  📈 Rapid Rehousing            │    │  🏆 Aftercare Services         │     │
│  │     (green circle)             │    │     (green circle)             │     │
│  │                                │    │                                │     │
│  │  Quick placement into          │    │  Continued support for program │     │
│  │  permanent housing with        │    │  graduates to ensure lasting   │     │
│  │  short-term rental assistance. │    │  stability and success.        │     │
│  │                                │    │                                │     │
│  │  ✓ Housing location assistance │    │  ✓ Follow-up case management   │     │
│  │  ✓ Rental and utility support  │    │  ✓ Crisis prevention           │     │
│  │  ✓ Move-in cost support        │    │  ✓ Community connections       │     │
│  │  ✓ Ongoing case management     │    │  ✓ Alumni support groups       │     │
│  │  ✓ Community resource links    │    │  ✓ Resource referrals          │     │
│  │                                │    │                                │     │
│  └────────────────────────────────┘    └────────────────────────────────┘     │
│                      (large cards with checklists)                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                 WRAPAROUND SERVICES (light gray background)                     │
│                                                                                 │
│                       Wraparound Services                                       │
│              Comprehensive support for holistic transformation                  │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │    ❤️    │    │    ❤️    │    │    ❤️    │    │    ❤️    │              │
│   │  (pink)  │    │  (pink)  │    │  (pink)  │    │  (pink)  │              │
│   │          │    │          │    │          │    │          │              │
│   │Emergency │    │   Case   │    │Life Skills│    │Mental    │              │
│   │ Shelter  │    │Management│    │ Training │    │Health    │              │
│   │          │    │          │    │          │    │Support   │              │
│   │Safe,     │    │Personal  │    │Educational│    │Access to │              │
│   │secure... │    │support...│    │programs...│    │counseling│              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   PROVEN OUTCOMES (white background)                            │
│                                                                                 │
│                         Proven Outcomes                                         │
│                Measurable success in transforming lives                         │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │          │    │          │    │          │    │          │              │
│   │   85%    │    │   92%    │    │   78%    │    │   95%    │              │
│   │  (cyan)  │    │ (green)  │    │  (pink)  │    │  (cyan)  │              │
│   │          │    │          │    │          │    │          │              │
│   │Successfully│  │Maintain  │    │Gain      │    │Report    │              │
│   │exit to    │   │housing   │    │employment│    │improved  │              │
│   │permanent  │   │after 6   │    │during    │    │mental    │              │
│   │housing    │   │months    │    │program   │    │health    │              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                      (large gradient percentages)                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                 SUCCESS STORIES (cyan gradient background)                      │
│                                                                                 │
│                         Success Stories                                         │
│                    Real women, real transformation                              │
│                                                                                 │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                   │
│   │      🎯      │    │      🎯      │    │      🎯      │                   │
│   │   (cyan bg)  │    │   (cyan bg)  │    │   (cyan bg)  │                   │
│   │              │    │              │    │              │                   │
│   │    Sarah     │    │    Maria     │    │   Jennifer   │                   │
│   │              │    │              │    │              │                   │
│   │ "The Women's │    │ "I never     │    │ "This place  │                   │
│   │  Center gave │    │  thought I'd │    │  saved my    │                   │
│   │  me hope when│    │  be able to  │    │  life. The   │                   │
│   │  I had none. │    │  support     │    │  support,    │                   │
│   │  They didn't │    │  myself      │    │  kindness,   │                   │
│   │  just give...│    │  again..."   │    │  resources...│                   │
│   │              │    │              │    │              │                   │
│   │ ────────────│    │ ────────────│    │ ────────────│                   │
│   │              │    │              │    │              │                   │
│   │ Now employed │    │ Completed job│    │ Reunited with│                   │
│   │ and in       │    │ training     │    │ family and   │                   │
│   │ permanent    │    │ program      │    │ stable       │                   │
│   │ housing      │    │              │    │              │                   │
│   │  (green)     │    │   (green)    │    │   (green)    │                   │
│   │              │    │              │    │              │                   │
│   └──────────────┘    └──────────────┘    └──────────────┘                   │
│                  (white cards with quotes and outcomes)                         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                    OUR APPROACH (white background)                              │
│                                                                                 │
│                           Our Approach                                          │
│                                                                                 │
│  ┌────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                        │   │
│  │  ❤️ Trauma-Informed Care                                              │   │
│  │                                                                        │   │
│  │  We recognize the impact of trauma and create a safe, supportive      │   │
│  │  environment that promotes healing and recovery. Our staff is trained │   │
│  │  in trauma-informed practices to ensure respectful, compassionate...  │   │
│  │                                                                        │   │
│  │  ────────────────────────────────────────────────────────────────     │   │
│  │                                                                        │   │
│  │  🏠 Housing First Philosophy                                          │   │
│  │                                                                        │   │
│  │  We believe stable housing is the foundation for addressing other     │   │
│  │  challenges. Our Housing First approach prioritizes rapid placement...│   │
│  │                                                                        │   │
│  │  ────────────────────────────────────────────────────────────────     │   │
│  │                                                                        │   │
│  │  🎯 Individualized Support                                            │   │
│  │                                                                        │   │
│  │  Every woman's journey is unique. We develop personalized plans that  │   │
│  │  address individual needs, goals, and circumstances, empowering...    │   │
│  │                                                                        │   │
│  └────────────────────────────────────────────────────────────────────────┘   │
│                          (single large card)                                    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         FOOTER (same as home)                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. GET INVOLVED PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            HEADER (same as home)                                │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                  HERO SECTION (green/teal gradient background)                  │
│                                                                                 │
│                          Get Involved                                           │
│                                                                                 │
│              Join us in our mission to end homelessness for women               │
│                 in Wake County. Your support transforms lives.                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   WAYS TO HELP (white background)                               │
│                                                                                 │
│                      Ways to Make an Impact                                     │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │    👥    │    │    🎁    │    │    📅    │    │    🤝    │              │
│   │  (cyan)  │    │  (pink)  │    │ (green)  │    │  (cyan)  │              │
│   │          │    │          │    │          │    │          │              │
│   │Volunteer │    │ Donate   │    │Host an   │    │Corporate │              │
│   │          │    │  Items   │    │ Event    │    │Partnership│             │
│   │          │    │          │    │          │    │          │              │
│   │Share your│    │Contribute│    │Organize  │    │Partner   │              │
│   │time and  │    │essential │    │fundraisers│   │with us   │              │
│   │skills to │    │supplies, │    │or        │    │through   │              │
│   │directly  │    │clothing, │    │awareness │    │employee  │              │
│   │support...│    │and...    │    │events... │    │engagement│              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                  (cards with colored icon circles)                              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│              VOLUNTEER OPPORTUNITIES (light gray background)                    │
│                                                                                 │
│                     Volunteer Opportunities                                     │
│             Find the perfect way to share your time and talents                 │
│                                                                                 │
│  ┌──────────────────────────┐        ┌──────────────────────────┐             │
│  │                          │        │                          │             │
│  │  Meal Preparation        │        │  Mentorship Program      │             │
│  │                          │        │                          │             │
│  │  Help prepare and serve  │        │  Provide one-on-one      │             │
│  │  nutritious meals for    │        │  guidance and support to │             │
│  │  shelter residents.      │        │  women transitioning to  │             │
│  │                          │        │  independence.           │             │
│  │  📅 Weekly shifts        │        │  📅 3-6 month commitment │             │
│  │     available            │        │                          │             │
│  │                          │        │                          │             │
│  └──────────────────────────┘        └──────────────────────────┘             │
│                                                                                 │
│  ┌──────────────────────────┐        ┌──────────────────────────┐             │
│  │                          │        │                          │             │
│  │  Donation Drives         │        │  Administrative Support  │             │
│  │                          │        │                          │             │
│  │  Organize and coordinate │        │  Assist with office      │             │
│  │  collection drives for   │        │  tasks, data entry, and  │             │
│  │  essential items.        │        │  organizational needs.   │             │
│  │                          │        │                          │             │
│  │  📅 Flexible scheduling  │        │  📅 Part-time            │             │
│  │                          │        │     opportunities        │             │
│  │                          │        │                          │             │
│  └──────────────────────────┘        └──────────────────────────┘             │
│                         (white cards grid)                                      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│              VOLUNTEER BENEFITS (pink gradient background)                      │
│                                                                                 │
│                   Why Volunteer With Us?                                        │
│                                                                                 │
│               ┌────────────────┐        ┌────────────────┐                    │
│               │                │        │                │                    │
│               │ ✓ Make a       │        │ ✓ Gain valuable│                    │
│               │   tangible     │        │   experience in│                    │
│               │   difference   │        │   social...    │                    │
│               │                │        │                │                    │
│               │ ✓ Connect with │        │ ✓ Flexible     │                    │
│               │   like-minded  │        │   scheduling to│                    │
│               │   community... │        │   fit your...  │                    │
│               │                │        │                │                    │
│               │ ✓ Comprehensive│        │ ✓ Be part of a │                    │
│               │   training and │        │   compassionate│                    │
│               │   ongoing...   │        │   dedicated... │                    │
│               │                │        │                │                    │
│               └────────────────┘        └────────────────┘                    │
│                      (2-column checklist layout)                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│              VOLUNTEER APPLICATION FORM (white background)                      │
│                                                                                 │
│                        Apply to Volunteer                                       │
│              Fill out the form below and we'll be in touch soon                 │
│                                                                                 │
│               ┌────────────────────────────────────────────┐                   │
│               │                                            │                   │
│               │  Full Name *                               │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │                                      │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │                                            │                   │
│               │  Email Address *        Phone Number *     │                   │
│               │  ┌──────────────────┐  ┌──────────────┐  │                   │
│               │  │                  │  │              │  │                   │
│               │  └──────────────────┘  └──────────────┘  │                   │
│               │                                            │                   │
│               │  Area of Interest *                        │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │ Select an option              ▼     │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │  (dropdown: Meal Prep, Mentorship, etc.)   │                   │
│               │                                            │                   │
│               │  Tell Us About Yourself                    │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │                                      │ │                   │
│               │  │ Share your interests, skills, and    │ │                   │
│               │  │ why you'd like to volunteer...       │ │                   │
│               │  │                                      │ │                   │
│               │  │                                      │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │                                            │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │      Submit Application              │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │         (green button, full width)         │                   │
│               │                                            │                   │
│               └────────────────────────────────────────────┘                   │
│                        (single card with form)                                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                CONTACT CTA (cyan gradient background)                           │
│                                                                                 │
│               Questions About Volunteering?                                     │
│                                                                                 │
│             Our volunteer coordinator is here to help                           │
│                                                                                 │
│           ┌──────────────┐          ┌──────────────┐                          │
│           │919-829-3711  │          │info@wcwc.org │                          │
│           └──────────────┘          └──────────────┘                          │
│            (cyan button)              (pink button)                             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         FOOTER (same as home)                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. DONATE PAGE (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            HEADER (same as home)                                │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                HERO SECTION (pink/purple gradient background)                   │
│                                                                                 │
│                   Your Gift Transforms Lives                                    │
│                                                                                 │
│           Every donation directly supports women experiencing homelessness,     │
│            providing them with shelter, support, and hope for a better future.  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                   GIVING LEVELS (white background)                              │
│                                                                                 │
│                           Giving Levels                                         │
│                  Choose an amount that's meaningful to you                      │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │          │    │          │    │          │    │          │              │
│   │    💵    │    │   💵💵   │    │ 💵💵💵   │    │💵💵💵💵│              │
│   │  (pink)  │    │  (pink)  │    │  (pink)  │    │  (pink)  │              │
│   │          │    │          │    │          │    │          │              │
│   │   $50    │    │   $100   │    │   $250   │    │   $500   │              │
│   │  (large) │    │  (large) │    │  (large) │    │  (large) │              │
│   │          │    │          │    │          │    │          │              │
│   │Supporter │    │Advocate  │    │Champion  │    │Benefactor│              │
│   │          │    │          │    │          │    │          │              │
│   │Provides  │    │Covers    │    │Funds case│    │Provides  │              │
│   │meals for │    │basic     │    │management│    │comprehen-│              │
│   │one woman │    │supplies  │    │services  │    │sive      │              │
│   │for a week│    │and       │    │for one   │    │support   │              │
│   │          │    │toiletries│    │woman     │    │for one   │              │
│   │          │    │for one   │    │          │    │week      │              │
│   │          │    │month     │    │          │    │          │              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│              (cards with hover border effect, clickable)                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                DONATION FORM (light gray background)                            │
│                                                                                 │
│                       Make Your Donation                                        │
│                                                                                 │
│               ┌────────────────────────────────────────────┐                   │
│               │                                            │                   │
│               │  Donation Type                             │                   │
│               │  ┌───────────┐         ┌───────────┐      │                   │
│               │  │ One-Time  │         │  Monthly  │      │                   │
│               │  └───────────┘         └───────────┘      │                   │
│               │   (pink active)        (gray inactive)     │                   │
│               │                                            │                   │
│               │  Select Amount                             │                   │
│               │  ┌────┐  ┌────┐  ┌────┐  ┌────┐          │                   │
│               │  │$25 │  │$50 │  │$100│  │$250│          │                   │
│               │  └────┘  └────┘  └────┘  └────┘          │                   │
│               │   (gray)  (gray) (green) (gray)            │                   │
│               │                  (selected)                 │                   │
│               │                                            │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │ Or enter custom amount               │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │                                            │                   │
│               │  ──────────────────────────────────────    │                   │
│               │                                            │                   │
│               │  Your Information                          │                   │
│               │                                            │                   │
│               │  Full Name *                               │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │                                      │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │                                            │                   │
│               │  Email Address *        Phone Number       │                   │
│               │  ┌──────────────────┐  ┌──────────────┐  │                   │
│               │  │                  │  │              │  │                   │
│               │  └──────────────────┘  └──────────────┘  │                   │
│               │                                            │                   │
│               │  ┌──────────────────────────────────────┐ │                   │
│               │  │  ❤️  Complete Donation               │ │                   │
│               │  └──────────────────────────────────────┘ │                   │
│               │         (pink button, full width)          │                   │
│               │                                            │                   │
│               │  Your donation is tax-deductible.          │                   │
│               │  Tax ID: 58-1316004                        │                   │
│               │  (small gray text)                         │                   │
│               │                                            │                   │
│               └────────────────────────────────────────────┘                   │
│                        (single card with form)                                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                FUND ALLOCATION (white background)                               │
│                                                                                 │
│                    How Your Donation Helps                                      │
│            Transparent allocation of your generous contributions                │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │    💼    │    │    🎁    │    │    ✅    │    │    💰    │              │
│   │  (cyan)  │    │  (cyan)  │    │  (cyan)  │    │  (cyan)  │              │
│   │          │    │          │    │          │    │          │              │
│   │   40%    │    │   30%    │    │   25%    │    │    5%    │              │
│   │ (large)  │    │ (large)  │    │ (large)  │    │ (large)  │              │
│   │          │    │          │    │          │    │          │              │
│   │Emergency │    │   Case   │    │ Housing  │    │Operations│              │
│   │ Services │    │Management│    │ Programs │    │          │              │
│   │          │    │          │    │          │    │          │              │
│   │Immediate │    │Individual│    │Transition│    │Facilities│              │
│   │shelter,  │    │support   │    │and       │    │admin, and│              │
│   │meals, and│    │and       │    │permanent │    │program   │              │
│   │crisis... │    │resources │    │housing...│    │develop...│              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                   (cards with percentages)                                      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│              OTHER WAYS TO GIVE (cyan gradient background)                      │
│                                                                                 │
│                      Other Ways to Give                                         │
│                                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │    ❤️    │    │    🎁    │    │    ✅    │    │    💵    │              │
│   │  (pink)  │    │  (pink)  │    │  (pink)  │    │  (pink)  │              │
│   │          │    │          │    │          │    │          │              │
│   │ Monthly  │    │  Legacy  │    │Corporate │    │  Stock   │              │
│   │  Giving  │    │  Giving  │    │ Matching │    │Donations │              │
│   │          │    │          │    │          │    │          │              │
│   │Become a  │    │Include us│    │Double    │    │Donate    │              │
│   │sustaining│    │in your   │    │your      │    │appreciated│             │
│   │donor with│    │estate    │    │impact... │    │securities│              │
│   │automatic │    │planning  │    │          │    │for tax.. │              │
│   │monthly...│    │to...     │    │          │    │          │              │
│   │          │    │          │    │          │    │          │              │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│                         (white cards)                                           │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                IN-KIND DONATIONS (white background)                             │
│                                                                                 │
│                       In-Kind Donations                                         │
│              We gratefully accept donations of essential items                  │
│                                                                                 │
│               ┌────────────────────────────────────────────┐                   │
│               │                                            │                   │
│               │  ✓ New and gently used clothing            │                   │
│               │  ✓ Hygiene products                        │                   │
│               │  ✓ Gift cards                              │                   │
│               │  ✓ Non-perishable food items               │                   │
│               │  ✓ Paper products                          │                   │
│               │  ✓ Cleaning supplies                       │                   │
│               │                                            │                   │
│               │  ┌────────────────────────────────────┐   │                   │
│               │  │ 🎁 Drop-Off Information             │   │                   │
│               │  │                                     │   │                   │
│               │  │ Hours: Monday - Friday              │   │                   │
│               │  │        10:00 AM - 2:00 PM           │   │                   │
│               │  │                                     │   │                   │
│               │  │ Location: 2200 New Bern Ave.       │   │                   │
│               │  │           Raleigh, NC 27610        │   │                   │
│               │  └────────────────────────────────────┘   │                   │
│               │         (green gradient box)               │                   │
│               │                                            │                   │
│               └────────────────────────────────────────────┘                   │
│                        (single large card)                                      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                CONTACT CTA (pink gradient background)                           │
│                                                                                 │
│                    Questions About Giving?                                      │
│                                                                                 │
│          Our development team is happy to discuss your philanthropic goals      │
│                                                                                 │
│           ┌──────────────┐          ┌──────────────┐                          │
│           │  Call Us     │          │  Email Us    │                          │
│           └──────────────┘          └──────────────┘                          │
│            (white button)             (cyan button)                             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
│                                                                                 │
│                         FOOTER (same as home)                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

# MOBILE WIREFRAMES

## 1. HOME PAGE (Mobile)

```
┌─────────────────────┐
│                     │
│  [LOGO]             │
│  The Women's Center │
│  safety • stabil... │
│                  ☰  │
│                     │
└─────────────────────┘
│                     │
│   HERO SECTION      │
│                     │
│    The Women's      │
│       Center        │
│   (multi-color)     │
│                     │
│  safety •           │
│  stabilization •    │
│  transformation     │
│                     │
│  "The Women's       │
│   Center of Wake    │
│   County uses..."   │
│   (cyan italic)     │
│                     │
│ ┌─────────────────┐ │
│ │   GET HELP  →   │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ GET INVOLVED → │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │   DONATE  →     │ │
│ └─────────────────┘ │
│  (stacked buttons)  │
│                     │
└─────────────────────┘
│                     │
│  STATISTICS (2x2)   │
│                     │
│ ┌────────┐┌────────┐│
│ │29,307  ││ 1,663  ││
│ │(cyan)  ││(green) ││
│ │Meals   ││Women   ││
│ │Served  ││Served  ││
│ └────────┘└────────┘│
│ ┌────────┐┌────────┐│
│ │  85%   ││ 24/7   ││
│ │ (pink) ││(cyan)  ││
│ │Success ││Support ││
│ │Rate    ││Avail   ││
│ └────────┘└────────┘│
│                     │
└─────────────────────┘
│                     │
│   SERVICES (1 col)  │
│                     │
│ ┌─────────────────┐ │
│ │      🏠         │ │
│ │   (pink bg)     │ │
│ │                 │ │
│ │   Emergency     │ │
│ │    Shelter      │ │
│ │                 │ │
│ │ Safe, secure... │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │      👥         │ │
│ │   (pink bg)     │ │
│ │                 │ │
│ │      Case       │ │
│ │   Management    │ │
│ │                 │ │
│ │ Personalized... │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │      📈         │ │
│ │   Life Skills   │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │      ❤️         │ │
│ │  Mental Health  │ │
│ └─────────────────┘ │
│                     │
└─────────────────────┘
│                     │
│   GALLERY           │
│                     │
│ ┌─────────────────┐ │
│◄│    [Image]      │►│
│ │     4:3         │ │
│ └─────────────────┘ │
│   (swipe carousel)  │
│                     │
└─────────────────────┘
│                     │
│   FINAL CTA         │
│  (pink gradient)    │
│                     │
│  Ready to Make a    │
│   Difference?       │
│                     │
│  Your support...    │
│                     │
│ ┌─────────────────┐ │
│ │ Get Involved →  │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Donate Now ❤️   │ │
│ └─────────────────┘ │
│                     │
└─────────────────────┘
│                     │
│   FOOTER (green)    │
│   ~~~~~~~~~~~~      │
│                     │
│  Sign Up for our    │
│   eNewsletter       │
│                     │
│ ┌───────────────┐   │
│ │ Enter email.. │   │
│ └───────────────┘   │
│ ┌───────────────┐   │
│ │  Subscribe    │   │
│ └───────────────┘   │
│                     │
│  Contact Us         │
│  📍 2200 New Bern   │
│  ☎️ 919-829-3711    │
│  ✉️ info@wcwc.org   │
│  🕐 8:15 AM - 2 PM  │
│                     │
│  Quick Links        │
│  • GET HELP         │
│  • ABOUT US         │
│  • OUR WORK         │
│  • GET INVOLVED     │
│  • DONATE NOW       │
│                     │
│  We Accept          │
│  • Clothing         │
│  • Hygiene          │
│  • Gift cards       │
│  ...more            │
│                     │
│  Donation Hours     │
│  Mon-Fri 10am-2pm   │
│  [f] [i]            │
│                     │
│  © 2025 Women's     │
│  Center. All Rights │
│  Reserved           │
│  501(c)(3):         │
│  58-1316004         │
│                     │
└─────────────────────┘
```

---

## 2. MOBILE NAVIGATION

```
CLOSED STATE:
┌─────────────────────┐
│                     │
│  [LOGO]             │
│  The Women's Center │
│                  ☰  │
│                     │
└─────────────────────┘


OPEN STATE:
┌─────────────────────┐
│                     │
│  [LOGO]             │
│  The Women's Center │
│                  ✕  │
│─────────────────────│
│                     │
│  GET HELP           │
│  ─────────────────  │
│                     │
│  ABOUT US           │
│  ─────────────────  │
│                     │
│  OUR WORK           │
│  ─────────────────  │
│                     │
│  GET INVOLVED       │
│  ─────────────────  │
│                     │
│  DONATE NOW         │
│  ─────────────────  │
│                     │
│     [f] [i]         │
│   (social icons)    │
│                     │
└─────────────────────┘
(slide-out animation)
(overlay on content)
```

---

# COMPONENT LIBRARY

## Standard Components

### Button Styles

```
PRIMARY BUTTON:
┌───────────────┐
│  Text Label → │
└───────────────┘
• Background: Pink (#E91E63)
• Text: White
• Border Radius: 24px (pill shape)
• Padding: 12px 32px
• Hover: Scale 1.05 + darken bg
• Shadow: Medium

SECONDARY BUTTON:
┌───────────────┐
│  Text Label → │
└───────────────┘
• Background: Cyan (#00BCD4)
• Text: White
• Same styling as primary

TERTIARY BUTTON:
┌───────────────┐
│  Text Label → │
└───────────────┘
• Background: Green (#8BC34A)
• Text: White
• Same styling as primary
```

### Card Component

```
┌─────────────────────┐
│                     │
│  [Icon/Image]       │
│                     │
│  Card Title         │
│  (Heading 3)        │
│                     │
│  Card description   │
│  text content that  │
│  spans multiple...  │
│                     │
│  [Optional Button]  │
│                     │
└─────────────────────┘
• Background: White
• Border Radius: 12px
• Shadow: 0 4px 12px rgba(0,0,0,0.1)
• Padding: 24px
• Hover: Lift -8px, shadow increase
• Transition: 300ms ease
```

### Statistic Card

```
┌─────────────────────┐
│                     │
│     29,307          │
│   (gradient text)   │
│   (text-5xl)        │
│                     │
│   Meals Served      │
│   (text-gray-600)   │
│                     │
└─────────────────────┘
• Number: Large, gradient colored
• Label: Smaller, gray
• Centered alignment
```

### Icon Circle

```
    ┌───────┐
    │       │
    │  🏠   │
    │       │
    └───────┘
• Size: 56px × 56px
• Border Radius: 50% (circle)
• Background: Gradient (e.g., pink)
• Icon: 24px, white
• Hover: Scale 1.1
```

### Form Input

```
Label Text *
┌─────────────────────┐
│ Placeholder text... │
└─────────────────────┘
• Height: 48px
• Border: 1px solid #D1D5DB
• Border Radius: 8px
• Padding: 12px 16px
• Focus: Ring 2px pink
• Required: Asterisk in label
```

### Accordion/Expandable

```
┌─────────────────────┐
│ Section Title     ▼ │
├─────────────────────┤
│                     │
│ Expanded content    │
│ goes here with full │
│ details...          │
│                     │
└─────────────────────┘

COLLAPSED:
┌─────────────────────┐
│ Section Title     ▶ │
└─────────────────────┘
```

### Quote/Testimonial

```
┌─────────────────────┐
│                     │
│      🎯             │
│   (icon circle)     │
│                     │
│     Sarah           │
│   (name, bold)      │
│                     │
│ "Quote text goes    │
│  here in italic     │
│  style spanning     │
│  multiple lines..." │
│                     │
│ ─────────────────── │
│                     │
│ Now employed and in │
│ permanent housing   │
│  (outcome, green)   │
│                     │
└─────────────────────┘
```

---

## Layout Grid System

### Desktop Layouts

```
FULL WIDTH CONTAINER:
Max-width: 1280px (7xl)
Padding: 0 32px

SECTION PADDING:
Vertical: 80px - 120px
Horizontal: 32px

GRID SYSTEMS:

1-Column:
┌─────────────────────┐
│                     │
└─────────────────────┘

2-Column:
┌─────────┐ ┌─────────┐
│         │ │         │
└─────────┘ └─────────┘

3-Column:
┌─────┐ ┌─────┐ ┌─────┐
│     │ │     │ │     │
└─────┘ └─────┘ └─────┘

4-Column:
┌───┐ ┌───┐ ┌───┐ ┌───┐
│   │ │   │ │   │ │   │
└───┘ └───┘ └───┘ └───┘

Gap: 24px - 32px
```

### Mobile Layouts

```
All grids stack to 1-column:

┌─────────────────────┐
│                     │
└─────────────────────┘
┌─────────────────────┐
│                     │
└─────────────────────┘
┌─────────────────────┐
│                     │
└─────────────────────┘

Padding: 16px
Gap: 16px
```

---

## Color Palette Reference

```
PRIMARY COLORS:
█ Cyan:   #00BCD4  (trust, help)
█ Pink:   #E91E63  (energy, donate)
█ Green:  #8BC34A  (growth, involve)

NEUTRAL COLORS:
█ White:     #FFFFFF
█ Gray-50:   #F9FAFB (backgrounds)
█ Gray-100:  #F3F4F6 (cards)
█ Gray-600:  #4B5563 (text secondary)
█ Gray-900:  #111827 (text primary)

GRADIENTS:
Cyan → Blue:   #00BCD4 → #0288D1
Pink → Purple: #E91E63 → #C2185B
Green → Teal:  #8BC34A → #66BB6A
```

---

## Typography Scale

```
H1 (Hero):      48px - 72px  (mobile - desktop)
H2 (Section):   36px - 48px
H3 (Card):      24px - 30px
Body Large:     18px - 20px
Body Regular:   16px - 18px
Body Small:     14px - 16px
Caption:        12px - 14px

Line Height:
Headings: 1.2
Body: 1.6
```

---

## Spacing System

```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  48px
3xl:  64px
4xl:  80px
5xl:  120px
```

---

## Responsive Breakpoints

```
Mobile:      0px - 767px   (1 column)
Tablet:      768px - 1023px (2 columns)
Desktop:     1024px - 1279px (3-4 columns)
Large:       1280px+        (4 columns)
```

---

## Animation Specifications

```
DURATION:
Fast:    200ms
Medium:  300ms
Slow:    500ms

EASING:
ease-out  (entrances)
ease-in   (exits)
ease      (general)

HOVER EFFECTS:
• Scale: 1.05
• Translate Y: -8px
• Shadow: Increase depth
• Color: Darken 10%

PAGE LOAD:
• Fade in: opacity 0 → 1
• Slide up: translateY(20px) → 0
• Stagger: 100ms delay between elements
```

---

**End of Wireframes Document**

This comprehensive wireframe guide provides:
- Complete page layouts for all 6 pages
- Desktop and mobile views
- Component library with specifications
- Design system documentation
- Color, typography, and spacing references

Use these wireframes as a blueprint for development or design tools like Figma, Sketch, or Adobe XD.
