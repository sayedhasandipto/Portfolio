import { projects } from "@/data/projects";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Page({ params }) {
  return <ClientPage />;
}
