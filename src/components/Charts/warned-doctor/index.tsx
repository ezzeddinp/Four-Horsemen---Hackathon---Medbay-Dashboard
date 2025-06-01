import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image src="/assets/medbay-logo.png" alt="medbay logo" width={100} height={100} />
    </div>
  );
}

export function WarnedHistoryList() {
  const warnedDoctors = [
    { name: "Dr. John Doe", avatar: "/assets/doctor-avatar-placeholder.png" },
    { name: "Dr. Jane Smith", avatar: "/assets/doctor-avatar-placeholder.png" },
    { name: "Dr. Bob Johnson", avatar: "/assets/doctor-avatar-placeholder.png" },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Warned History</h2>
      <ul className="list-none p-0 m-0">
        {warnedDoctors.map((doctor, index) => (
          <li key={index} className="flex items-center py-2">
            <Image src={doctor.avatar} alt={doctor.name} width={40} height={40} className="rounded-full mr-2" />
            <span className="text-lg">{doctor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}