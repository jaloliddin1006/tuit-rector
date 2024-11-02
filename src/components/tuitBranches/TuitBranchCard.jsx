const TuitBranchCard = ({
  branchName,
  branchFullName,
  studentsNumber,
  backgroundColor,
  color,
}) => {
  return (
    <div>
      <div
        className="flex justify-between flex-col rounded-[20px] p-[1.5rem]"
        style={{ backgroundColor }}
      >
        <div>
          <p className="text-[1.5rem] text-[#1E1E1E] font-[600]">
            {branchName}
          </p>
          <p className="mt-2 text-[#1E1E1EB2] text-[0.875rem] font-[500]">
            {branchFullName}
          </p>
        </div>
        <div>
        <p className="mt-3 text-[3rem] leading-[3.4rem] font-[600]" style={{ color }}>
          {studentsNumber}
        </p>
        <p className="text-[#1E1E1EB2] text-[0.9rem]">Talabalar soni</p>
        </div>
      </div>
    </div>
  );
};

export default TuitBranchCard;
