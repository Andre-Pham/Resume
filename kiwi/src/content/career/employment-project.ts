import type { AwsService } from "./aws-service"
import type { GcpService } from "./gcp-service"

export interface EmploymentProject {
  /**
   * Logo image file name for the project.
   */
  image: string

  /**
   * The title of the project.
   */
  title: string

  /**
   * The project's description.
   */
  description: string

  /**
   * Links associated with the project.
   */
  links: {
    label: string | undefined
    shownUrl: string
    url: string
  }[]

  /**
   * Tags associated with the project.
   *
   * --------------------------
   *
   * Rules for determining tags:
   * Every tag must be a technology I can link to (e.g. React, Swift, PostgreSQL).
   * Every tag must satisfy the following 3 rules:
   *
   * RULE 1
   * The technology must be intentionally used by the project. Don't include
   * technologies that come bundled with other services or are installed
   * automatically.
   *
   * RULE 2
   * The technology must do at least one of the following:
   *
   * - Builds the application:
   *   Provides a main programming language, framework, or system used to
   *   implement the application. E.g. TypeScript, React, Next.js, Prisma.
   *
   * - Organises the codebase:
   *   Defines how the project's packages, dependencies, or builds are managed.
   *   E.g. Nx, Turborepo, pnpm workspaces.
   *
   * - Runs or stores the application:
   *   Hosts the production application, executes its code, or stores its data.
   *   E.g. Node.js, PostgreSQL, Supabase, Vercel.
   *
   * - Defines the infrastructure:
   *   Describes and manages the cloud resources and infra the application runs
   *   on. E.g. Terraform, SST.
   *
   * - Provides a product feature:
   *   It directly enables or delivers a distinct functional offering that the
   *   application provides to its target users. E.g. Stripe, Mux, Twilio.
   *
   * RULE 3
   * The technology must be responsible for a recognisable part of the
   * application, rather than help implement a smaller detail. It has to define
   * a foundation of the application, control part of its structure or infra,
   * or serve as the main provider of a distinct product offering/feature.
   *
   * This means dependencies such as small helper libraries and individual UI
   * utilities should not be included.
   *
   * --------------------------
   *
   * EXCLUDE:
   * - Testing tools, e.g. Vitest
   * - Developer and documentation tools, e.g. Storybook
   * - CI/CD automation, e.g. GitHub Actions
   * - Monitoring tools, e.g. Sentry
   * - Internal analytics, e.g. Mixpanel
   * - Business and support tools, e.g. Zendesk
   *
   * --------------------------
   */
  tags: string[]

  /**
   * Notable AWS services used (not exhaustive).
   * Services: https://aws.amazon.com/products/?aws-products-all
   */
  awsServices: AwsService[]

  /**
   * Notable GCP services used (not exhaustive).
   * Services: https://docs.cloud.google.com/docs/product-list
   */
  gcpServices: GcpService[]
}
