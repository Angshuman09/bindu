'use client'
import { useParams } from "next/navigation";

const page = () => {
    const {projectId} = useParams();

  return (
    <div>{projectId}</div>
  )
}

export default page