export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  stable = "stable",
  warning = "warning",
  critical = "critical",
}

export function statusConversion(aStatus: string) {
  switch (aStatus) {
    case "error":
      return "critical";
      break;

    case "info":
      return "stable";
      break;

    case "warning":
      return "warning";
      break;

    default:
      console.error("Error api returned an invalid status value.");
      return "critical";
  }
}

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};
