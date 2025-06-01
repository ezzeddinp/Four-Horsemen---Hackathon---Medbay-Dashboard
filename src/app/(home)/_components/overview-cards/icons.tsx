import type { SVGProps } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaExclamation, FaUserCheck, FaUserDoctor, FaUserInjured, FaUserPlus, FaUserShield, FaVirus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { IoIosWarning } from "react-icons/io";
import { PiCertificate, PiUserListLight } from "react-icons/pi";

type SVGPropsType = SVGProps<SVGSVGElement>;

export function Views(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#3FD97F" />
      <path
        d="M26.562 29a2.437 2.437 0 114.875 0 2.437 2.437 0 01-4.875 0z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.166 29c0 1.776.46 2.374 1.382 3.57 1.838 2.389 4.922 5.097 9.452 5.097s7.614-2.708 9.452-5.096c.92-1.197 1.381-1.795 1.381-3.57 0-1.777-.46-2.375-1.381-3.571-1.838-2.389-4.922-5.096-9.452-5.096s-7.614 2.707-9.452 5.096c-.921 1.196-1.381 1.794-1.381 3.57zM29 24.938a4.063 4.063 0 100 8.125 4.063 4.063 0 000-8.125z"
        fill="#fff"
      />
    </svg>
  );
}

export function Profit(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#FF9C55" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 39.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.834-10.833-10.834-5.983 0-10.834 4.85-10.834 10.834 0 5.983 4.85 10.833 10.834 10.833zm.812-17.333a.812.812 0 10-1.625 0v.343c-1.766.316-3.25 1.643-3.25 3.448 0 2.077 1.964 3.521 4.063 3.521 1.491 0 2.437.982 2.437 1.896 0 .915-.946 1.896-2.437 1.896-1.491 0-2.438-.981-2.438-1.896a.812.812 0 10-1.625 0c0 1.805 1.484 3.132 3.25 3.449v.343a.812.812 0 101.625 0v-.343c1.767-.317 3.25-1.644 3.25-3.449 0-2.077-1.963-3.52-4.062-3.52-1.491 0-2.438-.982-2.438-1.896 0-.915.947-1.896 2.438-1.896s2.437.98 2.437 1.895a.813.813 0 001.625 0c0-1.805-1.483-3.132-3.25-3.448V22.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function Patients(props: SVGPropsType) {
  return <PiUserListLight size={30} className="text-[##FFA629] bg-[#FFA62933] p-2 rounded-md" {...props} />;
}

export function RecoveredPatients(props: SVGPropsType) {
  return <HiOutlinePlus className="text-[#3B29FF] bg-[#3B29FF33] p-2 rounded-md" size={30} {...props} />;
}
export function Hospitalized(props: SVGPropsType) {
  return <FaUserCheck size={50} className="text-[#FFA629] bg-[#FFA62933] p-2 rounded-md" {...props} />;
}

export function TotalDoctor(props: SVGPropsType) {
  return <FaUserDoctor  size={30} className="text-[#FFA629] bg-[#FFA62933] p-2 rounded-md" {...props} />;
}

export function Symptoms(props: SVGPropsType) {
  return <FaVirus  size={30} className="text-[#ff1d1d] bg-[#ff0a0a42] p-2 rounded-md" {...props} />;
}

export function SpecialistDoctors(props: SVGPropsType) {
  return <FaUserPlus  size={30} className="text-[#001069] bg-[#0026ff59] p-2 rounded-md" {...props} />;
}

export function ActiveCertificate(props: SVGPropsType) {
  return <PiCertificate   size={30} className="text-[#0a7c00] bg-[#15ff004d] p-2 rounded-md" {...props} />;
}


export function ToBeDeprecated(props: SVGPropsType) {
  return <IoIosWarning   size={30} className="text-[#aa9900] bg-[#ffe6005d] p-2 rounded-md" {...props} />;
}

export function Deprecated(props: SVGPropsType) {
  return <FaExclamation   size={30} className="text-[#ff1d1d] bg-[#ff0a0a42] p-2 rounded-md" {...props} />;
}

