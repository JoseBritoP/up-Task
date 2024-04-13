import AddMemberModal from "@/components/shared/team/AddMemberModal";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProjectTeamView() {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  return (
    <>
      <h1 className="text-4xl font-bold uppercase">Manage Partners</h1>
      <p className="text-2xl font-light text-gray-500 dark:text-gray-400 mt-5">
        Manage the collaborators of this project
      </p>
      <nav className="my-5 flex gap-3">
        <button
          className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-600 px-6 py-2 text-white text-xl font-semibold cursor-pointer transition-colors rounded-md text-center"
          onClick={() => navigate(location.pathname + `?addMember=true`)}
        >
          Add Partner
        </button>
        <Link
          to={`/projects/${projectId}`}
          className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-700 dark:hover:bg-violet-600 px-6 py-2 text-white text-xl font-semibold cursor-pointer transition-colors rounded-md text-center"
        >
          Back to Project
        </Link>
      </nav>
      <AddMemberModal/>
    </>
  );
}
