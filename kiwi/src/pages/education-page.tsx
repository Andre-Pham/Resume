import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { downloadFile } from "@/utils"
import { Download } from "lucide-react"

export function EducationPage() {
  function downloadDuxAward() {
    downloadFile({
      fileName: "dux_award.zip",
      downloadName: "dux_award_andrepham.zip",
    })
  }

  function downloadAcademicTranscript() {
    downloadFile({
      fileName: "academic_transcript_official.pdf",
      downloadName: "academic_transcript_andrepham.pdf",
    })
  }

  function downloadHonoursListInclusions() {
    downloadFile({
      fileName: "honour_list_inclusions.zip",
      downloadName: "honour_list_inclusions_andrepham.zip",
    })
  }

  function downloadLettersOfCommendation() {
    downloadFile({
      fileName: "letters_of_commendation.zip",
      downloadName: "letters_of_commendation_andrepham.zip",
    })
  }

  return (
    <div>
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Education
        </Text>
      </div>

      <div className="mt-16 w-full max-w-xl">
        <Text variant="h3">Bachelor of Software Engineering (Honours)</Text>

        <Text variant="mono1" className="text-muted-foreground mt-4">
          Monash University, Mar 2020 – Nov 2023
        </Text>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">First Class Honours</Text>

        <Text variant="mono1" className="text-muted-foreground mt-4">
          WAM: 88.255
          <br />
          GPA: 3.938
        </Text>

        <Link
          className="mt-4"
          href="https://www.monash.edu/students/admin/assessments/results/wam"
        >
          Reading WAM
        </Link>

        <Link
          className="mt-2"
          href="https://www.monash.edu/students/admin/assessments/results/gpa"
        >
          Reading GPA
        </Link>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Achievements</Text>

        <Text variant="mono1" className="text-muted-foreground mt-4">
          I was the Software Engineering Dux, was included in the Faculty of
          Engineering Dean’s Honour List every year of my degree, and have
          received multiple letters of commendation for my high academic
          performance.
        </Text>

        <div className="mt-4.5 flex flex-col items-start gap-3">
          <Button
            onClick={downloadDuxAward}
            className="h-7 rounded-lg"
            variant="secondary"
            size="sm"
          >
            <Download /> Dux Award
          </Button>

          <Button
            onClick={downloadHonoursListInclusions}
            className="h-7 rounded-lg"
            variant="secondary"
            size="sm"
          >
            <Download /> Honour List Inclusions
          </Button>

          <Button
            onClick={downloadLettersOfCommendation}
            className="h-7 rounded-lg"
            variant="secondary"
            size="sm"
          >
            <Download /> Letters of Commendation
          </Button>
        </div>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Academic Transcript</Text>

        <Link
          className="mt-4"
          href="https://www.myequals.net/sharelink/0780a40a-9e70-420d-a905-31117d1a9388/0d22dbc1-5b1b-4d2a-99d8-8fda0d5e1b03"
        >
          Online academic transcript
        </Link>

        <Link
          className="mt-2"
          href="https://www.monash.edu/students/support/connect/official-documents/academic-transcripts"
        >
          What’s an academic transcript?
        </Link>

        <div className="mt-4.5 flex flex-col items-start gap-3">
          <Button
            onClick={downloadAcademicTranscript}
            className="h-7 rounded-lg"
            variant="secondary"
            size="sm"
          >
            <Download /> Transcript
          </Button>
        </div>

        <Separator className="mt-7" />
      </div>
    </div>
  )
}
