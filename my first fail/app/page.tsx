import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex w-full max-w-md flex-col gap-8 text-center">
        <div>
          <h1 className="text-4xl font-bold">My first fail</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Test your ideas and learn from mistakes
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full">
            Fail
          </Button>
          <Button size="lg" variant="outline" className="w-full">
            Not fail
          </Button>
        </div>
      </div>
    </div>
  )
}
