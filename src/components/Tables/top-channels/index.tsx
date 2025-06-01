import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getTopPatients } from "@/components/Tables/top-channels/fetch"; // pastikan path benar

export default async function TopPatients({ className }: { className?: string }) {
  const data = await getTopPatients();

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Patient Data
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">Patient Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Symptoms</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>>
          {data.map((pasien, i) => (
            <TableRow
              className="text-center text-base font-medium text-dark dark:text-white"
              key={pasien.email || i}
            >
              <TableCell className="!text-left">
                {pasien.nama_lengkap}
              </TableCell>
              <TableCell>{pasien.nomor_telepon}</TableCell>
              <TableCell>Geriatrician</TableCell>
              <TableCell>Recovered</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
