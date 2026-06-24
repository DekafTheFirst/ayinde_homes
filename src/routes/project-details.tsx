import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/project-details"!</div>
}
