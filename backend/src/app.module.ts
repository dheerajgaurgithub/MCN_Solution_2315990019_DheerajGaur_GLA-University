import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChallengesModule } from './challenges/challenges.module';
import { StreaksModule } from './streaks/streaks.module';
import { RewardsModule } from './rewards/rewards.module';
import { SquadsModule } from './squads/squads.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AiModule } from './ai/ai.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    ChallengesModule,
    StreaksModule,
    RewardsModule,
    SquadsModule,
    LeaderboardModule,
    NotificationsModule,
    AiModule,
    PaymentsModule
  ]
})
export class AppModule {}
