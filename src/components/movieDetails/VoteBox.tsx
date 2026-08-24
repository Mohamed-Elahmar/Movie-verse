import { StarCheck } from "lucide-react";

function VoteBox({
  voteAverage,
  voteCount,
}: {
  voteAverage: number;
  voteCount: number;
}) {
  return (
    <div className="border border-(--border-me) text-(--accent-me) w-fit flex flex-col p-2">
      <div className="flex flex-row gap-3">
        {`Rating: ${voteAverage}`}
        <StarCheck className="text-yellow-300" />
      </div>
      <div>{`${voteCount} Reviews`}</div>
    </div>
  );
}

export default VoteBox;
