/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  level?: number; // percentage or rating if desired
  category: 'programming' | 'web' | 'tools';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'internship' | 'hackathon' | 'academic';
  description: string[];
}

export interface ProjectId {
  title: string;
  tech: string[];
  description: string;
  status: 'Soon' | 'Live' | 'Concept';
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}
