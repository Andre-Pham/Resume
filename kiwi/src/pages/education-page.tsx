import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { Download } from "lucide-react"

export function EducationPage() {
  return (
    <div>
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Education
        </Text>
      </div>

      <div className="mt-16 w-full max-w-xl">
        <Text variant="h3">Bachelor of Software Engineering (Honours)</Text>
        <p className="font-gitlab-mono text-muted-foreground mt-2 text-[15px] font-normal">
          Monash University, Mar 2020 – Nov 2023
        </p>
        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">First Class Honours</Text>

        <Text variant="mono" className="text-muted-foreground mt-2">
          WAM: 88.255
          <br />
          GPA: 3.938
        </Text>

        <Text variant="mono" className="mt-2" underline>
          Reading WAM
        </Text>

        <Text variant="mono" className="mt-2" underline>
          Reading GPA
        </Text>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Achievements</Text>

        <Text variant="mono" className="text-muted-foreground mt-2">
          I was the Software Engineering Dux, was included in the Faculty of
          Engineering Dean’s Honour List every year of my degree, and have
          received multiple letters of commendation for my high academic
          performance.
        </Text>

        <div className="mt-4 flex flex-col items-start gap-3">
          <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            <Download /> Dux Award
          </Button>

          <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            <Download /> Honour List Inclusions
          </Button>

          <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            <Download /> Letters of Commendation
          </Button>
        </div>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Academic Transcript</Text>

        <Text variant="mono" className="mt-2" underline>
          Online academic transcript
        </Text>

        <Text variant="mono" className="mt-2" underline>
          What’s an academic transcript?
        </Text>

        <div className="mt-4 flex flex-col items-start gap-3">
          <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            <Download /> Transcript
          </Button>
        </div>
        <Separator className="mt-7" />
      </div>
    </div>
  )
}
