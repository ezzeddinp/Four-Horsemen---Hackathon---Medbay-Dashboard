import { compactFormat } from "@/lib/format-number";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function getOverviewData() {
  // Fake delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    patients: {
      value: 1250,
      growthRate: 1.25, // 1.25% increase
    },
    recovered: {
      value: 980,
      growthRate: 3.10, // 3.10% increase
    },
    hospitalized: {
      value: 230,
      growthRate: -0.75, // 0.75% decrease
    },
    confirmed: {
      value: 1500,
      growthRate: 2.40, // 2.40% increase
    },
    cancelled: {
      value: 45,
      growthRate: -1.50, // 1.50% decrease
    },
  };
}

export async function OverviewCardsGroup() {
  const { patients, recovered, hospitalized, confirmed, cancelled } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total Doctors"
        data={{
          ...patients,
          value: compactFormat(patients.value),
        }}
        Icon={icons.TotalDoctor} // Assumes an icon for Total Doctors exists
      />

      <OverviewCard
        label="Total Patients"
        data={{
          ...recovered,
          value: compactFormat(recovered.value),
        }}
        Icon={icons.RecoveredPatients} // Assumes an icon for Recovered exists
      />

      <OverviewCard
        label="Total Symptoms"
        data={{
          ...confirmed,
          value: compactFormat(confirmed.value),
        }}
        Icon={icons.Symptoms} // Assumes an icon for Confirmed exists
      />

      <OverviewCard
        label="Doctor Workloads"
        data={{
          ...cancelled,
          value: compactFormat(cancelled.value),
        }}
        Icon={icons.Patients} // Assumes an icon for Cancelled exists
      />
    </div>
  );
}

interface DoctorOverview {
  doctors: number;
  specialistDoctors: number;
  activeCertificates: number;
  toBeDeprecated: number;
  deprecated: number;
}

async function getDoctorOverview(): Promise<DoctorOverview> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    doctors: 100,
    specialistDoctors: 50,
    activeCertificates: 200,
    toBeDeprecated: 10,
    deprecated: 5,
  };
}

export async function OverviewCardsDoctor() {
  const doctorOverview = await getDoctorOverview();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total Doctors"
        data={{
          value: doctorOverview.doctors,
        }}
        Icon={icons.TotalDoctor}
      />

      <OverviewCard
        label="Specialist Doctors"
        data={{
          value: doctorOverview.specialistDoctors,
        }}
        Icon={icons.SpecialistDoctors}
      />

      <OverviewCard
        label="Active Certificates"
        data={{
          value: doctorOverview.activeCertificates,
        }}
        Icon={icons.ActiveCertificate}
      />

      <OverviewCard
        label="To Be Deprecated"
        data={{
          value: doctorOverview.toBeDeprecated,
        }}
        Icon={icons.ToBeDeprecated}
      />

      <OverviewCard
        label="Deprecated"
        data={{
          value: doctorOverview.deprecated,
        }}
        Icon={icons.Deprecated}
      />
    </div>
  );
}