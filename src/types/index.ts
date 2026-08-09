import { GoalStatus, ProjectStatus, TaskStatus, TaskPriority } from '@prisma/client';

export type {
  Goal,
  Project,
  Task,
  StudySession,
  DailyReview,
  GoalStatus,
  ProjectStatus,
  TaskStatus,
  TaskPriority,
} from '@prisma/client';

export interface StatsOverview {
  totalGoals: number;
  activeGoals: number;
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  todayTasks: number;
  overdueTasks: number;
  thisWeekProgress: number;
}

export interface DayOverview {
  date: Date;
  todayTasks: Task[];
  overdueTasks: Task[];
  activeProjects: Project[];
  upcomingStudySessions: StudySession[];
  weekProgress: number;
}
