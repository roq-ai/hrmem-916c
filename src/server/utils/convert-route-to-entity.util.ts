const mapping: Record<string, string> = {
  interviews: 'interview',
  'job-postings': 'job_posting',
  organizations: 'organization',
  resumes: 'resume',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
