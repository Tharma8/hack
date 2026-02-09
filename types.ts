
export enum ScamSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface RedFlag {
  title: string;
  explanation: string;
}

export interface ActionStep {
  text: string;
  iconType: 'shield' | 'phone' | 'file' | 'bank' | 'lock' | 'mail' | 'alert' | 'refresh';
}

export interface AnalysisResult {
  probabilityScore: number;
  recoveryLikelihood: number;
  severity: ScamSeverity;
  redFlags: RedFlag[];
  actionPlan: ActionStep[];
  explanation: string;
}

export interface EvidenceItem {
  id: string;
  type: string;
  date: string;
  description: string;
  amount?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}
