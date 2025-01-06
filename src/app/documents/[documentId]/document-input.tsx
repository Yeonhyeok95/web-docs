import { BsCloudCheck } from "react-icons/bs";
import { Id } from "../../../../convex/_generated/dataModel";

interface DocumentIdPageProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentIdPageProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
      <BsCloudCheck />
    </div>
  );
};
