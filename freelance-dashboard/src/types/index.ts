export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'In Progress' | 'Completed' | 'On Hold' | 'Pending';
  deadline: string;
  budget: number;
  description: string;
}

export interface Activity {
  id: string;
  message: string;
  timestamp: string;
  type: 'project' | 'task' | 'payment';
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface DashboardStats {
  totalProjects: number;
  totalEarnings: number;
  tasksDue: number;
  completedProjects: number;
}