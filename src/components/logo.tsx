import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-20 w-20 md:h-10 md:w-10">
      <Image width={20} height={20} src="/medbay-logo.png" alt="medbay logo" />
    </div>
  );
}
