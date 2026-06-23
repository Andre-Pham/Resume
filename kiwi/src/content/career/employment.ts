import type { EmploymentProject } from "./employment-project"

export interface Employment {
  /**
   * The title of the role.
   * E.g. "iOS Developer".
   */
  title: string

  /**
   * The name of the company worked at.
   */
  company: string

  /**
   * The department I worked in, if applicable.
   */
  department?: string

  /**
   * The duration of the project, as a month + year range.
   * Format as "Jul 2020 - Nov 2024".
   * For any ongoing duration, format as "Jul 2020 - Present".
   */
  duration: string

  /**
   * The description of what I worked on and was responsible for.
   * Don't include specific technologies. Keep it to my responsibilities and areas
   * of the app/platform I worked on.
   */
  description: string

  /**
   * The projects I contributed to during my employment.
   */
  projects: EmploymentProject[]
}
