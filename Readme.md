STREAKVERSE

Tagline: "Earn, Grow, and Keep the Streak Alive!"

Project Type: Gamified Habit & Rewards App for Gen Z

Table of Contents

Project Overview

Features

Use Cases

Tech Stack

Architecture

Implementation Logic

Getting Started

Folder Structure

Future Enhancements

Project Overview

STREAKVERSE is an engaging gamified app that motivates Gen Z users to maintain daily habits, complete challenges, and participate in social squads to earn rewards. By leveraging streaks, squads, and leaderboard competitions, the app encourages productivity, skill-building, and personal growth while creating FOMO (Fear of Missing Out) to boost engagement.

Motto: Earn & Grow

Features
Core Features

Daily Streaks: Track and reward consecutive task completions.

Challenges: Individual and squad-based challenges with points and XP.

Rewards & Badges: Earn points, badges, and redeemable rewards in the Sharp Rewards store.

Leaderboards: Compare progress with friends and squads.

Squads: Team-based social grouping to foster collaboration and accountability.

Dynamic Events: Limited-time challenges and rare rewards to drive engagement.

Analytics: Track growth, engagement, and performance metrics.

Additional Features

Push notifications & reminders for streak maintenance.

Skill-building tasks for personal development.

Gamified streak multipliers for consistent engagement.

Backend-powered with scalable architecture for future expansions.

Use Cases

Habit Formation: Users maintain daily routines such as fitness, learning, or wellness.

Skill Growth: Complete coding, financial literacy, or wellness challenges to gain points and XP.

Team Engagement: Squads encourage social interaction, accountability, and collaborative streaks.

Reward Redemption: Users exchange Sharp Coins for digital perks, gift cards, or discounts.

FOMO-driven Engagement: Time-limited events and streak bonuses increase app stickiness.

Tech Stack
Layer	Technology / Tool
Frontend	React Native (Expo), React Navigation, Redux Toolkit
Backend	NestJS, Node.js
Database	PostgreSQL (Primary), Redis (Cache & Streaks)
Authentication	Firebase Auth, JWT
Notifications	Firebase Push, Twilio SMS
Payments	Stripe / Razorpay
Storage	AWS S3 (Reward assets)
AI Challenge Engine	OpenAI API
Analytics	Google Analytics / Mixpanel
ORM	Prisma
Architecture

Frontend:

Mobile app built with React Native & Expo.

Screens: Home, Challenges, Streaks, Squads, Rewards, Leaderboard, Profile, Auth.

Navigation: Tab-based + Auth Stack.

State management: Redux Toolkit + Thunks.

Backend:

Built with NestJS with modular architecture: Auth, Users, Challenges, Streaks, Rewards, Squads, Leaderboard, Notifications, Payments, AI.

Prisma ORM connects to PostgreSQL.

Redis for caching streaks & leaderboard data.

Cron jobs for daily streak calculations & event triggers.

Stripe / Razorpay for reward redemption.

OpenAI API for dynamic, personalized challenges.

Data Flow:

User interacts via Mobile App → React Native frontend.

API calls → NestJS backend → Prisma queries → PostgreSQL & Redis.

Backend calculates streaks, rewards, XP, and squad stats.

Notifications pushed via Firebase / Twilio.

Points and badges updated in user wallet.

Implementation Logic
1. Streak Calculation

Every daily task completion updates Streak_History.

Redis cache stores streak count per user for fast leaderboard retrieval.

Streak milestones trigger bonus points (e.g., 7-day streak → +50 points).

2. Rewards System

Tasks → Sharp Coins → Wallet updated.

Squad rewards: points awarded for team completion.

Limited-time rewards: mystery boxes or expiring coupons.

3. Challenges

Individual: Daily or weekly tasks with XP and coins.

Squad: Group tasks with cumulative points.

AI-generated: Personalized challenges via OpenAI API.

4. Leaderboard

Tracks daily, weekly, and all-time rankings for individuals & squads.

Cached via Redis for fast retrieval.

5. Notifications

Firebase & Twilio trigger push notifications or SMS for:

Missed streak alerts

Event reminders

Reward redemption notifications

6. Payment & Redemption

Stripe/Razorpay integration for redeeming points.

Backend validates transactions, updates user wallet, and triggers delivery notifications.

Getting Started
Prerequisites

Node.js >= 18

npm / yarn

Expo CLI

PostgreSQL & Redis running

Firebase project (for Auth & Notifications)

Frontend
cd frontend
npm install
npx expo start

Backend
cd backend
npm install
npm run start:dev

Folder Structure

Frontend

frontend/
├── App.js
├── assets/
├── src/
│   ├── api/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── redux/
│   ├── hooks/
│   ├── utils/
│   ├── services/
│   └── theme/


Backend

backend/
├── src/
│   ├── auth/
│   ├── users/
│   ├── challenges/
│   ├── streaks/
│   ├── rewards/
│   ├── squads/
│   ├── leaderboard/
│   ├── notifications/
│   ├── ai/
│   ├── payments/
│   ├── common/
│   └── utils/
├── prisma/
├── package.json
├── tsconfig.json
└── nest-cli.json

Future Enhancements

Real-time push notifications using WebSockets.

Social sharing features: Share streaks on Instagram/Twitter.

Gamified badges & animations for streaks & rewards.

Analytics dashboard for users and admins.

Multi-language support for global expansion.