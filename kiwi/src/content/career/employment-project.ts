import type { AwsServiceCategory } from "./aws-service-cateogry"

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
    label: string
    shownUrl: string
    url: string
  }[]

  /**
   * Tags associated with the project.
   *
   * Rules for determining tags
   * ==========================
   * Every tag must be one of the following:
   * - A technology I can link to (e.g. React, Swift, PostgreSQL)
   * - An application's architecture (e.g. MVVM, MVC)
   * Each tag must also be fundamental to building the project.
   * While react-dropzone may have been used in the project to allow files to
   * be dragged in, this does NOT quality as a fundamental nor core technology to
   * building the application and hence should not be included. Same goes with
   * patterns like dependency injection or the delegate pattern - they are useful
   * patterns but not fundamental to the application. Technologies like
   * Nx and Storybook that are not functionally part of the application but determine
   * how the application is built/approached/arranged (e.g. Nx sets up the monorepo
   * architecture) should be included. Technologies that support the business or
   * support side (like Zendesk, Sentry, etc.) should not be included - they are
   * there for monitoring, but not core to actually building the application itself.
   * Same goes for services and pipelines for deploying or testing the application,
   * like TestFlight, GitLab CI/CD pipelines, or GitHub Actions - they're not core to
   * actually building the application itself.
   */
  tags: string[]

  /**
   * The AWS services categories of all the AWS services used.
   * View them at: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html
   * Services: https://aws.amazon.com/products/?aws-products-all
   *
   * Because a "AWS Networking & Content Delivery services" tag is way too long.
   * So we add a new tags section for specifically AWS categories and just have "Networking & Content Delivery".
   *
   * IMPORTANT:
   * To check a service's category, DON'T just search them up at https://aws.amazon.com/products/?aws-products-all.
   * You have to open it. For example, search SES:
   * https://aws.amazon.com/products/?aws-products-all&aws-products-all.q=SES
   * It says its category is "Front-End Web & Mobile".
   * But it's not! Open it up, and it's actually "Business Applications" - https://aws.amazon.com/ses/.
   */
  awsServicesCategories: AwsServiceCategory[]
}
