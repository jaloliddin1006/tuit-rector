const SocialStatusCard = ({
  branchName,
  branchFullName,
  studentsNumber,
  backgroundColor,
  color,
}) => {
  return (
    <div
      className="rounded-[20px] p-[1rem] flex flex-col justify-between"
      style={{ backgroundColor }}
    >
      <div>
        <p className="text-[1.5rem] text-[#1E1E1E] font-[600]">{branchName}</p>
        <p className="mt-2 text-[#1E1E1EB2] text-[0.875rem] font-[500]">
          {branchFullName}
        </p>
      </div>
      <p className="mt-5 text-[2.75rem] font-[600]" style={{ color }}>
        {studentsNumber}
      </p>
    </div>
  );
};

export default SocialStatusCard;
